import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import heroImage from "./services.svg";

import Layout from "../../components/layout";
import AppSubNavBar from "../../components/AppSubNavBar";
import Icon from "../../components/icon";

class ServicesIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const appName = "services";
    
    return <Layout location={this.props.location}>
        {layoutState => <React.Fragment>
            <Helmet>
              <title>{siteTitle}</title>
              <body inverse="true" toggleable="true" className={layoutState.isTop ? `navbar-is-top app-page ${appName}` : `navbar-is-scrolling app-page ${appName}`} />
            </Helmet>
            <section className="hero">
              <div className="hero-body container">
                <div className="columns is-6">
                  <div className="column">
                    <header style={{ marginBottom: "48px" }}>
                      <Icon symbol="apps#services-badge" style={{ height: "64px", width: "247px", marginBottom: "30px" }} />
                      <h1>Lead a quality service with a unified team.</h1>
                    </header>

                    <ul className="inline-links hero-buttons" style={{ display: "block" }}>
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

                  <div className="column" style={{ justify: "flex-end", textAlign: "right" }}>
                    <img src={heroImage} style={{ height: "470px", display: "inline-block", margin: "0" }} alt="" />
                  </div>
                </div>
              </div>
              <AppSubNavBar />
            </section>
            
            <section className="section--extra-light-color section--content-wrap">
              <div className="container">
                <header className="section-header">
                  <h3 className="section-header__lead"> Scheduling</h3>
                  <h1 className="section-header__main"> Coordinate with volunteers</h1>
                  <h2 className="section-header__sub"> Schedule people for every ministry position in the church</h2>
                </header>
                <Tabs>
                  <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                  </TabList>

                  <TabPanel>
                    <h2>Any content 1</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 2</h2>
                  </TabPanel>
                </Tabs>                
              </div>
            </section>

            <section className="section--light-color section--content-wrap">
              <div className="container">
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
              </div>
            </section>  

          </React.Fragment>}
      </Layout>;
  }
}

export default ServicesIndex;
