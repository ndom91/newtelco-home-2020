import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const TeamMember = ({ member }) => {
  return (
    <div
      className='inline-flex flex-wrap m-4'
      style={{ width: '300px', minWidth: '300px' }}
    >
      <div className='h-full w-full rounded-lg flex flex-col relative overflow-hidden'>
        <TeamImg
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
        <div className='flex justify-center text-gray-700'>
          {member.contactmethod.email && (
            <a
              href={`mailto:${member.contactmethod.email}`}
              alt={`mailto ${member.name}`}
              className='text-gray-700 hover:text-green-500 transition transition-color duration-300 ease-in-out'
            >
              <svg
                height='32'
                width='32'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path>
              </svg>
            </a>
          )}
          {member.contactmethod.linkedin && (
            <a
              href={member.contactmethod.linkedin}
              alt={`${member.name} LinkedIn`}
              className='text-gray-700 hover:text-green-500 transition transition-color duration-300 ease-in-out'
            >
              <svg height='32' width='32' viewBox='0 0 24 24'>
                <path fill='none' d='M0 0h24v24H0z' />
                <path
                  fill='currentColor'
                  d='M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z'
                />
              </svg>
            </a>
          )}
          {member.contactmethod.xing && (
            <a
              href={`${member.contactmethod.xing}`}
              alt={`Xing ${member.name}`}
              className='text-gray-700 hover:text-green-500 transition transition-color duration-300 ease-in-out'
            >
              <svg height='32' width='32' viewBox='0 0 24 24'>
                <path fill='none' d='M0 0h24v24H0z' />
                <path
                  fill='currentColor'
                  d='M20.462 3.23c.153 0 .307.078.384.155a.49.49 0 0 1 0 .461l-6.077 10.77 3.846 7.076a.49.49 0 0 1 0 .462.588.588 0 0 1-.384.154h-2.77c-.384 0-.615-.308-.769-.539l-3.923-7.154C11 14.308 16.923 3.77 16.923 3.77c.154-.307.385-.538.77-.538h2.769zM8.923 7c.385 0 .615.308.77.538l1.922 3.308c-.153.154-3 5.23-3 5.23-.153.232-.384.54-.769.54H5.154a.588.588 0 0 1-.385-.154.49.49 0 0 1 0-.462l2.846-5.154-1.846-3.23a.49.49 0 0 1 0-.462A.588.588 0 0 1 6.154 7h2.77z'
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamMember

const TeamImg = styled(Img)`
  filter: grayscale(1);
  transition: filter 250ms ease-in-out;

  &:hover {
    filter: grayscale(0);
  }
`
