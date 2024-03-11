import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { CustomsendVerificationRequest } from '../app/api/auth/signinemail';
import { db } from '../../prisma/client';
import { NextAuthOptions } from 'next-auth';
import RaycastMagicLinkEmail from '../../src/components/Email/MagicLink';
import { Resend } from 'resend';
import { config } from '../../config';
const resend = new Resend(process.env.RESEND_API_KEY);

const adapter = PrismaAdapter(db);
export const authOptions: NextAuthOptions = {
  adapter,
  session: {
    strategy: 'jwt',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.SMTP_FROM,
      async sendVerificationRequest({ identifier, url, provider }: any) {
        const { data, error } = await resend.emails.send({
          from: config.fromEmail as string,
          to: identifier,
          subject: 'Thank you for signing up to our wait list!',
          react: RaycastMagicLinkEmail({ magicLink: url }),
        });
        if (error) {
          console.log(error);
          throw new Error('Failed to send email');
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  secret: process.env.SECRET,
  callbacks: {
    async session({ token, session }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }: any) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        token.id = user!.id;
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
    redirect() {
      return '/dashboard';
    },
  },
};
