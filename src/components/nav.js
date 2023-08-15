import React from 'react'
import styled from 'styled-components'
import NavList from './navList'

const Nav = () => (
  <Container>
    <NavList />
  </Container>
)

const Container = styled.nav`
  display: none;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    display: block;
    margin-left: auto;
  }
`
export default Nav
