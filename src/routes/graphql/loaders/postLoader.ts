import { PrismaClient } from "@prisma/client";
import DataLoader from "dataloader";

const postLoader = (prisma: PrismaClient) => {
  return new DataLoader(async (ids) => {
    const posts = await prisma.post.findMany({
      where: {
        authorId: { in: ids as string[] },
      },
    });
    return ids.map((id) => posts.filter((post) => post.authorId === id));
  })
};

export default postLoader;
