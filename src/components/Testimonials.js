import React from 'react'
import { Link, useTranslation } from 'gatsby-plugin-react-i18next'
import Partners from './Partners'
import Testimonial from './Testimonial'
import styled from '@emotion/styled'

const Testimonials = ({ partners, testimonials }) => {
  const { t } = useTranslation()

  return (
    <section className="text-gray-500 bg-gray-900 body-font">
      <Partners partners={partners} />
      <Testimonial testimonials={testimonials} />
    </section>
  )
}

export default Testimonials

const Slide = styled.div`
  display: inline-block;
  width: 300px;
  height: 150px;
  border-radius: 5px;
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  border: 2px solid #fff;
  font-weight: 500;
  height: 300px;
  max-height: 100vh;
`
