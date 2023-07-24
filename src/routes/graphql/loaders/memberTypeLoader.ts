import { PrismaClient } from "@prisma/client";
import DataLoader from "dataloader";

const memberTypeLoader = (prisma: PrismaClient) => {
  return new DataLoader(async (ids) => {
    const memberTypes = await prisma.memberType.findMany({
      where: {
        id: { in: ids as string[] },
      },
    });
    return ids.map(() => memberTypes);
  })
};

export default memberTypeLoader;
