import React from 'react'
import styled from 'styled-components'
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next'
import Blob10 from '../../images/illustrations/blobs/blob10.svg'
import Blob11 from '../../images/illustrations/blobs/blob11.svg'
import Blob12 from '../../images/illustrations/blobs/blob12.svg'
import Blob13 from '../../images/illustrations/blobs/blob13.svg'
import Blur from '../../images/blur.png'
import { useViewportScroll, useTransform, motion } from 'framer-motion'
import { createBreakpoint } from 'react-use'
import Typed from 'react-typed'
import Loadable from 'react-loadable'
const Globe = Loadable({
  loader: () => import('./Globe'),
  loading() {
    return (
      <div
        style={{ height: '600px', width: '600px' }}
        className='text-white font-display font-thin'
      ></div>
    )
  },
})

import 'pattern.css/dist/pattern.min.css'

const useBreakpoint = createBreakpoint({ phone: 640 })

const Hero = React.memo(function Hero({ data }) {
  const { ctaEmail, ctaActionText } = data
  const { t } = useI18next()
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [-500, 500], [-170, -10])
  const y2 = useTransform(scrollY, [-500, 500], [20, -20])
  const x1 = useTransform(scrollY, [-500, 500], [10, 20])
  const breakpoint = useBreakpoint()
  const isMobile = breakpoint === 'phone'

  return (
    <>
      <section className='body-font relative mb-8 w-full max-w-screen-lg text-gray-500 bg-gray-900'>
        <Blob11
          alt='Arrow Nav Blob'
          width='100px'
          className='absolute z-50 left-0 top-0 hidden ml-24 mt-8 sm:block'
        />
        <motion.div
          className='absolute z-10 z-10 left-24 top-12 -mr-12 sm:left-auto sm:right-0 sm:top-0'
          style={{
            x1,
          }}
        >
          <Blob12 alt='Squiggle Map Blob' width='200px' />
        </motion.div>
        <div className='relative flex flex-col-reverse items-end mx-auto py-0 sm:py-24 md:flex-row md:px-5'>
          <div className='items-left relative flex flex-col -mt-8 px-12 w-full sm:px-0 md:mb-0 md:text-left lg:flex-grow'>
            <h1 className='md:whitespace-no-wrap z-50 mb-10 text-left text-white font-sans text-4xl font-semibold sm:text-4xl'>
              {t('welcome')}
            </h1>
            <Typed
              strings={[t('subtitle.1'), t('subtitle.2'), t('subtitle.3')]}
              typeSpeed={50}
              backSpeed={60}
              className='absolute z-50 bottom-0 w-full w-max font-mono text-2xl font-thin overflow-x-visible md:text-3xl'
            />
            <div className='z-10 flex flex-col items-start -mb-16 text-left leading-normal bg-transparent'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                alt={`Email to ${ctaEmail}`}
                href={`mailto:${ctaEmail}`}
                className='important z-10 hover:no-underline'
              >
                <button className='shadow-base z-10 flex mt-6 mx-auto px-4 py-2 text-white font-body text-lg bg-green-500 hover:bg-green-600 border-0 rounded focus:outline-none shadow focus:shadow-outline transition transition-colors duration-500 ease-in-out'>
                  {ctaActionText}
                </button>
              </a>
            </div>
            <Blob10
              alt='Lines from Text Blob'
              width='200px'
              className='absolute z-10 z-50 bottom-0 left-0 mb-2 ml-72'
            />
            <motion.div
              style={{
                top: y1,
                position: 'absolute',
              }}
            >
              <div
                alt='bg-dot-1'
                style={{ height: '260px', width: '260px' }}
                className='pattern-dots-xl z-50 bottom-0 left-0 -mb-16 -ml-20 opacity-20 pointer-events-none'
              />
            </motion.div>
          </div>
          <div
            className='relative -mt-20 w-screen outline-none overflow-visible md:w-1/2 lg:w-full lg:max-w-xl'
            style={{ height: '600px' }}
          >
            <motion.div
              className='absolute bottom-0 left-0'
              style={{
                right: y2,
                position: 'absolute',
              }}
            >
              {!breakpoint === 'tablet' && (
                <Blob13
                  alt='Lines under Map Blob'
                  width='150px'
                  className='bottom-0 left-0 -mb-24 ml-24 transform rotate-45'
                />
              )}
            </motion.div>
            <GlobeWrapper
              style={
                isMobile
                  ? {
                      position: 'absolute',
                      left: '80px',
                      top: '50px',
                    }
                  : {}
              }
            >
              <Globe />
            </GlobeWrapper>
          </div>
        </div>
      </section>
      <BlurImg src={Blur} loading='eager' />
    </>
  )
})

const GlobeWrapper = styled.div`
  z-index: 40;
  & canvas {
    outline: none;
  }
`

const BlurImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default Hero
