import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { mixin } from '../styles'

interface headerProps {
  title: string,
  isRoot: boolean,
  isTag: boolean,
}

/*
TODO:
  ヘッダー背景を作成
  案:qiitaのトップヘッダー背景風、コードのタグを薄文字で散りばめる
*/

const Header: FC<headerProps> = ({ title, isRoot, isTag }) => {
  if (isRoot) {
    return (
      <Container>
        <Inner>
          <BlogTitleArea>
            <BlogTitle to="/">{title}</BlogTitle>
          </BlogTitleArea>
          <Description>Web developer blog.</Description>
        </Inner>
      </Container>
    )
  } else if(isTag) {
    return (
      <Container>
        <Inner>
          <BlogTitleArea>
            <BlogTitle to="/">{title}</BlogTitle>
          </BlogTitleArea>
          <Description>Tag page.</Description>
        </Inner>
      </Container>
    )
  } else {
    return null
  }
}

const Container = styled.header`
  color: white;
  height: 40vh;
  width: 100vw;
  background: #2980B9;
  background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);
  background: linear-gradient(to left, #FFFFFF, #6DD5FA, #2980B9);
  ${mixin.flexColumnCenter}
`
const Inner = styled.div`
  animation: ${mixin.fadeInDown} .4s both .3s;
  text-align: center;
`
const BlogTitleArea = styled.div``
const BlogTitle = styled(Link)`
  color: white;
  font-size: 2.4rem;
  font-weight: bold;
  box-shadow: none;
  :hover {
    opacity: 0.8;
  }
`
const Description = styled.small`
  font-size: 0.9rem;
`

export default Header