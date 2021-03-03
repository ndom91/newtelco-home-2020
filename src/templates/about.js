import React from 'react'
import { graphql } from 'gatsby'
import { Image } from 'react-datocms'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import SEO from '../components/shared/SEO'

export default function AboutPage({ data }) {
  const { seo, about } = data
  const { t } = useTranslation()

  return (
    <>
      <SEO favicon={seo.faviconMetaTags} global={seo.globalSeo} />
      <section className='min-w-screen animation-fade animation-delay relative px-0 py-32 xl:px-20'>
        <div className='container mx-auto px-10 sm:px-0'>
          <div className='sm:flex'>
            <div className='flex-1 mr-12'>
              <div className='text-gray-500 text-sm uppercase'>
                {t('about.subtitle')}
              </div>
              <div className='text-white font-mono text-4xl'>
                {t('about.title')}
              </div>
              <div className='mt-10'>
                <div className='flex'>
                  <div className='flex-shrink'>
                    <svg
                      className='w-10 text-green-500 stroke-current'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      viewBox='0 0 24 24'
                      data-type='outline'
                      data-name='fullsize'
                    >
                      <g
                        transform='translate(0, 0)'
                        className='nc-icon-wrapper'
                        fill='none'
                      >
                        <rect
                          x='9'
                          y='8'
                          fill='none'
                          stroke='currentColor'
                          vectorEffect='non-scaling-stroke'
                          strokeLinecap='square'
                          strokeMiterlimit='10'
                          width='6'
                          height='8'
                          strokeLinejoin='miter'
                        ></rect>
                        <line
                          data-color='color-2'
                          fill='none'
                          stroke='currentColor'
                          vectorEffect='non-scaling-stroke'
                          strokeLinecap='square'
                          strokeMiterlimit='10'
                          x1='5'
                          y1='6'
                          x2='5'
                          y2='18'
                          strokeLinejoin='miter'
                        ></line>
                        <line
                          data-color='color-2'
                          fill='none'
                          stroke='currentColor'
                          vectorEffect='non-scaling-stroke'
                          strokeLinecap='square'
                          strokeMiterlimit='10'
                          x1='19'
                          y1='6'
                          x2='19'
                          y2='18'
                          strokeLinejoin='miter'
                        ></line>
                        <line
                          data-color='color-2'
                          fill='none'
                          stroke='currentColor'
                          vectorEffect='non-scaling-stroke'
                          strokeLinecap='square'
                          strokeMiterlimit='10'
                          x1='1'
                          y1='4'
                          x2='1'
                          y2='20'
                          strokeLinejoin='miter'
                        ></line>
                        <line
                          data-color='color-2'
                          fill='none'
                          stroke='currentColor'
                          vectorEffect='non-scaling-stroke'
                          strokeLinecap='square'
                          strokeMiterlimit='10'
                          x1='23'
                          y1='4'
                          x2='23'
                          y2='20'
                          strokeLinejoin='miter'
                        ></line>
                      </g>
                    </svg>
                  </div>
                  <div className='flex-grow ml-5'>
                    <div className='text-green-500 font-mono text-2xl font-thin'>
                      Powerhouse
                    </div>
                    <p className='text-md mt-5 text-gray-700 font-thin leading-7'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className='flex mt-5'>
                  <div className='flex-shrink'>
                    <svg
                      className='w-10 text-green-500 stroke-current'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      viewBox='0 0 24 24'
                      data-type='outline'
                      data-name='fullsize'
                    >
                      <g
                        transform='translate(0, 0)'
                        className='nc-icon-wrapper'
                        fill='none'
                      >
                        <rect
                          x='9'
                          y='8'
                          fill='none'
                          stroke='currentColor'
                          vectorEffect='non-scaling-stroke'
                          strokeLinecap='square'
                          strokeMiterlimit='10'
                          width='6'
                          height='8'
                          strokeLinejoin='miter'
                        ></rect>
                        <line
                          data-color='color-2'
                          fill='none'
                          stroke='currentColor'
                          vectorEffect='non-scaling-stroke'
                          strokeLinecap='square'
                          strokeMiterlimit='10'
                          x1='5'
                          y1='6'
                          x2='5'
                          y2='18'
                          strokeLinejoin='miter'
                        ></line>
                        <line
                          data-color='color-2'
                          fill='none'
                          stroke='currentColor'
                          vectorEffect='non-scaling-stroke'
                          strokeLinecap='square'
                          strokeMiterlimit='10'
                          x1='19'
                          y1='6'
                          x2='19'
                          y2='18'
                          strokeLinejoin='miter'
                        ></line>
                        <line
                          data-color='color-2'
                          fill='none'
                          stroke='currentColor'
                          vectorEffect='non-scaling-stroke'
                          strokeLinecap='square'
                          strokeMiterlimit='10'
                          x1='1'
                          y1='4'
                          x2='1'
                          y2='20'
                          strokeLinejoin='miter'
                        ></line>
                        <line
                          data-color='color-2'
                          fill='none'
                          stroke='currentColor'
                          vectorEffect='non-scaling-stroke'
                          strokeLinecap='square'
                          strokeMiterlimit='10'
                          x1='23'
                          y1='4'
                          x2='23'
                          y2='20'
                          strokeLinejoin='miter'
                        ></line>
                      </g>
                    </svg>
                  </div>
                  <div className='flex-grow ml-5'>
                    <div className='text-green-500 font-mono text-2xl font-thin'>
                      Tenure
                    </div>
                    <p className='text-md mt-5 text-gray-700 font-thin leading-7'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className='flex mt-5'>
                  <div className='flex-shrink'>
                    <svg
                      className='w-10 text-green-500 stroke-current'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      viewBox='0 0 24 24'
                      data-type='outline'
                      data-name='fullsize'
                    >
                      <g
                        transform='translate(0, 0)'
                        className='nc-icon-wrapper'
                        fill='none'
                      >
                        <rect
                          x='9'
                          y='8'
                          fill='none'
                          stroke='currentColor'
                          vectorEffect='non-scaling-stroke'
                          strokeLinecap='square'
                          strokeMiterlimit='10'
                          width='6'
                          height='8'
                          strokeLinejoin='miter'
                        ></rect>
                        <line
                          data-color='color-2'
                          fill='none'
                          stroke='currentColor'
                          vectorEffect='non-scaling-stroke'
                          strokeLinecap='square'
                          strokeMiterlimit='10'
                          x1='5'
                          y1='6'
                          x2='5'
                          y2='18'
                          strokeLinejoin='miter'
                        ></line>
                        <line
                          data-color='color-2'
                          fill='none'
                          stroke='currentColor'
                          vectorEffect='non-scaling-stroke'
                          strokeLinecap='square'
                          strokeMiterlimit='10'
                          x1='19'
                          y1='6'
                          x2='19'
                          y2='18'
                          strokeLinejoin='miter'
                        ></line>
                        <line
                          data-color='color-2'
                          fill='none'
                          stroke='currentColor'
                          vectorEffect='non-scaling-stroke'
                          strokeLinecap='square'
                          strokeMiterlimit='10'
                          x1='1'
                          y1='4'
                          x2='1'
                          y2='20'
                          strokeLinejoin='miter'
                        ></line>
                        <line
                          data-color='color-2'
                          fill='none'
                          stroke='currentColor'
                          vectorEffect='non-scaling-stroke'
                          strokeLinecap='square'
                          strokeMiterlimit='10'
                          x1='23'
                          y1='4'
                          x2='23'
                          y2='20'
                          strokeLinejoin='miter'
                        ></line>
                      </g>
                    </svg>
                  </div>
                  <div className='flex-grow ml-5'>
                    <div className='text-green-500 font-mono text-2xl font-thin'>
                      Vision
                    </div>
                    <p className='text-md mt-5 text-gray-700 font-thin leading-7'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-20 pt-40 px-10 sm:flex-1 sm:mt-0 sm:mt-48 sm:px-0 lg:mt-0'>
              <div className='grid gap-5 grid-cols-2'>
                <div className='col-span-1'>
                  <Image
                    className='min-w-full h-76 rounded-md object-cover object-center'
                    data={about.images[0].fluid}
                  />
                  <Image
                    className='mt-5 min-w-full h-64 rounded-md'
                    data={about.images[2].fluid}
                  />
                </div>
                <div className='col-span-1 pt-10'>
                  <Image
                    className='min-w-full h-76 rounded-md'
                    data={about.images[3].fluid}
                  />
                  <Image
                    className='mt-5 min-w-full h-64 rounded-md'
                    data={about.images[1].fluid}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query AboutQuery($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
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
    about: datoCmsAbout {
      images {
        fluid(imgixParams: { auto: "format", sat: -100 }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
