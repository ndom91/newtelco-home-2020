import React from 'react'
import { graphql } from 'gatsby'
import { PageWrapper } from '../components/Elements'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Products from '../components/Products'

export default function IndexPage({ data }) {
  const { ctaEmail, ctaPhone, ctaActionText, seoMetaTags } = data.home
  return (
    <>
      <SEO meta={seoMetaTags} />
      <PageWrapper>
        <Hero data={data.home} img={data.img} />
        <Products />
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
