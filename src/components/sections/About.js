import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import ExternalLink from '../common/ExternalLink'

import Img from 'gatsby-image'

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        photo: file(relativePath: { eq: "andrei-zvonkov.jpg" }) {
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
      <Section id="about">
        <div
          className="divider-line"
          data-sal="slide-right"
          data-sal-delay="500"
          data-sal-duration="700"
          data-sal-easing="ease"
        ></div>
        <div className="section-title-container">
          <h2 className="section-title">About</h2>
        </div>
        <Container>
          <Photo
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="700"
            data-sal-easing="ease"
          >
            <Img
              fluid={data.photo.childImageSharp.fluid}
              alt="Andrei Zvonkov"
            />
          </Photo>
          <Details>
            <Name>
              Andrei Zvonkov &middot; <strong>UX</strong> Designer
            </Name>
            <Description>
              <p>I've been making websites for the past 20 years.</p>
              <p>
                I help companies and organizations improve design, usability and performance of
                their sites.
              </p>
              <p>
                I try to deliver value by making functional, simple to use
                and accessible sites.
              </p>
              <p>
                I am currently working as a UX Designer / Front-End Developer at{' '}
                <ExternalLink href="https://fosterinteractive.com">
                  Foster Interactive
                </ExternalLink>. I am based in London, ON, Canada.
              </p>
            </Description>
          </Details>
        </Container>
      </Section>
    )}
  />
)

const Section = styled.section`
  position: relative;
  padding-top: 4rem;

  @media (min-width: ${props => props.theme.screen.lg}) {
    padding-top: 0;
    padding-bottom: 16rem;
  }
`
const Container = styled.div`
  padding: 4rem 2rem 2rem;
  margin-bottom: 3rem;

  @media (min-width: ${props => props.theme.screen.lg}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 10rem 10rem 0 6rem;
    margin-bottom: 0;
  }
`

const Photo = styled.div`
  margin-bottom: 3rem;

  @media (min-width: ${props => props.theme.screen.lg}) {
    position: relative;
    grid-row: 1 / 1;
    grid-column: 1 / span 5;
    margin-bottom: 0;
  }
  .gatsby-image-wrapper {
    box-shadow: 0 20px 50px 0 rgba(45, 65, 90, 0.1);
  }
`

const Details = styled.div`
  font-weight: 100;

  @media (min-width: ${props => props.theme.screen.lg}) {
    grid-row: 1 / 1;
    grid-column: 7 / span 5;
    padding: 0;
    border: none;
  }
`

const Name = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  font-size: 3rem;
  font-weight: 200;
  line-height: 1;

  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 4rem;
    height: 2px;
    background-color: var(--yellow);
  }
`

const Description = styled.div`
  p {
    font-weight: 300;
    color: #727272;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  a {
    font-weight: 400;
    color: var(--black-3);

    &:hover {
      color: var(--black);
    }
  }
`

export default About
