const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

/* heading生成のための */
const remark = require('remark')
const visit = require('unist-util-visit')
const mdastToString = require('mdast-util-to-string')
const GithubSlugger = require('github-slugger')
const githubSlugger = new GithubSlugger()

// マークダウン文字列から目次情報を取得する
function _getToc(rawMarkdownBody) {
  const headings = _extractToc(rawMarkdownBody);
  return _attachParents(headings)
}

// マークダウン文字列から目次情報を抽出する
function _extractToc(rawMarkdownBody) {
  githubSlugger.reset();

  const result = []
  const ast = remark().parse(rawMarkdownBody);
  visit(ast, 'heading', child => {
    const value = child.children[0].value
    const id = githubSlugger.slug(value || mdastToString(child))
    const depth = child.depth
    result.push({
      value,
      id,
      depth
    })
  })

  return result
}

/** ヘッダーにおける最小の深さ（h2タグの時） */
const MIN_HEADER_DEPTH = 2

// ヘッダーに親ヘッダーの参照配列をつける
function _attachParents(headings) {
  // いったん逆にする
  // 下から操作して、子に親の参照を持たせる
  headings.reverse()
  const result = headings.map((h, i) => {
    const lastIndex = headings.length -1
    if (i === lastIndex) {
      return h;
    }

    let currentDepth = h.depth

    for (let targetIndex = i + 1; targetIndex <= lastIndex; targetIndex++) {
      // 最も大きいヘッダの場合は、親は存在しないので捜査終了
      if (currentDepth === MIN_HEADER_DEPTH) {
        break;
      }

      const targetH = headings[targetIndex]

      // (パターン1)今よりも小さければ親なので親配列に追加
      if (currentDepth > targetH.depth) {
        if (h.parents) {
          h.parents.push(targetH)
        } else {
          h.parents = [targetH]
        }
        // 深さに親の深さを設定に捜査継続
        currentDepth = targetH.depth
      } else {
        // (パターン2)今よりも大きければ、その先に親がある可能性があるので
        // 深さはそのままで捜査継続

        // (パターン3)同じであれば兄弟なので、その先に親がある可能性があるので
        // 深さはそのままで捜査継続
      }
    }

    return h
  });

  // 逆なので戻してからreturn
  return result.reverse()
}

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
              content {
                content
              }
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

        const { content: markdownBody } = post.node.content;
        const heading = _getToc(markdownBody);

        createPage({
          path: post.node.slug,
          component: blogPost,
          context: {
            slug: post.node.slug,
            previous,
            next,
            heading
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