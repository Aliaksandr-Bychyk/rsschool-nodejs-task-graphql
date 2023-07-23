import { GraphQLObjectType, GraphQLFloat } from "graphql";
import { UUIDType } from "../types/uuid.js";
import IContext from "../types/IContext.js";
import { User } from "@prisma/client";
import profileObjectType from "../profileQuery/profileObjectType.js";
import postObjectType from "../postQuery/postObjectType.js";

const userObjectType = new GraphQLObjectType({
  name: 'User',
  description: 'A User',
  fields: () => ({
    id: {
      type: UUIDType,
      description: 'The id',
    },
    name: {
      type: UUIDType,
      description: 'The name',
    },
    balance: {
      type: GraphQLFloat,
      description: 'The balance',
    },
    profile: {
      type: profileObjectType as GraphQLObjectType,
      description: 'The profile',
      resolve: async (_source, args: User, context: IContext) => {
        return await context.prisma.profile.findUnique({
          where: {
            userId: args.id,
          },
        });
      },
    },
    posts: {
      type: postObjectType,
      description: 'The posts',
      resolve: async (_source, args: User, context: IContext) => {
        return await context.prisma.post.findMany({
          where: {
            authorId: args.id,
          },
        });
      },
    },
    userSubscribedTo: {},
    subscribedToUser: {},
  })
});

export default userObjectType;