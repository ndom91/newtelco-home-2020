import React from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import Blob10 from '../images/illustrations/blobs/blob10.svg'
import Blob11 from '../images/illustrations/blobs/blob11.svg'
import Blob12 from '../images/illustrations/blobs/blob12.svg'
import Blob13 from '../images/illustrations/blobs/blob13.svg'
import { useViewportScroll, useTransform, motion } from 'framer-motion'
import Typed from 'react-typed'
import Loadable from 'react-loadable'
const Globe = Loadable({
  loader: () => import('./Globe'),
  loading() {
    return (
      <div
        style={{ height: '600px', width: '600px' }}
        className='text-white font-display font-hairline'
      ></div>
    )
  },
})

import 'pattern.css/dist/pattern.min.css'

const Hero = React.memo(function Hero({ data }) {
  const { ctaEmail, ctaActionText } = data
  const { t } = useTranslation()
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [700, -100], [-170, -10])
  const y2 = useTransform(scrollY, [-200, 200], [20, -20])
  const x1 = useTransform(scrollY, [500, -500], [-150, 10])

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        viewBox='0 0 1440 560'
        className='absolute top-0 left-0 w-screen z-50 fillPath'
      >
        <g mask='url("#SvgjsMask1019")' fill='none'>
          <path
            d='M1004.23-106.25C827.34-97.95 709.75 197.57 368.58 206.32 27.41 215.07-101.59 389.26-267.07 391.12'
            stroke='rgba(103, 178, 70, 0.03)'
            strokeWidth='2'
          ></path>
          <path
            d='M944.95-81.2C791.04-66.61 710.59 247.03 427.45 257.34 144.3 267.65 42.93 379.69-90.06 380.54'
            stroke='rgba(103, 178, 70, 0.03)'
            strokeWidth='2'
          ></path>
          <path
            d='M842.46-64.87C747.25-63.13 766.13 55.31 482.45 59.59 198.77 63.87-49.07 281.02-237.57 283.59'
            stroke='rgba(103, 178, 70, 0.03)'
            strokeWidth='2'
          ></path>
          {/* <path
            d='M1208.17-80.98C990.53-49.66 871.47 461.13 517.12 463.11 162.77 465.09 8.09 236.49-173.93 233.51'
            stroke='rgba(103, 178, 70, 0.05)'
            strokeWidth='2'
          ></path> */}
          {/* <path
            d='M1010.29-18.63C863.88 13.79 811.99 392.8 580.04 399.3 348.08 405.8 364.91 329.3 149.78 329.3-65.34 329.3-171.49 399.07-280.47 399.3'
            stroke='rgba(103, 178, 70, 0.05)'
            strokeWidth='2'
          ></path> */}
        </g>
        <defs>
          <mask id='SvgjsMask1019'>
            <rect width='1440' height='560' fill='#ffffff'></rect>
          </mask>
        </defs>
      </svg>
      <section className='relative w-4/5 mb-8 text-gray-500 bg-gray-900 body-font max-w-screen-lg'>
        {/* <Blob11
          alt='Arrow Nav Blob'
          width='100px'
          className='absolute top-0 left-0 mt-8'
        /> */}
        <motion.div
          className='absolute top-0 right-0 z-10 -mr-12'
          style={{
            right: x1,
          }}
        >
          <Blob12 alt='Squiggle Map Blob' width='200px' />
        </motion.div>
        <div className='relative flex flex-col-reverse items-end py-0 mx-auto md:px-5 sm:py-24 md:flex-row'>
          <div className='relative flex flex-col w-full -mt-8 lg:flex-grow md:w-1/2 md:text-left md:mb-0 items-left'>
            <h1 className='z-10 text-3xl mb-16 font-semibold text-left text-white font-sans sm:text-4xl md:whitespace-no-wrap'>
              {t('welcome')}
            </h1>
            <Typed
              strings={[t('subtitle.1'), t('subtitle.2'), t('subtitle.3')]}
              typeSpeed={50}
              backSpeed={60}
              className='absolute bottom-0 w-full overflow-x-visible text-2xl font-hairline font-mono md:text-3xl md:whitespace-no-wrap'
            />
            <div className='z-10 flex flex-col items-start -mb-20 leading-normal text-left bg-transparent'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                alt={`Email to ${ctaEmail}`}
                href={`mailto:${ctaEmail}`}
                className='z-10 hover:no-underline important'
              >
                <button className='z-10 flex px-4 py-2 mx-auto mt-6 text-lg text-white bg-green-500 border-0 rounded shadow shadow-base transition transition-colors duration-500 ease-in-out font-body focus:shadow-outline focus:outline-none hover:bg-green-600'>
                  {ctaActionText}
                </button>
              </a>
            </div>
            <Blob10
              alt='Lines from Text Blob'
              width='200px'
              className='absolute bottom-0 left-0 z-10 mb-2 ml-72'
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
                className='bottom-0 left-0 z-0 opacity-0 pointer-events-none -ml-20 -mb-16 md:opacity-10 pattern-dots-xl'
              />
            </motion.div>
          </div>
          <div
            className='relative w-screen -mt-20 overflow-visible lg:max-w-xl lg:w-full md:w-1/2 outline-none'
            style={{ height: '600px' }}
          >
            <motion.div
              className='absolute bottom-0 left-0'
              style={{
                right: y2,
                position: 'absolute',
              }}
            >
              <Blob13
                alt='Lines under Map Blob'
                width='150px'
                className='bottom-0 left-0 ml-24 -mb-24 transform rotate-45'
              />
            </motion.div>
            <GlobeWrapper>
              <Globe />
            </GlobeWrapper>
          </div>
        </div>
      </section>
    </>
  )
})

const GlobeWrapper = styled.div`
  z-index: 999;
  & canvas {
    outline: none;
  }
`

export default Hero
