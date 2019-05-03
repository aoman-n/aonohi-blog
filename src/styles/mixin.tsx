import { css, keyframes } from 'styled-components'

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
  }
  > h3 {
    font-size: 1.3em;
  }
  > h4 {
    font-size: 1.2em;
  }
  > p {
    font-size: 0.9em;
  }
`