import React from 'react'
import styled from 'styled-components'
import NavList from '../Header/NavList'

const Nav = () => (
    <Container>
      <NavList />
    </Container>
)

const Container = styled.nav`

  @media (min-width: ${props => props.theme.screen.lg}) {
    display: block;
    margin-left: auto;
  }
`
export default Nav
