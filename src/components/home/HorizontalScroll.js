import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { useWindowScroll, createBreakpoint } from 'react-use'
import TeamMember from './TeamMember'
import styled from '@emotion/styled'

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
  const objectWidth = ref.current.scrollWidth
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
        <div className='container flex justify-between flex-row-reverse w-full my-12 mx-auto'>
          <div className='lg:w-2/5 w-2/3 mb-6 lg:mb-0 mx-16 text-right'>
            <h1 className='sm:text-4xl text-2xl mb-2 text-white font-body font-hairline'>
              {t('team.headline')}
            </h1>
            <div className='h-1 w-20 bg-green-500 rounded float-right'></div>
          </div>
          <p className='flex-grow text-right leading-relaxed text-base text-gray-500 overflow-visible justify-end'></p>
        </div>
        <HorizontalTranslateContainer translateX={xOffset} ref={objectRef}>
          {members.nodes &&
            members.nodes.map(member => {
              return <TeamMember member={member} key={member.name} />
            })}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  )
}

export default HorizontalScroll
