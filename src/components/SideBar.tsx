import React, { FC } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio: any = () => {
  return (
    <Base>
      <SideSectionTitle>PROFILE</SideSectionTitle>
      <SideSection>
        {/* <Profile /> */}
        eeeeeeeeeeeeeeeeeee
      </SideSection>
      <SideSectionTitle>Navigation</SideSectionTitle>
      <SideSection>
        articles
        {/* <Tag to="/tags/gatsby">gatsby</Tag> */}
        {/* <Tag to="/tags/netlify">netlify</Tag> */}
      </SideSection>
    </Base>
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

const Base = styled.aside`
  box-sizing: border-box;
  padding: 20px 15px;
  /* min-width: 320px;
  padding: 32px 12px;
  background-color: #F7F8FA;
  @media (min-width: 980px) {
    width: 320px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 20px;
    border-left: 1px #eee solid;
  } */
`

const SideSection = styled.div`
  /* margin: 12px 0 24px; */
`

const SideSectionTitle = styled.h2`
  /* font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  letter-spacing: 1px;
  color: #30627a; */
`

export default Bio