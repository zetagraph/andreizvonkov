import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

const Up = () => (
  <UpLink to="#top">↑</UpLink>
)

const UpLink = styled(GatsbyLink)`
  position: absolute;
  display: inline-block;
  bottom: 2rem;
  right: 2.26rem;
  padding: 0 0.2rem 1rem;
  font-size: 2.6rem;
  line-height: 1;
  font-weight: 600;
  color: #ccc;

  &:before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    height: 4px;
    width: 100%;
    background-color: var(--yellow);
  }

  &:hover {
    color: #666;
  }
`
export default Up
