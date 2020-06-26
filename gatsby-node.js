const path = require('path')
const slugify = require('slug')

// eslint-disable-next-line
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const locales = ['en', 'de']

  /* Create pages defined in code, i.e. pages that are "baked-in", but have localized content defined in dato */
  const createBlogsPosts = new Promise((resolve, reject) => {
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
          // TODO: consider consolidating localized link creation to helper utility (see LocalizedLink)
          const slug = slugify(page.title)
          createPage({
            path: `${locale}/${slug}`,
            component: path.resolve(`./src/templates/products/index.js`),
            context: { locale: locale, title: page.title },
          })
        })
      })
    })
  })

  // eslint-disable-next-line
  return Promise.all([createBlogsPosts])
}
