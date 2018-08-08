import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";

import Layout from "../components/layout";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return <Layout location={this.props.location}>
        <Helmet>
          <title>{siteTitle}</title>
          <body className="home" />
        </Helmet>

        <section className="hero">
          <div className="hero-body">
            <div className="level-left">
              <header>
                <h1>Ministry doesn't have to be so hard. </h1>
                <h2>We equip you with the tools you need to focus on what matters: your ministry. </h2>
              </header>
              <button className="button is-primary">Start free trial</button>
              <button className="button is-reverse">Plans and pricing</button>
            </div>
            <div className="level-right">IMAGE</div>
          </div>
        </section>
        <section style={{height: '150vh'}}></section>
      </Layout>;
  }
}

export default BlogIndex;

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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
