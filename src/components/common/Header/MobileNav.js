import React from 'react'
import useToggler from '../useToggler'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

const MobileNav = () => {
  const [show, toggle] = useToggler(false)

  return (
    <>
      <Burger
        aria-label="Toggle menu"
        aria-expanded={show}
        open={show}
        onClick={toggle}
      >
        <span />
        <span />
        <span />
      </Burger>

      <MobileNavWrap aria-expanded={show} open={show}>
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
      </MobileNavWrap>
    </>
  )
}

const Burger = styled.button`
  position: absolute;
  top: 2.2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 3rem;
    height: 4px;
    background: #444;
    transition: all 0.2s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    display: none;
  }
`

const MobileNavWrap = styled.ul`
  list-style-type: none;
  display: ${({ open }) => (open ? 'block' : 'none')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--black);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateY(-100%)')};
  height: 100vh;
  width: 100%;
  text-align: center;
  /* padding: 2rem; */
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 1;

  @media (min-width: ${props => props.theme.screen.lg}) {
    display: none;
  }
`

const MobileNavItem = styled.li`
  margin-bottom: 1rem;
`

const MobileNavLink = styled(GatsbyLink)`
  font-size: 4.2rem;
  color: #fff;
`

export default MobileNav
