import React, { useState } from 'react'
import styled from '@emotion/styled'
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
  const [contact, setContactValue] = useState({
    name: '',
    email: '',
    message: '',
  })
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
        <form
          className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full mx-8 md:mx-0 md:py-8 mt-8 md:mt-0'
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
          <p className='leading-relaxed mb-5 text-gray-600 font-body font-thin'>
            {t('contact.header')}
          </p>
          <div>
            <ContactInput
              className={contact.name.length > 0 ? 'filled' : ''}
              value={contact.name}
              autoComplete='off'
              onChange={event =>
                setContactValue({ ...contact, name: event.target.value })
              }
            />
            <ContactLabel className={contact.name.length > 0 ? 'filled' : ''}>
              <ContactLabelContent>{t('contact.name')}</ContactLabelContent>
            </ContactLabel>
          </div>
          <div>
            <ContactInput
              className={contact.email.length > 0 ? 'filled' : ''}
              value={contact.email}
              onChange={event =>
                setContactValue({ ...contact, email: event.target.value })
              }
            />
            <ContactLabel className={contact.email.length > 0 ? 'filled' : ''}>
              <ContactLabelContent>{t('contact.email')}</ContactLabelContent>
            </ContactLabel>
          </div>
          <div>
            <ContactTextarea
              className={contact.message.length > 0 ? 'filled' : ''}
              value={contact.message}
              onChange={event =>
                setContactValue({ ...contact, message: event.target.value })
              }
            />
            <ContactLabel
              className={contact.message.length > 0 ? 'filled' : ''}
            >
              <ContactLabelContent>{t('contact.message')}</ContactLabelContent>
            </ContactLabel>
          </div>
          {/* <input */}
          {/* 	className='bg-gray-800 rounded border border-gray-700 transition duration-200 ease-in-out focus:outline-none focus:shadow-outline  text-base text-white px-4 py-2 mb-4 bg-opacity-25' */}
          {/* 	name='email' */}
          {/* 	aria-label='Email' */}
          {/* 	placeholder={t('contact.email')} */}
          {/* 	type='email' */}
          {/* /> */}
          {/* <textarea */}
          {/* 	className='transition duration-200 ease-in-out focus:outline-none focus:shadow-outline bg-gray-800 rounded border border-gray-700 h-32  text-base text-white px-4 py-2 mb-4 resize-none bg-opacity-25' */}
          {/* 	aria-label='Message' */}
          {/* 	name='message' */}
          {/* 	placeholder={t('contact.message')} */}
          {/* ></textarea> */}
          <button
            type='submit'
            className='text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'
          >
            {t('contact.send')}
          </button>
          <p className='text-xs text-gray-700 mt-3 flex justify-center'>
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
        </form>
      </div>
    </section>
  )
}

const ContactLabel = styled.label`
  display: inline-block;
  float: right;
  padding: 0 1em;
  width: 40%;
  font-weight: 100;
  font-size: 70.25%;
  position: relative;
  width: 100%;
  color: #bcbcbc;
  text-align: left;

  &:before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    height: 3.6em;
    background: #292929;
    transform: perspective(1000px) rotate3d(1, 0, 0, 90deg);
    transform-origin: 50% 100%;
    transition: transform 0.3s;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.25em;
    background: #292929;
    transform-origin: 50% 0%;
    transition: transform 0.3s;
  }
`

const ContactLabelContent = styled.span`
  color: #fff;
  position: relative;
  display: block;
  padding: 1.6em 0;
  width: 100%;
  padding: 0.75em 0;
`

const ContactInput = styled.input`
  position: relative;
  display: block;
  float: right;
  padding: 0.8em;
  width: 60%;
  border: none;
  border-radius: 0;
  color: #fff;
  font-weight: 200;
  font-size: 1.3rem;
  z-index: 10;
  width: 100%;
  background: transparent;
  opacity: 0;
  transition: opacity 0.3s;

  &:focus,
  &.filled {
    opacity: 1;
    transition-delay: 0.3s;
    outline: none;
  }

  &:focus + label,
  span.filled {
    pointer-events: none;
  }

  &:focus + label::before,
  & + label.filled::before {
    transform: perspective(1000px) rotate3d(1, 0, 0, 0deg);
  }
  &:focus + label::after,
  & + label.filled::after {
    transform: perspective(1000px) rotate3d(1, 0, 0, -90deg);
  }
`
const ContactTextarea = styled.textarea`
  position: relative;
  display: block;
  float: right;
  padding: 0.5em;
  height: 6.2em;
  border: none;
  border-radius: 0;
  color: #fff;
  font-weight: 200;
  font-size: 1.1rem;
  z-index: 10;
  width: 100%;
  background: transparent;
  opacity: 0;
  transition: opacity 0.3s;

  &:focus,
  &.filled {
    opacity: 1;
    transition-delay: 0.3s;
    outline: none;
  }

  &:focus + label,
  span.filled {
    pointer-events: none;
  }

  &:focus + label::before,
  & + label.filled::before {
    transform: perspective(1000px) rotate3d(1, 0, 0, 0deg);
    height: 6em;
  }
  &:focus + label::after,
  & + label.filled::after {
    transform: perspective(1000px) rotate3d(1, 0, 0, -90deg);
  }
`

export default Contact
