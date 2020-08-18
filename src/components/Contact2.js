import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  const [contact, setContactValue] = useState({
    name: '',
    email: '',
    message: '',
  })
  return (
    <section className='text-gray-500 bg-gray-900 body-font relative'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
            Contact Us
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            {t('contact.header')}
          </p>
        </div>
        <div className='lg:w-3/4 md:w-2/3 mx-auto'>
          <form
            className='flex flex-wrap -m-2'
            name='Contact Form'
            method='POST'
            autoComplete='off'
            data-netlify='true'
          >
            <input
              type='hidden'
              name='form-name'
              value='Contact Form'
              aria-label='Form Name'
            />
            <div className='p-2 w-1/2'>
              <input
                className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2'
                placeholder='Name'
                type='text'
                value={contact.name}
                onChange={event =>
                  setContactValue({ ...contact, name: event.target.value })
                }
              />
            </div>
            <div className='p-2 w-1/2'>
              <input
                className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2'
                placeholder='Email'
                type='email'
                value={contact.email}
                onChange={event =>
                  setContactValue({ ...contact, email: event.target.value })
                }
              />
            </div>
            <div className='p-2 w-full'>
              <textarea
                className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none h-48 focus:border-green-500 text-base px-4 py-2 resize-none block'
                value={contact.message}
                onChange={event =>
                  setContactValue({ ...contact, message: event.target.value })
                }
                placeholder='Message'
              ></textarea>
            </div>
            <div className='p-2 w-full'>
              <p className='text-xs text-gray-700 flex justify-center'>
                {t('contact.tos1')}
                <a
                  href='/privacy'
                  alt='Terms of Service'
                  className='text-gray-800 hover:text-gray-600 hover:no-underline transition transition-colors duration-300 ease-in-out'
                >
                  &nbsp; {t('contact.tos2')}
                </a>
                &nbsp; {t('contact.tos3')}
              </p>
              <button
                type='submit'
                className='flex mx-auto text-white bg-green-500 border-0 py-2 px-16 focus:outline-none hover:bg-green-600 rounded text-lg transition transition-colors duration-300 ease-in-out'
              >
                {t('contact.send')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
