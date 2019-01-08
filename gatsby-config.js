module.exports = {
  siteMetadata: {
    title: 'Democrable',
    languages: {
      langs: ['en', 'fr', 'pt'],
      defaultLangKey: 'en',
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: 'en',
        useLangKeyLayout: true,
        markdownRemark: {
          postPage: 'src/templates/outletsTemplate.tsx',
          query: `
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug,
                    langKey
                  }
                }
              }
            }
          }
          `
        }
      }
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
  ],
}