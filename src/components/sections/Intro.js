import React from 'react'
import styled, { keyframes } from 'styled-components'

const Intro = () => (
  <Section id="intro">
    <Container>
      <Title>
        <LineOne>
          <span>Designing</span>
        </LineOne>
        <LineTwo>digital experiences</LineTwo>
        <LineThree>
          <span>for humans</span>
        </LineThree>
      </Title>
      <SubTitle>
        Hello, my name is Andrei. I design and build <strong>fast</strong>,
        <strong>accessible</strong> and <strong>easy</strong> to use websites.
      </SubTitle>
    </Container>
  </Section>
)

const fadeUp = keyframes`
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const Section = styled.section`
  padding: 4rem 2rem 2rem;

  @media (min-width: ${props => props.theme.screen.lg}) {
    padding: 8rem 0 16rem 0;
  }
`

const Container = styled.div`
  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 2000px;
    padding-left: 12rem;
  }
`

const Title = styled.h1`
  font-size: 10vw;
  font-weight: 200;
  line-height: 1.1;
  margin-bottom: 3rem;
  color: #727272;

  span {
    font-weight: 600;
    color: var(--black-7);
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 90rem;
    font-size: 10rem;
    margin-bottom: 6rem;
  }
`

const LineOne = styled.div`
  opacity: 0;
  transform: translateY(100px);
  animation: ${fadeUp} 1s 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
`

const LineTwo = styled.div`
  opacity: 0;
  transform: translateY(100px);
  animation: ${fadeUp} 1s 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
`

const LineThree = styled.div`
  opacity: 0;
  transform: translateY(100px);
  animation: ${fadeUp} 1s 0.9s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
`

const SubTitle = styled.div`
  font-size: 2.4rem;
  line-height: 1.3;
  font-weight: 300;
  color: #727272;
  opacity: 0;
  animation: ${fadeUp} 1s 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
  transform: translateY(100px);

  strong {
    color: var(--black);
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    font-size: 3.2rem;
    max-width: 84rem;
    color: #727272;
  }
`

export default Intro
