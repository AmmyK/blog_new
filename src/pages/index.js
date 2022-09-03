import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"
import Seo from "../components/seo"

export default function Home({data}) {
  return (
    <Layout>
      <Seo title="amam's blog" description="This is created by Gatsby." />
      <Hero />
      {data.allContentfulPost.edges.map(edge =>
        <PostLink key={edge.node.slug} post={edge.node} />
      )}
    </Layout>
  )
}

export const query = graphql`
  query allContentfulPost {
    allContentfulPost {
      edges {
        node {
          title
          image {
            title
            file {
              url
            }
          }
          description {
            description
          }
          slug
          updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
        }
      }
    }
  }
`