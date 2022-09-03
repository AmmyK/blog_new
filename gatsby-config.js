/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

 module.exports = {
  siteMetadata: {
    title: "amam's Blog",
    description: "This Blog is Created by Gatsby",
    author: "amam"
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-image`
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_API_KEY
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins:[],
      },
    },
  ],
}