import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import { seoTypes } from '../types/propTypes'

const SEO = ({ meta, favicon, global }) => {
  return (
    <HelmetDatoCms seo={meta} favicon={favicon}>
      <title>{global.siteName}</title>
    </HelmetDatoCms>
  )
}

SEO.propTypes = seoTypes

export default SEO
