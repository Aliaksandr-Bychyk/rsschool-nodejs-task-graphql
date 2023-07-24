import IContext from "../../types/IContext.js";
import { nonNullUUIDType } from "../../types/nonNullTypes.js";
import { User } from "@prisma/client";

const deleteUser = {
  deleteUser: {
    type: nonNullUUIDType,
    args: {
      id: {
        type: nonNullUUIDType,
      },
    },
    resolve: async (_source, args: User, context: IContext) => {
      await context.prisma.user.delete({
        where: {
          id: args.id
        },
      });
      return args.id;
    },
  },
};

export default deleteUser;
