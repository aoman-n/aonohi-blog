import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

import { userInfo, blogInfo } from '../constants'
import { color, mixin } from '../styles'

interface FooterProps {
  isRoot: boolean,
  isTag: boolean,
}

const Footer: FC<FooterProps> = ({ isRoot, isTag }) => (
  <Container>
    <Inner>
      {!isRoot && !isTag &&
        <Links>
          <IconLink
            target="_blank"
            rel="noopener"
            href={userInfo.githubUrl}
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              size="lg"
              color="#8f8f8f"
            />
          </IconLink>
          <IconLink
            target="_blank"
            rel="noopener"
            href={userInfo.twitterUrl}
          >
            <FontAwesomeIcon
              icon={faTwitterSquare}
              size="lg"
              color="#8f8f8f"
            />
          </IconLink>
        </Links>
      }
      <BlogTitle><StyledLink to="/">{blogInfo.title}</StyledLink></BlogTitle>
      <CopyRight>Copyright © 2019. {userInfo.nickname}</CopyRight>
    </Inner>
  </Container>
)

const Container = styled.footer`
  ${mixin.flexColumnCenter}
  min-height: 140px;
  width: 100vw;
  background: ${color.lightGray};
  text-align: center;
`
const Inner = styled.div`
  margin: 30px 0;
`
const IconLink = styled.a`
  display: inline-block;
  box-shadow: none;
  padding: 0.1em 0.5em;
  cursor: pointer;
  :hover {
    > svg {
      color: ${color.darkBlue};
    }
  }
`
const Links = styled.div`
  margin-bottom: 15px;
`
const BlogTitle = styled.h4`
  margin: 0;
  text-transform: none;
`
const StyledLink = styled(Link)`
  box-shadow: 1px solid ${color.darkBlue};
  color: ${color.darkBlue};
  :hover {
    opacity: 0.7;
  }
`
const CopyRight = styled.small`
`

export default Footer