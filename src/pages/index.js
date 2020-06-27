import React from 'react'

import Layout from '../components/common/Layout'
import Header from '../components/common/Header'
import Intro from '../components/sections/Intro'
import Experience from '../components/sections/Experience'
import Work from '../components/sections/Work'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Footer from '../components/common/Footer'

const IndexPage = () => (
  <Layout>
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
