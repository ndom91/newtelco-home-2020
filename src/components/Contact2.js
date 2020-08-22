import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...state }),
    })
      .then(() => null)
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <section className='text-gray-500 bg-gray-900 body-font relative'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
            {t('contact.title')}
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
            onSubmit={handleSubmit}
          >
            <input
              type='hidden'
              name='form-name'
              value='contact'
              aria-label='Form Name'
            />
            <div className='p-2 w-1/2'>
              <input
                className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2 transition transition-borders duration-300 ease-in-out'
                placeholder={t('contact.name')}
                type='text'
                onChange={handleChange}
              />
            </div>
            <div className='p-2 w-1/2'>
              <input
                className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2 transition transition-borders duration-300 ease-in-out'
                placeholder={t('contact.email')}
                type='email'
                onChange={handleChange}
              />
            </div>
            <div className='p-2 w-full'>
              <textarea
                className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none h-48 focus:border-green-500 text-base px-4 py-2 resize-none block transition transition-borders duration-300 ease-in-out'
                onChange={handleChange}
                placeholder={t('contact.message')}
              ></textarea>
            </div>
            <div className='p-2 w-full'>
              <p className='text-xs text-gray-700 flex justify-center'>
                {t('contact.tos1')}
                <a
                  href='/privacy'
                  alt='Terms of Service'
                  className='text-green-700 hover:text-green-500 hover:no-underline transition transition-colors duration-300 ease-in-out'
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
