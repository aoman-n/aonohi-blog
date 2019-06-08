import { graphql, Link } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import PostMetaInfo from '../components/PostMetaInfo'
import ScrollSyncToc from '../components/ScrollSyncToc'
import SEO from '../components/Seo'
import { color, mixin } from '../styles'

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      publishedAt(formatString: "YYYY/MM/DD")
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

const Post: FC<any> = props => {
  const {
    data,
    location,
    pageContext: { next, previous, heading, _html, slug },
  } = props
  console.log(props)
  const { title, author, content, publishedAt, tags } = data.contentfulPost
  const { avatar, name } = author
  const { html } = content.childMarkdownRemark
  return (
    <Layout location={location} title={title}>
      <SEO
        isRoot={false}
        title={title}
        description="test"
        postUrl="test"
        postDate="test"
      />
      <Header>
        <HeadInner>
          <HeadContent>
            <BlogTitle>
              <TopLink to={'/'}>Aonohi Blog</TopLink>
            </BlogTitle>
            <PostTitle>
              <Text>{title}</Text>
            </PostTitle>
            <PostMetaInfo color={`#fff`} tags={tags} date={publishedAt} />
          </HeadContent>
        </HeadInner>
      </Header>
      <Main>
        <Article>
          <MarkDownStyle dangerouslySetInnerHTML={{ __html: html }} />
          <Logly>
            <li>
              {previous && (
                <PageLink to={previous.slug} rel="prev">
                  ← 前の記事:「{previous.title}」
                </PageLink>
              )}
            </li>
            <li>
              {next && (
                <PageLink to={next.slug} rel="next">
                  次の記事:「{next.title}」→
                </PageLink>
              )}
            </li>
          </Logly>
        </Article>
        <NavBar>
          {/* <NavBarInner> */}
            <ScrollSyncToc heading={heading} />
          {/* </NavBarInner> */}
        </NavBar>
      </Main>
    </Layout>
  )
}

const Header = styled.header`
  position: relative;
  height: 40vh;
  width: 100vw;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: white;
  background: #2980b9;
  background: -webkit-linear-gradient(to right, #ffffff, #6dd5fa, #2980b9);
  background: linear-gradient(to left, #ffffff, #6dd5fa, #2980b9);
`
const HeadInner = styled.div`
  display: grid;
  grid-template-columns: 100px calc(100% - 100px - 300px) 300px;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
`
const HeadContent = styled.div`
  z-index: 2;
  grid-column: 2 / 3;
  animation: ${mixin.fadeInDown} 0.4s both 0.3s;
  padding: 1em 1em 0 1em;
  max-width: 720px;

  @media (max-width: 768px) {
    grid-column: 1 / 4;
    margin: 0 8vw;
  }

  @media (max-width: 480px) {
    margin: 0 10px;
  }
`
const BlogTitle = styled.h4`
  text-transform: none;
  margin: 0 0 1em;
  text-align: left;
`
const TopLink = styled(Link)`
  color: #fee;
  :hover {
    opacity: 0.7;
  }
`
const PostTitle = styled.span`
  font-size: 0.8em;
  box-shadow: none;
  margin-top: 0.5em;
  margin-bottom: 1em;
  display: block;
  text-align: left;
`
const Text = styled.h1`
  color: white;
  font-weight: 200;
  font-size: 2.2em;
  line-height: 1.4;
  margin: 0;
`
const Main = styled.main`
  display: grid;
  grid-template-columns: 100px calc(100% - 100px - 300px) 300px;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 480px) {
  }
`
const Article = styled.article`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  padding: 1em;

  @media (max-width: 1200px) {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
    margin: 0 20px;
  }

  @media (max-width: 768px) {
    /* grid-column: 1 / 4; */
    margin: 0 8vw;
  }

  @media (max-width: 480px) {
    /* grid-column: 1 / 4; */
    margin: 0 10px;
  }
`
const MarkDownStyle = styled.div`
  color: ${color.fontGray};
  animation: ${mixin.fadeInDown} 0.4s both 0.3s;
  ${mixin.markdownStyle}
`
const NavBar = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  max-height: 100vh;
  overflow-y: auto;
  will-change: transform;
  top: 12px;
  padding: 12px 24px;
  margin-top: 34px;
  grid-column: 3/4;
  grid-row: 1/2;

  @media (max-width: 768px) {
    display: none;
  }
`
const Logly = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`
const PageLink = styled(Link)`
  font-weight: bold;
  color: ${color.darkBlue};
`

export default Post
