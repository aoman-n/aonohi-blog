import React, { FC } from 'react'
import styled from 'styled-components'
import { color } from '../styles'

interface postMetaInfoProps {
  color?: string,
  tags: string[],
  date: string,
}

const PostMetaInfo: FC<postMetaInfoProps> = ({ tags, date, color }) => (
  <Container>
    <Date color={color}>{date}</Date>
    <Tags>
      {tags.map(tag => (
        <Tag>{tag}</Tag>
      ))}</Tags>
  </Container>
)

const Container = styled.small`
  font-size: 0.7em;
  color: #4a4a4a;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  margin: -0.5em 0 1em;
`
const Date = styled.div`
  margin-right:2em;
  font-size: 1.1em;
  ${props => props.color ? `color: ${props.color}` : null}
`
const Tags = styled.div`
  display: flex;
  align-items: center;
`
const Tag = styled.span`
  color: white;
  border: 1px solid white;
  box-sizing: border-box;
  border-radius: 3px 6px 3px 6px;
  padding: 4px 8px;
  margin-right: 7px;
  cursor: pointer;
  :hover {
    background: white;
    color: ${color.darkBlue};
  }
`

export default PostMetaInfo