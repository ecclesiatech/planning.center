import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";

import Layout from "../../components/layout";
import { rhythm } from "../../utils/typography";

class ServicesIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <Layout location={this.props.location}>
        <section>
          <h1> Planning Center Services </h1>
          <p>Just setting up and showing off icons...</p>
        </section>

      </Layout>
    );
  }
}

export default ServicesIndex;

