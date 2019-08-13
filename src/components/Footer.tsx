import {
  faGithubSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'

import { blogInfo, userInfo } from '../constants'
import { Color, mixin } from '../styles'

interface FooterProps {
  isRoot: boolean
  isTag: boolean
}

const Footer: FC<FooterProps> = ({ isRoot, isTag }) => (
  <Container>
    <Inner>
      <BlogTitle>
        <StyledLink to="/">{blogInfo.title}</StyledLink>
      </BlogTitle>
      <CopyRight>Copyright © 2019. {userInfo.nickname}</CopyRight>
      {/* {!isRoot && !isTag && ( */}
        <div>
          <IconLink target="_blank" rel="noopener" href={userInfo.githubUrl}>
            <FontAwesomeIcon icon={faGithubSquare} size="lg" color="#8f8f8f" />
          </IconLink>
          <IconLink target="_blank" rel="noopener" href={userInfo.twitterUrl}>
            <FontAwesomeIcon icon={faTwitterSquare} size="lg" color="#8f8f8f" />
          </IconLink>
        </div>
      {/* )} */}
    </Inner>
  </Container>
)

const Container = styled.footer`
  ${mixin.flexColumnCenter}
  min-height: 140px;
  width: 100vw;
  background: ${Color.FONT.LIGHT};
  text-align: center;
`
const Inner = styled.div`
  margin: 30px 0;
`
const IconLink = styled.a`
  display: inline-block;
  padding: 0.1em 0.5em;
  cursor: pointer;
  :hover {
    > svg {
      color: ${Color.FONT.CHECKED};
    }
  }
`
const BlogTitle = styled.h4`
  padding-bottom: 8px;
  text-transform: none;
`
const StyledLink = styled(Link)`
  box-shadow: 1px solid ${Color.FONT.CHECKED};
  color: ${Color.FONT.CHECKED};
  :hover {
    opacity: 0.7;
  }
`
const CopyRight = styled.small`
  color: ${Color.FONT.DARK};
  display: inline-block;
  padding-bottom: 8px;
`

export default Footer
