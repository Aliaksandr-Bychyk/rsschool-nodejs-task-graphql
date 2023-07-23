import { GraphQLObjectType, GraphQLInt, GraphQLBoolean } from "graphql";
import { UUIDType } from "../types/uuid.js";
import { memberEnumType } from "../memberQuery/memberObjectType.js";

const profilesObjectType = new GraphQLObjectType({
  name: 'Profile',
  description: 'A Profile',
  fields: () => ({
    id: {
      type: UUIDType,
      description: 'The id',
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
    userId: {
      type: UUIDType,
      description: 'The userId',
    },
    memberType: {},
    memberTypeId:  {
      type: memberEnumType,
      description: 'The memberTypeId',
    },
  })
});

export default profilesObjectType;