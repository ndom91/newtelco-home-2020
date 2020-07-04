import React from 'react'
import Img from 'gatsby-image'
import { useViewportScroll, useTransform, motion } from 'framer-motion'
import Blob1 from '../images/illustrations/blobs/blob2.svg'
import Blob2 from '../images/illustrations/blobs/blob3.svg'
import Blob3 from '../images/illustrations/blobs/blob4.svg'
import Blob4 from '../images/illustrations/blobs/blob5.svg'

const Products = ({ products }) => {
  const { scrollY } = useViewportScroll()
  const y = useTransform(scrollY, [-500, 500], [-150, 10])
  const blobs = [Blob1, Blob2, Blob3, Blob4]

  return (
    <section className="text-gray-500 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <div className="h-1 w-20 bg-green-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <section className="text-gray-500 bg-gray-900 body-font">
          <div className="container px-5 pt-24 pb-12  mx-auto">
            <div className="flex items-center lg:w-4/5 mx-auto border-gray-800 flex-col">
              {products &&
                products.nodes.map((product, i) => (
                  <div
                    key={product.title}
                    className={`overflow-visible w-full mb-32 flex justify-around ${
                      (i + 1) % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    <div className="relative sm:w-1/2  w-32 sm:mr-10 inline-flex items-center justify-center flex-shrink-0 overflow-visible">
                      <Img
                        className="w-1/2 h-56 rounded mb-6 z-10 overflow-visible"
                        fluid={product.image.fluid}
                        alt={product.image.alt}
                      />
                      <motion.div
                        style={{
                          top: y,
                          position: 'absolute',
                        }}
                        className="z-0 w-5/6 ml-6"
                      >
                        <img
                          src={blobs[i]}
                          alt={product.image.alt}
                          className="z-0 w-4/5"
                        />
                      </motion.div>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                      <h2 className="text-green text-4xl font-body font-hairline mb-2">
                        {product.title}
                      </h2>
                      <p className="leading-relaxed text-base">
                        {product.shortText}
                      </p>
                      {/* <button className="flex mx-auto mt-5 text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-md transition transition-colors duration-200 ease-in-out display-font text-lg font-body font-medium"> */}
                      {/*   More */}
                      {/* </button> */}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Products
