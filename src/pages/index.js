import React from 'react'

import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Experience from '../components/Experience'
import Work from '../components/Work'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <main role="main">
      <Intro />
      <Experience />
      <Work />
      <About />
      <Contact />
    </main>
    <Footer />
  </Layout>
)

export default IndexPage
