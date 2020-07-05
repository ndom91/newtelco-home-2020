import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import Partners from './Partners'
import Loadable from 'react-loadable'

const Testimonial = Loadable({
  loader: () => import('./Testimonial'),
  loading() {
    return <span>Loading...</span>
  },
})

const Testimonials = ({ partners, testimonials }) => {
  const { t } = useTranslation()

  return (
    <section className='text-gray-500 bg-gray-900 body-font relative'>
      <Partners partners={partners} />
      <Testimonial testimonials={testimonials} className='absolute' />
    </section>
  )
}

export default Testimonials
