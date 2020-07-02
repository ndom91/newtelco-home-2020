import React from 'react'
import { Link, useTranslation } from 'gatsby-plugin-react-i18next'
import Map from '../images/illustrations/map.svg'

const Hero = ({ data, img }) => {
  const { t } = useTranslation()
  const { ctaEmail, ctaActionText } = data

  return (
    <section className="text-gray-500 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-0 sm:py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {t('welcome')}
            <div className="font-display font-hairline">{t('subtitle')}</div>
          </h1>
          <div className="flex justify-center">
            <Link
              target="_blank"
              alt={`Email to ${ctaEmail}`}
              href={`mailto:${ctaEmail}`}
            >
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg important">
                {ctaActionText}
              </button>
            </Link>
            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={Map}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
