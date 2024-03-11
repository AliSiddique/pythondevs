import { authOptions } from '@/lib/AuthOptions';
import { getServerSession } from 'next-auth';
import { db } from '../../../../prisma/client';
import { stripe } from '@/lib/payments/stripe/stripe';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    const dbUser = await db.user.findFirst({
      where: {
        email: session?.user.email,
      },
    });
    const stripeCustomerId = dbUser?.stripeCustomerId;
    const billingPortalSession = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId as string,
      return_url: 'https://demo.saasunderone.com/dashboard',
    });

    return Response.json({ url: billingPortalSession.url });
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
