const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const tagPage = path.resolve(`./src/templates/tag.tsx`)
  const tagListPage = path.resolve(`./src/templates/tagList.tsx`)

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost {
          edges {
            node {
              slug
              title
              tags
              publishedAt
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        throw result.errors
      }
      /* 記事詳細ページの生成 */
      const posts = result.data.allContentfulPost.edges
      posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node
        createPage({
          path: post.node.slug,
          component: blogPost,
          context: {
            slug: post.node.slug,
            previous,
            next
          }
        })
      })

      /* タグ詳細ページの生成 */
      let tags = []
      posts.forEach(post => {
        tags.push(...post.node.tags)
      })
      tags = new Set(tags)
      tags = Array.from(tags)
      tags.forEach((tag, index) => {
        createPage({
          path: `/tags/${tag.toLowerCase()}/`,
          component: tagPage,
          context: {
            tag,
            allTags: tags
          },
        })
      })

      /* タグ一覧ページの生成 */
      createPage({
        path: `/tags`,
        component: tagListPage
      })

      resolve()
    })
  })
}