import React from 'react'
import { useInView } from 'react-intersection-observer'
import datacenter from '../images/servers.png'
import StatBlock from './StatBlock'
import styled from '@emotion/styled'
import media from '../style/mq'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const RackStats = () => {
  const { t } = useTranslation()

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <Wrapper>
      <SvgImage />
      <ContentWrapper>
        <Datacenter
          src={datacenter}
          alt='datacenter'
          className={inView ? 'imageInView' : ''}
          loading='lazy'
        />
        <Content ref={ref}>
          <StatBlock inView={inView} label={t('stats.racks')} value={457} />
          <StatBlock inView={inView} label={t('stats.datacenter')} value={26} />
          <StatBlock inView={inView} label={t('stats.tbps')} value={1340} />
          <StatBlock inView={inView} label={t('stats.watts')} value={3.5} />
        </Content>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 800px;
  flex-direction: column;
  margin: 50px 0 200px 0;
  position: relative;

  ${media.tabletSmall`
    height: 1250px;
    margin: 300px 0 0 0;
  `}
`

const SvgImage = styled.div`
  position: relative;
  &::before {
    position: absolute;
    height: 850px;
    opacity: 0.1;
    content: '';
    background: linear-gradient(to right, #8cbf86, #66b4a6, #408ca3);

    z-index: -1;
    top: 0px;
    border-radius: 60px;
    transform: skew(0deg, 7deg) translateX(50%);
    left: auto;
    right: 50%;
  }
  ${media.tabletSmall`
    &::before {
      width: 100%;
      height: 1150px;
    }
  `}
  ${media.tabletSmall_up`
    &::before {
      width: 950px;
    }
  `}
  ${media.tablet_up`
    &::before {
      width: 1250px;
    }
  `}
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
  ${media.tabletSmall`
    & {
      flex-direction: column;
      align-items: center;
    }
  `}
`

const Datacenter = styled.img`
  top: 220px;
  left: 20px;
  max-width: 550px;
  opacity: 0;

  &.imageInView {
    animation: slideIn 0.5s ease-in-out forwards;
    animation-delay: 0.5s;
  }
  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(-20vw);
    }
    100% {
      opacity: 1;
      transform: translateX(0vw);
    }
  }

  ${media.tabletSmall`
    & {
      width: 90%;
    }
  `}
`

const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-left: 50px;
  margin-top: 150px;
  max-height: 450px;
  max-width: 500px;

  ${media.tabletSmall`
    margin: 70px auto;
    justify-content: center;
    padding-left: 0px;
    margin-left: -25px;
  `}
`

export default RackStats