import React from 'react'
import Slide from './TestimonialSlide'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const Testimonial = ({ testimonials }) => {
  return (
    <div className="absolute w-screen transform -translate-x-1/2 top-275 inset-1/2">
      <Carousel
        dots
        infinite
        arrows={false}
        autoPlay={6000}
        className="w-3/5 max-w-48 mx-auto"
      >
        <Slide testimonial={testimonials[0]} />
        <Slide testimonial={testimonials[1]} />
        <Slide testimonial={testimonials[2]} />
      </Carousel>
    </div>
  )
}

export default Testimonial
