import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  return (
    <section className='text-gray-500 bg-gray-900 body-font relative'>
      <div className='container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap'>
        <div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
          <iframe
            width='100%'
            height='100%'
            title='map'
            className='absolute inset-0'
            frameBorder='0'
            marginHeight='0'
            marginWidth='0'
            scrolling='no'
            src='https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Frankfurt+Newtelco&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.16)' }}
          ></iframe>
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
          <input type='hidden' name='form-name' value='Contact Form' />
          <p className='leading-relaxed mb-5 text-gray-600 font-body font-hairline'>
            {t('contact.header')}
          </p>
          <input
            className='bg-gray-800 rounded border border-gray-700 transition duration-200 ease-in-out focus:outline-none focus:shadow-outline text-base text-white px-4 py-2 mb-4'
            name='name'
            placeholder={t('contact.name')}
            type='text'
          />
          <input
            className='bg-gray-800 rounded border border-gray-700 transition duration-200 ease-in-out focus:outline-none focus:shadow-outline  text-base text-white px-4 py-2 mb-4'
            name='email'
            placeholder={t('contact.email')}
            type='email'
          />
          <textarea
            className='transition duration-200 ease-in-out focus:outline-none focus:shadow-outline bg-gray-800 rounded border border-gray-700 h-32  text-base text-white px-4 py-2 mb-4 resize-none'
            name='message'
            placeholder={t('contact.message')}
          ></textarea>
          <button
            type='submit'
            className='text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'
          >
            {t('contact.send')}
          </button>
          <p className='text-xs text-gray-500 mt-3'>
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
