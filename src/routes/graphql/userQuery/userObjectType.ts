import { GraphQLObjectType, GraphQLFloat } from "graphql";
import { UUIDType } from "../types/uuid.js";
import IContext from "../types/IContext.js";
import { User } from "@prisma/client";
import profileObjectType from "../profileQuery/profileObjectType.js";
import subscribersOnAuthorsObjectType from "../subscribersOnAuthorsQuery/subscribersOnAuthorsObjectType.js";
import postObjectTypeList from "../postQuery/postObjectTypeList.js";

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
      type: postObjectTypeList,
      description: 'The posts',
      resolve: async (_source, args: User, context: IContext) => {
        return await context.prisma.post.findMany({
          where: {
            authorId: args.id,
          },
        });
      },
    },
    userSubscribedTo: {
      type: subscribersOnAuthorsObjectType,
      description: 'The userSubscribedTo',
      resolve: async (_source, args: User, context: IContext) => {
        return await context.prisma.subscribersOnAuthors.findMany({
          where: {
            subscriberId: args.id,
          },
        });
      },
    },
    subscribedToUser: {
      type: subscribersOnAuthorsObjectType,
      description: 'The subscribedToUser',
      resolve: async (_source, args: User, context: IContext) => {
        return await context.prisma.subscribersOnAuthors.findMany({
          where: {
            authorId: args.id,
          },
        });
      },
    },
  })
});

export default userObjectType;