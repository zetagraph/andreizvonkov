import React from 'react'
import styled, { keyframes } from 'styled-components'
import Nav from './nav'
import MobileNav from './mobileNav'
import { Link as GatsbyLink } from 'gatsby'

const Header = () => {
  return (
    <HeaderWrap id="top">
      <Container>
        <Brand to="/">
          Andrei Zvonkov <span className="dot"></span> &nbsp;
          <span>UX</span> Engineer
        </Brand>
        <Nav />
        <MobileNav />
      </Container>
      <Line />
    </HeaderWrap>
  )
}

const fadeUp = keyframes`
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
`

const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: var(--white);

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    position: relative;
    background-color: transparent;
  }
`

const Line = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    display: block;
    height: 2px;
    width: 12rem;
    background-color: var(--yellow);
    opacity: 0;
    transform: translateX(-100px);
    animation: ${fadeUp} 1s 0s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
  }
`
const Container = styled.div`
  position: relative;
  padding: 2rem;
  border-bottom: 1px solid var(--white-2);

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: 2000px;
    display: flex;
    align-items: center;
    padding: 3rem 4rem 3rem 12rem;
    border-bottom: none;
  }

  @media (min-width: 900px) and (max-width: 940px) {
    padding: 3rem 4rem 3rem 8rem;
  }
`

const Brand = styled(GatsbyLink)`
  display: block;
  color: var(--grey-1);
  font-size: 1.8rem;

  strong {
    font-weight: 900;
    color: var(--yellow);
  }

  span {
    font-weight: 700;
    color: var(--black-2);
  }

  &:hover {
    .dot {
      animation: ${pulse} 0.7s ease infinite;
    }
  }

  .dot {
    position: relative;
    top: -3px;
    display: inline-block;
    width: 6px;
    height: 6px;
    margin: 0 0.5rem;
    background-color: var(--yellow);
    border-radius: 50%;
  }
`
export default Header
