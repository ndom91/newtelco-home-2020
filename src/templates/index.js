import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
// import Testimonials from '../components/Testimonials'
import Products from '../components/Products'

import Loadable from 'react-loadable'
const Contact = Loadable({
  loader: () => import('../components/Contact'),
  loading() {
    return <div>Loading...</div>
  },
})
const Testimonials = Loadable({
  loader: () => import('../components/Testimonials'),
  loading() {
    return <div>Loading...</div>
  },
})

export default function IndexPage({ data }) {
  const { ctaEmail, ctaPhone, ctaActionText, seoMetaTags } = data.home
  return (
    <>
      <SEO
        meta={seoMetaTags}
        favicon={data.seo.faviconMetaTags}
        global={data.seo.globalSeo}
      />
      <div className='flex flex-col overflow-hidden justify-start items-center max-w-100 bg-gray-900'>
        <Hero data={data.home} img={data.img} />
        <Products products={data.products} />
        <Testimonials
          partners={data.partners.nodes}
          testimonials={data.testimonials.nodes}
        />
        <Contact />
      </div>
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
          alt
          url
          basename
          fluid(imgixParams: { auto: "format", q: 60, fit: "max", w: "150" }) {
            src
          }
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
    testimonials: allDatoCmsTestimonial(filter: { locale: { eq: $language } }) {
      nodes {
        description
        company
        person
      }
    }
  }
`
