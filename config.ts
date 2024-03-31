enum EmailProvider {
  SendGrid = 'sendgrid',
  Mailgun = 'mailgun',
  AmazonSES = 'amazon-ses',
  Mailjet = 'mailjet',
  Postmark = 'postmark',
  SparkPost = 'sparkpost',
}
enum PaymentProvider {
  Stripe = 'stripe',
  LemonSqueezy = 'lemon-squeezy',
}
export interface Config {
  siteName: string;
  title: string;
  description: string;
  twitter: string;
  theme: 'light' | 'dark';
  emailProvider: EmailProvider;
  Database: Database;
  favicon?: string;
  twitterHandle?: string;
  opengraphImage?: string;
  opengraphTitle?: string;
  opengraphDescription?: string;
  opengraphUrl?: string;
  opengraphSiteName?: string;
  opengraphType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterUrl?: string;
  twitterCard?: string;
  category?: string;
  fromEmail?: string;
}
enum Database {
  Postgres = 'postgres',
  MySQL = 'mysql',
  MongoDB = 'mongodb',
}
export const config: Config = {
  siteName: 'https://pythondevs.io',
  title: 'Python devs',
  description:
    'Python devs is a platform for building, launching, and scaling your Python business.',
  twitter: 'https://twitter.com/saasunderone',
  theme: 'dark',
  Database: Database.Postgres,
  emailProvider: EmailProvider.SendGrid,
  favicon: '/favicon.ico',

  twitterHandle: '@saasunderone',
  opengraphImage: '/og.png',
  opengraphTitle: 'SaaS Under One',
  opengraphDescription:
    'SaaS Under One is a platform for building, launching, and scaling your SaaS business.',
  opengraphUrl: 'https://saasunderone.com',
  opengraphSiteName: 'SaaS Under One',
  opengraphType: 'website',
  twitterTitle: 'SaaS Under One',
  twitterDescription:
    'SaaS Under One is a platform for building, launching, and scaling your SaaS business.',
  twitterImage: '/og.png',
  twitterUrl: 'https://saasunderone.com',
  twitterCard: 'summary_large_image',
  category: 'SAAS',
  fromEmail: 'noreply@kitui.art',
};
