/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Green Woods`,
    description: `Premium reclaimed wood from Bengaluru — restored, refined, and reimagined.`,
    author: `Siddharth Ranjan`,
    siteUrl: `http://localhost:8000/`, // Update to your actual domain when ready
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cormorant Garamond\:400,700`,
          `Lato\:400,700`
        ],
        display: 'swap',
      },
    },
  ],
}