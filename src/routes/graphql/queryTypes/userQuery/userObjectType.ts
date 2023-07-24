import { GraphQLObjectType, GraphQLFloat, GraphQLList } from "graphql";
import { UUIDType } from "../../types/uuid.js";
import IContext from "../../types/IContext.js";
import { User } from "@prisma/client";
import profileObjectType from "../profileQuery/profileObjectType.js";
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
      resolve: async (source: User, _args, context: IContext) => {
        return await context.loaders.profileLoader.load(source.id);
      },
    },
    posts: {
      type: postObjectTypeList,
      description: 'The posts',
      resolve: async (source: User, _args: User, context: IContext) => {
        return await context.loaders.postLoader.load(source.id);
      },
    },
    userSubscribedTo: {
      type: new GraphQLList(userObjectType),
      description: 'The userSubscribedTo',
      resolve: async (source: User, _args, context: IContext) => {
        return await context.loaders.userSubscribedToLoader.load(source.id);
      },
    },
    subscribedToUser: {
      type: new GraphQLList(userObjectType),
      description: 'The subscribedToUser',
      resolve: async (source: User, _args, context: IContext) => {
        return await context.loaders.subscribedToUserLoader.load(source.id);
      },
    },
  })
});

export default userObjectType;