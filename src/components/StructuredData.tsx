import { siteDetails } from '@/data/siteDetails'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteDetails.siteName,
    url: siteDetails.siteUrl,
    logo: `${siteDetails.siteUrl}${siteDetails.siteLogo}`,
    description: siteDetails.metadata.description,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'restogenie@ctrl-m.co.kr',
      contactType: 'Customer Service',
      areaServed: 'KR',
      availableLanguage: 'Korean',
    },
    sameAs: [
      siteDetails.serviceUrl,
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteDetails.siteName,
    url: siteDetails.siteUrl,
    description: siteDetails.metadata.description,
    inLanguage: 'ko-KR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteDetails.siteUrl}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'RestoGenie',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KRW',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
    </>
  )
}
