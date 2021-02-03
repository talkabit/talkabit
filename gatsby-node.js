const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (
        node.internal.type === "MarkdownRemark" &&
    node.frontmatter.type !== "default"
    ) {
        const slug = createFilePath({ node, getNode, basePath: "events" });
        createNodeField({
            node,
            name: "slug",
            value: `${node.frontmatter.type}${slug}`,
        });
    }
};
