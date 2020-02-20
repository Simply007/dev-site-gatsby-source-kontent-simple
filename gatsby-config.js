/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "@simply007org/gatsby-source-kontent-simple",
      options: {
        projectId: "4e9bdd7a-2db8-4c33-a13a-0c368ec2f108",
        languageCodenames: [
          "default"
        ]
      }
    }
  ]
}
