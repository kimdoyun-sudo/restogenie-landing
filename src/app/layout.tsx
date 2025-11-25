import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from 'next/script';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { siteDetails } from '@/data/siteDetails';

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteDetails.siteUrl),
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  keywords: [
    'RestoGenie',
    '레스토지니',
    '외식업 AI',
    '음식점 관리',
    '매장 운영',
    'AI 운영 파트너',
    '재고 관리',
    '인력 관리',
    '마케팅 자동화',
    'POS 연동',
    '배달앱 통합',
    '프랜차이즈 관리',
    '가맹점 관리',
    '음식점 자동화',
    '레스토랑 솔루션',
  ],
  authors: [{ name: 'RestoGenie Team' }],
  creator: 'RestoGenie',
  publisher: 'RestoGenie',
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteDetails.siteUrl,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    siteName: siteDetails.siteName,
    locale: siteDetails.locale,
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/twitter-image.jpg'],
  },
  verification: {
    google: '', // 구글 서치 콘솔 인증 코드 (나중에 추가)
    other: {
      'naver-site-verification': '', // 네이버 웹마스터 도구 인증 코드 (나중에 추가)
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteDetails.language}>
      <body className="antialiased">
        {/* Structured Data for SEO */}
        <StructuredData />

        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}

        {/* Channel Talk */}
        {siteDetails.channelTalkPluginKey && (
          <Script id="channel-talk" strategy="afterInteractive">
            {`
              (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();
              ChannelIO('boot', { "pluginKey": "${siteDetails.channelTalkPluginKey}" });
            `}
          </Script>
        )}

        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
