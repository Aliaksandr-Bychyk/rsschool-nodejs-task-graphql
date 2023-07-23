import { GraphQLObjectType, GraphQLFloat, GraphQLInt, GraphQLEnumType } from "graphql";
import { MemberTypeId } from "../../member-types/schemas.js";
import profilesObjectTypeList from "../profilesQuery/profilesObjectTypeList.js";
import IContext from "../types/IContext.js";

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
      type: profilesObjectTypeList as GraphQLObjectType,
      description: 'The profiles',
      resolve: async (_source, _args, context: IContext) => {
        return await context.prisma.profile.findMany();
      },
    }
  })
});

export default memberObjectType;
export { memberEnumType };