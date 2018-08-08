import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import heroImage from "./services.svg";

import Layout from "../../components/layout";
import Icon from "../../components/icon";

class ServicesIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");

    return <Layout location={this.props.location}>
        <Helmet>
          <title>{siteTitle}</title>
          <body className="app-page services" />
        </Helmet>
        
        <section className="hero">
          <div className="hero-body container">
            <div className="columns is-6">
              <div className="column">
                <header>
                  <h2>ServicesLogo</h2>
                  <h1>Lead a quality service with a unified team.</h1>
                </header>
                <ul className="inline-links" style={{display: 'block'}}>
                  <li><button className="button">Start free trial</button></li>
                  <li><button className="button">Plans and pricing</button></li>
                </ul>
              </div>

            <div className="column" style={{ justify: 'flex-end', textAlign: 'right' }}><img src={heroImage} style={{height: '470px', display: 'inline-block', margin: '0'}} alt="" /></div>
            </div>
          </div>
        </section>

        <main className="container"  style={{height: '150vh'}}>
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
      </main>
      </Layout>;
  }
}

export default ServicesIndex;

