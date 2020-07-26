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
    <HorizontalSection>
      <HorizontalScroll>
        <CardsContainer>
          {members.nodes &&
            members.nodes.map(member => {
              return <TeamMember member={member} key={member.name} />
            })}
        </CardsContainer>
      </HorizontalScroll>
    </HorizontalSection>
  )
}

export default Team

const BumperSection = styled.section`
  text-align: center;
  padding: 128px 16px;
  background-color: #efefef;
`

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
