import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Typewriter from 'typewriter-effect'

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        photo: file(relativePath: { eq: "andrei-zvonkov.jpg" }) {
          id
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    `}
    render={(data) => (
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
            <GatsbyImage
              image={getImage(data.photo)}
              alt="Andrei Zvonkov"
            />
          </Photo>
          <Details>
            <Name>
              <strong>Andrei</strong> Zvonkov
            </Name>
            <TypewriterWrap>
              <Typewriter
                options={{
                  strings: ['UX Designer', 'Front End Dev', 'Drupal Dev'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </TypewriterWrap>
            <Description>
              <p>
                I've been helping companies and organizations improve{' '}
                <strong>design</strong>, <strong>usability</strong> and{' '}
                <strong>performance</strong> of their sites for the past 20
                years.
              </p>
              <p>
                I try to deliver value by making <strong>functional</strong>,{' '}
                <strong>simple to use</strong> and <strong>accessible</strong>{' '}
                sites.
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
  padding-top: 8rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding-top: 0;
    padding-bottom: 14rem;
  }
`
const Container = styled.div`
  padding: 4rem 2rem 2rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 10rem 10rem 0 6rem;
  }
`

const Photo = styled.div`
  margin-bottom: 3rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
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

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    grid-row: 1 / 1;
    grid-column: 7 / span 5;
    padding: 0;
    border: none;
  }
`

const Name = styled.div`
  position: relative;
  display: inline-block;
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

const TypewriterWrap = styled.div`
  margin-bottom: 20px;
  font-weight: 300;
  color: var(--grey-2);
`

const Description = styled.div`
  p {
    font-weight: 300;
    color: var(--grey-2);

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  strong {
    font-weight: 500;
    color: var(--black);
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
