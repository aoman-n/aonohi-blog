import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

// class BlogIndex extends React.Component {
//   render() {
//     const { data } = this.props
//     const siteTitle = data.site.siteMetadata.title
//     const posts = data.allMarkdownRemark.edges
//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO
//           title="All posts"
//           keywords={[`blog`, `gatsby`, `javascript`, `react`]}
//         />
//         <Bio />
//         {posts.map(({ node }) => {
//           const title = node.frontmatter.title || node.fields.slug
//           return (
//             <div key={node.fields.slug}>
//               <h3
//                 style={{
//                   marginBottom: rhythm(1 / 4),
//                 }}
//               >
//                 <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
//                   {title}
//                 </Link>
//               </h3>
//               <small>{node.frontmatter.date}</small>
//               <p
//                 dangerouslySetInnerHTML={{
//                   __html: node.frontmatter.description || node.excerpt,
//                 }}
//               />
//             </div>
//           )
//         })}
//       </Layout>
//     )
//   }
// }

// export default BlogIndex

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `

// import React from "react"
// import { Link, graphql } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

const IndexPage = props => {
  const { data, location } = props
  const posts = data.allContentfulPost.edges
  const siteTitle = data.site.siteMetadata.title
  console.dir(location)
  return (
    <Layout title={siteTitle} location={location}>
      {posts.map(post => {
        const { title, author, content, tags, slug } = post.node
        return (
          <div key={title}>
            <Link to={`/${slug}`}><h3>{title}</h3></Link>
            {tags.map((tag, i) => (
              <span key={`${i}/${tag}`}>{tag}</span>
            ))}
            <p>{content.content.slice(0, 20)}</p>
          </div>
        )
      })}
    </Layout>
    // <Layout title="test title">
    //   {console.log(`location: ${props.location}`)}
    //   <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `Ruby`, `Ruby on Rails`]} />
    //   {data.allContentfulPost.edges.map(edge => {
    //     const { title, author, content, tags, slug } = edge.node
    //     return (
    //       <div key={title}>
    //         <Link to={`/posts/${slug}`}><h3>{title}</h3></Link>
    //         {author.avatar &&
    //           <img width={40} src={author.avatar.fixed.src} alt={author.name} />
    //         }
    //         <small>{author.name}</small>
    //         {tags.map((tag, i) => (
    //           <span key={`${i}/${tag}`}>{tag}</span>
    //         ))}
    //         <p>{content.content.slice(0, 20)}</p>
    //       </div>
    //     )
    //   })}
    // </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          tags
          slug
          content {
            content
          }
          author {
            name
            description {
              description
            }
            avatar {
              fixed {
                src
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage