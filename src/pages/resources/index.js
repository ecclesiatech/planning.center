import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import heroImage from "./resources.svg";

import Layout from "../../components/layout";
import AppSubNavBar from "../../components/AppSubNavBar";
import Icon from "../../components/icon";

class ResourcesIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const appName = "resources";

    return (
      <Layout location={this.props.location}>
        {layoutState => (
          <React.Fragment>
            <Helmet>
              <title>{siteTitle}</title>
              <body
                inverse="true"
                toggleable="true"
                className={
                  layoutState.isTop
                    ? `navbar-is-top app-page ${appName}`
                    : `navbar-is-scrolling app-page ${appName}`
                }
              />
            </Helmet>
            <section className="hero">
              <div className="hero-body container">
                <div className="columns is-6">
                  <div className="column">
                    <header style={{ marginBottom: "48px" }}>
                      <Icon
                        symbol="apps#services-badge"
                        style={{
                          height: "64px",
                          width: "247px",
                          marginBottom: "30px",
                        }}
                      />
                      <h1>!!Need actual text in here!!</h1>
                    </header>

                    <ul
                      className="inline-links hero-buttons"
                      style={{ display: "block" }}
                    >
                      <li>
                        <button className="button is-medium is-white">
                          Free forever! Try it
                        </button>
                      </li>
                      <li>
                        <button className="button is-medium is-black">
                          Watch Video
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div
                    className="column"
                    style={{ justify: "flex-end", textAlign: "right" }}
                  >
                    <img
                      src={heroImage}
                      style={{
                        height: "470px",
                        display: "inline-block",
                        margin: "0",
                      }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <AppSubNavBar />
            </section>

            <main
              className="container"
              style={{ height: "150vh", paddingTop: "150px" }}
            >
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
          </React.Fragment>
        )}
      </Layout>
    );
  }
}

export default ResourcesIndex;
