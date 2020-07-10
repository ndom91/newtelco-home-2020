import React from 'react'

const GoogleMaps = () => (
  <>
    <iframe
      width='100%'
      height='100%'
      title='map'
      className='absolute inset-0'
      frameBorder='0'
      marginHeight='0'
      marginWidth='0'
      scrolling='no'
      loading='lazy'
      src='https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Frankfurt+Newtelco&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'
      style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.16)' }}
    />
  </>
)

export default GoogleMaps
