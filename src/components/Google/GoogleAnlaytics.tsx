'use client';
import Script from 'next/script';

interface GoogleAnalyticsProps {
  GA_TRACKING_ID: string;
}

const GoogleAnalytics = ({ GA_TRACKING_ID }: GoogleAnalyticsProps) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', "${GA_TRACKING_ID}");
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
