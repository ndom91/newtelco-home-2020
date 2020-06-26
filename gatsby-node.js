const path = require('path');

// eslint-disable-next-line
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const locales = ['en', 'de'];

  /* Create pages defined in code, i.e. pages that are "baked-in", but have localized content defined in dato */
  const createBlogsPosts = new Promise((resolve, reject) => {
    locales.map(locale => {
      graphql(`
        {
          index: datoCmsIndex(locale: { eq: "${locale}" }) {
            locale
          }
          secondPage: datoCmsSecondpage(locale: { eq: "${locale}" }) {
            locale
            slug
          }
        }
      `).then(result => {
        ['index', 'secondPage'].forEach(pageId => {
          const pageData = result.data[pageId];
          // TODO: move "en" to constants file
          // TODO: consider consolidating localized link creation to helper utility (see LocalizedLink)
          const localePrefix =
            pageData.locale === 'en' ? '' : `/${pageData.locale}`;
          const slug = pageData.slug ? pageData.slug : '';
          createPage({
            path: `${localePrefix}/${slug}`,
            component: path.resolve(`./src/templates/dato/${pageId}.tsx`), // TODO: add a check to ensure the page template exists?
            context: { locale: pageData.locale }, // TODO: coallesce with default locale?
          });
        });
      });
    });
  });

  // eslint-disable-next-line
  return Promise.all([createBlogsPosts]);
};
