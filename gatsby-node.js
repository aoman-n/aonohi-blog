const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   const blogPost = path.resolve(`./src/templates/blog-post.js`)
//   return graphql(
//     `
//       {
//         allMarkdownRemark(
//           sort: { fields: [frontmatter___date], order: DESC }
//           limit: 1000
//         ) {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//               frontmatter {
//                 title
//               }
//             }
//           }
//         }
//       }
//     `
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create blog posts pages.
//     const posts = result.data.allMarkdownRemark.edges

//     posts.forEach((post, index) => {
//       const previous = index === posts.length - 1 ? null : posts[index + 1].node
//       const next = index === 0 ? null : posts[index - 1].node
//       console.log('-----------------post: ')
//       console.dir(post)
//       createPage({
//         path: post.node.fields.slug,
//         component: blogPost,
//         context: {
//           slug: post.node.fields.slug,
//           previous,
//           next,
//         },
//       })
//     })

//     return null
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

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