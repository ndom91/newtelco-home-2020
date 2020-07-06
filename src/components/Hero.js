import React from 'react'
import { Link, useTranslation } from 'gatsby-plugin-react-i18next'
import Map from '../images/illustrations/map.svg'
import BGDot from '../images/illustrations/scribbles/background-dot.svg'
import Blob10 from '../images/illustrations/blobs/blob10.svg'
import Blob11 from '../images/illustrations/blobs/blob11.svg'
import Blob12 from '../images/illustrations/blobs/blob12.svg'
import Blob13 from '../images/illustrations/blobs/blob13.svg'
import { useViewportScroll, useTransform, motion } from 'framer-motion'

const Hero = ({ data, img }) => {
  const { ctaEmail, ctaActionText } = data
  const { t } = useTranslation()
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [500, -500], [-150, 10])
  const y2 = useTransform(scrollY, [-200, 200], [50, -50])
  const x1 = useTransform(scrollY, [500, -500], [-150, 10])

  return (
    <section className='relative text-gray-500 bg-gray-900 body-font mb-8'>
      <Blob11
        alt='Arrow Nav Blob'
        width='100px'
        className='absolute top-0 left-0 mt-8'
      />
      <motion.div
        className='absolute top-0 right-0 -mr-12 z-10'
        style={{
          right: x1,
        }}
      >
        <Blob12 alt='Squiggle Map Blob' width='200px' />
      </motion.div>
      <div className='relative container mx-auto flex px-5 py-0 sm:py-24 md:flex-row flex-col-reverse items-end'>
        <div className='relative lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0 items-left'>
          <h1 className='z-10 font-display sm:text-4xl text-3xl font-medium text-white text-left'>
            {t('welcome')}
          </h1>
          <div className='font-body text-3xl font-hairline md:whitespace-no-wrap'>
            {t('subtitle')}
          </div>
          <div className='flex flex-col bg-transparent text-left items-start leading-normal -mb-20 z-10'>
            <Link
              target='_blank'
              alt={`Email to ${ctaEmail}`}
              href={`mailto:${ctaEmail}`}
              className='z-10 hover:no-underline important'
            >
              <button className='z-10 shadow shadow-base transition transition-colors duration-500 ease-in-out font-body flex mx-auto mt-6 text-white text-lg bg-green-500 border-0 py-2 px-4 focus:shadow-outline focus:outline-none hover:bg-green-600 rounded'>
                {ctaActionText}
              </button>
            </Link>
          </div>
          <motion.div
            className='absolute bottom-0 right-0 mb-12 mr-2'
            style={{
              bottom: y2,
            }}
          >
            <Blob10
              alt='Lines from Text Blob'
              width='200px'
              className='absolute bottom-0 right-0 mb-2 mr-12'
            />
          </motion.div>
          <motion.div
            style={{
              top: y1,
              position: 'absolute',
            }}
          >
            <BGDot
              height='500'
              width='500'
              alt='bg-dot-1'
              className='bottom-0 left-0 -mb-18 -ml-20 z-0 pointer-events-none opacity-0 md:opacity-25'
            />
          </motion.div>
        </div>
        <div className='relative lg:max-w-xl lg:w-full md:w-1/2 w-screen -mt-20 overflow-visible'>
          <Map
            className='object-cover object-center rounded  w-full max-w-none'
            style={{
              width: '130%',
              maxHeight: '610px',
            }}
            alt='hero'
          />
          <Blob13
            alt='Lines under Map Blob'
            width='150px'
            className='absolute bottom-0 left-0 ml-24 -mb-12'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
