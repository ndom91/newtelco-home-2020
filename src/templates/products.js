import React from 'react'
import { graphql } from 'gatsby'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import Img from 'gatsby-image'
import SEO from '../components/shared/SEO'
import slugify from 'slug'

export default function ProductsPage({ data }) {
  const { language } = useI18next()
  const { seo, products, productImg } = data
  return (
    <>
      <SEO favicon={seo.faviconMetaTags} global={seo.globalSeo} />
      <div className='max-w-100 flex flex-col items-center justify-start bg-gray-900 overflow-hidden'>
        <section className='body-font text-gray-500 bg-gray-900'>
          <div className='container flex flex-col mx-auto px-5 py-12'>
            <div className='mx-auto lg:w-4/6'>
              <div className='h-64 rounded-lg overflow-hidden'>
                <Img
                  alt='content'
                  fluid={productImg.nodes[0].childImageSharp.fluid}
                  className='w-full h-full object-cover object-top'
                />
              </div>
              {products &&
                products.nodes.map((product, index) => (
                  <div
                    key={product.title}
                    className={`flex mt-10 ${
                      (index + 1) % 2 === 0
                        ? 'flex-col sm:flex-row-reverse'
                        : 'flex-col sm:flex-row'
                    }`}
                  >
                    <div className='text-center sm:pr-8 sm:py-8 sm:w-1/3'>
                      <div className='inline-flex items-center justify-center w-20 h-20 text-gray-600 bg-gray-800 rounded-full'>
                        <svg
                          fill='none'
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          className='w-10 h-10'
                          viewBox='0 0 24 24'
                        >
                          <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                          <circle cx='12' cy='7' r='4'></circle>
                        </svg>
                      </div>
                      <div className='flex flex-col items-center justify-center text-center'>
                        <div className='mb-4 mt-4 w-12 h-1 bg-green-500 rounded'></div>
                        <Link
                          language={language}
                          to={`/products/${slugify(product.title)}`}
                          className='transition-color inline hover:text-green-500 text-white hover:no-underline font-mono font-thin transition duration-300 ease-in-out'
                        >
                          <span>{product.title}</span>
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`sm:w-2/3 sm:px-8 sm:py-8 border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left ${
                        (index + 1) % 2 === 0 ? 'sm:text-right' : 'sm:text-left'
                      }`}
                    >
                      <p className='mb-4 text-lg leading-relaxed'>
                        {product.shortText}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export const query = graphql`
  query ProductsQuery($language: String!) {
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
        productid
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
    productImg: allFile(filter: { name: { eq: "product1" } }) {
      nodes {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
