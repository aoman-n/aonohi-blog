// import React from "react"
// import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { rhythm, scale } from "../utils/typography"

// class BlogPostTemplate extends React.Component {
//   render() {
//     const post = this.props.data.markdownRemark
//     const siteTitle = this.props.data.site.siteMetadata.title
//     const { previous, next } = this.props.pageContext
//     const { tags } = this.props.data.markdownRemark.frontmatter
//     console.log(previous)
//     console.log(next)
//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO
//           title={post.frontmatter.title}
//           description={post.frontmatter.description || post.excerpt}
//         />
//         <h1>{post.frontmatter.title}</h1>
//         <p>
//           {tags.length > 0 && tags.map((tag, i) => <small key={`${i}/tag`}>{tag} </small>)}
//         </p>
//         <p
//           style={{
//             ...scale(-1 / 5),
//             display: `block`,
//             marginBottom: rhythm(1),
//             marginTop: rhythm(-1),
//           }}
//         >
//           {post.frontmatter.date}
//         </p>
//         <div dangerouslySetInnerHTML={{ __html: post.html }} />
//         <hr
//           style={{
//             marginBottom: rhythm(1),
//           }}
//         />
//         <Bio />

//         <ul
//           style={{
//             display: `flex`,
//             flexWrap: `wrap`,
//             justifyContent: `space-between`,
//             listStyle: `none`,
//             padding: 0,
//           }}
//         >
//           <li>
//             {previous && (
//               <Link to={previous.fields.slug} rel="prev">
//                 ← {previous.frontmatter.title}
//               </Link>
//             )}
//           </li>
//           <li>
//             {next && (
//               <Link to={next.fields.slug} rel="next">
//                 {next.frontmatter.title} →
//               </Link>
//             )}
//           </li>
//         </ul>
//       </Layout>
//     )
//   }
// }

// export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//         tags
//       }
//     }
//   }
// `

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"

const Post = props => {
  const { data, location } = props
  const { title, author, content, publishedAt, tags } = data.contentfulPost
  const { avatar } = author
  const { html } = content.childMarkdownRemark
  console.log(content)
  return (
    <Layout location={location} title={title}>
      <h2>{title}</h2>
      {tags.length > 0 && (
        <p>
          {tags.map(tag => <span>{tag} </span>)}
        </p>
      )}
      {avatar && (
        <img
          width={40} height={40 / avatar.fixed.width * avatar.fixed.height}
          src={avatar.fixed.src} alt={author.name}
        />
      )}
      <small>
        {author.name} | {publishedAt}
      </small>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      publishedAt(formatString:"YYYY/MM/DD")
      author {
        name
        avatar {
          fixed {
            src
            width
            height
          }
        }
      }
      tags
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default Post