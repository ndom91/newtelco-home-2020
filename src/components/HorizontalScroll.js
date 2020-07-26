import React, { useState, useEffect, useRef } from 'react'
import { useViewportScroll } from 'framer-motion'
import styled from '@emotion/styled'

const TallOuterContainer = styled.div`
  height: ${props => props.dynamicHeight}px;
  position: relative;
  width: 100%;
`

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0px;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`

const HorizontalTranslateContainer = styled.div(props => ({
  transform: `translateX(-${props.translateX}px)`,
  position: 'absolute',
  height: '100%',
  willChange: 'transform',
}))

const calcDynamicHeight = objectWidth => {
  const vw = window.innerWidth
  const vh = window.innerHeight
  return objectWidth - vw + vh + 150
}

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth
  const dynamicHeight = calcDynamicHeight(objectWidth)
  setDynamicHeight(dynamicHeight)
}

const HorizontalScroll = ({ children }) => {
  const { scrollY } = useViewportScroll()
  const [dynamicHeight, setDynamicHeight] = useState(null)
  const [translateX, setTranslateX] = useState(0)

  const objectRef = useRef()
  // useEffect(() =>
  scrollY.onChange(latest => {
    setTranslateX(latest - 1800)
  })
  // , [])

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight)
  }

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight)
    window.addEventListener('resize', resizeHandler)
    // applyScrollListener(containerRef, setTranslateX)
  }, [])

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  )
}

export default HorizontalScroll
