import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link, graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Header />
      <Container>
        <Article itemScope itemType="http://schema.org/Article">
          <Title itemProp="headline">{post.frontmatter.title}</Title>
          <Date>{post.frontmatter.date}</Date>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </Article>
      </Container>
      <PrevNext>
        <PrevNextItems>
          <PrevNextItemLeft>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </PrevNextItemLeft>
          <PrevNextItemRight>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </PrevNextItemRight>
        </PrevNextItems>
      </PrevNext>
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
  padding: 10rem 4rem;
  opacity: 0;
  transform: translateY(100px);
  animation: ${fadeUp} 0.5s 0.1s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: 1000px;
    padding: 12rem 0 4rem 16rem;
  }
`

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 4rem;
  font-weight: 200;
  line-height: 1.2;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    font-size: 6rem;
  }
`

const Date = styled.div`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 200;
  color: var(--grey-1);

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    margin-bottom: 3rem;
  }
`

const Article = styled.article`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: var(--grey-3);

  h2 {
    margin-bottom: 2rem;
    font-size: 5rem;
    font-weight: 200;
  }

  h3 {
    margin-bottom: 2rem;
    font-size: 4rem;
    font-weight: 200;
  }

  p {
    margin-bottom: 2rem;
  }

  ul {
    margin: 4rem 0 4rem 4rem;
  }

  img {
    margin: 4rem 0;
  }

  a {
    color: var(--black);
  }
`

const PrevNext = styled.div`
  padding: 4rem;
  border-top: 1px solid var(--white-2);

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 0 4rem 0 0rem;
  }
`

const PrevNextItems = styled.ul`
  list-style-type: none;
  @media (min-width: ${(props) => props.theme.screen.lg}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const PrevNextItem = styled.li`
  padding: 0 0 4rem;
  margin: 0 0 4rem;

  a {
    color: var(--black);
    font-size: 3rem;
    font-weight: 100;

    &:hover {
      color: var(--grey-1);
    }
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 14rem 10rem;
    margin: 0;
    flex: 1;
  }
`

const PrevNextItemLeft = styled(PrevNextItem)`
  border-bottom: 1px solid var(--white-2);

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    border-right: 1px solid var(--white-2);
    text-align: right;
    border-bottom: none;
  }
`

const PrevNextItemRight = styled(PrevNextItem)`
  padding: 0;
  margin: 0;
  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 14rem 10rem;
  }
`

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
