import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { useViewportScroll } from 'framer-motion'
import Blob from '../images/illustrations/blobs/blob16.svg'
import styled from '@emotion/styled'

const TallOuterContainer = styled.div`
  height: ${props => props.dynamicHeight}px;
  position: relative;
  width: 100%;
`

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 130px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
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
  const { t } = useTranslation()
  const { scrollY } = useViewportScroll()
  const [dynamicHeight, setDynamicHeight] = useState(null)
  const [translateX, setTranslateX] = useState(0)

  const objectRef = useRef()
  scrollY.onChange(latest => {
    setTranslateX(latest - 1800)
  })

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight)
  }

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight)
    window.addEventListener('resize', resizeHandler)
  }, [])

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer>
        <div className='flex justify-between w-full mb-12 mt-12 lg:w-2/3 w-3/4 mx-auto'>
          <div className='lg:w-2/5 w-2/3 mb-6 lg:mb-0 mx-auto'>
            <h1 className='sm:text-4xl text-2xl mb-2 text-white font-body font-hairline'>
              {t('team.headline')}
            </h1>
            <div className='h-1 w-20 bg-green-500 rounded'></div>
          </div>
          <p className='flex-grow max-w-2xl w-full leading-relaxed text-base text-gray-500 overflow-visible'>
            <Blob className='absolute -ml-12 -mt-12' />
            <span className='relative z-20'>{t('team.byline')}</span>
          </p>
        </div>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  )
}

export default HorizontalScroll
