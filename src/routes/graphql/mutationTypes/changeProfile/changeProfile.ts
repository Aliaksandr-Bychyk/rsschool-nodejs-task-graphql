import postObjectType from "../../queryTypes/postQuery/postObjectType.js";
import IContext from "../../types/IContext.js";
import { nonNullChangeProfileObjectType, nonNullUUIDType } from "../../types/nonNullTypes.js";

interface IChangeProfile {
  id: string;
  dto: {
    isMale: boolean;
    yearOfBirth: number;
    memberTypeId: string;
  };
};

const changeProfile = {
  changeProfile: {
    type: postObjectType,
    args: {
      id: {
        type: nonNullUUIDType,
      },
      dto: {
        type: nonNullChangeProfileObjectType,
      },
    },
    resolve: async (_source, args: IChangeProfile, context: IContext) => {
      return await context.prisma.profile.update({
        where: {
          id: args.id,
        },
        data: args.dto,
      });
    },
  },
};

export default changeProfile;
