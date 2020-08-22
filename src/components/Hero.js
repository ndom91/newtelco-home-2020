import React from 'react'
import styled from '@emotion/styled'
import { Link, useTranslation } from 'gatsby-plugin-react-i18next'
// import Map from '../images/illustrations/map.svg'
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
        styl={{ height: '515px', width: '70px' }}
        className='text-white font-display font-hairline'
      >
        Loading...
      </div>
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
    <section className='relative w-4/5 mb-8 text-gray-500 bg-gray-900 body-font max-w-screen-lg'>
      <Blob11
        alt='Arrow Nav Blob'
        width='100px'
        className='absolute top-0 left-0 mt-8'
      />
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
          <h1 className='z-10 text-3xl font-semibold text-left text-white font-sans sm:text-4xl md:whitespace-no-wrap'>
            {t('welcome')}
          </h1>
          <Typed
            strings={[t('subtitle.1'), t('subtitle.2'), t('subtitle.3')]}
            typeSpeed={50}
            backSpeed={60}
            className='w-full overflow-x-visible text-2xl font-hairline font-mono md:text-3xl md:whitespace-no-wrap'
          />
          <div className='z-10 flex flex-col items-start -mb-20 leading-normal text-left bg-transparent'>
            <Link
              target='_blank'
              alt={`Email to ${ctaEmail}`}
              href={`mailto:${ctaEmail}`}
              to={`mailto:${ctaEmail}`}
              className='z-10 hover:no-underline important'
            >
              <button className='z-10 flex px-4 py-2 mx-auto mt-6 text-lg text-white bg-green-500 border-0 rounded shadow shadow-base transition transition-colors duration-500 ease-in-out font-body focus:shadow-outline focus:outline-none hover:bg-green-600'>
                {ctaActionText}
              </button>
            </Link>
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
        <div className='relative w-screen -mt-20 overflow-visible lg:max-w-xl lg:w-full md:w-1/2 outline-none'>
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
              className='bottom-0 left-0 ml-24 -mb-12'
            />
          </motion.div>
          <GlobeWrapper>
            <Globe />
          </GlobeWrapper>
        </div>
      </div>
    </section>
  )
})

const GlobeWrapper = styled.div`
  & canvas {
    outline: none;
  }
`

export default Hero
