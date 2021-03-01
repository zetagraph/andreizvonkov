import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/header'
import Intro from '../components/intro'
import Expertise from '../components/expertise'
import Work from '../components/work'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <main role="main">
      <Intro />
      <Expertise />
      <Work />
      <About />
      <Contact />
    </main>
    <Footer />
  </Layout>
)

export default IndexPage
