import { PrismaClient } from "@prisma/client";
import DataLoader from "dataloader";

const subscribedToUserLoader = (prisma: PrismaClient) => {
  return new DataLoader(async (ids) => {
    const users = await prisma.user.findMany({
      where: {
        userSubscribedTo: {
          some: {
            authorId: { in: ids as string[] },
          },
        },
      },
    });
    return ids.map(() => users);
  })
};

export default subscribedToUserLoader;
