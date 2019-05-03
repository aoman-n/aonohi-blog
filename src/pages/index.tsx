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
  /* display: grid; */
  /* grid-template-columns: calc(100% - 300px) 300px; */
  /* max-width: 1280px; */
  /* width: calc(100% - 50px); */
  display: flex;
  justify-content: center;
  padding: 20px 0;
  max-width: 900px;
  margin: 0 auto;

`
const Articles = styled.main`
  max-width: 620px;
  min-width: 400px;
  /* width: 100%; */
  padding: 20px 0;
  margin: 0 auto;
  /* grid-column: 1 / 2; */
  padding: 0 20px;
`
const Nav = styled.nav`
  width: 28%;
  background: ${color.lightBrown};
  border: 8px solid white;
  border-radius: 4px;
  box-shadow: 0 1px 1px 0px rgba(0,0,0,0.2);
  margin: 0;
  /* text-align: center; */
  /* grid-column: 2 / 2; */
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