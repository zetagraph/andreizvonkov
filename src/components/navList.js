import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

const NavList = () => (
  <NavItems>
    <NavItem>
      <NavLink to="/#expertise">Expertise</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/#work">Work</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/#about">About</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/blog" activeClassName="active">
        Blog
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/#contact">Work With Me</NavLink>
    </NavItem>
  </NavItems>
)

const NavItems = styled.ul`
  list-style-type: none;
`
const NavItem = styled.li`
  position: relative;
  display: inline-block;

  &:not(:last-child) {
    margin-right: 2.3rem;
    padding-right: 2.5rem;
  }

  &:not(:last-child):before {
    content: '';
    position: absolute;
    height: 16px;
    width: 1px;
    transform: rotate(20deg);
    background-color: var(--yellow);
    right: 0;
    top: 30%;
    color: #ccc;
  }

  &:last-of-type a {
    &:before {
      content: '';
      position: absolute;
      display: block;
      top: -32px;
      right: 50%;
      width: 20px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px 7px 0 7px;
      border-color: var(--yellow) transparent transparent transparent;
    }
  }
`

const NavLink = styled(GatsbyLink)`
  position: relative;
  display: inline-block;
  font-size: 1.6rem;
  padding: 0 0 0.25rem;
  color: var(--grey-2);
  transition: opacity 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);

  &:after {
    --scale: 0;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 2px;
    background: var(--yellow);
    transform: scaleX(var(--scale));
    transform-origin: var(--x) 50%;
    transition: transform 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);
  }

  &:hover {
    color: var(--grey-1);
  }

  &:hover:after,
  &.active:after {
    --scale: 1;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    font-size: 1.8rem;
  }
`

export default NavList
