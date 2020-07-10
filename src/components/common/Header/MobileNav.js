import React from 'react'
import useToggler from '../useToggler'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

const MobileNav = () => {
  const [show, toggle] = useToggler(false)

  return (
    <>
      <Burger onClick={toggle}>{show ? 'Close' : 'Open'} Menu </Burger>
      <MobileNavItems show={show}>
        <MobileNavItem>
          <MobileNavLink to="/#experience" onClick={toggle}>
            Experience
          </MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/#work" onClick={toggle}>
            Work
          </MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/#about" onClick={toggle}>
            About
          </MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/#contact" onClick={toggle}>
            Contact
          </MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/notes">Notes</MobileNavLink>
        </MobileNavItem>
      </MobileNavItems>
    </>
  )
}

const Burger = styled.button`
  display: block;
  position: absolute;
  top: 0;
  right: 0;

  @media (min-width: ${props => props.theme.screen.lg}) {
    display: none;
  }
`

const MobileNavItems = styled.ul`
  list-style-type: none;
  display: ${({ show }) => (show ? 'block' : 'none')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: ${({ show }) => (show ? 'translateX(20px)' : 'translateX(0)')};

  @media (min-width: ${props => props.theme.screen.lg}) {
    display: none;
  }
`
const MobileNavItem = styled.li`
  margin-bottom: 1rem;
`

const MobileNavLink = styled(GatsbyLink)`
  color: #222;
`

export default MobileNav
