import React from 'react'
import Product from './Product'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import Blob1 from '../images/illustrations/blobs/blob2.svg'
import Blob2 from '../images/illustrations/blobs/blob3.svg'
import Blob3 from '../images/illustrations/blobs/blob4.svg'
import Blob4 from '../images/illustrations/blobs/blob5.svg'

const Products = ({ products }) => {
  const blobs = [Blob1, Blob2, Blob3, Blob4]
  const { t } = useTranslation()
  return (
    <section className="text-gray-500 body-font bg-gray-900">
      <div className="container px-5 pt-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-2/5 w-2/3 mb-6 lg:mb-0 mx-auto">
            <h1 className="sm:text-4xl text-2xl mb-2 text-white font-body font-hairline">
              {t('products')}
            </h1>
            <div className="h-1 w-20 bg-green-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-base">
            Newtelco offers many products and services for our customers, below
            you will find some of our more popular offerings. To learn more,
            just click on the associated button to continue!
          </p>
        </div>
        <section className="text-gray-500 bg-gray-900 body-font">
          <div className="container px-5 pt-24 pb-12  mx-auto">
            <div className="flex items-center lg:w-4/5 mx-auto border-gray-800 flex-col">
              {products &&
                products.nodes.map((product, i) => (
                  <Product
                    key={product.title}
                    product={product}
                    blob={blobs[i]}
                    index={i}
                  />
                ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Products
