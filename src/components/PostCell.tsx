import React, { FC } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import { color, mixin } from '../styles'

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
            <FontAwesomeIcon
              icon={faTag}
              size="xs"
            />
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
  animation: ${mixin.fadeInDown} .4s both .3s;
  border-bottom: 1px solid #eee;
`
const Tag = styled(Link)`
  color: white;
  font-size: 0.8em;
  background: ${color.darkGray};
  border: 1px solid white;
  box-sizing: border-box;
  border-radius: 3px 6px 3px 6px;
  padding: 4px 8px;
  margin-right: 7px;
  :hover {
    transition: .2s;
    color: ${color.darkGray};
    background: white;
    border: 1px solid ${color.darkGray};
  }
`
const TagText = styled.span`
  margin-right: 5px;
`
const PostLink = styled(Link)`
  text-decoration: none;
  box-shadow: none;
  color: ${color.fontGray};
  :hover {
    > h3 {
      color: ${color.darkBlue};
    }
  }
`
const Title = styled.h3`
  font-size: 1.3em;
  margin-top: 15px;
  margin-bottom: 7px;
`
const Description = styled.p`
  opacity: 0.63;
  font-size: 14px;
  line-height: 1.6;
  word-break: break-all;
  overflow-y: hidden;
  max-height: ${14 * 1.6 * 3}px;
  margin: 0;
`
const Day = styled.small`
  opacity: 0.63;
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  word-break: break-all;
  overflow-y: hidden;
  max-height: ${14 * 1.6 * 3}px;
`

export default PostCell