import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/common/Layout'
import SEO from '../components/common/SEO'
import styled, { keyframes } from 'styled-components'

import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Notes and Links about Design, Development and Web in general" />
      <Header />
      <div className="section-title-container notes">
        <h2 className="section-title">Notes</h2>
      </div>
      <Container>
        <NotesIntro>
          <strong>Notes</strong> and <strong>Links</strong> about Design,
          Development and Web in general.
        </NotesIntro>
        {posts.map(({ node }) => {
          return (
            <ArticleContainer>
              <Article key={node.fields.slug}>
                <ArticleTitle
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt,
                  }}
                />
                <Author>
                  {node.frontmatter.author} &middot; {node.frontmatter.date}
                </Author>
              </Article>
            </ArticleContainer>
          )
        })}
      </Container>
      <Footer />
    </Layout>
  )
}

const fadeUp = keyframes`
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const Container = styled.div`
  opacity: 0;
  transform: translateY(100px);
  padding: 4rem 2rem 2rem;
  margin-bottom: 4rem;

  animation: ${fadeUp} 1s 0.1s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;

  @media (min-width: ${props => props.theme.screen.lg}) {
    padding: 14rem 10rem 0 6rem;
  }
`

const NotesIntro = styled.h2`
  margin-bottom: 4rem;
  font-size: 2.4rem;
  font-weight: 200;
  line-height: 1.2;
  color: #929292;

  strong {
    color: var(--black);
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 90rem;
    margin-bottom: 10rem;
    padding-left: 10rem;
    font-size: calc(3rem + 2vw);
  }
`

const ArticleContainer = styled.div`

  &:first-child {
    border-top: 1px solid #eee;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 100rem;
  }
`

const Article = styled.div`
  padding: 4rem 0;

  @media (min-width: ${props => props.theme.screen.lg}) {
    padding: 6rem 0 6rem 10rem;
  }
`

const ArticleTitle = styled.div`
  font-size: 5vw;
  line-height: 1.2;
  margin-bottom: 2rem;

  @media (min-width: ${props => props.theme.screen.lg}) {
    font-size: 4rem;
    line-height: 1.1;
    margin-bottom: 2rem;
  }

  a {
    color: var(--black-3);
    font-weight: 200;

    &:hover {
      color: var(--black-7);
    }
  }
`

const Author = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
  color: #999;
`

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(format: HTML)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
          }
        }
      }
    }
  }
`
