import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import styled from 'styled-components'
import slugify from 'slug'

import Blob1 from '../../images/illustrations/blobs/blob6.svg'
import Blob2 from '../../images/illustrations/blobs/blob7.svg'
import Blob3 from '../../images/illustrations/blobs/blob8.svg'
import Blob4 from '../../images/illustrations/blobs/blob9.svg'

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
      <div className='align-center absolute z-0 inline-flex flex-shrink-0 items-center justify-center w-full opacity-10 overflow-visible sm:w-2/5 md:relative md:opacity-100'>
        <Blob alt={product.image.fluid} className='z-0 w-76 h-48' />
      </div>
      <div className='z-10 flex-grow mt-6 text-center sm:mt-0 sm:text-left'>
        <h2 className='text-green mb-2 font-body text-4xl font-thin md:text-5xl'>
          <Link
            language={language}
            to={`/products/${slugify(product.title)}`}
            className='transition-color hover:text-green-500 text-white hover:no-underline transition duration-300 ease-in-out'
          >
            {product.title}
          </Link>
        </h2>
        <p className='text-base leading-relaxed md:text-lg'>
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
