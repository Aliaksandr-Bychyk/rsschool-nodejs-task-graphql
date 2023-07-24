import { Profile } from "@prisma/client";
import IContext from "../types/IContext.js";
import { GraphQLObjectType } from "graphql";
import profileObjectType from "./profileObjectType.js";
import profileObjectTypeList from "./profileObjectTypeList.js";
import { nonNullUUIDType } from "../types/nonNullTypes.js";

const profileQuery = {
  profile: {
    type: profileObjectType as GraphQLObjectType,
    args: {
      id: {
        type: nonNullUUIDType,
      },
    },
    resolve: async (_source, args: Profile, context: IContext) => {
      return await context.prisma.profile.findUnique({ 
        where: {
          id: args.id,
        },
      });
    },
  },
  profiles: {
    type: profileObjectTypeList,
    resolve: async (_source, _args, context: IContext) => {
      return await context.prisma.profile.findMany();
    },
  },
};

export default profileQuery;
