import { MemberType } from "@prisma/client";
import memberObjectType from "./memberObjectType.js";
import IContext from "../types/IContext.js";
import memberObjectTypeList from "./memberObjectTypeList.js";
import { GraphQLObjectType } from "graphql";
import { nonNullMemberEnumType } from "../types/nonNullTypes.js";

const memberQuery = {
  memberType: {
    type: memberObjectType as GraphQLObjectType,
    args: {
      id: {
        type: nonNullMemberEnumType,
      },
    },
    resolve: async (_source, args: MemberType, context: IContext) => {
      return await context.prisma.memberType.findUnique({ 
        where: {
          id: args.id,
        },
      });
    },
  },
  memberTypes: {
    type: memberObjectTypeList,
    resolve: async (_source, _args, context: IContext) => {
      return await context.prisma.memberType.findMany();
    },
  },
};

export default memberQuery;
