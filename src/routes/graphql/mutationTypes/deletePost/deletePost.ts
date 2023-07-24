import IContext from "../../types/IContext.js";
import { nonNullUUIDType } from "../../types/nonNullTypes.js";
import { Post } from "@prisma/client";

const deletePost = {
  deletePost: {
    type: nonNullUUIDType,
    args: {
      id: {
        type: nonNullUUIDType,
      },
    },
    resolve: async (_source, args: Post, context: IContext) => {
      await context.prisma.post.delete({
        where: {
          id: args.id,
        },
      });
      return args.id;
    },
  },
};

export default deletePost;
