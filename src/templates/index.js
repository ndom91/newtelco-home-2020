import React, { Fragment, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { PageWrapper, PageInner, PageTitle } from '../components/Elements'
import * as modalTypes from '../types/modalTypes'
import ModalContext from '../store/modalContext'
import LanguageSelect from '../components/LanguageSelect'
import SEO from '../components/SEO'
import { Link, useTranslation } from 'gatsby-plugin-react-i18next'

export default function IndexPage({ data }) {
  const { t } = useTranslation()
  const { openModal } = useContext(ModalContext)
  const { ctaEmail, ctaPhone, ctaActionText, seoMetaTags } = data.home
  return (
    <Fragment>
      <SEO meta={seoMetaTags} />
      <PageWrapper>
        <PageInner>
          <h1>{t('welcome')}</h1>
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
  query HomeQuery($language: String!) {
    home: datoCmsSetting(locale: { eq: $language }) {
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
