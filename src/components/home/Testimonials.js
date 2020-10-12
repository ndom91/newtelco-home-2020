import React from 'react'
import Partners from './Partners'
import Testimonial from './Testimonial'
// import { useTranslation } from 'gatsby-plugin-react-i18next'

// import Loadable from 'react-loadable'
/* const Partners = Loadable({ */
/*   loader: () => import('./Partners'), */
/*   loading() { */
/*     return <div>Loading...</div> */
/*   }, */
/* }) */

/* const Testimonial = Loadable({ */
/*   loader: () => import('./Testimonial'), */
/*   loading() { */
/*     return <span>Loading...</span> */
/*   }, */
/* }) */

const Testimonials = ({ partners, testimonials }) => {
  // const { t } = useTranslation()

  return (
    <section className='text-gray-500 bg-gray-900 body-font relative z-10'>
      <Partners partners={partners} />
      <Testimonial testimonials={testimonials} className='absolute' />
    </section>
  )
}

export default Testimonials
