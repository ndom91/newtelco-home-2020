import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import WorldMap from './WorldMapBg'

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

  return (
    <section className='text-gray-500 bg-gray-900 body-font relative'>
      <WorldMap />
      <div className='container px-5 py-24 mx-auto z-10'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
            {t('contact.title')}
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            {t('contact.header')}
          </p>
        </div>
        <div className='lg:w-3/4 md:w-2/3 mx-auto z-10'>
          <form
            className='flex flex-wrap -m-2 z-10'
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
            <div className='p-2 w-1/2 z-10 relative'>
              <ContactInput
                className={`w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2 transition transition-borders duration-300 ease-in-out z-10 bg-opacity-75 ${state.name !==
                  '' && 'content'}`}
                type='text'
                name='name'
                id='name'
                onChange={handleChange}
              />
              <label className='absolute text-base font-mono' htmlFor='name'>
                {t('contact.name')}
              </label>
            </div>
            <div className='p-2 w-1/2 z-10 relative'>
              <ContactInput
                className={`w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2 transition transition-borders duration-300 ease-in-out z-10 bg-opacity-75 ${state.email !==
                  '' && 'content'}`}
                type='email'
                name='email'
                onChange={handleChange}
              />
              <label className='absolute text-base font-mono' htmlFor='email'>
                {t('contact.email')}
              </label>
            </div>
            <div className='p-2 w-full z-10 relative'>
              <ContactTextarea
                className='w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none h-48 focus:border-green-500 text-base px-4 py-2 resize-none block transition transition-borders duration-300 ease-in-out z-10 bg-opacity-75'
                onChange={handleChange}
                placeholder={t('contact.message')}
                name='message'
                id='msg'
              ></ContactTextarea>
            </div>
            <div className='p-2 w-full z-10'>
              <p className='text-xs text-gray-700 flex justify-center z-10'>
                {t('contact.tos1')}
                <a
                  href='/privacy'
                  alt='Terms of Service'
                  className='text-green-700 hover:text-green-500 hover:no-underline transition transition-colors duration-300 ease-in-out z-10'
                >
                  &nbsp; {t('contact.tos2')}
                </a>
                &nbsp; {t('contact.tos3')}
              </p>
              <button
                type='submit'
                className='flex mx-auto text-white bg-green-500 border-0 py-2 px-16 focus:outline-none hover:bg-green-600 rounded text-lg transition transition-colors duration-300 ease-in-out z-10'
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

const ContactInput = styled.input`
  & + label {
    position: absolute;
    top: calc(50% - 12px);
    bottom: 0;
    left: 20px;
    width: 100%;
    transition: 0.3s;
    pointer-events: none;
  }
  &.content + label,
  &:focus + label {
    top: 100%;
    margin-top: -78px;
    transition-timing-function: ease-in-out;
  }
`

const ContactTextarea = styled.textarea`
  &::placeholder {
    font-family: monospace;
    font-size: 14px;
    color: rgb(137, 137, 137);
    transition: 0.2s;
  }
`
