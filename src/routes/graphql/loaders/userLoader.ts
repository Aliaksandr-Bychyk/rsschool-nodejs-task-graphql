import { PrismaClient } from "@prisma/client";
import DataLoader from "dataloader";

const userLoader = (prisma: PrismaClient) => {
  return new DataLoader(async (ids) => {
    const users = await prisma.user.findMany({
      where: {
        id: { in: ids as string[] },
      },
      include: { subscribedToUser: true, userSubscribedTo: true },
    });
    return ids.map((id) => users.find((user) => user.id === id));
  })
};

export default userLoader;
