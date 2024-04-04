import { headers } from 'next/headers';
import Stripe from 'stripe';

import { db } from '../../../../prisma/client';
import { stripe } from '../../../lib/payments/stripe/stripe';
import { resend } from '@/lib/emails/resend';
import AppleReceiptEmail from '@/components/Email/Prac-Email';
import { config } from '../../../../config';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('Stripe-Signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
     "whsec_LrBk50FqowER6eTQx7KRrwWGYnsB0ixq"
    );
  } catch (error: any) {
    return new Response(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === 'checkout.session.completed') {
    // Retrieve the subscription details from Stripe.
 
      // metadata is the data we passed in the checkout session.
    const job_id = session.metadata?.job_id;
    if (!job_id) {
      return new Response(null, { status: 400 });
    }
    const jobsPost = await db.jobPost.findUnique(
      {
        where: {
          id: parseInt(job_id)
        }
      }
    )
    console.log(jobsPost)
    if(!jobsPost) {
      return new Response(null, { status: 404 });
    }
    jobsPost.featured = true

    // Update the user stripe into in our database.
    // Since this is the initial subscription, we need to update
    // the subscription id and customer id.
   
  }

  if (event.type === 'invoice.payment_succeeded') {
    // Retrieve the subscription details from Stripe.
  
    const job_id = session.metadata?.job_id
    if (!job_id) {
      return new Response(null, { status: 400 });
    }
    const jobsPost = await db.jobPost.findUnique(
      {
        where: {
          id: parseInt(job_id)
        }
      }
    )

    console.log(jobsPost)
    if(!jobsPost) {
      return new Response(null, { status: 404 });
    }
    jobsPost.featured = true
    // Update the price id and set the new period end.
   
  }
  if (event.type === 'checkout.session.expired') {
    // If the payment failed, we want to cancel the subscription.
    const { data, error } = await resend.emails.send({
      from: config.fromEmail as string,
      to: session.customer_email as string,
      subject: 'Did your payment fail? 🤔',
      react: AppleReceiptEmail(),
    });
    if (error) {
      console.log(error);
    }
  }



  return new Response(null, { status: 200 });
}
