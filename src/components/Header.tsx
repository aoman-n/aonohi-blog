import { Link } from 'gatsby'
import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Color, mixin, Size } from '../styles'

interface HeaderProps {
  title: string
  isRoot: boolean
  isTag: boolean
}

/*
TODO:
  ヘッダー背景を作成
  案:qiitaのトップヘッダー背景風、コードのタグを薄文字で散りばめる
*/

const Header: FC<HeaderProps> = ({ title, isRoot, isTag }) => {
  return (
    <Container>
      <Inner fadeIn={isRoot}>
        <BlogTitle to="/">{title}</BlogTitle>
        <Description>Webエンジニアのブログ。勉強したことなどを書いてます。</Description>
      </Inner>
    </Container>
  )
}

interface InnerPorps {
  fadeIn?: boolean
}

const Container = styled.header`
  height: ${Size.HEADER_HEIGHT}px;
  width: 100vw;
  background: ${Color.THEME.PRIMARY};
  box-shadow: 0 1px 8px 0 rgba(0,0,0,0.50);
`
const Inner = styled.div<InnerPorps>`
  max-width: 1180px;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props =>
    props.fadeIn &&
    css`
      animation: ${mixin.fadeInDown} 0.4s both 0.3s;
    `}
`
const BlogTitle = styled(Link)`
  color: white;
  font-size: 1.8em;
  font-weight: 700;
  text-decoration: none;
  :hover {
    opacity: 0.8;
  }
`
const Description = styled.small`
  padding-top: 12px;
  font-size: 0.8em;
  color: white;
`

export default Header
