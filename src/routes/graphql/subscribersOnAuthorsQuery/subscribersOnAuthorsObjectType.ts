import { GraphQLObjectType } from "graphql";
import { UUIDType } from "../types/uuid.js";
import IContext from "../types/IContext.js";
import { SubscribersOnAuthors } from "@prisma/client";
import userObjectType from "../userQuery/userObjectType.js";

const subscribersOnAuthorsObjectType = new GraphQLObjectType({
  name: 'SubscribersOnAuthors',
  description: 'A SubscribersOnAuthors',
  fields: () => ({
    subscriber: {
      type: userObjectType as GraphQLObjectType,
      description: 'The subscriber',
      resolve: async (_source, args: SubscribersOnAuthors, context: IContext) => {
        return await context.prisma.user.findUnique({
          where: {
            id: args.subscriberId,
          },
        });
      },
    },
    subscriberId: {
      type: UUIDType,
      description: 'The subscriberId',
    },
    author: {
      type: userObjectType as GraphQLObjectType,
      description: 'The author',
      resolve: async (_source, args: SubscribersOnAuthors, context: IContext) => {
        return await context.prisma.user.findUnique({
          where: {
            id: args.authorId,
          },
        });
      },
    },
    authorId: {
      type: UUIDType,
      description: 'The authorId',
    },
  })
});

export default subscribersOnAuthorsObjectType;