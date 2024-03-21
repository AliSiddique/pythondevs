import { stripe } from '@/lib/payments/stripe/stripe';
import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/AuthOptions';
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { message: 'You need to be signed in', ok: false },
        { status: 403 }
      );
    }
    const body = await req.json();

    const { name, priceId } = body;

    const params: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ['card', 'paypal'],
      customer_email: session?.user?.email as string,
      mode: 'subscription', // Change mode to 'subscription'
      line_items: [
        {
          price: priceId, // Use the ID of your subscription price
          quantity: 1,
        },
      ],
      metadata: {
        name,
      },

      success_url: `http://localhost:3000/success`,
      cancel_url: `http://localhost:3000/`,
    };

    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);
    console.log(checkoutSession);
    return NextResponse.json({ id: checkoutSession.id, ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'something went wrong', ok: false },
      { status: 500 }
    );
  }
}
