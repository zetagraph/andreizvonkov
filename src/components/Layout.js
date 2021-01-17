import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyles from '../styles/GlobalStyles'
import Seo from './Seo'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Seo />
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
