import { graphql, Link } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import PostMetaInfo from '../components/PostMetaInfo'
import { color, mixin } from '../styles'

const TagList: FC<any> = props => {
  console.dir(props)
  return (
    <>
      <div>tag list page: </div>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          title
          tags
          publishedAt
          content {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`

export default TagList
