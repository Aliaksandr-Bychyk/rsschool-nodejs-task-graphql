import { PrismaClient } from "@prisma/client";
import memberTypeLoader from "./memberTypeLoader.js";
import postLoader from "./postLoader.js";
import profileLoader from "./profileLoader.js";
import subscribedToUserLoader from "./subscribedToUserLoader.js";
import userSubscribedToLoader from "./userSubscribedToLoader.js";
import userLoader from "./userLoader.js";

const managerLoader = (prisma: PrismaClient) => ({
  memberTypeLoader: memberTypeLoader(prisma),
  postLoader: postLoader(prisma),
  profileLoader: profileLoader(prisma),
  subscribedToUserLoader: subscribedToUserLoader(prisma),
  userSubscribedToLoader: userSubscribedToLoader(prisma),
  userLoader: userLoader(prisma),
});

export default managerLoader;
