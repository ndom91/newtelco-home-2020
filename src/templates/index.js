import React, { Fragment, useContext } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import { PageWrapper, PageInner, PageTitle } from '../components/Elements'
import * as modalTypes from '../types/modalTypes'
import ModalContext from '../store/modalContext'
import LanguageSelect from '../components/LanguageSelect'
import SEO from '../components/SEO'

export default function IndexPage({ data }) {
  const { openModal } = useContext(ModalContext)
  const { ctaEmail, ctaPhone, ctaActionText, seoMetaTags } = data.home
  console.log(data)
  return (
    <Fragment>
      <SEO meta={seoMetaTags} />
      <PageWrapper>
        <PageInner>
          <LanguageSelect />
          <Link
            target="_blank"
            alt={`Email to ${ctaEmail}`}
            href={`mailto:${ctaEmail}`}
          >
            <button>{ctaActionText}</button>
          </Link>
          <button onClick={() => openModal(modalTypes.BASIC)}>
            Open Modal
          </button>
        </PageInner>
      </PageWrapper>
    </Fragment>
  )
}

export const query = graphql`
  query HomeQuery($locale: String!) {
    home: datoCmsSetting(locale: { eq: $locale }) {
      ctaEmail
      ctaPhone
      ctaActionText
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    seo: datoCmsSite {
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
  }
`
