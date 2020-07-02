import React from 'react'
import styled from 'styled-components'
import ContactForm from './../common/ContactForm'

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
      <h2 className="section-title">Contact</h2>
    </div>
    <Container>
      <ContactContent>
        <ContactTitle>Get in Touch</ContactTitle>
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
      </ContactContent>
      <FormContainer
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="700"
        data-sal-easing="ease"
      >
        <ContactForm />
      </FormContainer>
    </Container>
  </Section>
)

const Section = styled.section`

  @media screen and (min-width: 900px) {
    padding: 10rem 0 16rem 0;
  }
`

const Container = styled.div`
  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 2000px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 10rem 10rem 0 6rem;
  }
`

const FormContainer = styled.div`
  padding: 2rem;

  @media (min-width: ${props => props.theme.screen.lg}) {
    padding: 0;
    grid-column: 7 / span 6;
  }
`

const ContactTitle = styled.div`
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

const ContactContent = styled.div`
  padding: 4rem 2rem 2rem;

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

  @media (min-width: ${props => props.theme.screen.lg}) {
    grid-column: 2 / span 4;
    padding: 0;
  }
`
export default Contact
