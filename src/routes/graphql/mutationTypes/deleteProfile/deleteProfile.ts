import IContext from "../../types/IContext.js";
import { nonNullUUIDType } from "../../types/nonNullTypes.js";
import { Profile } from "@prisma/client";

const deleteProfile = {
  deleteProfile: {
    type: nonNullUUIDType,
    args: {
      id: {
        type: nonNullUUIDType,
      },
    },
    resolve: async (_source, args: Profile, context: IContext) => {
      await context.prisma.profile.delete({
        where: {
          id: args.id
        },
      });
      return args.id;
    },
  },
};

export default deleteProfile;
