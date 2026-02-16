import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://saasgraveyard.com'),
  title: 'SaaS Graveyard 💀 | RIP to all the subscriptions you forgot to cancel',
  description: 'Create a beautiful graveyard card for all your canceled SaaS subscriptions. See how much money you wasted and saved. Share your ruthless optimization journey.',
  keywords: ['saas', 'subscriptions', 'cancel', 'money saved', 'subscription management'],
  authors: [{ name: 'SaaS Graveyard' }],
  openGraph: {
    title: 'SaaS Graveyard 💀 | RIP to all the subscriptions you forgot to cancel',
    description: 'Create a beautiful graveyard card for all your canceled SaaS subscriptions. See how much money you wasted and saved.',
    type: 'website',
    url: 'https://saasgraveyard.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SaaS Graveyard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Graveyard 💀',
    description: 'RIP to all the SaaS you forgot to cancel',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics - Add your GA4 ID here */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
