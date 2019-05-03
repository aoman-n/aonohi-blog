import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { color, mixin } from '../styles'

interface postCellProps {
  post: any
}

const PostCell: FC<postCellProps> = ({ post }) => {
  const { title, author, content, tags, slug, publishedAt } = post
  const desc = content.childMarkdownRemark.excerpt.slice(0, 80)
  return (
    <PostLink to={`/${slug}`}>
      <TagList>
        {tags.map(tag => (
          <Tag>{tag}</Tag>
        ))}
      </TagList>
      <Title>{title}</Title>
      <Description>{desc}</Description>
      <Day>{publishedAt}</Day>
    </PostLink>
  )
}

const PostLink = styled(Link)`
  padding: 20px 0;
  box-shadow: none;
  color: ${color.fontGray};
  display: block;
  text-decoration: none;
  animation: ${mixin.fadeInDown} .4s both .3s;
  border-bottom: 1px solid #eee;
  :hover {
    > h3 {
      color: ${color.darkBlue};
    }
  }
`
const TagList = styled.div``
const Tag = styled.span`
  color: white;
  font-size: 0.8em;
  background: ${color.darkGray};
  border: 1px solid white;
  box-sizing: border-box;
  border-radius: 3px 6px 3px 6px;
  padding: 4px 8px;
  margin-right: 7px;
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