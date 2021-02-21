const path = require('path')
const slugify = require('slug')

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

  /* Create pages defined in code, i.e. pages that are "baked-in", but have localized content defined in dato */
  const createProductPages = async (resolve, reject) => {
    const langs = await Promise.all(
      localeQuery.data.datoCmsSite.locales.map(locale => {
        return graphql(`
        {
          products: allDatoCmsProduct(filter: {locale: { eq: "${locale}" }}) {
            nodes {
              title
              productid
            }
          }
          services: allDatoCmsService(filter: {locale: { eq: "${locale}" }}) {
            nodes {
              title
              serviceid
            }
          }
        }
      `)
      })
    )

    langs.map((lang, i) => {
      const { products, services } = lang.data
      products.nodes.forEach(page => {
        const slug = slugify(page.title)
        createPage({
          path: `/products/${slug}`,
          component: path.resolve('./src/templates/product.js'),
          context: { ...page.context, productid: page.productid },
        })
      })
      services.nodes.forEach(page => {
        const slug = slugify(page.title)
        createPage({
          path: `/services/${slug}`,
          component: path.resolve('./src/templates/service.js'),
          context: { ...page.context, serviceid: page.serviceid },
        })
      })
    })
  }

  createPage({
    path: '/',
    component: path.resolve('./src/templates/index.js'),
  })
  createPage({
    path: '/services',
    component: path.resolve('./src/templates/services.js'),
  })
  createPage({
    path: '/products',
    component: path.resolve('./src/templates/products.js'),
  })
  createPage({
    path: '/team',
    component: path.resolve('./src/templates/team.js'),
  })
  createPage({
    path: '/about',
    component: path.resolve('./src/templates/about.js'),
  })
  await createProductPages()
}

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Hack due to Tailwind ^1.1.0 using `reduce-css-calc` which assumes node
  // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig()
  config.node = {
    fs: 'empty',
  }
}
