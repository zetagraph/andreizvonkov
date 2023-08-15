import React from 'react'
import styled from 'styled-components'
import ContactForm from './contactForm'
import Up from './up'

const Contact = () => (
  <Section id="contact">
    <div
      className="divider-line"
      data-sal="slide-right"
      data-sal-delay="500"
      data-sal-duration="700"
      data-sal-easing="ease"
    ></div>
    <div className="section-title-container">
      <h2 className="section-title">Work With Me</h2>
    </div>
    <Container>
      <Content>
        <Title>Let's Work Together</Title>
        <p>
          Please feel free to get in touch by using the form or just send me an{' '}
          <a href="mailto:zvonkov@gmail.com">Email</a>.
        </p>

        <p>
          You can also find me on
          <a href="https://twitter.com/zetagraph"> Twitter</a>&nbsp; &amp;
          &nbsp;
          <a href="https://www.linkedin.com/in/andreizvonkov">LinkedIn</a>.
        </p>
      </Content>
      <FormContainer
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="700"
        data-sal-easing="ease"
      >
        <ContactForm />
      </FormContainer>
    </Container>
    <Up />
  </Section>
)

const Section = styled.section`
  position: relative;
  padding-top: 8rem;

  @media screen and (min-width: 900px) {
    padding: 10rem 0 16rem 0;
  }
`

const Container = styled.div`
  padding-bottom: 7rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: 2000px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 10rem 10rem 0 6rem;
  }
`

const FormContainer = styled.div`
  padding: 2rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 0;
    grid-column: 7 / span 6;
  }
`

const Title = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  font-size: 3rem;
  font-weight: 200;
  line-height: 1.25;

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

const Content = styled.div`
  padding: 4rem 2rem 2rem;

  p {
    font-weight: 300;
    color: var(--grey-2);

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

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    grid-column: 2 / span 4;
    padding: 0;
  }
`
export default Contact
