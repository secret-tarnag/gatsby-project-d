module.exports = {
  siteMetadata: {
    title: 'Democrable',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content`
      }
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
  ],
}