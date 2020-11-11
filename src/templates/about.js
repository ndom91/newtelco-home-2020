import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/shared/SEO'

export default function AboutPage({ data }) {
  console.log(data)
  const { seo, products } = data
  return (
    <>
      <SEO favicon={seo.faviconMetaTags} global={seo.globalSeo} />
      <section class='relative px-0 py-40 xl:px-20 min-w-screen animation-fade animation-delay'>
        <div class='container px-10 mx-auto sm:px-0'>
          <div class='sm:flex'>
            <div class='flex-1 mr-12'>
              <div class='text-sm text-gray-500 uppercase'>
                Get to know us more
              </div>
              <div class='text-4xl text-white font-mono'>The Dream Team</div>
              <div class='mt-10'>
                <div class='flex'>
                  <div class='flex-shrink'>
                    <svg
                      class='w-10 text-green-500 stroke-current'
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
                        class='nc-icon-wrapper'
                        fill='none'
                      >
                        <rect
                          x='9'
                          y='8'
                          fill='none'
                          stroke='currentColor'
                          vector-effect='non-scaling-stroke'
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
                  <div class='flex-grow ml-5'>
                    <div class='text-2xl text-green-500 font-mono font-thin'>
                      Powerhouse
                    </div>
                    <p class='mt-5 leading-7 text-gray-700 text-md font-thin'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div class='flex mt-5'>
                  <div class='flex-shrink'>
                    <svg
                      class='w-10 text-green-500 stroke-current'
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
                        class='nc-icon-wrapper'
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
                  <div class='flex-grow ml-5'>
                    <div class='text-2xl text-green-500 font-mono font-thin'>
                      Tenure
                    </div>
                    <p class='mt-5 leading-7 text-gray-700 text-md font-thin'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div class='flex mt-5'>
                  <div class='flex-shrink'>
                    <svg
                      class='w-10 text-green-500 stroke-current'
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
                        class='nc-icon-wrapper'
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
                          stroke-linejoin='miter'
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
                  <div class='flex-grow ml-5'>
                    <div class='text-2xl text-green-500 font-mono font-thin'>
                      Vision
                    </div>
                    <p class='mt-5 leading-7 text-gray-700 text-md font-sans font-thin'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class='px-10 mt-20 sm:flex-1 sm:mt-0 sm:px-0 sm:mt-48 lg:mt-0'>
              <div class='grid grid-cols-2 gap-5'>
                <div class='col-span-1'>
                  <img
                    class='min-w-full rounded-md'
                    width='245'
                    height='330'
                    src='https://picsum.photos/245/330?grayscale'
                  />
                  <img
                    class='min-w-full mt-5 rounded-md'
                    width='245'
                    height='245'
                    src='https://picsum.photos/245/245?grayscale'
                  />
                </div>
                <div class='col-span-1 pt-10'>
                  <img
                    class='min-w-full rounded-md'
                    width='240'
                    height='240'
                    src='https://picsum.photos/240/240?grayscale'
                  />
                  <img
                    class='min-w-full mt-5 rounded-md'
                    width='245'
                    height='335'
                    src='https://picsum.photos/245/335?grayscale'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className='flex flex-col overflow-hidden justify-start items-center max-w-100 bg-gray-900'>
        <section className='relative text-gray-500 bg-gray-900 body-font mb-8 w-4/5 max-w-screen-lg'>
          About!
        </section>
      </div> */}
    </>
  )
}

export const query = graphql`
  query AboutQuery($language: String!) {
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
  }
`
