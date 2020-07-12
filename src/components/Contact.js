import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import Loadable from 'react-loadable'
const GoogleMaps = Loadable({
  loader: () => import('../components/GoogleMaps'),
  loading() {
    return (
      <div
        style={{ height: '515px', width: '700px' }}
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
              <motion.div style={{ opacity: inView ? 1 : 0 }}>
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
              <a className='text-green-500 leading-relaxed text-base'>
                contact@newtelco.de
              </a>
              <h2 className='title-font font-medium text-green-500 tracking-widest text-sm mt-4'>
                {t('contact.phone')}
              </h2>
              <p className='leading-relaxed text-base'>+49 69 75 00 27 00</p>
            </div>
          </div>
        </div>
        <form
          className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'
          name='Contact Form'
          method='POST'
          data-netlify='true'
        >
          <input
            type='hidden'
            name='form-name'
            value='Contact Form'
            aria-label='Form Name'
          />
          <p className='leading-relaxed mb-5 text-gray-600 font-body font-thin'>
            {t('contact.header')}
          </p>
          <input
            className='bg-gray-800 rounded border border-gray-700 transition duration-200 ease-in-out focus:outline-none focus:shadow-outline text-base text-white px-4 py-2 mb-4 bg-opacity-25 placeholder-font-hairline'
            name='name'
            aria-label='Name'
            placeholder={t('contact.name')}
            type='text'
          />
          <input
            className='bg-gray-800 rounded border border-gray-700 transition duration-200 ease-in-out focus:outline-none focus:shadow-outline  text-base text-white px-4 py-2 mb-4 bg-opacity-25'
            name='email'
            aria-label='Email'
            placeholder={t('contact.email')}
            type='email'
          />
          <textarea
            className='transition duration-200 ease-in-out focus:outline-none focus:shadow-outline bg-gray-800 rounded border border-gray-700 h-32  text-base text-white px-4 py-2 mb-4 resize-none bg-opacity-25'
            aria-label='Message'
            name='message'
            placeholder={t('contact.message')}
          ></textarea>
          <button
            type='submit'
            className='text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'
          >
            {t('contact.send')}
          </button>
          <p className='text-xs text-gray-700 mt-3 flex justify-center'>
            By sending us your data, you agree to our{' '}
            <a
              href='/privacy'
              alt='Terms of Service'
              className='text-gray-800 hover:text-gray-600 hover:no-underline transition transition-colors duration-300 ease-in-out'
            >
              Terms of Service
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
