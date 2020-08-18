import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import LocationTilt from './LocationTilt'

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

const Location = ({ locations }) => {
  const { t } = useTranslation()

  return (
    <section className='text-gray-500 bg-gray-900 body-font relative mt-20 sm:mt-0 z-20'>
      <div className='container px-5 pt-24 mx-auto'>
        <div className='flex justify-between flex-row-reverse w-full mb-20'>
          <div className='lg:w-2/5 w-2/3 mb-6 lg:mb-0 mx-auto text-right'>
            <h1 className='sm:text-4xl text-2xl mb-2 text-white font-body font-hairline text-right'>
              {t('locations')}
            </h1>
            <div className='h-1 w-20 bg-green-500 rounded'></div>
          </div>
          <p className='flex-grow max-w-2xl w-full leading-relaxed text-base float-right'></p>
        </div>
      </div>
      <div className='container px-5 py-14 mx-auto flex sm:flex-no-wrap flex-wrap'>
        <div className='lg:w-full md:w-3/5 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex justify-center relative'>
          {/* <motion.div syle={{ opacity: 1, inView: 0 }}>
                <GoogleMaps long={0} lat={0} />
              </motion.div> */}
          <div className='flex w-screen px-5'>
            {locations.nodes.map(loc => (
              <LocationTilt
                key={loc.city}
                city={loc.city}
                image={loc.image}
                address={loc.address}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
