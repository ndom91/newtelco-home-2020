import React from 'react'
import Marquee, {
  Motion,
  randomIntFromInterval,
} from 'react-marquee-slider-emotion'
import times from 'lodash.times'
import styled from '@emotion/styled'

const Partners = ({ partners }) => {
  let scale = 0.5

  if (typeof window !== 'undefined') {
    const width = window.outerWidth
    if (width > 800) {
      scale = 0.65
    }

    if (width > 1100) {
      scale = 0.7
    }

    if (width > 1400) {
      scale = 0.9
    }
  }

  return (
    <FullWidth>
      <Height height={200}>
        <Marquee
          key="1"
          velocity={18}
          scatterRandomly
          minScale={0.7}
          resetAfterTries={200}
        >
          {partners.map((partner, i) => (
            <Motion
              key={`marquee-example-company-${i}`}
              initDeg={randomIntFromInterval(0, 360)}
              direction={Math.random() > 0.5 ? 'clockwise' : 'counterclockwise'}
              velocity={10}
              radius={scale * 70}
            >
              <Company scale={scale}>
                <Circle scale={scale}>
                  <Logo
                    src={partner.image.fluid?.src || partner.image.url}
                    alt=""
                  />
                </Circle>
              </Company>
            </Motion>
          ))}
        </Marquee>
      </Height>
    </FullWidth>
  )
}

export default Partners

const Circle = styled.div`
  position: absolute;
  transform: scale(0.8);
  object-position: center center;
  will-change: transform, opacity;
  width: ${props => props.scale * 150}px;
  height: ${props => props.scale * 150}px;
  top: -50%;
  left: -50%;
  border-radius: 50%;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05), 0 5px 10px rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  display: block;
  width: 65%;
  height: 65%;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: filter 250ms ease-in-out;

  &:hover {
    filter: grayscale(10%);
  }
`

const FullWidth = styled.div`
  width: 99vw;
  position: relative;

  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const Height = styled.div`
  position: relative;
  width: 100%;
  height: ${props => (props.height ? props.height + 'px' : 'auto')};
`

const Company = styled.div`
  position: relative;
  width: ${props => props.scale * 75}px;
  height: ${props => props.scale * 75}px;
`
