import { GraphQLObjectType } from "graphql";
import userObjectType from "../../queryTypes/userQuery/userObjectType.js";
import IContext from "../../types/IContext.js";
import { nonNullChangeUserObjectType, nonNullUUIDType } from "../../types/nonNullTypes.js";

interface IChangeUser {
  id: string;
  dto: {
    name: string;
    balance: number;
  };
};

const changeUser = {
  changeUser: {
    type: userObjectType as GraphQLObjectType,
    args: {
      id: {
        type: nonNullUUIDType,
      },
      dto: {
        type: nonNullChangeUserObjectType,
      },
    },
    resolve: async (_source, args: IChangeUser, context: IContext) => {
      return await context.prisma.user.update({
        where: {
          id: args.id,
        },
        data: args.dto,
      });
    },
  },
};

export default changeUser;
