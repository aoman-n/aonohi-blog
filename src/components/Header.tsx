import { Link } from 'gatsby'
import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { mixin } from '../styles'

interface HeaderProps {
  title: string
  isRoot: boolean
  isTag: boolean
}

interface InnerPorps {
  fadeIn?: boolean
}

/*
TODO:
  ヘッダー背景を作成
  案:qiitaのトップヘッダー背景風、コードのタグを薄文字で散りばめる
*/

const Header: FC<HeaderProps> = ({ title, isRoot, isTag }) => {
  if (isRoot) {
    return (
      <Container>
        <Inner fadeIn={true}>
          <BlogTitleArea>
            <BlogTitle to="/">{title}</BlogTitle>
          </BlogTitleArea>
          <Description>Web developer blog.</Description>
        </Inner>
      </Container>
    )
  } else if (isTag) {
    return (
      <Container>
        <Inner fadeIn={false}>
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
  background: #2980b9;
  background: -webkit-linear-gradient(to right, #ffffff, #6dd5fa, #2980b9);
  background: linear-gradient(to left, #ffffff, #6dd5fa, #2980b9);
  ${mixin.flexColumnCenter}
`
const Inner = styled.div<InnerPorps>`
  text-align: center;
  ${props =>
    props.fadeIn &&
    css`
      animation: ${mixin.fadeInDown} 0.4s both 0.3s;
    `}
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
