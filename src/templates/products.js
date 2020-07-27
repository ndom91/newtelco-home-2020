import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Product from '../components/Product'

export default function ProductsPage({ data }) {
  const { seo, products } = data
  return (
    <>
      <SEO favicon={seo.faviconMetaTags} global={seo.globalSeo} />
      <div className='flex flex-col overflow-hidden justify-start items-center max-w-100 bg-gray-900'>
        <section className='relative text-gray-500 bg-gray-900 body-font mb-8 w-4/5 max-w-screen-lg'>
          {products &&
            products.nodes.map((product, i) => {
              return <Product key={product.title} product={product} index={i} />
            })}
        </section>
      </div>
    </>
  )
}

export const query = graphql`
  query ProductsQuery($language: String!) {
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
    products: allDatoCmsProduct(filter: { locale: { eq: $language } }) {
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
