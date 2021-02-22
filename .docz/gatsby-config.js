const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Finscale Frontend',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/armand/Documents/code/finscale-frontend/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Finscale Frontend',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/armand/Documents/code/finscale-frontend',
          templates:
            '/Users/armand/Documents/code/finscale-frontend/node_modules/docz-core/dist/templates',
          docz: '/Users/armand/Documents/code/finscale-frontend/.docz',
          cache: '/Users/armand/Documents/code/finscale-frontend/.docz/.cache',
          app: '/Users/armand/Documents/code/finscale-frontend/.docz/app',
          appPackageJson:
            '/Users/armand/Documents/code/finscale-frontend/package.json',
          appTsConfig:
            '/Users/armand/Documents/code/finscale-frontend/tsconfig.json',
          gatsbyConfig:
            '/Users/armand/Documents/code/finscale-frontend/gatsby-config.js',
          gatsbyBrowser:
            '/Users/armand/Documents/code/finscale-frontend/gatsby-browser.js',
          gatsbyNode:
            '/Users/armand/Documents/code/finscale-frontend/gatsby-node.js',
          gatsbySSR:
            '/Users/armand/Documents/code/finscale-frontend/gatsby-ssr.js',
          importsJs:
            '/Users/armand/Documents/code/finscale-frontend/.docz/app/imports.js',
          rootJs:
            '/Users/armand/Documents/code/finscale-frontend/.docz/app/root.jsx',
          indexJs:
            '/Users/armand/Documents/code/finscale-frontend/.docz/app/index.jsx',
          indexHtml:
            '/Users/armand/Documents/code/finscale-frontend/.docz/app/index.html',
          db:
            '/Users/armand/Documents/code/finscale-frontend/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
