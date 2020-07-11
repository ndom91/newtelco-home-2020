const siteConfig = require('./config/site-config')
const {
  NODE_ENV: NODE_ENV = 'development',
  URL: NETLIFY_SITE_URL = 'https://newtelco-dato.netlify.app',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
require('dotenv').config({
  path: '.env',
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
        name: 'NewTelco GmbH',
        short_name: 'NewTelco',
        start_url: '/',
        background_color: '#111',
        theme_color: '#67b246',
        display: 'minimal-ui',
        lang: 'en',
        icon: 'src/images/favicon.png',
        localize: [
          {
            start_url: '/de/',
            lang: 'de',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/', '/404'],
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
    /* { */
    /*   resolve: 'gatsby-plugin-web-font-loader', */
    /*   options: { */
    /*     google: { */
    /*       families: ['Raleway:100,300,500', 'Rubik:300,400&display=swap'], */
    /*     }, */
    /*     events: false, */
    /*     classes: false, */
    /*   }, */
    /* }, */
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/illustrations/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: false,
        develop: NODE_ENV !== 'development',
        tailwind: true,
        ignore: ['node_modules/@brainhubeu/react-carousel/lib/style.css'],
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: false,
      },
    },
    {
      resolve: '@bundle-analyzer/gatsby-plugin',
      options: { token: process.env.BUNDLE_ANALYZER_TOKEN },
    },
  ],
}
