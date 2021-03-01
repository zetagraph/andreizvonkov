import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyles from '../styles/globalStyles'
import SEO from './seo'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default Layout
