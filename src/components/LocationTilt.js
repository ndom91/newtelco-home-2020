import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import Tilt from 'react-parallax-tilt'
import ReactTilt from 'react-universal-tilt'

const LocationTilt = ({ city, address, image }) => {
  return (
    <Tilter
      href='#'
      settings={{
        speed: 500,
        scale: 1.1,
        shine: true,
        max: 25,
        perspective: 1000,
      }}
    >
      <figure className='tilter__figure'>
        <Img className='tilter__image' fluid={image.fluid} />
        <div className='tilter__deco tilter__deco--shine'>
          <div></div>
        </div>
        <div className='tilter__deco tilter__deco--overlay'></div>
        <figcaption className='tilter__caption'>
          <h3 className='tilter__title'>{city}</h3>
          {/* <p className='tilter__description'>{address}</p> */}
        </figcaption>
        <svg className='tilter__deco tilter__deco--lines' viewBox='0 0 300 415'>
          <path d='M20.5,20.5h260v375h-260V20.5z' />
        </svg>
      </figure>
    </Tilter>
  )
}

const Tilter = styled(ReactTilt)`
  position: relative;
  display: block;
  flex: none;
  width: 300px;
  height: 415px;
  margin: 1.5em 2.5em;
  color: #fff;
  perspective: 1000px;
  border-radius: 10px;
  transform-style: preserve-3d;

  & * {
    pointer-events: none;
  }

  &:hover,
  &:focus {
    color: #fff;
    outline: none;
  }

  .tilter__figure,
  .tilter__image {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 10px;
    transform-style: preserve-3d;
  }

  .tilter__figure {
    position: relative;
  }

  .tilter__figure::before {
    content: '';
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    box-shadow: 0 30px 20px rgba(35, 32, 39, 0.5);
  }

  .tilter__deco {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .tilter__deco--overlay {
    border-radius: 10px;
    background-image: linear-gradient(
      45deg,
      rgba(103, 178, 70, 0.8) 0%,
      rgba(125, 125, 125, 0.2) 100%
    );
  }

  .tilter__deco--shine div {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(255, 255, 255, 0.25) 50%,
      transparent 100%
    );
  }

  .tilter__deco--lines {
    fill: none;
    stroke: #fff;
    stroke-width: 1.5px;
    transform: translateZ(40px) scale(0.9);
  }

  .tilter__caption {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 1.5em;
  }

  .tilter__title {
    font-family: var(--font-serif);
    font-size: 2em;
    font-weight: normal;
    line-height: 1;
    margin: 0;
    transform: translateZ(40px) scale(0.8);
  }

  .tilter__description {
    font-size: 0.65em;
    font-family: var(--font-header);
    font-weight: 200;
    margin: 1em 0 0 0;
    letter-spacing: 0.15em;
  }
`

export default LocationTilt
