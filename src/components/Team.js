import React, { useMemo } from 'react'
import TeamMember from './TeamMember'
import styled from '@emotion/styled'
// import media from '../style/mq'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import HorizontalScroll from './HorizontalScroll'

const TeamMembers = members => {
  members.nodes &&
    members.nodes.map(member => {
      return <TeamMember member={member} key={member.name} />
    })
}

const Team = ({ members }) => {
  const { t } = useTranslation()

  return (
    <HorizontalScroll>
      <CardsContainer>
        {members.nodes &&
          members.nodes.map(member => {
            return <TeamMember member={member} key={member.name} />
          })}
      </CardsContainer>
    </HorizontalScroll>
  )
}

export default Team

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`
