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
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
      <Footer />
    </Layout>
  )
}

const Container = styled.div`
  padding: 4rem 2rem 2rem;


  @media (min-width: ${props => props.theme.screen.lg}) {
    padding: 14rem 10rem 0 14rem;
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
