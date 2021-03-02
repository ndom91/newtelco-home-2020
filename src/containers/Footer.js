import React, { useState, useEffect } from 'react'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import slug from 'slug'
import styled from 'styled-components'
import LogoFull from '../images/NewtelcoFullLogo'
import Scribble from '../images/illustrations/scribbles/blob3.svg'

const Footer = ({ products, services, social, locations }) => {
  const [uptime, setUptime] = useState(true)
  const today = new Date()
  const { language } = useI18next()
  const year = today.getFullYear()

  const fb = social.find(item => item.provider === 'Facebook').url
  const twitter = social.find(item => item.provider === 'Twitter').url
  const github = social.find(item => item.provider === 'Github').url
  const instagram = social.find(item => item.provider === 'Instagram').url
  const linkedin = social.find(item => item.provider === 'Linkedin').url

  useEffect(() => {
    fetch('https://uptimerobot.newtelco.workers.dev', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(data => data.json())
      .then(data => {
        data.monitors.forEach(mon => {
          if (!mon.online) setUptime(false)
        })
      })
  }, [])

  return (
    <footer className='body-font max-w-100 text-gray-500 bg-gray-900 overflow-hidden'>
      <div className='md:flex-no-wrap container relative flex flex-col flex-wrap mx-auto px-5 py-20 md:flex-row md:items-center lg:items-start'>
        <div className='relative flex-shrink-0 mx-auto w-64 text-center lg:mx-0 lg:text-left'>
          <div className='title-font z-20 flex items-center justify-center text-white font-medium md:justify-start'>
            <LogoFull className='z-30' />
          </div>
          <p className='mt-8 text-gray-700 text-sm'>
            <span className='inline-flex justify-around mt-2 w-full sm:ml-auto sm:mt-0'>
              <SocialItem
                aria-label='Facebook'
                href={fb}
                className='z-20 text-white hover:text-white transition transition-colors duration-300 ease-in-out'
              >
                <svg
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-10 h-10'
                  viewBox='0 0 24 24'
                >
                  <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                </svg>
              </SocialItem>
              <SocialItem
                href={twitter}
                aria-label='Twitter'
                className='z-20 text-white hover:text-white transition transition-colors duration-300 ease-in-out'
              >
                <svg
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-10 h-10'
                  viewBox='0 0 24 24'
                >
                  <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                </svg>
              </SocialItem>
              <SocialItem
                aria-label='Instagram'
                href={instagram}
                className='z-20 text-white hover:text-white transition transition-colors duration-300 ease-in-out'
              >
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-10 h-10'
                  viewBox='0 0 24 24'
                >
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                  <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                </svg>
              </SocialItem>
              <SocialItem
                href={linkedin}
                aria-label='LinkedIn'
                className='z-20 text-white hover:text-white transition transition-colors duration-300 ease-in-out'
              >
                <svg
                  fill='currentColor'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='0'
                  className='w-10 h-10'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='none'
                    d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                  ></path>
                  <circle cx='4' cy='4' r='2' stroke='none'></circle>
                </svg>
              </SocialItem>
              <SocialItem
                href={github}
                aria-label='Github'
                className='z-20 text-white hover:text-white transition transition-colors duration-300 ease-in-out'
              >
                <svg
                  className='w-10 h-10'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z' />
                </svg>
              </SocialItem>
            </span>
            <Scribble
              alt='Scribble Circle'
              className='absolute z-0 -bottom-2 left-0 -ml-16 w-full h-auto opacity-25 pointer-events-none'
              style={{ width: '150%' }}
            />
          </p>
        </div>
        <div className='flex flex-grow flex-wrap -mb-10 mt-10 text-center md:mt-0 md:pl-20 md:text-left'>
          <div className='px-4 w-1/2 md:w-1/2 lg:w-1/4'>
            <h2 className='title-font mb-3 text-white font-mono text-base font-medium tracking-widest'>
              Locations
            </h2>
            <nav className='mb-10 pl-12 text-left list-none md:pl-0'>
              {locations.map(location => (
                <div key={location.city}>
                  <a
                    href={`https://maps.google.com?q=${encodeURIComponent(
                      location.address
                    )}`}
                    alt={`${location.city} Maps Link`}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='text-gray-600 hover:text-white hover:no-underline text-base transition transition-colors duration-300 ease-in-out'
                  >
                    {location.city}
                  </a>
                </div>
              ))}
            </nav>
          </div>
          <div className='px-4 w-1/2 md:w-1/2 lg:w-1/4'>
            <h2 className='title-font mb-3 text-white font-mono text-base font-medium tracking-widest'>
              Products
            </h2>
            <nav className='mb-10 pl-12 text-left list-none md:pl-0'>
              {products &&
                products.map(product => (
                  <div key={product.title}>
                    <Link
                      to={`/products/${slug(product.title)}`}
                      language={language}
                      aria-label={`${product.title} Link`}
                      className='text-gray-600 hover:text-white hover:no-underline text-base transition transition-colors duration-300 ease-in-out'
                    >
                      {product.title}
                    </Link>
                  </div>
                ))}
            </nav>
          </div>
          <div className='px-4 w-1/2 md:w-1/2 lg:w-1/4'>
            <h2 className='title-font mb-3 text-white font-mono text-base font-medium tracking-widest'>
              Services
            </h2>
            <nav className='mb-10 pl-12 text-left list-none md:pl-0'>
              {services &&
                services.map(service => (
                  <div key={service.title}>
                    <Link
                      to={`/services/${slug(service.title)}`}
                      language={language}
                      aria-label={`${service.title} Link`}
                      className='text-gray-600 hover:text-white hover:no-underline text-base transition transition-colors duration-300 ease-in-out'
                    >
                      {service.title}
                    </Link>
                  </div>
                ))}
            </nav>
          </div>
          <div className='px-4 w-1/2 md:w-1/2 lg:w-1/4'>
            <h2 className='title-font mb-3 text-white font-mono text-base font-medium tracking-widest'>
              Company
            </h2>
            <nav className='mb-10 pl-12 text-left list-none md:pl-0'>
              <div>
                <Link
                  to={'/about'}
                  language={language}
                  aria-label={'About Link'}
                  className='text-gray-600 hover:text-white hover:no-underline text-base transition transition-colors duration-300 ease-in-out'
                >
                  About Us
                </Link>
              </div>
              <div>
                <Link
                  to={'/team'}
                  language={language}
                  aria-label={'Team Link'}
                  className='text-gray-600 hover:text-white hover:no-underline text-base transition transition-colors duration-300 ease-in-out'
                >
                  Team
                </Link>
              </div>
              <div>
                <Link
                  to={'/privacy'}
                  language={language}
                  aria-label={'Privacy Link'}
                  className='text-gray-600 hover:text-white hover:no-underline text-base transition transition-colors duration-300 ease-in-out'
                >
                  Privacy Policy
                </Link>
              </div>
              <div>
                <Link
                  to={'/legal'}
                  language={language}
                  aria-label={'Legal Link'}
                  className='text-gray-600 hover:text-white hover:no-underline text-base transition transition-colors duration-300 ease-in-out'
                >
                  Legal
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className='bg-gray-800'>
        <div className='align-center container flex flex-col flex-wrap mx-auto px-5 py-4 sm:flex-row'>
          <div className='flex items-center justify-between mb-0 w-full text-center text-gray-600 font-mono text-sm sm:text-left'>
            <div className='flex items-center'>
              <p className='mb-0 mr-4'>© {year} NewTelco GmbH</p>
              <a
                href='https://github.com/ndom91'
                rel='noopener noreferrer'
                className='hidden ml-1 text-gray-700 hover:text-green-500 hover:no-underline text-sm leading-8 transition transition-colors duration-300 ease-in-out sm:block'
                target='_blank'
              >
                <svg
                  fill='none'
                  height='12'
                  width='12'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='inline-block mr-1'
                >
                  <path d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
                </svg>
                ndomino
              </a>
            </div>
            <a
              href='https://is.newtelco.online'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:no-underline'
            >
              <div className='flex items-center p-4 h-4 border border-gray-700 rounded-md'>
                <UptimeDot
                  alt='team'
                  uptime={uptime}
                  className={`w-3 h-3 ${
                    uptime ? 'bg-green-500' : 'bg-yellow-400'
                  } flex-shrink-0 rounded-full mr-4 shadow-outline`}
                />
                <div className='flex-grow align-middle'>
                  <p className='mb-0 text-gray-500'>
                    {uptime ? 'All Systems Normal' : 'Systems Degraded'}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const UptimeDot = styled.span`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${props => (props.uptime ? '#67b246' : '#cca92c')};
  cursor: pointer;
  box-shadow: ${props =>
    props.uptime
      ? '0 0 0 rgba(103, 178, 70, 0.4)'
      : '0 0 0 rgba(204,169,44, 0.4)'};
  animation: ${props => (props.uptime ? 'pulseUp' : 'pulseDown')} 2s infinite;
  &:hover {
    animation: none;
  }

  @keyframes pulseUp {
    0% {
      box-shadow: 0 0 0 0 rgba(103, 178, 70, 0.4);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(103, 178, 70, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(103, 178, 70, 0);
    }
  }
  @keyframes pulseDown {
    0% {
      box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }
`

const SocialItem = styled.a`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-duration: 0.3s;
  transition-property: transform;

  &:before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0) 80%
    );
    transition-duration: 0.3s;
    transition-property: transform, opacity;
  }
  &:hover,
  &:focus,
  &:active {
    transform: translateY(-5px);
  }
  &:hover:before,
  &:focus:before,
  &:active:before {
    opacity: 1;
    transform: translateY(5px);
  }
`

export default Footer
