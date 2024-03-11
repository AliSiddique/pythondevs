import { config } from '../../../config';

interface SeoTags {
  description: string;
  applicationName: string;
  referrer: string;
  keywords: string[];
  colorScheme: string;
  publisher: string;
  metadataBase: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: {
      url: string;
      width: number;
      height: number;
    }[];
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    creator: string;
    images: string;
  };
  category: string;
}
export default function getSeoTags(metadata: any): SeoTags {
  return {
    description: config.description,
    applicationName: config.title,
    referrer: 'origin-when-cross-origin',
    keywords: ['SAAS'],
    colorScheme: 'light',
    publisher: config.title,
    metadataBase: new URL(config.siteName).origin,
    openGraph: {
      title: config.opengraphTitle as string,
      description: config.opengraphDescription as string,
      url: config.opengraphUrl as string,
      siteName: config.opengraphSiteName as string,
      images: [
        {
          url: config.opengraphImage as string,
          width: 800,
          height: 600,
        },
      ],
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: config.twitterTitle as string,

      description: config.twitterDescription as string,
      creator: config.twitterHandle as string,
      images: config.twitterImage as string,
    },
    category: config.category as string,
  };
}
