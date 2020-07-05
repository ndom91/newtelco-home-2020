import React from 'react'
import Marquee, {
  Motion,
  randomIntFromInterval,
} from 'react-marquee-slider-emotion'
import styled from '@emotion/styled'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Partners = ({ partners }) => {
  const { t } = useTranslation()
  let scale = 0.6

  if (typeof window !== 'undefined') {
    const width = window.outerWidth
    if (width > 800) {
      scale = 0.75
    }

    if (width > 1100) {
      scale = 0.8
    }

    if (width > 1400) {
      scale = 0.9
    }
  }

  return (
    <FullWidth>
      <div className="lg:w-4/5 w-2/3 pb-20 lg:mb-0 mx-auto">
        <h1 className="sm:text-4xl text-2xl mb-2 text-white font-body font-hairline">
          {t('trustedby')}
        </h1>
        <div className="h-1 w-20 bg-green-500 rounded"></div>
      </div>
      <Height height={400}>
        <Marquee
          key="1"
          velocity={18}
          scatterRandomly
          minScale={0.7}
          resetAfterTries={200}
        >
          {partners
            .sort(() => Math.random() - Math.random())
            .slice(0, 10)
            .map((partner, i) => (
              <Motion
                key={`marquee-example-company-${i}`}
                initDeg={randomIntFromInterval(0, 360)}
                direction={
                  Math.random() > 0.5 ? 'clockwise' : 'counterclockwise'
                }
                velocity={10}
                radius={scale * 70}
              >
                <Company scale={scale}>
                  <Circle scale={scale}>
                    <Logo
                      src={partner.image.fluid?.src || partner.image.url}
                      alt={partner.image.alt}
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
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2);
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
  margin-bottom: 100px;
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
