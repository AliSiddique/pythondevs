import { stripe } from '@/lib/payments/stripe/stripe';
import Stripe from 'stripe';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {

  // const {company_name,company_website,company_website,}
  // const params: Stripe.Checkout.SessionCreateParams = {
  //   payment_method_types: ['card', 'paypal'],
  //   mode: 'payment', // Change mode to 'subscription'
  //   line_items: [
  //     {
  //       price: "price_1P0U85F6XPSRrn2m6ifMhAvZ", // Use the ID of your subscription price
  //       quantity: 1,
  //     },
  //   ],


  //   success_url: `http://localhost:3000/success`,
  //   cancel_url: `http://localhost:3000/`,
  // };

  // const checkoutSession: Stripe.Checkout.Session =
  //   await stripe.checkout.sessions.create(params);
  // console.log(checkoutSession);
  return NextResponse.json({ body: "hi", ok: true });
}