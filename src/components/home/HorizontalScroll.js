import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { useWindowScroll, createBreakpoint } from 'react-use'
import TeamMember from './TeamMember'
import Blur from '../../images/blur2.png'
import styled from 'styled-components'

const TallOuterContainer = styled.div`
  height: ${props => props.dynamicHeight}px;
  width: 100%;
`

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 130px;
  width: 100%;
`

const HorizontalTranslateContainer = styled.div`
  transform: translateX(-${props => props.translateX}px);
  position: absolute;
  height: 100%;
  will-change: transform;
  position: relative;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding-top: 100px;
  align-items: flex-start;
`

const calcDynamicHeight = objectWidth => {
  const vw = window.innerWidth
  const vh = window.innerHeight
  return objectWidth - vw + vh + 150
}

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref?.current?.scrollWidth
  setDynamicHeight(calcDynamicHeight(objectWidth))
}

const HorizontalScroll = ({ members }) => {
  const useBreakpoint = createBreakpoint()
  const breakpoint = useBreakpoint()
  const isMobile = breakpoint === 'tablet'
  const { t } = useTranslation()
  const { x, y } = useWindowScroll()
  const [dynamicHeight, setDynamicHeight] = useState(null)
  const objectRef = useRef()

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight)
  }

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight)
    window.addEventListener('resize', resizeHandler)
  }, [])

  const offset = isMobile ? 1500 : 1800
  const xOffset = y - offset

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer>
        <div className='container flex flex-row-reverse justify-between mx-auto my-12 w-full'>
          <div className='mb-6 mx-16 w-2/3 text-right lg:mb-0 lg:w-2/5'>
            <h1 className='mb-2 text-white font-body text-2xl font-thin sm:text-4xl'>
              {t('team.headline')}
            </h1>
            <div className='float-right w-20 h-1 bg-green-500 rounded'></div>
          </div>
          <p className='flex-grow justify-end text-right text-gray-500 text-base leading-relaxed overflow-visible'></p>
        </div>
        <HorizontalTranslateContainer translateX={xOffset} ref={objectRef}>
          {members.nodes &&
            members.nodes.map(member => {
              return <TeamMember member={member} key={member.name} />
            })}
        </HorizontalTranslateContainer>
        <BlurImg src={Blur} />
      </StickyInnerContainer>
    </TallOuterContainer>
  )
}

const BlurImg = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default HorizontalScroll
