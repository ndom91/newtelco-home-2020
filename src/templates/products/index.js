import React, { Fragment } from 'react'
import { graphql, Link } from 'gatsby'

import { PageWrapper, PageInner, PageTitle } from '../components/Elements'
import SEO from '../components/SEO'

const ProductPage = ({ allDatoCmsProduct }) => {
  const { title, shortText, fullText, seoMetaTags } = allDatoCmsProduct.nodes
  return (
    <Fragment>
      <SEO meta={seoMetaTags} />
      <PageWrapper>
        <PageInner>
          <PageTitle>{title}</PageTitle>
          <div dangerouslySetInnerHTML={{ __html: fullText }} />
          <Link to="/">
            <button>Go Home</button>
          </Link>
        </PageInner>
      </PageWrapper>
    </Fragment>
  )
}

export const projectQuery = graphql`
  query($locale: String!, $title: Title!) {
    allDatoCmsProduct(
      filter: { locale: { eq: "en" }, title: { eq: "Colocation" } }
    ) {
      nodes {
        title
        onHomepage
        shortText
        fullText
        seoMetaTags {
          tags
        }
      }
    }
  }
`

export default ProductPage
