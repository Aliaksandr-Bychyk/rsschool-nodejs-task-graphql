import postObjectType from "../../queryTypes/postQuery/postObjectType.js";
import IContext from "../../types/IContext.js";
import { nonNullChangePostObjectType, nonNullUUIDType } from "../../types/nonNullTypes.js";

interface IChangePost {
  id: string;
  dto: {
    title: string;
    content: string;
  };
};

const changePost = {
  changePost: {
    type: postObjectType,
    args: {
      id: {
        type: nonNullUUIDType,
      },
      dto: {
        type: nonNullChangePostObjectType,
      },
    },
    resolve: async (_source, args: IChangePost, context: IContext) => {
      return await context.prisma.post.update({
        where: {
          id: args.id,
        },
        data: args.dto,
      });
    },
  },
};

export default changePost;
