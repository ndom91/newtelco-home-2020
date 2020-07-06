import React from 'react'
// import Img from 'gatsby-image'
import { useInView } from 'react-intersection-observer'
import { useViewportScroll, useTransform, motion } from 'framer-motion'
import styled from '@emotion/styled'

const Product = ({ product, blob, index }) => {
  const { scrollY } = useViewportScroll()
  const y = useTransform(scrollY, [-500, 500], [-150, 10])
  const [ref, inView, entry] = useInView({
    rootMargin: '50px 0px',
    triggerOnce: true,
  })

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
        {/* <motion.div */}
        {/*   style={{ */}
        {/*     top: y, */}
        {/*   }} */}
        {/*   className='z-0 w-screen sm:w-full lg:-mt-24' */}
        {/* > */}
        <img
          src={blob}
          alt={product.image.alt}
          className='z-0 w-full md:max-w-md '
        />
        {/* </motion.div> */}
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
