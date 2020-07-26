import React from 'react'
import Img from 'gatsby-image'

const TeamMember = ({ member }) => {
  return (
    <div
      className='inline-flex flex-wrap m-4'
      style={{ width: '300px', minWidth: '300px' }}
    >
      <div className='h-full w-full rounded-lg flex flex-col relative overflow-hidden'>
        <Img
          alt={member.name}
          className='flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4'
          fluid={member.image.fluid}
        />
        <div className='w-full'>
          <h2 className='title-font font-medium text-2xl text-gray-600 text-center'>
            {member.name}
          </h2>
          <h3 className='text-gray-800 text-lg mb-3 text-center'>
            {member.jobTitle}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default TeamMember
