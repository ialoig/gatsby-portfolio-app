const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    // Use `createFilePath` to turn markdown files in our `content/posts` directory into `/posts`
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: "content/posts/",
    })

    // Creates new query'able field with name of 'posts'
    createNodeField({
      node,
      name: "slug",
      value: `/posts${relativeFilePath}`,
    })
  }
}
