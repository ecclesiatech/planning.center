import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";

import Layout from "../../components/layout";
import { rhythm } from "../../utils/typography";
import Icon from "../../components/icon";

class ServicesIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <Layout location={this.props.location}>
        <section>
          <h1> Planning Center Services </h1>
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

      </Layout>
    );
  }
}

export default ServicesIndex;

