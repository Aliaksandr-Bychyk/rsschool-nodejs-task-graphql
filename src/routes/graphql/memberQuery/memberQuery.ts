import { MemberType } from "@prisma/client";
import memberObjectType, { memberEnumType } from "./memberObjectType.js";
import IContext from "../types/IContext.js";
import memberObjectTypeList from "./memberObjectTypeList.js";
import { GraphQLType } from "graphql";

const memberQuery = {
  memberType: {
    type: memberObjectType as GraphQLType,
    args: {
      id: {
        type: memberEnumType,
      },
      resolve: async (_source, args: MemberType, context: IContext) => {
        return await context.prisma.memberType.findUnique({ 
          where: {
            id: args.id,
          },
        });
      },
    },
  },
  memberTypes: {
    type: memberObjectTypeList as GraphQLType,
    resolve: async (_source, _args, context: IContext) => {
      return await context.prisma.memberType.findMany();
    },
  },
};

export default memberQuery;
