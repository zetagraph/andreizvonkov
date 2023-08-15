import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyles from '../styles/globalStyles'
import Seo from './seo'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Seo title="" />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default Layout
