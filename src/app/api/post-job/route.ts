import { stripe } from '@/lib/payments/stripe/stripe';
import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { db } from '../../../../prisma/client';
import { JobPost } from '@prisma/client';


export async function POST(req: Request) {

  const {
    company_name,
company_website,
company_industry,
company_description,
company_logo,
company_linkedin,
job_title,
job_type,
job_location,
job_salary,
job_description,
job_apply_link,
company_email,
tags,
remote,
color,
  } = await req.json();
  console.log(company_name,company_website,company_industry,company_description,company_logo,company_linkedin,job_title,job_type,job_location,job_salary,job_description,job_apply_link,company_email,tags,remote,color);
  console.log(tags.map((tag: any) => tag.text));
  const job:JobPost = await db.jobPost.create({
    data: {
      company_name,
      company_website,
      company_description,
      company_logo,
      department: company_industry,
      linkedin_in:company_linkedin,
      title: job_title,
      type: job_title,
      location: job_location,
      salary: parseInt(job_salary),
      description: job_description,
      apply_link: job_apply_link,
      email:company_email,
      tags: tags.map((tag: any) => tag.text),
      remote,
      color,
      company_color:color,
        featured: true,
    },
  });
  const params: Stripe.Checkout.SessionCreateParams = {
    payment_method_types: ['card', 'paypal'],
    mode: 'payment', // Change mode to 'subscription'
    line_items: [
      {
        price: "price_1P0U85F6XPSRrn2m6ifMhAvZ", // Use the ID of your subscription price
        quantity: 1,
      },
    ],
    metadata: {
      job_id: job.id,
    },


    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/`,
  };

  // const checkoutSession: Stripe.Checkout.Session =
  //   await stripe.checkout.sessions.create(params);
  // console.log(checkoutSession);
  // return NextResponse.json({ id: checkoutSession.id});
  return NextResponse.json({ id: job.id });
}