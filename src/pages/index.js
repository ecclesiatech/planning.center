import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";

import Bio from "../components/Bio";
import Layout from "../components/layout";
import { rhythm } from "../utils/typography";
import Icon from "../components/icon";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <Bio />
        <section>
          <h1> App Icons </h1>
          <p>Just setting up and showing off icons...</p>
          <div style={{ fontSize: "4rem" }}>
            <Icon symbol="planning-center#planning-center-mark" />
            <Icon symbol="apps#accounts-app" />
            <Icon symbol="apps#check-ins-app" />
            <Icon symbol="apps#giving-app" />
            <Icon symbol="apps#groups-app" />
            <Icon symbol="apps#registrations-app" />
            <Icon symbol="apps#resources-app" />
            <Icon symbol="apps#people-app" />
            <Icon symbol="apps#services-app" />
          </div>
        </section>
        {posts.map(({ node }) => {
          const title = get(node, "frontmatter.title") || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          );
        })}
      </Layout>
    );
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
