import { GraphQLObjectType, GraphQLInt, GraphQLBoolean } from "graphql";
import { UUIDType } from "../types/uuid.js";
import memberObjectType, { memberEnumType } from "../memberQuery/memberObjectType.js";
import IContext from "../types/IContext.js";
import { MemberType } from "@prisma/client";

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
    user: {},
    userId: {
      type: UUIDType,
      description: 'The userId',
    },
    memberType: {
      type: memberObjectType,
      resolve: async (_source, args: MemberType, context: IContext) => {
        return await context.prisma.memberType.findUnique({
          where: {
            id: args.id,
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