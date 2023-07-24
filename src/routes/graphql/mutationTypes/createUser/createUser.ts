import { GraphQLObjectType } from 'graphql';
import userObjectType from "../../queryTypes/userQuery/userObjectType.js";
import IContext from "../../types/IContext.js";
import createUserObjectType from "./createUserObjectType.js";

interface ICreateUser {
  dto: {
    name: string;
    balance: number;
  };
};

const createUser = {
  createUser: {
    type: userObjectType as GraphQLObjectType,
    args: {
      dto: {
        type: createUserObjectType,
      },
    },
    resolve: async (_source, args: ICreateUser, context: IContext) => {
      return await context.prisma.user.create({
        data: args.dto,
      });
    },
  },
};

export default createUser;
