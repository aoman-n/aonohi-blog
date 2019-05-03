import React, { FC } from "react"
import styled from 'styled-components'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from './Footer'

interface layoutProps {
  title: string,
  location: any,
}

const Layout: FC<layoutProps> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const tagPath = `${__PATH_PREFIX__}/tags/`
  const isRoot = location.pathname === rootPath
  const isTag = location.pathname === tagPath

  return (
    <Container>
      <Helmet>
        <html lang="ja" />
        <meta
          name="google-site-verification"
          content="Ea1K1N5NXjUJEV6XxsrA2va96TOyyIyuSdQE5gLLNu4"
        />
      </Helmet>
      <Header {...{ isRoot, isTag, title }} />
      {children}
      <Footer {...{ isRoot }} />
    </Container>
  )
}

const Container = styled.div`
  font-family: -apple-system-body, BlinkMacSystemFont, "Helvetica Neue",
    "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans Japanese",
    "游ゴシック  Medium", "Yu Gothic Medium", "メイリオ", meiryo, sans-serif;
  @media screen and (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`

export default Layout
