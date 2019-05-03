import { css, keyframes } from 'styled-components'
import color from './color'

export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
    -webkit-transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }
`

export const markdownStyle = css`
  > h1 {
    font-size: 1.5em;
    margin-top: 15px;
    margin-bottom: 7px;
  }
  > h2 {
    font-size: 1.4em;
    margin-bottom: 7px;
  }
  > h3 {
    font-size: 1.3em;
    margin-bottom: 7px;
  }
  > h4 {
    font-size: 1.2em;
    margin-bottom: 7px;
  }
  > h5 {
    font-size: 1.1em;
    margin-bottom: 7px;
  }
  > p {
    font-size: 0.9em;
    margin-bottom: 7px;
  }

  .gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }

  .gatsby-highlight {
    background-color: #fdf6e3;
    /* background-color: #1a1a1a; */
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.8em; /* 3 */
  }

  .gatsby-code-title {
    background: #f3e3b9;
    color: #b38383;
    margin-bottom: -0.65em;
    padding: 0.7rem 1.05rem;
    font-size: 0.8em;
    line-height: 0.2;
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
    font-weight: 600;
    border-radius: 8px 8px 0 0;
    display: table;
  }
`