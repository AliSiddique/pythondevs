// @ts-nocheck
// TODO: Fix this when we turn strict mode on.
import { db } from "../../prisma/client"
import { stripe } from "./payments/stripe/stripe"

export async function getUserSubscriptionPlan(
  userId: string
) {
  const user = await db.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  })

  if (!user) {
    throw new Error("User not found")
  }

  // Check if user is on a pro plan.
  const isPro =
    user.stripePriceId &&
    user.stripeCurrentPeriodEnd?.getTime() + 86_400_000 > Date.now()
const sub = await stripe.subscriptions.retrieve(user.stripeSubscriptionId)
console.log(sub.items.data[0].plan.nickname)
const name = sub.items.data[0].plan
  const plan = isPro ? "pro" : "free"

  return {
    ...plan,
    ...user,
    stripeCurrentPeriodEnd: user.stripeCurrentPeriodEnd?.getTime(),
    isPro,
    name
  }
}