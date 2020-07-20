import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

export default function ServicesPage({ data }) {
  console.log(data)
  const { seo, products } = data
  return (
    <>
      <SEO favicon={seo.faviconMetaTags} global={seo.globalSeo} />
      <div className='flex flex-col overflow-hidden justify-start items-center max-w-100 bg-gray-900'>
        <section className='relative text-gray-500 bg-gray-900 body-font mb-8 w-4/5 max-w-screen-lg'>
          So many Services!!
          {JSON.stringify(products)}
        </section>
      </div>
    </>
  )
}

export const query = graphql`
  query ServicesQuery($language: String!) {
    seo: datoCmsSite {
      faviconMetaTags {
        tags
      }
      globalSeo {
        siteName
        titleSuffix
        twitterAccount
        facebookPageUrl
        fallbackSeo {
          title
          description
          image {
            url
          }
          twitterCard
        }
      }
    }
    products: allDatoCmsProduct(
      filter: { locale: { eq: $language }, onHomepage: { eq: true } }
    ) {
      nodes {
        shortText
        title
        image {
          alt
          fluid(imgixParams: { auto: "format", fit: "max", w: "600" }) {
            ...GatsbyDatoCmsFluid
          }
        }
        seoMetaTags {
          tags
        }
      }
    }
  }
`
