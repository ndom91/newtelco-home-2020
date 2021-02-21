import React from 'react'
import CountUp from 'react-countup'
import styled from '@emotion/styled'
import media from '../../style/mq'

const StatBlock = (props, ref) => {
  return (
    <Wrapper>
      <Value>
        {props.inView && (
          <CountUp
            start={0}
            end={props.value}
            duration={3.75}
            delay={1}
            useEasing
            decimals={props.value.toString().indexOf('.') !== -1 ? 1 : 0}
          />
        )}
      </Value>
      <Label>{props.label}</Label>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  margin-left: 25px;
  margin-bottom: 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  box-shadow: rgba(16, 66, 97, 0.07) 0px 8px 20px 0px;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  position: relative;
  padding: 40px;
  background-color: #111;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  transition: box-shadow 250ms ease-in-out, transform 250ms ease-in-out,
    backdrop-filter 250ms ease-in-out;

  // Glassmorphism
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0px 20px 2px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  &:nth-of-type(2n) {
    top: 35px;
  }

  &:hover {
    transform: translateY(-5px);
    backdrop-filter: blur(8px);
    box-shadow: 0 0px 20px 2px rgba(255, 255, 255, 0.1);
  }

  ${media.tabletSmall`
    width: 160px;
    height: 160px;
  `}
`

const Value = styled.div`
  font-size: 4.5rem;
  font-family: var(--font-all);
  font-family: var(--font-mono);
  font-weight: 500;
  color: #101113;
  ${media.tabletSmall`
    font-size: 3.5rem;
  `}
`

const Label = styled.div`
  font-size: 1.5rem;
  font-family: var(--font-mono);
  font-weight: 100;
  color: #101113;
  ${media.tabletSmall`
    font-size: 1.2rem;
  `}
`

export default StatBlock
