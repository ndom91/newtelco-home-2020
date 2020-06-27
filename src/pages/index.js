import React, { Fragment, useContext } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import { PageWrapper, PageInner, PageTitle } from '../components/Elements'
import * as modalTypes from '../types/modalTypes'
import ModalContext from '../store/modalContext'
import SEO from '../components/SEO'

const indexQuery = graphql`
  {
    datoCmsSetting {
      ctaEmail
      ctaPhone
      ctaActionText
      seoMetaTags {
        tags
      }
    }
  }
`

export default function IndexPage() {
  const data = useStaticQuery(indexQuery)
  const { openModal } = useContext(ModalContext)
  const { ctaEmail, ctaPhone, ctaActionText, seoMetaTags } = data.datoCmsSetting
  return (
    <Fragment>
      <SEO meta={seoMetaTags} />
      <PageWrapper>
        <PageInner>
          <pre>
            gatsby new site https://github.com/brohlson/gatsby-datocms-starter
          </pre>
          <button>{ctaActionText}</button>
          <button onClick={() => openModal(modalTypes.BASIC)}>
            Open Modal
          </button>
          <Link to="/blog">
            <button css={{ marginLeft: '.5em' }}>Blog Page</button>
          </Link>
        </PageInner>
      </PageWrapper>
    </Fragment>
  )
}
