import { graphql, Link } from 'gatsby'
import React, { FC, useState } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import PostCell from '../components/PostCell'
import SEO from '../components/Seo'
import SideBar from '../components/SideBar'
import { color } from '../styles'

const IndexPage: FC<any> = props => {
  const { data, location } = props
  const posts = data.allContentfulPost.edges
  const siteTitle = data.site.siteMetadata.title
  const { title, description, author } = data.site.siteMetadata

  return (
    <Layout title={siteTitle} location={location}>
      <SEO isRoot={true} />
      <Container>
        <Articles>
        {posts.map(({ node }) => (
            <PostCell post={node} key={node.id} />
          ))}
        </Articles>
        <Nav>
          <SideBar />
        </Nav>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  max-width: 1080px;
  width: 75%;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
`
const Articles = styled.main`
  width: calc(100% - 300px);
  margin-right: 60px;
`
const Nav = styled.nav`
  width: 300px;
`

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
          id
          title
          tags
          slug
          publishedAt(formatString: "YYYY/MM/DD")
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
