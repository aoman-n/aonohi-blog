import React, { FC } from 'react'
import styled from 'styled-components'

const Footer: FC = () => (
  <Wrapper>
    <p>footer</p>
  </Wrapper>
)

const Wrapper = styled.footer`
  height: 10vh;
  width: 100vw;
`

export default Footer