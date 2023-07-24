import { GraphQLObjectType } from 'graphql';
import IContext from "../../types/IContext.js";
import profileObjectType from '../../queryTypes/profileQuery/profileObjectType.js';
import { nonNullCreateProfileObjectType } from '../../types/nonNullTypes.js';

interface ICreateProfile {
  dto: {
    isMale: boolean;
    yearOfBirth: number;
    userId: string;
    memberTypeId: string;
  };
};

const createProfile = {
  createProfile: {
    type: profileObjectType as GraphQLObjectType,
    args: {
      dto: {
        type: nonNullCreateProfileObjectType,
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
