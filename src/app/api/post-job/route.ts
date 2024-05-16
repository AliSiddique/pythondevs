import Stripe from 'stripe';
import { NextResponse } from 'next/server';

import { nanoid } from 'nanoid';
import { db } from '../../../../prisma/client';
import { stripe } from '@/lib/payments/stripe/stripe';

export async function POST(req: Request) {
  console.log(req.body);

  // ⚠️ The below code is for App Router Route Handlers only
  // const blob = await put(filename as any, {
  //   access: 'public',
  // });

  const {
    company_name,
    company_website,
    company_industry,
    company_logo,
    company_description,
    company_linkedin,
    title,
    type,
    location,
    salary,
    description,
    apply_link,
    color,
    company_email,
    remote,
    tags,
  } = await req.json();

  console.log(tags.map((tag: any) => tag.text));
  const job = await db.jobPost.create({
    data: {
      company_name,
      company_website,
      company_description,
      company_logo,
      department: company_industry,
      linkedin_in: company_linkedin,
      title,
      type,
      location,
      salary: parseInt(salary, 10),
      description,
      apply_link,
      email: company_email,
      tags: tags.map((tag: any) => tag.text),
      remote,
      color,
      company_color: color,
      featured: false,
    },
  });
  console.log(job);
  const params: Stripe.Checkout.SessionCreateParams = {
    payment_method_types: ['card', 'paypal'],
    customer_email: company_email,
    mode: 'payment', // Change mode to 'subscription'
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID, // Use the ID of your subscription price
        quantity: 1,
      },
    ],
    metadata: {
      job_id: job.id,
    },

    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/`,
  };

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create(params);
  console.log(checkoutSession);

  return NextResponse.json({ id: checkoutSession.id });
}
