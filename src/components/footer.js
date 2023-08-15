import React from 'react'
import styled from 'styled-components'
import ExternalLink from './externalLink'
import GitHubIcon from '../images/icons/github.svg'

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
  border-top: 1px solid var(--white-2);
`

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 3rem 2rem 3rem 12rem;
  }
`

const CopyRight = styled.div`
  font-size: 1.4rem;
  color: var(--grey-1);
`

const SocialIcons = styled.div`
  margin-left: auto;

  a {
    display: inline-block;
    padding-top: 0.5rem;

    &:hover {
      svg {
        fill: var(--grey-1);
      }
    }
  }

  svg {
    width: 32px;
    height: 32px;
    fill: #ccc;
  }
`

export default Footer
