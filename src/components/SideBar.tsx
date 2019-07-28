import {
  faGithubSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import styled from 'styled-components'

import { userInfo } from '../constants'
import { Color } from '../styles'

// import { StaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"

const SideBar: FC<any> = () => {
  return (
    <Base>
      <SideSectionTitle>PROFILE</SideSectionTitle>
      <div>
        <IconLink target="_blank" rel="noopener" href={userInfo.githubUrl}>
          <FontAwesomeIcon icon={faGithubSquare} size="lg" color="#8f8f8f" />
        </IconLink>
        <IconLink target="_blank" rel="noopener" href={userInfo.twitterUrl}>
          <FontAwesomeIcon icon={faTwitterSquare} size="lg" color="#8f8f8f" />
        </IconLink>
      </div>
      <SideSectionTitle>Navigation</SideSectionTitle>
      <SideSection>
        {/* <Tag to="/tags/gatsby">gatsby</Tag> */}
        {/* <Tag to="/tags/netlify">netlify</Tag> */}
      </SideSection>
    </Base>
  )
}

const Base = styled.aside`
  box-sizing: border-box;
  padding: 20px 12px;
  background: ${Color.BROWN.SUPER_LIGHT};
  border-radius: 4px;
  box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.2);
`
const SideSection = styled.div`
  margin: 12px 0 24px;
`
const SideSectionTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  letter-spacing: 1px;
  color: #30627a;
`
const IconLink = styled.a`
  display: inline-block;
  box-shadow: none;
  padding: 0.1em 0.5em;
  border-bottom: 2px solid ${Color.BROWN.SUPER_LIGHT};
  cursor: pointer;
  :hover {
    border-bottom: 2px solid ${Color.FONT.CHECKED};
    > svg {
      color: ${Color.FONT.CHECKED};
    }
  }
`

export default SideBar
