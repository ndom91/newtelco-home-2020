import React from 'react'
import { graphql } from 'gatsby'
import { PageWrapper } from '../components/Elements'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Products from '../components/Products'

export default function IndexPage({ data }) {
  const { ctaEmail, ctaPhone, ctaActionText, seoMetaTags } = data.home
  return (
    <>
      <SEO
        meta={seoMetaTags}
        favicon={data.seo.faviconMetaTags}
        global={data.seo.globalSeo}
      />
      <PageWrapper>
        <Hero data={data.home} img={data.img} />
        <Products />
        <Testimonials partners={data.partners.nodes} />
      </PageWrapper>
    </>
  )
}

export const query = graphql`
  query HomeQuery($language: String!) {
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
          url
          basename
        }
      }
    }
    img: allDatoCmsLocation {
      nodes {
        image {
          fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`
