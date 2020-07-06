import React from 'react'
import Slide from './TestimonialSlide'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const Testimonial = ({ testimonials }) => {
  return (
    <div className='absolute w-screen transform -translate-x-1/2 top-275 inset-1/2'>
      <Carousel
        dots
        infinite
        arrows={false}
        autoPlay={6000}
        className='w-3/5 lg:w-2/5 max-w-48 mx-auto'
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
