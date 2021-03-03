import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import LocationTilt from './LocationTilt'

const Location = ({ locations }) => {
  const { t } = useTranslation()

  return (
    <section className='body-font relative mt-20 w-full text-gray-500 overflow-hidden sm:mt-0'>
      <div className='container mx-auto pt-24 px-5'>
        <div className='flex flex-row-reverse justify-between mb-20 w-full'>
          <div className='mb-6 mx-auto w-2/3 text-right lg:mb-0 lg:w-2/5'>
            <h1 className='mb-2 text-right text-white font-body text-2xl font-thin sm:text-4xl'>
              {t('locations')}
            </h1>
            <div className='float-right w-20 h-1 bg-green-500 rounded'></div>
          </div>
          <p className='flex-grow w-full max-w-2xl text-base leading-relaxed'></p>
        </div>
      </div>
      <div className='sm:flex-no-wrap container flex flex-wrap mx-auto px-5 py-14'>
        <div className='relative flex justify-center p-10 rounded-lg overflow-hidden sm:mr-10 md:w-3/5 lg:w-full'>
          <div className='flex px-5 w-full'>
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
