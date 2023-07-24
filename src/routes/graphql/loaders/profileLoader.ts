import { PrismaClient } from "@prisma/client";
import DataLoader from "dataloader";

const profileLoader = (prisma: PrismaClient) => {
  return new DataLoader(async (ids) => {
    const profiles = await prisma.profile.findMany({
      where: {
        userId: { in: ids as string[] },
      },
    });
    return ids.map(() => profiles);
  })
};

export default profileLoader;
