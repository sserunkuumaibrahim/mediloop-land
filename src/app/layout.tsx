import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0d9488', // teal-600
}

export const metadata: Metadata = {
  metadataBase: new URL('https://mediloop.co'),
  title: {
    default: "Mediloop - Uganda's Digital Health Platform | Universal Health ID & Healthcare Access",
    template: "%s | Mediloop Health"
  },
  description: "Get your Universal Health ID (UHID) and access quality healthcare across Uganda. Connect with 1000+ doctors, pharmacies & labs via WhatsApp. Complete health records, instant consultations, affordable care.",
  keywords: [
    "Universal Health ID Uganda",
    "UHID registration",
    "digital health Uganda",
    "healthcare access Uganda",
    "medical records Uganda",
    "doctor consultation Uganda",
    "pharmacy delivery Uganda",
    "health insurance Uganda",
    "telemedicine Uganda",
    "WhatsApp doctor Uganda",
    "healthcare Kampala",
    "medical services Uganda",
    "patient portal Uganda",
    "health data control Uganda",
    "affordable healthcare Uganda"
  ],
  authors: [{ name: "Mediloop Health" }],
  creator: "Mediloop Health",
  publisher: "Mediloop Health",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Healthcare Technology",
  classification: "Digital Health Platform",
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
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    url: 'https://mediloop.co',
    title: 'Mediloop - Uganda\'s Digital Health Platform | Universal Health ID',
    description: 'Get your Universal Health ID (UHID) and access quality healthcare across Uganda. Connect with 1000+ doctors, pharmacies & labs via WhatsApp.',
    siteName: 'Mediloop Health',
    images: [
      {
        url: 'https://mediloop.co/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mediloop - Digital Health Platform Uganda',
      },
      {
        url: 'https://mediloop.co/og-image-whatsapp.jpg',
        width: 1200,
        height: 630,
        alt: 'WhatsApp Healthcare Consultations',
      },
      {
        url: 'https://mediloop.co/assets/og-uhid.svg',
        width: 1200,
        height: 630,
        alt: 'Universal Health ID (UHID) — Mediloop',
      },
      {
        url: 'https://mediloop.co/assets/og-services.svg',
        width: 1200,
        height: 630,
        alt: 'Telemedicine & eHealth — Mediloop',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mediloop - Uganda\'s Digital Health Platform',
    description: 'Get your Universal Health ID (UHID) and access quality healthcare across Uganda via WhatsApp.',
    images: ['https://mediloop.co/og-image.jpg','https://mediloop.co/assets/og-uhid.svg','https://mediloop.co/assets/og-services.svg'],
    creator: '@mediloopug',
    site: '@mediloopug',
  },
  alternates: {
    canonical: 'https://mediloop.co',
    languages: {
      'en-UG': 'https://mediloop.co',
    },
  },
  other: {
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
    'yandex-verification': 'your-yandex-verification-code',
  },
  icons: {
    icon: [
      { url: '/assets/mediloop-ico.png', sizes: 'any' },
      { url: '/assets/mediloop-ico-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/mediloop-ico-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/mediloop-apple-180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/assets/mediloop-safari.svg', color: '#0d9488' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://mediloop.co/#organization",
        "name": "Mediloop Health",
        "alternateName": "Mediloop",
        "url": "https://mediloop.co",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mediloop.co/assets/mediloop.png",
          "width": 400,
          "height": 400
        },
        "description": "Uganda's digital health platform providing Universal Health ID (UHID), telemedicine, and healthcare access to millions.",
        "foundingDate": "2024",
        "founders": [
          {
            "@type": "Person",
            "name": "Mediloop Health Team"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot 19-21 PortBell Road",
          "addressLocality": "Nakawa",
          "addressRegion": "Kampala",
          "postalCode": "00000",
          "addressCountry": "UG"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+256-775-035244",
            "contactType": "customer service",
            "availableLanguage": "English",
            "contactOption": "WhatsApp"
          },
          {
            "@type": "ContactPoint",
            "url": "https://wa.me/256775035244",
            "contactType": "customer service"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/mediloopug",
          "https://twitter.com/mediloopug",
          "https://www.linkedin.com/company/mediloop",
          "https://www.instagram.com/mediloopug"
        ],
        "areaServed": {
          "@type": "Country",
          "name": "Uganda"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Healthcare Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Universal Health ID (UHID)",
                "description": "Secure digital health identity for Ugandan citizens"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "WhatsApp Telemedicine",
                "description": "Medical consultations via WhatsApp messaging"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Healthcare Provider Network",
                "description": "Access to 1000+ clinics, hospitals, pharmacies, and labs"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://mediloop.co/#website",
        "url": "https://mediloop.co",
        "name": "Mediloop Health",
        "description": "Uganda's digital health platform for Universal Health ID and healthcare access",
        "publisher": {
          "@id": "https://mediloop.co/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://mediloop.co/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-UG"
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://mediloop.co/#medicalorganization",
        "name": "Mediloop Health",
        "description": "Digital health platform providing telemedicine, health records management, and healthcare access in Uganda",
        "medicalSpecialty": [
          "Digital Health",
          "Telemedicine",
          "Health Information Technology",
          "Primary Care"
        ],
        "availableService": [
          {
            "@type": "MedicalService",
            "name": "Telemedicine Consultations",
            "description": "Medical consultations via WhatsApp and video calls"
          },
          {
            "@type": "MedicalService",
            "name": "Health Records Management",
            "description": "Secure storage and management of patient health records"
          },
          {
            "@type": "MedicalService",
            "name": "Universal Health ID",
            "description": "Digital health identity for Ugandan citizens"
          }
        ],
        "areaServed": {
          "@type": "Country",
          "name": "Uganda"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://mediloop.co/#webpage",
        "url": "https://mediloop.co",
        "name": "Mediloop - Uganda's Digital Health Platform | Universal Health ID",
        "description": "Get your Universal Health ID (UHID) and access quality healthcare across Uganda. Connect with 1000+ doctors, pharmacies & labs via WhatsApp.",
        "isPartOf": {
          "@id": "https://mediloop.co/#website"
        },
        "about": {
          "@id": "https://mediloop.co/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://mediloop.co/og-image.jpg"
        },
        "datePublished": "2024-01-01",
        "dateModified": "2026-01-12"
      }
      ,
      {
        "@type": "BreadcrumbList",
        "@id": "https://mediloop.co/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mediloop.co/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "UHID",
            "item": "https://mediloop.co/uhid"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Telemedicine",
            "item": "https://mediloop.co/telemedicine"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Providers",
            "item": "https://mediloop.co/providers"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Pharmacy",
            "item": "https://mediloop.co/pharmacy"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
