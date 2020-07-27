import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

export default function TeamPage({ data }) {
  console.log(data)
  const { seo, team } = data
  return (
    <>
      <SEO favicon={seo.faviconMetaTags} global={seo.globalSeo} />
      <div className='flex flex-col overflow-hidden justify-start items-center max-w-100 bg-gray-900'>
        <section className='relative text-gray-500 bg-gray-900 body-font mb-8 w-4/5 max-w-screen-lg'>
          {team &&
            team.nodes.map(member => {
              return (
                <div key={member.name}>
                  <h1>{member.name}</h1>
                  <p>{member.jobTitle}</p>
                </div>
              )
            })}
        </section>
      </div>
    </>
  )
}

export const query = graphql`
  query TeamQuery($language: String!) {
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
      sort: { order: ASC, fields: order }
      filter: { locale: { eq: $language } }
    ) {
      nodes {
        name
        jobTitle
        description
        order
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
