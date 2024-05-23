import { stripe } from '@/lib/payments/stripe/stripe';
import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/AuthOptions';
export async function POST(req: Request) {
  try {
   

console.log("req",req.json())
    const params: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ['card', 'paypal'],
      mode: 'payment', // Change mode to 'subscription'
      line_items: [
        {
          price: "price_1P0U85F6XPSRrn2m6ifMhAvZ", // Use the ID of your subscription price
          quantity: 1,
        },
      ],


      success_url: `http://localhost:3000/success`,
      cancel_url: `http://localhost:3000/`,
    };

    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);
    console.log(checkoutSession);
    return NextResponse.json({ body: req.json(), ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'something went wrong', ok: false },
      { status: 500 }
    );
  }
}
