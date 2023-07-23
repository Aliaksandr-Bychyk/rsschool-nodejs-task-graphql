import { GraphQLObjectType, GraphQLFloat, GraphQLInt, GraphQLBoolean } from "graphql";

const profilesObjectType = new GraphQLObjectType({
  name: 'MemberType',
  description: 'A MemberType',
  fields: () => ({
    id: {
      // type: 
    },
    isMale: {
      type: GraphQLBoolean,
      description: 'Is user a male',
    },
    yearOfBirth: {
      type: GraphQLInt,
      description: 'The year of birth'
    },
    user: {},
    userId: {},
    memberType: {},
    memberTypeid: {},
  })
});

export default profilesObjectType;