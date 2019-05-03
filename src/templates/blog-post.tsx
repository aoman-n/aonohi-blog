import React, { FC } from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import PostMetaInfo from '../components/PostMetaInfo'
import { mixin, color } from '../styles'

const Post: FC<any> = props => {
  const { data, location, pageContext: { next, previous } } = props
  const { title, author, content, publishedAt, tags } = data.contentfulPost
  const { avatar, name } = author
  const { html } = content.childMarkdownRemark
  return (
    <Layout location={location} title={title}>
      <Header>
        <HeadInner>
          <HeadContent>
            <BlogTitle><TopLink to={'/'}>Aonohi Blog</TopLink></BlogTitle>
            <PostTitle>
              <Text>{title}</Text>
            </PostTitle>
            <PostMetaInfo color={`#fff`} tags={tags} date={publishedAt} />
          </HeadContent>
        </HeadInner>
      </Header>
      <Main>
        <SnsBar></SnsBar>
        <Article>
          <div dangerouslySetInnerHTML={{ __html: html }} />
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
          nav bar<br/>
          test
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
  background: #2980B9;
  background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);
  background: linear-gradient(to left, #FFFFFF, #6DD5FA, #2980B9);
`
const HeadInner = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 80px calc(100% - 80px - 220px) 220px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
`
const HeadContent = styled.div`
  z-index: 2;
  grid-column: 2 / 3;
  animation: ${mixin.fadeInDown} .4s both;
  padding: 1em 1em 0 1em;
  max-width: 720px;
`
const BlogTitle = styled.h4`
  text-transform: none;
  margin: 0 0 1em;
  text-align: left;
`
const TopLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: #fee;
  :hover {
    opacity: 0.7;
  }
`
const PostTitle = styled.span`
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
  padding-top: 24px;
  padding-bottom: 40px;
  display: grid;
  grid-template-columns: 80px calc(100% - 250px - 80px) 250px;
  max-width: 1280px;
  width: calc(100% - 50px);
  margin-right: auto;
  margin-left: auto;
`
const SnsBar = styled.nav`
  position: sticky;
  top: 20vh;
  will-change: transform;
  margin-top: -20px;
  width: 80px;
  grid-column: 1 / 3;
`
const Article = styled.article`
  grid-column: 2 / 3;
  padding: 16px;
`
const NavBar = styled.nav`
  grid-column: 3 / 4;
  position: sticky;
  top: 0;
  will-change: transform;
  width: 250px;
  max-height: 100vh;
  margin-top: 3.5rem;
  background: #f6f6f6;
  padding: 15px;
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

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      publishedAt(formatString:"YYYY/MM/DD")
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

export default Post