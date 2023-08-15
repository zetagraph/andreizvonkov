import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Testimonials = () => (
  <StaticQuery
    query={graphql`
      query {
        photo: file(relativePath: { eq: "jared.jpg" }) {
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
      <Section>
        <Container>
          <Blockquote>
            <BlockquoteText>
              <span>Andrei</span> brings a unique combination of a designer's
              eye with excellent front-end development skills. He cares about
              the details and can help realize great designs in the browser.
              He's also a lovely person to work with, to boot!
            </BlockquoteText>
            <BlockquoteFooter>
              <BlockquotePhoto>
                <Img fluid={data.photo.childImageSharp.fluid} alt="author" />
              </BlockquotePhoto>
              <BlockquoteAuthor>
                — Jared Ponchot, <cite>Chief Creative Officer at Lullabot</cite>
              </BlockquoteAuthor>
            </BlockquoteFooter>
          </Blockquote>
        </Container>
      </Section>
    )}
  />
)

const Section = styled.section`
  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding-bottom: 4rem;
    background-image: url(../backgrounds/quote.svg);
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: 30%;
  }
`
const Container = styled.div`
  padding: 4rem 2rem 2rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 0 10rem 0 6rem;
  }
`

const Blockquote = styled.blockquote`
  @media (min-width: ${(props) => props.theme.screen.lg}) {
    grid-column: 2 / span 9;
  }
`

const BlockquoteText = styled.p`
  font-size: 3rem;
  line-height: 1.3;
  font-weight: 200;
  color: var(--grey-2);
  margin-bottom: 4rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    font-size: calc(2rem + 2vw);
  }

  span {
    font-weight: 700;
    color: var(--black);
  }
`

const BlockquoteFooter = styled.div`
  display: flex;
  align-items: center;
`

const BlockquoteAuthor = styled.div`
  font-weight: 500;
  color: var(--black);

  cite {
    font-style: normal;
    color: var(--grey-2);
  }
`

const BlockquotePhoto = styled.span`
  display: inline-block;
  width: 64px;
  margin-right: 20px;

  img {
    border-radius: 50%;
  }
`

export default Testimonials
