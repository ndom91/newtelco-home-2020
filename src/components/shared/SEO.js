import React from 'react'
// import { HelmetDatoCms } from 'gatsby-source-datocms'
import Helmet from 'react-helmet'
import { renderMetaTags } from 'react-datocms'

const SEO = ({ meta, favicon = '', global = '' }) => {
  return (
    <Helmet>
      {/* <HelmetDatoCms seo={meta} favicon={favicon}> */}
      <title>{global.siteName || 'Newtelco GmbH'}</title>
      {/* {renderMetaTags(data.page.seo.concat(data.site.favicon))} */}
      <html lang='en' />
    </Helmet>
  )
}

export default SEO
