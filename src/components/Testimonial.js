import React from 'react'
import Slide from './TestimonialSlide'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const Testimonial = ({ testimonials }) => {
  return (
    <div className='absolute w-76 sm:w-40-screen transform -translate-x-1/2 top-250 inset-1/2 overflow-x-hidden'>
      <Carousel
        dots
        infinite
        arrows={false}
        autoPlay={6000}
        className='w-full max-w-48 mx-auto'
      >
        {testimonials &&
          testimonials.map((test, i) => (
            <div key={i}>
              <Slide testimonial={test} />
            </div>
          ))}
      </Carousel>
    </div>
  )
}

export default Testimonial
