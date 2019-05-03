import React, { useState } from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"
import Header from '../components/header'

const IndexPage = props => {
  const [count, setCount] = useState(0)
  const { data, location } = props
  const posts = data.allContentfulPost.edges
  const siteTitle = data.site.siteMetadata.title
  const { title, description, author } = data.site.siteMetadata
  return (
    <Layout title={siteTitle} location={location}>
      <Header {...{ title, description, author }} />
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>plus</button>
      </div>
      <SEO title="All posts" keywords={[`Gatsby`, `Application`, `React`, `Ruby`, `Ruby on Rails`]} />
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
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
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