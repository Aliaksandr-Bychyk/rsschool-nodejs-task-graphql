import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema } from './schemas.js';
import { graphql, parse, validate } from 'graphql';
import graphQLSchema from './graphQLSchema.js';
import depthLimit from 'graphql-depth-limit';

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  const { prisma } = fastify;
  fastify.route({
    url: '/',
    method: 'POST',
    schema: {
      ...createGqlResponseSchema,
      response: {
        200: gqlResponseSchema,
      },
    },
    async handler(req, reply) {
      const { query, variables } = req.body;
      
      const validationErrors = validate(graphQLSchema, parse(query), [depthLimit(5)]);

      if (validationErrors.length > 0) {
        await reply.send({ errors: validationErrors });
      }

      const res = await graphql({
        schema: graphQLSchema,
        source: query,
        variableValues: variables,
        contextValue: {
          prisma,
        },
      });
      return res;
    },
  });
};

export default plugin;
