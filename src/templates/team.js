import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import SEO from '../components/shared/SEO'

export default function TeamPage({ data }) {
  const { seo, team } = data
  const { t } = useTranslation()
  return (
    <>
      <SEO favicon={seo.faviconMetaTags} global={seo.globalSeo} />
      <section className='body-font px-0 py-32 text-gray-500 bg-gray-900 xl:px-20'>
        <div className='container mx-auto px-10 sm:px-0'>
          <div className='flex flex-col mb-20 w-full text-left'>
            <div className='text-gray-500 text-sm uppercase'>
              {t('team.subtitle')}
            </div>
            <div className='text-white font-mono text-4xl'>
              {t('team.title')}
            </div>
          </div>
          <div className='flex flex-wrap -m-4'>
            {team &&
              team.nodes.map(member => (
                <div key={member.name} className='p-8 lg:w-1/2'>
                  <div className='flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left'>
                    <Img
                      fluid={member.image.fluid}
                      alt='team'
                      className='mb-4 w-76 h-48 rounded-lg object-cover object-center sm:mb-0'
                    />
                    <div className='flex-grow sm:pl-8'>
                      <h2 className='title-font text-green-500 font-mono text-lg font-medium'>
                        {member.name}
                      </h2>
                      <h3 className='mb-3 text-gray-600 font-mono font-thin tracking-tighter'>
                        {member.jobTitle}
                      </h3>
                      <p className='mb-4 text-base'>
                        Dui faucibus in ornare quam viverra orci sagittis eu.
                        Est ante in nibh mauris. Tellus molestie nunc non.
                      </p>
                      <span className='inline-flex'>
                        {member.contactmethod.email && (
                          <a
                            href={`mailto:${member.contactmethod.email}`}
                            alt={`mailto ${member.name}`}
                            className='transition-color text-gray-500 hover:text-green-500 transition duration-300 ease-in-out'
                          >
                            <svg
                              height='28'
                              width='28'
                              fill='none'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path>
                            </svg>
                          </a>
                        )}
                        {member.contactmethod.linkedin && (
                          <a
                            href={member.contactmethod.linkedin}
                            alt={`${member.name} LinkedIn`}
                            className='transition-color text-gray-500 hover:text-green-500 transition duration-300 ease-in-out'
                          >
                            <svg height='28' width='28' viewBox='0 0 24 24'>
                              <path fill='none' d='M0 0h24v24H0z' />
                              <path
                                fill='currentColor'
                                d='M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z'
                              />
                            </svg>
                          </a>
                        )}
                        {member.contactmethod.xing && (
                          <a
                            href={`${member.contactmethod.xing}`}
                            alt={`Xing ${member.name}`}
                            className='transition-color text-gray-500 hover:text-green-500 transition duration-300 ease-in-out'
                          >
                            <svg height='28' width='28' viewBox='0 0 24 24'>
                              <path fill='none' d='M0 0h24v24H0z' />
                              <path
                                fill='currentColor'
                                d='M20.462 3.23c.153 0 .307.078.384.155a.49.49 0 0 1 0 .461l-6.077 10.77 3.846 7.076a.49.49 0 0 1 0 .462.588.588 0 0 1-.384.154h-2.77c-.384 0-.615-.308-.769-.539l-3.923-7.154C11 14.308 16.923 3.77 16.923 3.77c.154-.307.385-.538.77-.538h2.769zM8.923 7c.385 0 .615.308.77.538l1.922 3.308c-.153.154-3 5.23-3 5.23-.153.232-.384.54-.769.54H5.154a.588.588 0 0 1-.385-.154.49.49 0 0 1 0-.462l2.846-5.154-1.846-3.23a.49.49 0 0 1 0-.462A.588.588 0 0 1 6.154 7h2.77z'
                              />
                            </svg>
                          </a>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query TeamQuery($language: String!) {
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
    team: allDatoCmsTeam(
      sort: { fields: position }
      filter: { locale: { eq: $language } }
    ) {
      nodes {
        name
        jobTitle
        description
        position
        contactmethod
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
