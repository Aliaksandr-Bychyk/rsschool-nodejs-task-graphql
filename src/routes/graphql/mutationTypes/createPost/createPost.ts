import postObjectType from "../../queryTypes/postQuery/postObjectType.js";
import IContext from "../../types/IContext.js";
import createPostObjectType from "./createPostObjectType.js";

interface ICreatePost {
  dto: {
    title: string;
    content: string;
    authorId: string;
  };
};

const createPost = {
  createPost: {
    type: postObjectType,
    args: {
      dto: {
        type: createPostObjectType,
      },
    },
    resolve: async (_source, args: ICreatePost, context: IContext) => {
      return await context.prisma.post.create({
        data: args.dto,
      });
    },
  },
};

export default createPost;
