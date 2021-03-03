import React from 'react'
import Slide from './TestimonialSlide'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const Testimonial = ({ testimonials }) => {
  return (
    <div className='absolute inset-1/2 top-250 w-76 overflow-x-hidden transform -translate-x-1/2 sm:w-40-screen'>
      <Carousel
        dots
        infinite
        arrows={false}
        autoPlay={6000}
        className='max-w-48 mx-auto w-full'
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
