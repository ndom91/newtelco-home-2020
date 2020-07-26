import React, { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'

// const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
//   style: { height: `${dynamicHeight}px` },
// }))`
const TallOuterContainer = styled.div`
  height: ${props => (props.dynamicHeight ? props.dynamicHeight : 100)}px;
  position: relative;
  width: 100%;
`

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`

// const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
//   style: { transform: `translateX(${translateX}px)` },
// }))`
const HorizontalTranslateContainer = styled.div(props => ({
  transform: `translateX(${props.translateX}px)`,
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

const applyScrollListener = (ref, setTranslateX) => {
  window.addEventListener('scroll', () => {
    const offsetTop = -ref.current.offsetTop
    console.log(offsetTop)
    setTranslateX(offsetTop)
  })
}

const HorizontalScroll = ({ children }) => {
  const [dynamicHeight, setDynamicHeight] = useState(null)
  const [translateX, setTranslateX] = useState(0)

  const containerRef = useRef()
  const objectRef = useRef()

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight)
  }

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight)
    window.addEventListener('resize', resizeHandler)
    applyScrollListener(containerRef, setTranslateX)
  }, [])

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  )
}

export default HorizontalScroll
