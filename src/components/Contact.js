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
    <section className='text-gray-500 bg-gray-900 body-font relative mt-20 sm:mt-0 z-20'>
      <div className='container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap'>
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
          <ContactInputWrapper>
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
          </ContactInputWrapper>
          <ContactInputWrapper>
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
          </ContactInputWrapper>
          <ContactInputWrapper>
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
          </ContactInputWrapper>
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

const ContactInputWrapper = styled.span`
  position: relative;
  z-index: 1;
  display: inline-block;
  margin: 1em;
  max-width: 350px;
  width: 100%;
  vertical-align: top;
  margin-top: 2em;
  margin-left: 0;
`

const ContactLabel = styled.label`
  position: absolute;
  left: 0;
  padding: 0 0.35em;
  width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
  font-weight: 100;

  &:before {
    border-top: 2px solid #292929;
    transform: translate3d(0, 100%, 0) translate3d(0, -2px, 0);
  }

  &:after {
    transform: scale3d(1, 0, 1);
    z-index: -1;
    background: #292929;
    transform-origin: 50% 0%;
  }

  &.filled::before {
    transition-delay: 0s;
    transform: translate3d(0, 0, 0);
  }

  &.filled::after {
    transform: scale3d(1, 1, 1);
    transition-delay: 0.3s;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.3s;
  }
`

const ContactLabelContent = styled.span`
  color: #fff;
  position: relative;
  display: block;
  padding: 0.3em 0;
  width: 100%;

  transition: transform 0.3s 0.3s;
`

const ContactInput = styled.input`
  position: relative;
  display: block;
  float: right;
  border: none;
  border-radius: 0;
  font-weight: 100;
  font-size: 1.3rem;
  padding: 0.45em 0.5em;
  width: 100%;
  background: transparent;
  color: #dde2e2;
  opacity: 0;
  transition: opacity 0.3s;

  &:focus + label::before {
    transition-delay: 0s;
    transform: translate3d(0, 0, 0);
  }

  &:focus + label::after {
    transform: scale3d(1, 1, 1);
    transition-delay: 0.3s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }

  &:focus,
  &.filled {
    opacity: 1;
    transition-delay: 0.3s;
    outline: none;
  }

  &:focus + label span,
  & + label.filled span {
    transform: translate3d(0, -80%, 0);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }

  &:focus + label,
  span.filled {
    pointer-events: none;
  }
`

const ContactTextarea = styled.textarea`
  position: relative;
  display: block;
  float: right;
  border: none;
  border-radius: 0;
  font-weight: 100;

  padding: 0.45em 0.5em;
  width: 100%;
  background: transparent;
  color: #dde2e2;
  opacity: 0;
  transition: opacity 0.3s;

  &:focus + label::before {
    transition-delay: 0s;
    transform: translate3d(0, 0, 0);
  }

  &:focus + label::after {
    transform: scale3d(1, 1, 1);
    transition-delay: 0.3s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }

  &:focus,
  &.filled {
    opacity: 1;
    transition-delay: 0.3s;
    outline: none;
  }

  &:focus + label span,
  & + label.filled span {
    transform: translate3d(0, -80%, 0);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }

  &:focus + label,
  span.filled {
    pointer-events: none;
  }
`

export default Contact
