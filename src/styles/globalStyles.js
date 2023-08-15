import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

/* Reset */

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul,
blockquote {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
}


/* Global */

:root {
  --white:   #ffffff;
  --white-1: #fdfdfd;
  --white-2: #eeeeee;
  --white-3: #e0e0e0;
  --grey-1:  #757575;
  --grey-2:  #888888;
  --grey-3:  #666666;
  --yellow:  #ffd034;
  --black:   #222222;
  --black-2: #1b1b1b;
  --black-3: #383b40;
  --black-4: #2d2f34;
  --black-5: #27292d;
  --black-6: #1f2023;
  --black-7: #010101;
}

::-webkit-scrollbar {
  background-color: #000;
  width: 10px;
}
::-webkit-scrollbar-track {
  background-color: var(--white-2);
}
::-webkit-scrollbar-thumb {
  background-color: #ffd034;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}

::selection {
  background-color: var(--yellow);
  color: var(--black);
}

html {
  scroll-behavior: smooth;
}

@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

body {
  position: relative;
  font-size: 2rem;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: var(--black);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    background-image: linear-gradient(to right, #f5f5f5 6rem, #fff 6rem);

      &:before {
      content: '';
      background-image: url(../backgrounds/A.svg);
      background-repeat: no-repeat;
      background-position: -500% 90%;
      background-size: 110%;
      top: 0;
      right: 0;
      position: absolute;
      height: 660px;
      width: 640px;
      z-index: -1;
    }
  }
}

a {
  text-decoration: none;
  transition: 0.3s;
}

.visually-hidden {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}

/* Section Styles */

.section {
  position: relative;
}


.section-title-container {

  .blog-wrap & {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    display: block;
    position: sticky;
    left: 0;
    right: 0;
    top: 0;

    .blog-wrap & {
      display: block;
      top: 33%;
    }
  }
}

.section-title {
  position: relative;
  padding-left: 4rem;
  white-space: nowrap;
  font-size: 2.6rem;
  line-height: 1;
  font-weight: 600;
  color: var(--grey-1);

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 2rem;
    height: 28px;
    width: 4px;
    background-color: var(--yellow);
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    position: absolute;
    right: 2rem;
    top: 0;
    padding-top: 2rem;
    padding-left: 0;
    writing-mode: vertical-rl;
    font-size: 2.8rem;
    font-weight: 600;
    color: #ccc;

    &:before {
      position: absolute;
      content: '';
      top: 0;
      left: 0rem;
      width: 2.6rem;
      height: 4px;
      background-color: var(--yellow);
    }
  }
}

.divider-line {
  @media (min-width: ${(props) => props.theme.screen.lg}) {
    height: 2px;
    width: 120px;
    background-color: var(--yellow);
  }
}

`
export default GlobalStyles
