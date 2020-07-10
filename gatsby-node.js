const path = require('path')
const slugify = require('slug')
const locales = require('./src/consts/locales')

// eslint-disable-next-line
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // // Homepage
  // locales.forEach(locale => {
  //   const prefix = locale === 'en' ? '/' : `/${locale}`
  //   createPage({
  //     path: `${prefix}`,
  //     component: path.resolve(`./src/templates/index.js`),
  //     context: { locale },
  //   })
  // })
  createPage({
    path: '/',
    component: path.resolve(`./src/templates/index.js`),
    /* context: { locale }, */
  })

  /* Create pages defined in code, i.e. pages that are "baked-in", but have localized content defined in dato */
  const createBlogsPosts = async (resolve, reject) => {
    Promise.all(
      locales.map(locale => {
        graphql(`
        {
          products: allDatoCmsProduct(filter: {locale: { eq: "${locale}" }}) {
            nodes {
              title
            }
          }
        }
      `).then(result => {
          result.data['products'].nodes.forEach(page => {
            const slug = slugify(page.title)
            createPage({
              path: `${locale}/${slug}`,
              component: path.resolve('./src/templates/products/index.js'),
              context: { locale: locale, title: page.title },
            })
          })
        })
      })
    )
  }
}

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Hack due to Tailwind ^1.1.0 using `reduce-css-calc` which assumes node
  // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig()
  config.node = {
    fs: 'empty',
  }
}
