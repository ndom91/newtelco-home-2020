import React from 'react'
import { graphql } from 'gatsby'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import HeaderImg from '../../static/service1.jpg'
import SEO from '../components/shared/SEO'
import slugify from 'slug'

export default function ServicesPage({ data }) {
  const { language } = useI18next()
  const { seo, services } = data
  return (
    <>
      <SEO favicon={seo.faviconMetaTags} global={seo.globalSeo} />
      <div className='flex flex-col overflow-hidden justify-start items-center max-w-100 bg-gray-900'>
        <section className='text-gray-500 bg-gray-900 body-font'>
          <div className='container px-5 py-12 mx-auto flex flex-col'>
            <div className='lg:w-4/6 mx-auto'>
              <div className='rounded-lg h-64 overflow-hidden'>
                <img
                  alt='content'
                  className='object-cover object-middle h-full w-full'
                  src={HeaderImg}
                />
              </div>
              {services &&
                services.nodes.map((product, index) => (
                  <div
                    key={product.title}
                    className={`flex mt-10 ${
                      (index + 1) % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
                      <div className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600'>
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
                      <div className='flex flex-col items-center text-center justify-center'>
                        <div className='w-12 h-1 bg-green-500 rounded mt-4 mb-4'></div>
                        <Link
                          language={language}
                          to={`/services/${slugify(product.title)}`}
                          className='text-white hover:text-green-500 transition transition-color duration-300 ease-in-out hover:no-underline inline font-mono font-thin'
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
                      <p className='leading-relaxed text-xl mb-4'>
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
  query ServicesQuery($language: String!) {
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
        serviceid
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
