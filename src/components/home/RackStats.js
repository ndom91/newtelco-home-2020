import React from 'react'
import { Reveal, PlayState, Timeline, Tween } from 'react-gsap'
import { useInView } from 'react-intersection-observer'
import datacenter from '../../images/servers.png'
import StatBlock from './StatBlock'
import styled from '@emotion/styled'
import media from '../../style/mq'
import Blob2 from '../../images/illustrations/blobs/blob15.svg'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import 'pattern.css/dist/pattern.min.css'

const RackStats = () => {
  const { t } = useTranslation()

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Wrapper ref={ref}>
      <ContentWrapper>
        <Reveal trigger={<div />}>
          <Timeline
            target={
              <img
                src={datacenter}
                alt='datacenter'
                className='w-5/6 m:w-full mx-auto mt-20'
              />
            }
            playState={inView ? PlayState.play : PlayState.stop}
          >
            <Tween from={{ opacity: 0, x: -1000 }} to={{ opacity: 1, x: 0 }} />
            <Tween to={{ y: 8, repeat: -1, yoyo: true }} stagger='0.5' />
          </Timeline>
        </Reveal>
        <Content>
          <StatBlock inView={inView} label={t('stats.racks')} value={457} />
          <StatBlock inView={inView} label={t('stats.datacenter')} value={26} />
          <StatBlock inView={inView} label={t('stats.tbps')} value={14} />
          <StatBlock inView={inView} label={t('stats.watts')} value={3.5} />
        </Content>
        <div
          alt='bg-dot-1'
          style={{
            height: '230px',
            width: '230px',
            backgroundSize: 'calc(20 * 1px) calc(20 * 1px)',
          }}
          className='hidden sm:block absolute top-0 right-0 z-0 opacity-0 pointer-events-none -mr-24 mt-56 md:opacity-25 pattern-dots-md text-gray-700'
        />
        <BlobFilled />
      </ContentWrapper>
    </Wrapper>
  )
}
const BlobFilled = styled(Blob2)`
  position: absolute;
  right: 18rem;
  top: 41rem;
  ${media.tabletSmall`
    bottom: -110px;
    right: 250px;
    top: unset;
  `}
`

const Wrapper = styled.div`
  display: flex;
  height: 800px;
  flex-direction: column;
  margin: 50px 0 200px 0;
  position: relative;

  ${media.tabletSmall`
    height: 1000px;
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
