import { EmailTemplate } from '../../../components/Email/email-template';
import { resend } from '../../../lib/emails/resend';
import * as React from 'react';
import { AppleReceiptEmail } from '../../../components/Email/Prac-Email';
import { config } from '../../../../config';

export async function POST(res: Request) {
  const { email } = await res.json();
  try {
    const { data, error } = await resend.emails.send({
      from: config.fromEmail as string,
      to: email,
      subject: 'Thank you for signing up to our wait list!',
      react: AppleReceiptEmail(),
    });
    try {
      resend.contacts.create({
        email: email,
        unsubscribed: false,
        audienceId: '3a0502f4-80b3-4f46-a54c-8cd64ed806ae',
      });
    } catch (error) {
      console.log(error);
    }

    if (error) {
      return Response.json({ error });
    }
    return Response.json({ data });
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
