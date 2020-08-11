import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Layout from "../components/common/Layout"
import SEO from "../components/common/SEO"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <Header />
      <Container>
        <Title>Not Found</Title>
      </Container>
      <Footer />
    </Layout>
  )
}

const Container = styled.div`
  padding: 10rem 2rem 2rem;
  min-height: 40rem;

  @media (min-width: ${props => props.theme.screen.lg}) {
    padding: 14rem 10rem 0 14rem;
    min-height: 50rem;
  }
`

const Title = styled.h1`
  margin-bottom: 4rem;
  font-size: 4rem;
  font-weight: 200;
  line-height: 1.3;
  color: #929292;

  @media (min-width: ${props => props.theme.screen.lg}) {
    font-size: calc(3rem + 2vw);
  }
`

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
