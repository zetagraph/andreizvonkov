import React from 'react'
import styled from 'styled-components'

const Experience = () => (
  <Section id="experience">
    <div
      className="divider-line"
      data-sal="slide-right"
      data-sal-delay="500"
      data-sal-duration="200"
      data-sal-easing="ease"
    ></div>
    <div className="section-title-container">
      <h2 className="section-title">Experience</h2>
    </div>

    <Container>
      <HeaderTitle
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="700"
        data-sal-easing="ease"
      >
        Specializing in creating <strong>simple</strong> and&nbsp;
        <strong>effective</strong> digital solutions
      </HeaderTitle>
      <Item
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="700"
        data-sal-easing="ease"
      >
        <ItemTitle>Strategy</ItemTitle>
        <List>
          <ListItem>Competitive Analysis</ListItem>
          <ListItem>Information Architecture</ListItem>
          <ListItem>Design Strategy</ListItem>
        </List>
      </Item>

      <Item
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="700"
        data-sal-easing="ease"
      >
        <ItemTitle>Design</ItemTitle>
        <List>
          <ListItem>Brand Identity</ListItem>
          <ListItem>Prototyping</ListItem>
          <ListItem>Web &amp; App Design</ListItem>
        </List>
      </Item>

      <Item
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="700"
        data-sal-easing="ease"
      >
        <ItemTitle>Development</ItemTitle>
        <List>
          <ListItem>Responsive Design</ListItem>
          <ListItem>HTML, CSS, JS, React</ListItem>
          <ListItem>Web & Mobile Development</ListItem>
        </List>
      </Item>

      <Item
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-duration="700"
        data-sal-easing="ease"
      >
        <ItemTitle>Performance</ItemTitle>
        <List>
          <ListItem>Site Optimizations</ListItem>
          <ListItem>Accessibility (WCAG)</ListItem>
          <ListItem>Search Engine Optimization</ListItem>
          <ListItem>Analytics</ListItem>
        </List>
      </Item>
    </Container>
  </Section>
)

const Section = styled.section`
  position: relative;
  padding-top: 3rem;

  @media (min-width: ${props => props.theme.screen.lg}) {
    padding-top: 0;
    padding-bottom: 16rem;
    margin-bottom: 2rem;
  }
`
const Container = styled.div`
  padding: 4rem 2rem 2rem;

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 2000px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 1rem;
    grid-template-rows: repeat(auto-fill, minmax(20rem, 1fr));
    padding: 10rem 10rem 0 12rem;
  }
`

const HeaderTitle = styled.h2`
  margin-bottom: 4rem;
  font-size: 2.4rem;
  font-weight: 200;
  line-height: 1.2;

  strong {
    color: var(--black);
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    grid-row: 1 / span 1;
    grid-column: 3 / span 6;
    max-width: 75rem;
    margin: 0;
    padding: 0 0 18rem 4rem;
    border-left: 1px solid #eee;
    color: #727272;
    font-size: calc(3rem + 2vw);
  }
`

const Item = styled.div`
  position: relative;
  border: 1px solid #eee;
  padding: 2rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &:before {
    position: absolute;
    right: 2rem;
    top: 2rem;
    color: #f5f5f5;
    font-size: 6rem;
    font-weight: 700;
    line-height: 1;
  }

  &:nth-child(2):before {
    content: '01';
  }

  &:nth-child(3):before {
    content: '02';
  }

  &:nth-child(4):before {
    content: '03';
  }

  &:nth-child(5):before {
    content: '04';
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    margin: 0;
    padding: 10rem 2rem 4rem 4rem;
    grid-row: 2 / span 1;
    grid-column: span 2;
    border-top: 0;
    border-right: 0;
    border-bottom: 0;

    &:nth-child(2) {
      border-left: 0;
      padding-left: 0;
    }

    &:before {
      right: 2rem;
      top: 0;
    }
  }
`

const ItemTitle = styled.h2`
  position: relative;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 1;
  padding-bottom: 2rem;
  margin-bottom: 2rem;

  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 4rem;
    height: 2px;
    margin: auto 0;
    background-color: var(--yellow);
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    margin-bottom: 4rem;
    font-size: calc(2rem + 0.5vw);
  }
`

const List = styled.ul`
  list-style-type: none;
`

const ListItem = styled.li`
  font-size: calc(1.5rem + 0.2vw);
  color: #757575;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`

export default Experience
