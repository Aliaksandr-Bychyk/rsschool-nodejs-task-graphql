import { PrismaClient } from "@prisma/client";
import DataLoader from "dataloader";

const userSubscribedToLoader = (prisma: PrismaClient) => {
  return new DataLoader(async (ids) => {
    const users = await prisma.user.findMany({
      where: {
        subscribedToUser: {
          some: {
            subscriberId: { in: ids as string[] },
          },
        },
      },
    });
    return ids.map(() => users);
  })
};

export default userSubscribedToLoader;
