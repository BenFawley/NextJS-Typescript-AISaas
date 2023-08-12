import { auth } from "@clerk/nextjs";
import prismadb from "./prismadb";

const DAY_IN_MILLISECONDS = 86_400_000;

export const checkSubscription = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userSubcsription = await prismadb.userSubscription.findUnique({
    where: {
      userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  });

  if (!userSubcsription) {
    return false;
  }

  const isValid =
    userSubcsription.stripePriceId &&
    userSubcsription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MILLISECONDS >
      Date.now();

  return !!isValid;
};
