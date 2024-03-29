import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PfizerLogo from '../images/logos/pfizer.svg'
import FoxLogo from '../images/logos/fox.svg'
import AgropurLogo from '../images/logos/agropur.svg'
import NineElevenMemorialLogo from '../images/logos/nine-eleven-memorial.svg'

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
        lullabot: file(relativePath: { eq: "lullabot.png" }) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cheesebar: file(relativePath: { eq: "cheesebar.png" }) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        homeSophos: file(relativePath: { eq: "home-sophos.png" }) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nineElevenMemorial: file(
          relativePath: { eq: "nine-eleven-memorial.png" }
        ) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bgd: file(relativePath: { eq: "bgd.png" }) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
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
            <ItemDetailTitle>Lullabot</ItemDetailTitle>
            <ItemDetailNote>Site redesign and prototype work</ItemDetailNote>
            <List>
              <ListItem>UX/UI Design</ListItem>
              <ListItem>Front-End Development</ListItem>
              <ListItem>React, Next.js</ListItem>
            </List>
            <a href="https://www.lullabot.com">Visit</a>
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
                fluid={data.lullabot.childImageSharp.fluid}
                alt="Website Screenshot"
              />
            </span>
          </ItemScreenshot>

          <ItemDetails>
            <ItemDetailTitle>Cheesebar</ItemDetailTitle>
            <ItemDetailNote>Agropur Dairy Cooperative</ItemDetailNote>
            <List>
              <ListItem>UX/UI Design</ListItem>
              <ListItem>Front-End Development</ListItem>
              <ListItem>Drupal, TWIG, CSS, JS, Animations</ListItem>
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
                fluid={data.cheesebar.childImageSharp.fluid}
                alt="Website Screenshot"
              />
            </span>
          </ItemScreenshot>

          <ItemDetails>
            <ItemDetailTitle>Sophos</ItemDetailTitle>
            <ItemDetailNote>Cybersecurity for Home Users</ItemDetailNote>
            <List>
              <ListItem>UX/UI Design</ListItem>
              <ListItem>Front-End Development</ListItem>
              <ListItem>Drupal, TWIG, CSS, JS</ListItem>
            </List>
            <a href="https://home.sophos.com">Visit</a>
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
                fluid={data.homeSophos.childImageSharp.fluid}
                alt="Website Screenshot"
              />
            </span>
          </ItemScreenshot>

          <ItemDetails>
            <ItemDetailTitle>Bureau of Good Design</ItemDetailTitle>
            <ItemDetailNote>Self Initiated Project</ItemDetailNote>
            <List>
              <ListItem>Branding & Design</ListItem>
              <ListItem>Front-End Development</ListItem>
              <ListItem>React, Gatsby</ListItem>
            </List>
            <a href="https://vigilant-kirch-18292c.netlify.app">Visit</a>
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
                fluid={data.bgd.childImageSharp.fluid}
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
  padding-top: 8rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding-top: 0;
    padding-bottom: 10rem;
    margin-bottom: 2rem;
  }
`

const Container = styled.div`
  padding: 4rem 0 0;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: 2000px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 10rem 10rem 12rem 6rem;
    background-repeat: no-repeat;
    background-position: 92% 0;
  }
`

const HeaderTitle = styled.h2`
  padding: 0 2rem;
  margin-bottom: 4rem;
  font-size: 2.4rem;
  font-weight: 200;
  line-height: 1.3;
  color: #929292;

  strong {
    color: var(--black);
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    grid-column: 5 / span 8;
    margin-bottom: 24rem;
    font-size: calc(3rem + 2vw);
  }
`

const ItemDetails = styled.div`
  padding: 0 2rem;
  margin-bottom: 1rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    grid-column: 1 / span 4;
    margin-bottom: 0;
    text-align: right;
    padding: 0;
    border: none;
  }

  a {
    display: inline-block;
    position: relative;
    color: var(--black);
    font-weight: 400;

    @media (min-width: ${(props) => props.theme.screen.lg}) {
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
  font-weight: 300;
`

const ItemDetailNote = styled.div`
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: var(--grey-1);
`

const List = styled.ul`
  list-style-type: none;
  margin-bottom: 2rem;
`

const ListItem = styled.li`
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--white-2);
  font-size: 2rem;
  font-weight: 300;
  color: var(--grey-1);

  &:first-child {
    border-top: 1px solid var(--white-2);
  }
`

const ItemScreenshot = styled.div`
  padding: 2rem;
  margin-bottom: 6rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    grid-column: 6 / span 7;
    padding: 0;
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
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding: 0 2rem;
  text-align: center;
  font-size: 3rem;
  font-weight: 200;
  line-height: 1.2;
  color: #929292;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    grid-column: 1 / span 12;
    margin-bottom: 8rem;
    padding: 0;
    font-size: calc(3rem + 2vw);
  }
`

const Logos = styled.div`
  text-align: center;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    grid-column: 1 / span 12;
  }
`

const Logo = styled.span`
  margin: 0 2rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    margin: 0 4rem;
  }

  svg {
    width: 150px;
    height: 100px;
  }
`

export default Work
