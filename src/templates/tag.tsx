import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layout"
import SideBar from '../components/SideBar'
import PostCell from '../components/PostCell'
import PostMetaInfo from '../components/PostMetaInfo'
import { mixin, color } from '../styles'

const Tag: FC<any> = props => {
  const { tag } = props.pageContext
  const { location } = props
  const { title } = props.data.site.siteMetadata
  const posts = props.data.allContentfulPost.edges
  const postCount = posts.length
  return (
    <Layout location={location} title={title}>
      <Container>
        <Articles>
          <SectionTitle>
            <div><TagName>{tag} </TagName>に関する記事 <Count>{postCount}</Count> 件</div>
          </SectionTitle>
          {posts.map(({node}) => (
            <PostCell key={node.id} post={node} />
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
  display: flex;
  justify-content: center;
  padding: 20px 0;
  max-width: 900px;
  margin: 0 auto;
`
const Articles = styled.main`
  max-width: 700px;
  min-width: 400px;
  padding: 20px 0;
  margin: 0 auto;
  padding: 0 20px;
`
const SectionTitle = styled.div`
  color: #808080;
  padding: 20px 0;
`
const strongStyle = css`
  color: ${color.fontGray};
  font-size: 1.3em;
  font-weight: bold;
`
const TagName = styled.span`
  text-decoration: underline;
  ${strongStyle}
`
const Count = styled.span`
  ${strongStyle}
`
const Nav = styled.nav`
  width: 28%;
`

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(
      limit: 1000,
      filter: { tags: { in: [$tag] } }
    ) {
      edges {
        node {
          id
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
        }
      }
    }
  }
`

export default Tag