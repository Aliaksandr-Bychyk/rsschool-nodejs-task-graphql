import { GraphQLObjectType } from 'graphql';
import IContext from "../../types/IContext.js";
import createProfileObjectType from "./createProfileObjectType.js";
import profileObjectType from '../../queryTypes/profileQuery/profileObjectType.js';

interface ICreateProfile {
  dto: {
    isMale: boolean;
    yearOfBirth: number;
    userId: string;
    memberTypeId: string;
  };
};

const createProfile = {
  createUser: {
    type: profileObjectType as GraphQLObjectType,
    args: {
      dto: {
        type: createProfileObjectType,
      },
    },
    resolve: async (_source, args: ICreateProfile, context: IContext) => {
      return await context.prisma.profile.create({
        data: args.dto,
      });
    },
  },
};

export default createProfile;
