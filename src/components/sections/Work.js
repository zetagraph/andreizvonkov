import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { ReactComponent as PfizerLogo } from '../../images/logos/pfizer.svg'
import { ReactComponent as FoxLogo } from '../../images/logos/fox.svg'
import { ReactComponent as AgropurLogo } from '../../images/logos/agropur.svg'
import { ReactComponent as NineElevenMemorialLogo } from '../../images/logos/nine-eleven-memorial.svg'

const LOGOS = [
  {
    logo: PfizerLogo,
    name: 'Pfizer',
  },
  {
    logo: NineElevenMemorialLogo,
    name: '9/11 Memorial',
  },
  {
    logo: FoxLogo,
    name: 'Fox',
  },
  {
    logo: AgropurLogo,
    name: 'Agropur',
  },
]

const Work = () => (
  <StaticQuery
    query={graphql`
      query {
        screen1: file(relativePath: { eq: "cheesebar.png" }) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        screen2: file(relativePath: { eq: "la-houlette-de-vie-bakery.png" }) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        screen3: file(relativePath: { eq: "nine-eleven-memorial.png" }) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="work">
        <div
          className="divider-line"
          data-sal="slide-right"
          data-sal-delay="500"
          data-sal-duration="200"
          data-sal-easing="ease"
        ></div>
        <div className="section-title-container">
          <h2 className="section-title">Work</h2>
        </div>
        <Container>
          <HeaderTitle
            data-sal="slide-up"
            data-sal-delay="50"
            data-sal-duration="700"
            data-sal-easing="ease"
          >
            Helping companies improve, <strong>design</strong>,
            <strong>usability</strong> and <strong>accessibility</strong> of
            their sites.
          </HeaderTitle>
          <ItemDetails>
            <ItemDetailTitle>Cheesebar.ca</ItemDetailTitle>
            <ItemDetailNote>
              A site for Agropur Dairy Cooperative <br />
              (appnovation.com project)
            </ItemDetailNote>
            <List>
              <ListItem>Front-End Development</ListItem>
              <ListItem>HTML, CSS, JS</ListItem>
              <ListItem>Animations</ListItem>
              <ListItem>Drupal Theming</ListItem>
            </List>
            <a href="https://www.cheesebar.ca">Visit</a>
          </ItemDetails>
          <ItemScreenshot
            data-sal="fade"
            data-sal-delay="100"
            data-sal-duration="700"
            data-sal-easing="ease"
          >
            <ItemScreenshotChrome>•••</ItemScreenshotChrome>
            <span>
              <Img
                fluid={data.screen1.childImageSharp.fluid}
                alt="Website Screenshot"
              />
            </span>
          </ItemScreenshot>

          <ItemDetails>
            <ItemDetailTitle>9/11 Memorial</ItemDetailTitle>
            <ItemDetailNote>
              A site for 9/11 Memorial &amp; Museum <br />
              (appnovation.com project)
            </ItemDetailNote>
            <List>
              <ListItem>Front-End Development</ListItem>
              <ListItem>HTML, CSS, JS</ListItem>
              <ListItem>Drupal Theming</ListItem>
            </List>
            <a href="https://www.911memorial.org">Visit</a>
          </ItemDetails>
          <ItemScreenshot
            data-sal="fade"
            data-sal-delay="100"
            data-sal-duration="700"
            data-sal-easing="ease"
          >
            <ItemScreenshotChrome>•••</ItemScreenshotChrome>
            <span>
              <Img
                fluid={data.screen3.childImageSharp.fluid}
                alt="Website Screenshot"
              />
            </span>
          </ItemScreenshot>

          <ItemDetails>
            <ItemDetailTitle>La Houlette de vie Bakery</ItemDetailTitle>
            <ItemDetailNote>A site for a local Bakery</ItemDetailNote>
            <List>
              <ListItem>Branding & Design</ListItem>
              <ListItem>Front-End Development</ListItem>
              <ListItem>HTML, CSS, JS</ListItem>
            </List>
            <a href="https://lahoulettebakery.com">Visit</a>
          </ItemDetails>
          <ItemScreenshot
            data-sal="fade"
            data-sal-delay="100"
            data-sal-duration="700"
            data-sal-easing="ease"
          >
            <ItemScreenshotChrome>•••</ItemScreenshotChrome>
            <span>
              <Img
                fluid={data.screen2.childImageSharp.fluid}
                alt="Website Screenshot"
              />
            </span>
          </ItemScreenshot>

          <FooterTitle>Some brands I've worked with</FooterTitle>
          <Logos>
            {LOGOS.map(({ logo, name }) => (
              <Logo key={name}>{logo()}</Logo>
            ))}
          </Logos>
        </Container>
      </Section>
    )}
  />
)

const Section = styled.section`
  padding-top: 4rem;

  @media (min-width: ${props => props.theme.screen.lg}) {
    padding-top: 0;
    padding-bottom: 10rem;
    margin-bottom: 2rem;
  }
`

const Container = styled.div`
  padding: 4rem 2rem 2rem;

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 2000px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 10rem 10rem 12rem 6rem;
    background-repeat: no-repeat;
    background-position: 92% 0;
  }
`

const HeaderTitle = styled.h2`
  margin-bottom: 4rem;
  font-size: 2.4rem;
  font-weight: 200;
  line-height: 1.2;
  color: #929292;

  strong {
    color: var(--black);
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    grid-column: 5 / span 8;
    margin-bottom: 24rem;
    font-size: calc(3rem + 2vw);
  }
`

const ItemDetails = styled.div`
  padding: 4rem 4rem 0;
  border-top: 1px solid #eee;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;

  @media (min-width: ${props => props.theme.screen.lg}) {
    grid-column: 1 / span 4;
    margin-bottom: 0;
    text-align: right;
    padding: 0;
    border: none;
  }

  a {
    display: inline-block;
    position: relative;
    color: #757575;
    font-weight: 400;

    @media (min-width: ${props => props.theme.screen.lg}) {
      margin-bottom: 0;
    }

    &:after {
      content: '→';
      display: inline-block;
      transform: translateX(2px);
      transition: transform 300ms ease 0s;
      margin-left: 0.25rem;
      color: var(--yellow);
    }

    &:hover {
      color: var(--black);

      &:after {
        transform: translateX(6px);
      }
    }
  }
`

const ItemDetailTitle = styled.div`
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 200;
`

const ItemDetailNote = styled.div`
  margin-bottom: 2rem;
  font-size: 1.6rem;
  color: #777;
`

const List = styled.ul`
  list-style-type: none;
  margin-bottom: 3rem;
`

const ListItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  font-size: 1.8rem;
  color: #757575;

  &:first-child {
    border-top: 1px solid #eee;
  }
`

const ItemScreenshot = styled.div`
  padding: 4rem;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  margin-bottom: 4rem;

  @media (min-width: ${props => props.theme.screen.lg}) {
    grid-column: 6 / span 7;
    padding: 0;
    border: none;
    margin-bottom: 22rem;
  }

  span {
    display: block;
    box-shadow: 0 20px 50px 0 rgba(45, 65, 90, 0.1);
  }
`

const ItemScreenshotChrome = styled.div`
  padding: 0.25rem 0 0.5rem;
  background-color: #e9e9e9;
  color: #ccc;
  line-height: 1;
  font-size: 1.5rem;
  padding-left: 1rem;
  letter-spacing: 0.5rem;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`

const FooterTitle = styled.h2`
  margin-bottom: 4rem;
  text-align: center;
  font-size: 3rem;
  font-weight: 200;
  line-height: 1.2;
  color: #929292;

  @media (min-width: ${props => props.theme.screen.lg}) {
    grid-column: 1 / span 12;
    margin-bottom: 8rem;
    font-size: calc(3rem + 2vw);
  }
`

const Logos = styled.div`
  text-align: center;

  @media (min-width: ${props => props.theme.screen.lg}) {
    grid-column: 1 / span 12;
  }
`

const Logo = styled.span`
  margin: 0 2rem;

  @media (min-width: ${props => props.theme.screen.lg}) {
    margin: 0 4rem;
  }
`

export default Work
