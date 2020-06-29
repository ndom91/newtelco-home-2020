const path = require('path')
const slugify = require('slug')

// eslint-disable-next-line
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const locales = ['en', 'de']

  // Homepage
  locales.forEach(locale => {
    const prefix = locale === 'en' ? '/' : `/${locale}`
    createPage({
      path: `${prefix}`,
      component: path.resolve(`./src/templates/index.js`),
      context: { locale },
    })
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
            console.log(slug, page.title)
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
