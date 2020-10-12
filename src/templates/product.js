import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/shared/SEO'

export default function ProductPage({ data = {}, pageContext }) {
  const { product, seo } = data
  console.log(data, pageContext)
  if (product && seo) {
    return (
      <>
        <SEO favicon={seo.faviconMetaTags} global={seo.globalSeo} />
        <div className='flex flex-col overflow-hidden justify-start items-center max-w-100 bg-gray-900'>
          <section className='relative text-gray-500 bg-gray-900 body-font mb-8 w-4/5 max-w-screen-lg'>
            {product.nodes.map(product => {
              return (
                <div key={product.title}>
                  <h1>{product.title}</h1>
                  <div>{product.fullText}</div>
                </div>
              )
            })}
          </section>
        </div>
      </>
    )
  } else {
    return null
  }
}

export const query = graphql`
  query ProductQuery($language: String!, $title: String!) {
    social: allDatoCmsSocial(filter: { locale: { eq: "en" } }) {
      nodes {
        provider
        url
        locale
      }
    }
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
    product: allDatoCmsProduct(
      filter: { locale: { eq: $language }, title: { eq: $title } }
    ) {
      nodes {
        shortText
        fullText
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
    locations: allDatoCmsLocation(filter: { locale: { eq: $language } }) {
      nodes {
        city
        address
        image {
          fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid
          }
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
      }
    }
    services: allDatoCmsService(
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
      }
    }
  }
`
