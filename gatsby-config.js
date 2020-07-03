const siteConfig = require('./config/site-config')
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://newtelco-dato.netlify.app',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -90,
      },
    },
    {
      resolve: 'gatsby-plugin-advanced-sitemap',
      options: {
        output: siteConfig.sitemapPath,
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: siteConfig.siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteConfig.siteUrl,
        sitemap: `${siteConfig.siteUrl}${siteConfig.sitemapPath}`,
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/containers/Layout.js'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Newtelco Home',
        short_name: 'Newtelco',
        start_url: '/',
        background_color: '#222',
        theme_color: '#67b246',
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATO_CMS_KEY,
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        path: `${__dirname}/src/locales`,
        languages: ['en', 'de'],
        defaultLanguage: 'en',
        i18nextOptions: {
          preload: ['en', 'de'],
          fallbackLng: 'en',
          interpolation: {
            escapeValue: false,
          },
          react: {
            wait: true,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:100,300'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: NODE_ENV === 'development',
        develop: NODE_ENV === 'development',
        tailwind: true,
      },
    },
  ],
}
