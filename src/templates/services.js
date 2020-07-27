import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

export default function ServicesPage({ data }) {
  const { seo, services } = data
  return (
    <>
      <SEO favicon={seo.faviconMetaTags} global={seo.globalSeo} />
      <div className='flex flex-col overflow-hidden justify-start items-center max-w-100 bg-gray-900'>
        <section className='relative text-gray-500 bg-gray-900 body-font mb-8 w-4/5 max-w-screen-lg'>
          {services &&
            services.nodes.map(service => {
              return (
                <div key={service.title}>
                  <h1>{service.title}</h1>
                  <p>{service.shortText}</p>
                </div>
              )
            })}
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
    services: allDatoCmsService(filter: { locale: { eq: $language } }) {
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
