import React from 'react'
import ICONS from './icons'
import styled from 'styled-components'

const Icon = ({ name }) => (
  <IconFrame viewBox={ICONS[name].viewBox}>
    <path d={ICONS[name].path} />
  </IconFrame>
);

const IconFrame = styled.svg`
  border: 1px solid gray;
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  font-style: normal;
  font-weight: normal;
  /* speak: none; */
  margin-right: .2em;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1em;
  margin-left: .2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export default Icon;
