import { faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'

import { Color, mixin } from '../styles'

interface PostCellProps {
  post: any
}

const PostCell: FC<PostCellProps> = ({ post }) => {
  const { title, author, content, tags, slug, publishedAt } = post
  const desc = content.childMarkdownRemark.excerpt.slice(0, 80)

  return (
    <Container>
      <div>
        {tags.map((tag, index) => (
          <Tag to={`/tags/${tag.toLowerCase()}`} key={index}>
            <TagText>{tag}</TagText>
            <FontAwesomeIcon icon={faTag} size="xs" />
          </Tag>
        ))}
      </div>
      <PostLink to={`/${slug}`}>
        <Title>{title}</Title>
        <Description>{desc}</Description>
        <Day>{publishedAt}</Day>
      </PostLink>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px 0;
  animation: ${mixin.fadeInDown} 0.4s both 0.3s;
  border-bottom: 1px solid #eee;
`
const Tag = styled(Link)`
  color: white;
  font-size: 0.8em;
  background: ${Color.FONT.BASE};
  box-sizing: border-box;
  border-radius: 3px 6px 3px 6px;
  padding: 4px 8px;
  margin-right: 7px;
  :hover {
    opacity: 0.8;
  }
`
const TagText = styled.span`
  margin-right: 5px;
`
const PostLink = styled(Link)`
  text-decoration: none;
  box-shadow: none;
  color: ${Color.FONT.TITLE};
  :hover {
    > h3, p, small {
      color: ${Color.FONT.CHECKED};
    }
  }
`
const Title = styled.h3`
  font-size: 1.2em;
  margin-top: 15px;
  margin-bottom: 7px;
`
const Description = styled.p`
  opacity: 0.63;
  font-size: 0.9em;
  line-height: 1.6;
  word-break: break-all;
  overflow-y: hidden;
  max-height: ${14 * 1.6 * 3}px;
  margin: 0;
`
const Day = styled.small`
  opacity: 0.63;
  margin: 0;
  font-size: 0.8em;
  line-height: 1.6;
  word-break: break-all;
  overflow-y: hidden;
  max-height: ${14 * 1.6 * 3}px;
`

export default PostCell
