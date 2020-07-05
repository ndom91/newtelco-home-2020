import React, { useRef, useState, useEffect } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Slide from './TestimonialSlide'
import styled from '@emotion/styled'
// import "./styles.css";

const Testimonial = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [pause, setPause] = useState(false)
  const timer = useRef()
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true)
    })
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false)
    })
  }, [sliderRef])

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  console.log(slider && slider.details())

  return (
    <>
      <Wrapper>
        <div ref={sliderRef} className="keen-slider">
          <Slide
            className={`keen-slider__slide number-slide `}
            testimonial={testimonials[0]}
          />
          <Slide
            className={`keen-slider__slide number-slide `}
            testimonial={testimonials[1]}
          />
          <Slide
            className={`keen-slider__slide number-slide `}
            testimonial={testimonials[2]}
          />
        </div>
        {slider && (
          <div className="dots">
            {[...Array(slider.details().size).keys()].map(idx => (
              <button
                key={idx}
                onClick={() => slider.moveToSlideRelative(idx)}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              />
            ))}
          </div>
        )}
      </Wrapper>
    </>
  )
}

export default Testimonial

const Wrapper = styled.div`
  & .dots {
    display: flex;
    padding: 10px 0;
    justify-content: center;
  }

  & .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  & .dot:focus {
    outline: none;
  }

  & .dot.active {
    background: #000;
  }
`
