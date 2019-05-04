import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/Layout"
import SideBar from '../components/SideBar'
import PostCell from '../components/PostCell'
import { color } from '../styles'

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
            <StrongText withUnderLine={true}>{tag} </StrongText>に関する記事 <StrongText>{postCount}</StrongText> 件
          </SectionTitle>
          {posts.map(({node}) => (
            <PostCell key={node.id} post={node} />
          ))}
          <AllTagList>
            <SectionTitle>タグ一覧</SectionTitle>
            <TagListFrame>
              {allTags.map((tag, index) => (
                <Tag to={`/tags/${tag.toLowerCase()}`} key={index}>
                  <TagText>{tag}</TagText>
                  <FontAwesomeIcon
                    icon={faTag}
                    size="xs"
                  />
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
  withUnderLine?: boolean,
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
const StrongText = styled.span<StrongTextProps>`
  color: ${color.fontGray};
  font-size: 1.3em;
  font-weight: bold;
  text-decoration: ${props => props.withUnderLine ? `underline` : `none`};
`
const AllTagList = styled.section`
  padding: 20px 0;
`
const TagListFrame = styled.div`
  border: 2px solid #eee;
  border-radius: 4px;
  min-height: 85px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`
const Tag = styled(Link)`
  color: white;
  font-size: 0.8em;
  background: ${color.darkGray};
  border: 1px solid white;
  box-sizing: border-box;
  border-radius: 3px 6px 3px 6px;
  padding: 4px 8px;
  margin-right: 7px;
  :hover {
    transition: .2s;
    color: ${color.darkGray};
    background: white;
    border: 1px solid ${color.darkGray};
  }
`
const TagText = styled.span`
  margin-right: 5px;
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

export default TagPage