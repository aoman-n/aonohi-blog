import { faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, Link } from 'gatsby'
import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import Layout from '../components/Layout'
import PostCell from '../components/PostCell'
import SideBar from '../components/SideBar'
import { Color } from '../styles'

const TagPage: FC<any> = props => {
  const { tag, allTags } = props.pageContext
  const { location } = props
  const { title } = props.data.site.siteMetadata
  const posts = props.data.allContentfulPost.edges
  const postCount = posts.length

  return (
    <Layout location={location} title={title}>
      <Container>
        <Articles>
          <SectionTitle>
            <StrongText withUnderLine={true}>{tag} </StrongText>に関する記事{' '}
            <StrongText>{postCount}</StrongText> 件
          </SectionTitle>
            {posts.map(({ node }) => (
              <PostCell key={node.id} post={node} />
            ))}
          <AllTagList>
            <SectionTitle>タグ一覧</SectionTitle>
            <TagListFrame>
              {allTags.map((tag, index) => (
                <Tag to={`/tags/${tag.toLowerCase()}`} key={index}>
                  <TagText>{tag}</TagText>
                  <FontAwesomeIcon icon={faTag} size="xs" />
                </Tag>
              ))}
            </TagListFrame>
          </AllTagList>
        </Articles>
        <Nav>
          <SideBar />
        </Nav>
      </Container>
    </Layout>
  )
}

interface StrongTextProps {
  withUnderLine?: boolean
}

const Container = styled.div`
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
`
const Articles = styled.main`
  width: calc(100% - 320px);
  margin-right: 100px;
`
const SectionTitle = styled.div`
  color: #808080;
  padding: 20px 0;
`
const StrongText = styled.span<StrongTextProps>`
  color: ${Color.FONT.BASE};
  font-size: 1.3em;
  font-weight: bold;
  text-decoration: ${props => (props.withUnderLine ? `underline` : `none`)};
`
const AllTagList = styled.section`
  padding: 20px 0;
`
const TagListFrame = styled.div`
  border: 2px solid #eee;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`
const Tag = styled(Link)`
  color: white;
  font-size: 0.8em;
  background: ${Color.FONT.BASE};
  border: 1px solid white;
  box-sizing: border-box;
  border-radius: 3px 6px 3px 6px;
  padding: 4px 8px;
  margin-right: 7px;
  transition: 0.1s;
  :hover {
    color: ${Color.FONT.BASE};
    background: white;
    border: 1px solid ${Color.FONT.BASE};
  }
`
const TagText = styled.span`
  margin-right: 5px;
`
const Nav = styled.nav`
  width: 320px;
`

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(limit: 1000, filter: { tags: { in: [$tag] } }) {
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
        }
      }
    }
  }
`

export default TagPage
