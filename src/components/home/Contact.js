import React, { useState } from 'react'
import styled from 'styled-components'
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
    <section className='body-font relative text-gray-500 bg-gray-900'>
      <WorldMap />
      <div className='container z-10 mx-auto px-5 py-24'>
        <div className='flex flex-col mb-12 w-full text-center'>
          <h1 className='title-font mb-4 text-white text-2xl font-medium sm:text-3xl'>
            {t('contact.title')}
          </h1>
          <p className='mx-auto text-base leading-relaxed lg:w-2/3'>
            {t('contact.header')}
          </p>
        </div>
        <div className='z-10 mx-auto md:w-2/3 lg:w-3/4'>
          <form
            className='z-10 flex flex-wrap -m-2'
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
            <div className='relative z-10 p-2 w-1/2'>
              <ContactInput
                className={`w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2 transition transition-borders duration-300 ease-in-out z-10 bg-opacity-75 ${
                  state.name !== '' && 'content'
                }`}
                type='text'
                name='name'
                id='name'
                onChange={handleChange}
              />
              <label className='absolute font-mono text-base' htmlFor='name'>
                {t('contact.name')}
              </label>
            </div>
            <div className='relative z-10 p-2 w-1/2'>
              <ContactInput
                className={`w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2 transition transition-borders duration-300 ease-in-out z-10 bg-opacity-75 ${
                  state.email !== '' && 'content'
                }`}
                type='email'
                name='email'
                onChange={handleChange}
              />
              <label className='absolute font-mono text-base' htmlFor='email'>
                {t('contact.email')}
              </label>
            </div>
            <div className='relative z-10 p-2 w-full'>
              <ContactTextarea
                className='transition-borders z-10 block px-4 py-2 w-full h-48 text-white text-base bg-gray-800 bg-opacity-75 border border-gray-700 focus:border-green-500 rounded focus:outline-none resize-none transition duration-300 ease-in-out'
                onChange={handleChange}
                placeholder={t('contact.message')}
                name='message'
                id='msg'
              ></ContactTextarea>
            </div>
            <div className='z-10 p-2 w-full'>
              <p className='z-10 flex justify-center text-gray-700 text-xs'>
                {t('contact.tos1')}
                <a
                  href='/privacy'
                  alt='Terms of Service'
                  className='z-10 hover:text-green-500 text-green-700 hover:no-underline transition transition-colors duration-300 ease-in-out'
                >
                  &nbsp; {t('contact.tos2')}
                </a>
                &nbsp; {t('contact.tos3')}
              </p>
              <button
                type='submit'
                className='z-10 flex mx-auto px-16 py-2 text-white text-lg bg-green-500 hover:bg-green-600 border-0 rounded focus:outline-none transition transition-colors duration-300 ease-in-out'
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
