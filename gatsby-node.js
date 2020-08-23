const path = require('path')
const slugify = require('slug')
// const locales = require('./src/consts/locales')
require('dotenv').config({
  path: '.env',
})

// eslint-disable-next-line
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const localeQuery = await graphql(`
    {
      datoCmsSite {
        locales
      }
    }
  `)

  // // Homepage
  // locales.forEach(locale => {
  //   const prefix = locale === 'en' ? '/' : `/${locale}`
  //   createPage({
  //     path: `${prefix}`,
  //     component: path.resolve(`./src/templates/index.js`),
  //     context: { locale },
  //   })
  // })

  /* Create pages defined in code, i.e. pages that are "baked-in", but have localized content defined in dato */
  const createProductPages = async (resolve, reject) => {
    Promise.all(
      localeQuery.data.datoCmsSite.locales.map(locale => {
        graphql(`
        {
          products: allDatoCmsProduct(filter: {locale: { eq: "${locale}" }}) {
            nodes {
              title
            }
          }
          services: allDatoCmsService(filter: {locale: { eq: "${locale}" }}) {
            nodes {
              title
            }
          }
        }
      `).then(result => {
          result.data['products'].nodes.forEach(page => {
            const slug = slugify(page.title)
            createPage({
              path: `/products/${slug}`,
              component: path.resolve('./src/templates/product.js'),
              context: { ...page.context, title: page.title },
            })
          })
          result.data['services'].nodes.forEach(page => {
            const slug = slugify(page.title)
            createPage({
              path: `/services/${slug}`,
              component: path.resolve('./src/templates/service.js'),
              context: { ...page.context, title: page.title },
            })
          })
        })
      })
    )
  }

  createPage({
    path: '/',
    component: path.resolve('./src/templates/index.js'),
    /* context: { locale }, */
  })
  createPage({
    path: '/services',
    component: path.resolve('./src/templates/services.js'),
    /* context: { locale }, */
  })
  createPage({
    path: '/products',
    component: path.resolve('./src/templates/products.js'),
    /* context: { locale }, */
  })
  createPage({
    path: '/team',
    component: path.resolve('./src/templates/team.js'),
    /* context: { locale }, */
  })
  createPage({
    path: '/about',
    component: path.resolve('./src/templates/about.js'),
    /* context: { locale }, */
  })
  createProductPages()
}

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Hack due to Tailwind ^1.1.0 using `reduce-css-calc` which assumes node
  // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig()
  config.node = {
    fs: 'empty',
  }
}
