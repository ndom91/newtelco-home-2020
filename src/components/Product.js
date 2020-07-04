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
      className={`overflow-visible w-screen px-32 mb-40 flex justify-around ${
        (index + 1) % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
      } ${inView ? 'sectionInView product-wrapper' : 'product-wrapper'}`}
    >
      <div
        className="relative sm:w-2/5  w-32 sm:mr-10 inline-flex items-center justify-center flex-shrink-0 overflow-visible"
        inView={inView}
      >
        {/* <Img */}
        {/*   className="w-1/2 h-56 rounded mb-2 z-10 overflow-visible" */}
        {/*   fluid={product.image.fluid} */}
        {/*   alt={product.image.alt} */}
        {/* /> */}
        <motion.div
          style={{
            top: y,
            position: 'absolute',
          }}
          className="z-0 w-full mb-6 -mt-24"
        >
          <img src={blob} alt={product.image.alt} className="z-0 w-full" />
        </motion.div>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-green text-5xl font-body font-hairline mb-2">
          {product.title}
        </h2>
        <p className="leading-relaxed text-lg">{product.shortText}</p>
        {/* <button className="flex mx-auto mt-5 text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-md transition transition-colors duration-200 ease-in-out display-font text-lg font-body font-medium"> */}
        {/*   More */}
        {/* </button> */}
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
