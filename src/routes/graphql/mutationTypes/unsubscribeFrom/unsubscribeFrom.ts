import IContext from "../../types/IContext.js";
import { nonNullUUIDType } from "../../types/nonNullTypes.js";
import { UUIDType } from '../../types/uuid.js';

interface IUnsubscribeFrom {
  userId: string;
  authorId: string;
};

const unsubscribeFrom = {
  unsubscribeFrom: {
    type: UUIDType,
    args: {
      userId: {
        type: nonNullUUIDType,
      },
      authorId: {
        type: nonNullUUIDType,
      },
    },
    resolve: async (_source, args: IUnsubscribeFrom, context: IContext) => {
      await context.prisma.subscribersOnAuthors.delete({
        where: {
          subscriberId_authorId: {
            subscriberId: args.userId,
            authorId: args.authorId,
          },
        },
      });
      return args.userId;
    },
  },
};

export default unsubscribeFrom;
