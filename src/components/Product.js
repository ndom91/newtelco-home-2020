import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from '@emotion/styled'

import Blob1 from '../images/illustrations/blobs/blob6.svg'
import Blob2 from '../images/illustrations/blobs/blob7.svg'
import Blob3 from '../images/illustrations/blobs/blob8.svg'
import Blob4 from '../images/illustrations/blobs/blob9.svg'

const Product = ({ product, index }) => {
  const [ref, inView, entry] = useInView({
    rootMargin: '50px 0px',
    triggerOnce: true,
  })

  const blobs = [Blob1, Blob2, Blob3, Blob4]
  const Blob = blobs[index]

  return (
    <Wrapper
      key={product.title}
      ref={ref}
      id={(index + 1) % 2 === 0 ? 'left' : 'right'}
      className={`overflow-visible w-full mb-32 flex justify-around ${
        (index + 1) % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
      } ${inView ? 'sectionInView product-wrapper' : 'product-wrapper'}`}
    >
      <div className='absolute md:relative sm:w-2/5 w-full opacity-10 md:opacity-100 inline-flex items-center justify-center align-center flex-shrink-0 overflow-visible'>
        <Blob alt={product.image.alt} className='z-0 w-64 ' />
      </div>
      <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
        <h2 className='text-green text-4xl md:text-5xl font-body font-hairline mb-2'>
          {product.title}
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
  &#right.sectionInView {
    animation: slideInRight 0.7s ease-in-out;
    opacity: 1;
  }
  &#left.sectionInView {
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
