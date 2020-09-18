import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import BG from '../images/404.jpg'
import SEO from '../components/SEO'
import { useTranslation, Link, useI18next } from 'gatsby-plugin-react-i18next'

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  max-height: 1000px;
  height: 60vh;
  width: 60%;
  transform: translateY(-10%);
  position: relative;
  margin: 0 auto;
`

const Datacenter = styled.div`
  padding: 6rem 0;
  text-align: center;
  height: calc(100vh - 10rem);
  background-image: url(${BG});
  opacity: 0.05;
  background-size: cover;
  height: 65vh;
  width: 80%;
  transform: translateY(-10%);
  position: relative;
`

const TravoltaWrapper = styled.div`
  position: absolute;
  margin-top: 50px;
  margin-left: 450px;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`

const Travolta = styled.img`
  z-index: 99;
  opacity: 0.7;
  filter: brightness(0.5) grayscale(0.5);
  margin-left: 50px;
`

const TextWrapper = styled.div`
  position: absolute;
  color: #fff;
  display: flex;
  flex-direction: column;
  place-self: start;
  margin-top: 130px;
  z-index: 101;
  max-width: 30rem;

  & p.title {
    font-size: 7rem;
    font-family: var(--font-mono);
    margin: 10px;
    font-weight: 100;
  }
  & p.desc {
    margin: 10px;
    font-family: var(--font-mono);
    font-weight: 200;
    font-size: 1.5rem;
  }
  & .btn-wrapper {
    display: flex;
    z-index: 100;
  }
  & button {
    padding: 10px 20px;
    background-color: #67b246;
    border-radius: 5px;
    margin: 10px;
    font-family: var(--font-mono);
    font-size: 1.2rem;
    font-weight: 200;
    color: #fff;
    border: 3px solid #67b247;
  }
  & .button2 {
    background-color: transparent;
    border: 3px solid #67b247;
  }
`

const NotFoundPage = () => {
  const { t } = useTranslation()
  const { language } = useI18next()
  return (
    <>
      <SEO title='404: Not found' />
      <Wrapper>
        <Datacenter />
        <TextWrapper>
          <p className='title'>{t('404.title')}</p>
          <p className='desc'>{t('404.desc')}</p>
          <div className='btn-wrapper'>
            <Link to={'/'} language={language} aria-label={'Home'}>
              <button className='button1'>{t('404.button1')}</button>
            </Link>
            <Link to={'/'} language={language} aria-label={'Back'}>
              <button className='button2'>{t('404.button2')}</button>
            </Link>
          </div>
        </TextWrapper>
        <TravoltaWrapper>
          <Travolta src='/travolta.webp' alt='404' />
        </TravoltaWrapper>
      </Wrapper>
    </>
  )
}

export default NotFoundPage

export const query = graphql`
  query Query404($language: String!) {
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
