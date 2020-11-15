import React from 'react'
import Product from './Product'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Products = ({ products }) => {
  const { t } = useTranslation()
  return (
    <section className='text-gray-500 body-font bg-gray-900 overflow-x-hidden'>
      <div className='container px-5 pt-24 mx-auto'>
        <div className='flex justify-between w-full mb-20'>
          <div className='lg:w-2/5 w-2/3 mb-6 lg:mb-0 mx-auto'>
            <h1 className='sm:text-4xl text-2xl mb-2 text-white font-body font-hairline'>
              {t('products.title')}
            </h1>
            <div className='h-1 w-20 bg-green-500 rounded'></div>
          </div>
          <p className='flex-grow max-w-2xl w-full leading-relaxed text-base'>
            {/* {t('products.byline')} */}
          </p>
        </div>
        <section className='text-gray-500 bg-gray-900 body-font'>
          <div className='container px-5 pt-24 pb-12 mx-auto'>
            <div className='flex items-center max-w-screen-lg border-gray-800 flex-col'>
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
