import { css, keyframes } from 'styled-components';
import color from './color';

export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
`;

export const markdownStyle = css`
  /* font-size: 14px; */
  /* > h1 {
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
  } */

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

  .gatsby-highlight pre[class*='language-'] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }

  .gatsby-highlight pre[class*='language-'].line-numbers {
    padding-left: 2.8em; /* 3 */
  }

  .gatsby-code-title {
    background: #f3e3b9;
    color: #b38383;
    margin-bottom: -0.65em;
    padding: 0.7rem 1.05rem;
    font-size: 0.8em;
    line-height: 0.2;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
      Courier New, monospace;
    font-weight: 600;
    border-radius: 8px 8px 0 0;
    display: table;
  }

  > ul {
    margin-left: 0;
  }
  > ol {
    margin-left: 0;
  }

  > ul > li {
    margin-left: 0;
  }
  > ol > li {
    margin-left: 0;
  }

  > ul > li {
    margin-left: 1.5rem;
    margin-bottom: 0.3rem;
  }
  > ul > li > p {
    margin-bottom: 0.3rem;
  }
  > li > ul {
    margin-top: 0rem;
    margin-left: 0rem;
  }
  > ol > li {
    margin-left: 1.5rem;
    margin-bottom: 0.3rem;
  }
  > li > ol {
    margin-left: 0rem;
  }
  > p {
    font-size: 0.9em;
    margin-bottom: 7px;
  }

  // セクションのスタイル
  > h1 {
    font-size: 1.5em;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid #ddd;
    position: relative;
    > a {
      box-shadow: none;
      text-decoration: none;
    }
  }
  > h2 {
    font-size: 1.4em;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid #ddd;
    position: relative;
  }
  > h2::before {
    position: absolute;
    content: ' ';
    width: 100px;
    bottom: -3px;
    height: 3px;
    background-color: #d32828;
  }
  > h3 {
    font-size: 1.3em;
    margin-top: 2rem;
    padding-bottom: 0.3rem;
    margin-bottom: 1rem;
    position: relative;
  }
  > h3::before {
    position: absolute;
    content: ' ';
    width: 100px;
    bottom: -3px;
    height: 1px;
    background-color: #dadada;
  }
  > h4 {
    font-size: 1.2em;
    margin-top: 1rem;
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
  }
  > h5 {
    font-size: 1.1em;
    margin-top: 0.8rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }
  > h6 {
    font-size: 1em;
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
    font-size: 0.8rem;
  }
`;
