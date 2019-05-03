import React, { useState, FC } from "react"
import styled from 'styled-components'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCell from '../components/PostCell'
import SideBar from '../components/SideBar'
import { color } from '../styles'

const IndexPage: FC<any> = props => {
  const { data, location } = props
  const posts = data.allContentfulPost.edges
  const siteTitle = data.site.siteMetadata.title
  const { title, description, author } = data.site.siteMetadata
  console.log(posts)
  return (
    <Layout title={siteTitle} location={location}>
      <SEO title="All posts" keywords={[`Gatsby`, `Application`, `React`, `Ruby`, `Ruby on Rails`]} />
      <BackgroundFlame>
        <Container>
          <Articles>
            {posts.map(({node}) => (
              <PostCell post={node} />
            ))}
          </Articles>
          <Nav>
            <SideBar />
          </Nav>
        </Container>
      </BackgroundFlame>
    </Layout>
  )
}
const BackgroundFlame = styled.div`
  /* background: ${color.lightBrown}; */
  /* background: white; */
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  max-width: 900px;
  margin: 0 auto;

`
const Articles = styled.main`
  max-width: 620px;
  min-width: 400px;
  padding: 20px 0;
  margin: 0 auto;
  padding: 0 20px;
`
const Nav = styled.nav`
  width: 28%;
  background: ${color.lightBrown};
  border-radius: 4px;
  box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);
  margin: 0;
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