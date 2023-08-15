import React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/header'
import Intro from '../components/intro'
import Expertise from '../components/expertise'
import Work from '../components/work'
import About from '../components/about'
import Testimonials from '../components/testimonials'
import Contact from '../components/contact'
import Footer from '../components/footer'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <main role="main">
      <Intro />
      <Expertise />
      <Work />
      <About />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </Layout>
)

export default IndexPage
