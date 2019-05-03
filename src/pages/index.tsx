import React, { useState, FC } from "react"
import styled from 'styled-components'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCell from '../components/PostCell'
import SideBar from '../components/SideBar'

const Container = styled.div`
  display: grid;
  grid-template-columns: calc(100% - 300px) 300px;
  max-width: 1280px;
  width: calc(100% - 50px);
  margin-right: auto;
  margin-left: auto;
`
const Articles = styled.main`
  max-width: 620px;
  width: 100%;
  margin: 20px auto;
  grid-column: 1 / 2;
  padding: 0 20px;
`
const Nav = styled.nav`
  grid-column: 2 / 2;
`

const IndexPage: FC<any> = props => {
  // const [count, setCount] = useState(0)
  const { data, location } = props
  const posts = data.allContentfulPost.edges
  const siteTitle = data.site.siteMetadata.title
  const { title, description, author } = data.site.siteMetadata
  console.log(posts)
  return (
    <Layout title={siteTitle} location={location}>
      <SEO title="All posts" keywords={[`Gatsby`, `Application`, `React`, `Ruby`, `Ruby on Rails`]} />
      <Container>
        <Articles>
          {posts.map(({node}): any => (
            <PostCell post={node} />
          ))}
          {/* <PostList postList={posts.map(post => post.node)} /> */}
          {/* {posts.map(post => {
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
          })} */}
        </Articles>
        <Nav>
          <SideBar />
        </Nav>
      </Container>
      {/* <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>plus</button>
      </div> */}
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
          publishedAt(formatString:"YYYY/MM/DD")
          content {
            content
            childMarkdownRemark {
              excerpt
            }
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