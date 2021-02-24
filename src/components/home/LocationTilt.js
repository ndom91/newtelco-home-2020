import React, { useMemo, useState } from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import Tilt from 'react-parallax-tilt'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import 'react-flippy/dist/styles.css'

const LocationTilt = ({ city, address, image }) => {
  const [flipped, setFlipped] = useState(false)
  return (
    <Tilter
      href='#'
      settings={{
        speed: 500,
        scale: 1.05,
        max: 25,
        perspective: 1000,
        base: 'element',
      }}
      key='front'
      onClick={() => setFlipped(!flipped)}
    >
      <Flippy isFlipped={flipped}>
        <FrontSide>
          <figure className='tilter__figure'>
            <Img className='tilter__image' fluid={image.fluid} />
            <div className='tilter__deco tilter__deco--shine'>
              <div></div>
            </div>
            <div className='tilter__deco tilter__deco--overlay'></div>
            <figcaption className='tilter__caption'>
              <h3 className='tilter__title'>{city}</h3>
            </figcaption>
            <svg
              className='tilter__deco tilter__deco--lines'
              viewBox='0 0 300 415'
            >
              <path d='M20.5,20.5h280v375h-305V20.5z' />
            </svg>
          </figure>
        </FrontSide>
        <BackSide>
          <figure className='tilter__figure'>
            <Img className='tilter__image' fluid={image.fluid} />
            <div className='tilter__deco tilter__deco--shine'>
              <div></div>
            </div>
            <div className='tilter__deco tilter__deco--overlay'></div>
            <figcaption className='tilter__caption'>
              <p className='tilter__description'>{address}</p>
            </figcaption>
            <svg
              className='tilter__deco tilter__deco--lines'
              viewBox='0 0 300 415'
            >
              <path d='M20.5,20.5h280v375h-305V20.5z' />
            </svg>
          </figure>
        </BackSide>
      </Flippy>
    </Tilter>
  )
}

const Tilter = styled(Tilt)`
  position: relative;
  display: block;
  flex: none;
  width: 360px;
  height: 415px;
  margin: 1.5em 1em;
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
    cursor: pointer;
  }

  .tilter__figure,
  .tilter__image {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 10px;
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
    padding: 2rem;
  }

  .tilter__title {
    font-family: var(--font-mono);
    font-size: 1.5em;
    font-weight: 100;
    margin: 1rem;
    transform: translateZ(40px);
  }

  .tilter__description {
    font-size: 0.65em;
    font-family: var(--font-mono);
    font-weight: 560;
    margin: 1em 0 0 0;
    letter-spacing: 0.15em;
    transform: translateZ(40px) scale(0.8);
  }

  .flippy-card {
    box-shadow: none;
  }
  .flippy-container {
    height: 100%;
    width: 100%;
  }
`

export default LocationTilt
