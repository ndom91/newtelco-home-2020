import React from 'react'
import Product from './Product'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Products = ({ products }) => {
  const { t } = useTranslation()
  return (
    <section className='body-font text-gray-500 bg-gray-900 overflow-x-hidden'>
      <div className='container mx-auto pt-24 px-5'>
        <div className='flex justify-between mb-20 w-full'>
          <div className='mb-6 mx-auto w-2/3 lg:mb-0 lg:w-2/5'>
            <h1 className='mb-2 text-white font-body text-2xl font-thin sm:text-4xl'>
              {t('products.title')}
            </h1>
            <div className='w-20 h-1 bg-green-500 rounded'></div>
          </div>
          <p className='flex-grow w-full max-w-2xl text-base leading-relaxed'>
            {/* {t('products.byline')} */}
          </p>
        </div>
        <section className='body-font text-gray-500 bg-gray-900'>
          <div className='container mx-auto pb-12 pt-24 px-5'>
            <div className='flex flex-col items-center max-w-screen-lg border-gray-800'>
              {products &&
                products.nodes.map((product, i) => {
                  return (
                    <Product key={product.title} product={product} index={i} />
                  )
                })}
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Products
