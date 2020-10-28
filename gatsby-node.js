const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (
    node.internal.type === "MarkdownRemark" &&
    node.frontmatter.type !== "default"
  ) {
    const slug = createFilePath({ node, getNode, basePath: "events" })
    createNodeField({
      node,
      name: "slug",
      value: `${node.frontmatter.type}${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/events/" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.fields)
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/activity.js"),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
  })
}
