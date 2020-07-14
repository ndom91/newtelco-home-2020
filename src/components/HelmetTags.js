import React from 'react'
import { Helmet } from 'react-helmet'

const HelmetData = () => {
  return (
    <Helmet>
      <link
        rel='preload'
        as='font'
        href='static/fonts/Rubik_400.woff2'
        type='font/woff2'
        crossOrigin
      />
      <link
        rel='preload'
        as='font'
        href='static/fonts/Raleway_100.woff2'
        type='font/woff2'
        crossOrigin
      />
      <script type='application/ld+json'>
        {`{
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "image": [
        "https://picsum.photos/200",
        "https://picsum.photos/300",
        "https://picsum.photos/400"
       ],
      "@id": "https://newtelco.dev",
      "name": "Newtelco GmbH",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Moenchhofstr. 24",
        "addressLocality": "Frankfurt am Main",
        "addressRegion": "Hessen",
        "postalCode": "60326",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 50.1026744,
        "longitude": 8.6159198
      },
      "url": "https://newtelco.dev",
      "telephone": "+49697500270",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "8:00",
          "closes": "18:00"
        }
      ]
    }`}
      </script>
      <script type='application/ld+json'>
        {`{
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://newtelco.dev",
      "logo": "https://newtelco.dev/icons/icon-256x256.png"
    }`}
      </script>
    </Helmet>
  )
}

export default HelmetData
