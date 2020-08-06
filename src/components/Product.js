import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import styled from '@emotion/styled'
import slugify from 'slug'

import Blob1 from '../images/illustrations/blobs/blob6.svg'
import Blob2 from '../images/illustrations/blobs/blob7.svg'
import Blob3 from '../images/illustrations/blobs/blob8.svg'
import Blob4 from '../images/illustrations/blobs/blob9.svg'

const Product = ({ product, index }) => {
  const [ref, inView] = useInView({
    rootMargin: '50px 0px',
    triggerOnce: true,
  })

  const blobs = [Blob1, Blob2, Blob3, Blob4]
  const Blob = blobs[index]
  const { language } = useI18next()

  return (
    <Wrapper
      key={product.title}
      ref={ref}
      className={`overflow-visible w-full mb-32 flex justify-around ${
        (index + 1) % 2 === 0 ? 'left' : 'right'
      } 
				${(index + 1) % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} ${
        inView ? 'sectionInView product-wrapper' : 'product-wrapper'
      }`}
    >
      <div className='absolute md:relative sm:w-2/5 w-full opacity-10 md:opacity-100 inline-flex items-center justify-center align-center flex-shrink-0 overflow-visible'>
        <Blob alt={product.image.fluid} className='z-0 w-76 h-48' />
      </div>
      <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
        <h2 className='text-green text-4xl md:text-5xl font-body font-hairline mb-2'>
          {product.title}
          <Link language={language} to={`/products/${slugify(product.title)}`}>
            <svg
              fill='none'
              className='hover:stroke-green hover:opacity-100 opacity-25 transition ease-in-out duration-300 transition-colors transition-opacity'
              height='32'
              width='32'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='#666'
              style={{
                display: 'inline',
                margin: '0 0 0.5rem 0.5rem',
              }}
            >
              <path d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' />
            </svg>
          </Link>
        </h2>
        <p className='leading-relaxed text-base md:text-lg'>
          {product.shortText}
        </p>
      </div>
    </Wrapper>
  )
}

export default Product

const Wrapper = styled.div`
  &.product-wrapper {
    opacity: 0;
  }
  &.right.sectionInView {
    animation: slideInRight 0.7s ease-in-out;
    opacity: 1;
  }
  &.left.sectionInView {
    animation: slideInLeft 0.7s ease-in-out;
    opacity: 1;
  }

  @keyframes slideInRight {
    0% {
      opacity: 0;
      transform: translateX(-30rem);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes slideInLeft {
    0% {
      opacity: 0;
      transform: translateX(30rem);
    }
    100% {
      opacity: 1;
      transform: translateX(0rem) scale(1);
    }
  }
`
