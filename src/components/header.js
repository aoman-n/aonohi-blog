import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

const Header = ({ title, description, author }) => {
  return (
    <Container>
      <Info>{title} - {author}</Info>
    </Container>
  )
}

const Container = styled.header`
  height: 30vh;
  background: #2980B9;
  background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);
  background: linear-gradient(to left, #FFFFFF, #6DD5FA, #2980B9);
`
const Info = styled.div`

`

export default Header