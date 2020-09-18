import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

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
    home: datoCmsSetting(locale: { eq: $language }) {
      ctaEmail
      ctaPhone
      ctaActionText
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
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
    partners: allDatoCmsPartner(filter: { locale: { eq: $language } }) {
      nodes {
        image {
          alt
          url
          basename
          fluid(imgixParams: { auto: "format", q: 60, fit: "max", w: "150" }) {
            src
          }
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
    testimonials: allDatoCmsTestimonial(filter: { locale: { eq: $language } }) {
      nodes {
        description
        company
        person
      }
    }
    team: allDatoCmsTeam(
      filter: { locale: { eq: $language } }
      sort: { order: ASC, fields: order }
    ) {
      nodes {
        name
        image {
          fluid(
            imgixParams: {
              auto: "format"
              fit: "max"
              crop: "entropy"
              w: "300"
            }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
        jobTitle
        contactmethod
      }
    }
  }
`
