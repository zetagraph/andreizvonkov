import React from 'react'
import styled from 'styled-components'
import ExternalLink from '../ExternalLink'

import { ReactComponent as GitHubIcon } from '../../../images/icons/github.svg'

const SOCIAL_ICONS = [
  {
    icon: GitHubIcon,
    link: 'https://github.com/zetagraph/andreizvonkov',
  },
]

const Footer = () => (
  <FooterWrap>
    <Container>
      <CopyRight>
        &copy; {new Date().getFullYear()} &middot; Andrei Zvonkov
      </CopyRight>
      <SocialIcons>
        {SOCIAL_ICONS.map(({ icon, link }) => (
          <ExternalLink key={link} href={link}>
            <span className="visually-hidden">Github</span>
            {icon()}
          </ExternalLink>
        ))}
      </SocialIcons>
    </Container>
  </FooterWrap>
)

const FooterWrap = styled.footer`
  border-top: 1px solid #eee;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;

  @media (min-width: ${props => props.theme.screen.lg}) {
    padding: 3rem 2rem 3rem 12rem;
  }
`

const CopyRight = styled.div`
  font-size: 1.4rem;
  color: #999;
`

const SocialIcons = styled.div`
  margin-left: auto;

  a {
    display: inline-block;
    padding-top: 0.5rem;

    &:hover {
      svg {
        fill: #757575;
      }
    }
  }

  svg {
    fill: #ccc;
  }
`

export default Footer
