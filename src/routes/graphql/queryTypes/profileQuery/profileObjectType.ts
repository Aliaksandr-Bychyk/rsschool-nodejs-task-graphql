import { GraphQLObjectType, GraphQLInt, GraphQLBoolean } from "graphql";
import { UUIDType } from "../../types/uuid.js";
import memberObjectType, { memberEnumType } from "../memberQuery/memberObjectType.js";
import IContext from "../../types/IContext.js";
import { Profile } from "@prisma/client";
import userObjectType from "../userQuery/userObjectType.js";

const profileObjectType = new GraphQLObjectType({
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
    user: {
      type: userObjectType as GraphQLObjectType,
      description: 'The user',
      resolve: async (source: Profile, _args, context: IContext) => {
        return await context.prisma.user.findUnique({
          where: {
            id: source.userId,
          },
        });
      },
    },
    userId: {
      type: UUIDType,
      description: 'The userId',
    },
    memberType: {
      type: memberObjectType as GraphQLObjectType,
      description: 'The memberType',
      resolve: async (source: Profile, _args, context: IContext) => {
        return await context.prisma.memberType.findUnique({
          where: {
            id: source.memberTypeId,
          },
        });
      },
    },
    memberTypeId:  {
      type: memberEnumType,
      description: 'The memberTypeId',
    },
  })
});

export default profileObjectType;