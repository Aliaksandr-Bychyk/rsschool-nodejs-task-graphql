import { GraphQLObjectType, GraphQLFloat, GraphQLInt, GraphQLEnumType } from "graphql";
import { MemberTypeId } from "../../member-types/schemas.js";
import profileObjectTypeList from "../profileQuery/profileObjectTypeList.js";
import IContext from "../types/IContext.js";
import { MemberType } from "@prisma/client";

const memberEnumType = new GraphQLEnumType({
  name: 'MemberTypeId',
  description: 'A MemberTypeId',
  values: {
    basic: {
      value: MemberTypeId.BASIC,
      description: 'basic',
    },
    business: {
      value: MemberTypeId.BUSINESS,
      description: 'business',
    }
  }
})

const memberObjectType = new GraphQLObjectType({
  name: 'MemberType',
  description: 'A MemberType',
  fields: () => ({
    id: {
      type: memberEnumType,
      description: 'The id',
    },
    discount: {
      type: GraphQLFloat,
      description: 'The discount',
    },
    postsLimitPerMonth: {
      type: GraphQLInt,
      description: 'The post limit per month'
    },
    profiles: {
      type: profileObjectTypeList,
      description: 'The profiles',
      resolve: async (_source, args: MemberType, context: IContext) => {
        return await context.prisma.profile.findMany({
          where: {
            memberTypeId: args.id,
          }
        });
      },
    },
  }),
});

export default memberObjectType;
export { memberEnumType };