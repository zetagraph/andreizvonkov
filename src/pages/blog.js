import React from 'react'
import { Link, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Header />
      <div className="blog-wrap">
        <div className="section-title-container">
          <h2 className="section-title">Blog</h2>
        </div>
        <BlogIntro>
          Notes and Links on <span>Performance</span> /
          <span> Drupal</span>  / <span>React</span> / Tech in general.
        </BlogIntro>
        <Container>
          <Posts>
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <Post key={post.fields.slug}>
                  <article itemScope itemType="http://schema.org/Article">
                    <Title>
                      <Link to={post.fields.slug}>{title}</Link>
                    </Title>
                    <Date>{post.frontmatter.date}</Date>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </article>
                </Post>
              )
            })}
          </Posts>
        </Container>
      </div>
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

const BlogIntro = styled.div`
  padding: 10rem 2rem 2rem 2rem;
  opacity: 0;
  transform: translateY(100px);
  animation: ${fadeUp} 1s 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
  font-size: 2.4rem;
  font-weight: 200;
  line-height: 1.2;
  color: var(--grey-2);

  span {
    font-weight: 700;
    color: var(--black);
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1000px;
    padding: 12rem 0 6rem 12rem;
    font-size: calc(3rem + 2vw);
  }
`

const Container = styled.div`
  padding: 2rem;
  opacity: 0;
  transform: translateY(100px);
  animation: ${fadeUp} 1s 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;

  @media (min-width: ${props => props.theme.screen.lg}) {
    padding: 0 0 12rem 6rem;
  }
`

const Posts = styled.div`
  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 900px;
  }
`

const Post = styled.div`
  padding: 3rem 0;

  &:first-of-type {
    border-top: 1px solid var(--white-2);
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--white-2);
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    padding: 6rem 0 6rem 6rem;
  }

  p {
    color: var(--grey-2);
  }
`

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 2.4rem;
  font-weight: 200;
  line-height: 1.2;

  @media (min-width: ${props => props.theme.screen.lg}) {
    font-size: 4rem;
  }

  a {
    color: var(--black);

    &:hover {
      color: var(--grey-2);
    }
  }
`

const Date = styled.div`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 200;
  color: var(--grey-1);

  @media (min-width: ${props => props.theme.screen.lg}) {
    margin-bottom: 3rem;
  }
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
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
