import React, { useState, useLayoutEffect, useRef } from 'react'
import { Link, useTranslation } from 'gatsby-plugin-react-i18next'
import Map from '../images/illustrations/map.svg'
import BGDot from '../images/illustrations/scribbles/background-dot.svg'
// import Blob from '../images/illustrations/scribbles/blob1.svg'
import {
  useViewportScroll,
  useMotionValue,
  useTransform,
  useSpring,
  motion,
} from 'framer-motion'
// import { useInView } from 'react-intersection-observer'

const Hero = ({ data, img }) => {
  const { ctaEmail, ctaActionText } = data
  const { t } = useTranslation()
  const { scrollYProgress } = useViewportScroll()
  console.log(scrollYProgress)
  // const y1 = useTransform(scrollY, [0, 10], [0, 200])
  // useSpeed(scrollY, [0, 200], 15)

  //const [ref, inView, entry] = useInView({
  /* Optional options */
  //threshold: 0.5,
  //triggerOnce: false,
  //})
  function template({ x }) {
    return `translateY(${x}px)`
  }

  return (
    <section className="text-gray-500 bg-gray-900 body-font">
      <div className="relative container mx-auto flex px-5 py-0 sm:py-24 md:flex-row flex-col items-center">
        <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="z-10 font-display sm:text-4xl text-3xl mb-4 font-medium text-white">
            {t('welcome')}
            <div className="font-body font-hairline">{t('subtitle')}</div>
          </h1>
          <div className="flex justify-center">
            <div className="bg-transparent rounded p-4 flex flex-col justify-between leading-normal">
              <div className="static mb-8 z-10">
                <Link
                  target="_blank"
                  alt={`Email to ${ctaEmail}`}
                  href={`mailto:${ctaEmail}`}
                  className="z-10 hover:no-underline important"
                >
                  <button className="z-10 shadow shadow-base transition transition-colors duration-500 ease-in-out font-body flex mx-auto mt-6 text-white text-lg bg-green-500 border-0 py-2 px-4 focus:shadow-outline focus:outline-none hover:bg-green-600 rounded">
                    {ctaActionText}
                  </button>
                </Link>
              </div>
              <motion.div
                style={{
                  translateY: scrollYProgress,
                }}
              >
                <img
                  src={BGDot}
                  height="400"
                  width="400"
                  alt="bg-dot-1"
                  className="absolute bottom-0 left-0 -mb-18 -ml-12 z-0 pointer-events-none opacity-1"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 overflow-visible">
          <img
            className="object-cover object-center rounded  w-full max-w-none"
            style={{
              width: '130%',
            }}
            alt="hero"
            src={Map}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
