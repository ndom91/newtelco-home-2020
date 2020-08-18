import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import Loadable from 'react-loadable'
const GoogleMaps = Loadable({
  loader: () => import('./GoogleMaps'),
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

const Contact = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    rootMargin: '200px 0px 0px 0px',
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      className='text-gray-500 bg-gray-900 body-font relative mt-20 sm:mt-0 z-20'
    >
      <div className='container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap'>
        <div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
          <div className='text-white'>
            {inView && (
              <motion.div syle={{ opacity: 1, inView: 0 }}>
                <GoogleMaps />
              </motion.div>
            )}
          </div>
          <div className='bg-gray-900 relative flex flex-wrap py-6 px-4'>
            <div className='lg:w-1/2 pl-4'>
              <h2 className='title-font font-medium text-green-500 tracking-widest text-sm'>
                {t('contact.address')}
              </h2>
              <p className='leading-relaxed text-base'>
                Moenchhofstr. 24 <br />
                60326 Frankfurt am Main <br />
                Germany
              </p>
            </div>
            <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
              <h2 className='title-font font-medium text-green-500 tracking-widest text-sm'>
                {t('contact.email')}
              </h2>
              <a
                href='mailto:contact@newtelco.de'
                alt='Email Contact Address'
                className='text-gray-500 lading-relaxed text-base hover:no-underline hover:text-gray-600'
              >
                contact@newtelco.de
              </a>
              <h2 className='title-font font-medium text-green-500 tracking-widest text-sm mt-4'>
                {t('contact.phone')}
              </h2>
              <p className='leading-relaxed text-base'>+49 69 75 00 27 00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
