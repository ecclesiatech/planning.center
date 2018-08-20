import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import heroImage from "./services.svg";
import s1Image1 from "../../images/bgs/services/section-1/image-1.png";

import Layout from "../../components/layout";
import AppSubNavBar from "../../components/AppSubNavBar";
import Icon from "../../components/icon";
import { BottomArc } from "../../components/design-elements/design-elements";

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
              <AppSubNavBar  />
            </section>
            
            <section id="features" name="#features" className="section--extra-light-color section--content-wrap relative">
              <div className="container" style={{paddingBottom: '30px'}}>
                <header className="section-header">
                  <h3 className="section-header__lead"> Scheduling</h3>
                  <h1 className="section-header__main"> Coordinate with volunteers</h1>
                  <h2 className="section-header__sub"> Schedule people for every ministry position in the church.</h2>
                </header>
                <Tabs className="product-tabs columns columns--flip-sides">
                  <TabList className="product-tabs__tabs column branded-ul">
                    <Tab><strong>Teams:</strong> Your church has unique goals and priorities, so create custom fields to store information relevant to your ministry. </Tab>
                    <Tab><strong>Calendar Preferences:</strong> Schedule people according to preferences, blockout dates, conflicts, and already declined requests. </Tab>
                    <Tab><strong>Team Communication:</strong> Send scheduling requests to people via text, email, or push notifications on the mobile app. </Tab>
                    <Tab><strong>The Matrix:</strong> Schedule for multiple services at once and combine multiple schedule requests into one notification per person. </Tab>
                  </TabList>
                  <div className="product-tabs__panel-wrap tab-panel-1 column">
                    <TabPanel>
                      <img src={s1Image1} alt="" />
                    </TabPanel>
                    <TabPanel>
                      <img src={s1Image1} alt="" />
                    </TabPanel>
                    <TabPanel>
                      <img src={s1Image1} alt="" />
                    </TabPanel>
                    <TabPanel>
                      <img src={s1Image1} alt="" />
                    </TabPanel>
                  </div>
                </Tabs>
              </div>
              <BottomArc className="design-element absolute bottom-0" style={{ fill: 'F2FBFF'}} />
            </section>

            <section id="features" name="#features" className="section--light-color section--content-wrap relative">
              <BottomArc className="design-element absolute bottom-0" style={{ fill: 'F2FBFF' }} />            
              <div className="container" style={{paddingBottom: '30px'}}>
                <header className="section-header">
                  <h3 className="section-header__lead"> Planning</h3>
                  <h1 className="section-header__main"> Service Road Map</h1>
                  <h2 className="section-header__sub"> Prepare for services by creating detailed plans for people to follow.</h2>
                </header>
                <Tabs className="product-tabs columns">
                  <TabList className="product-tabs__tabs column branded-ul">
                    <Tab><strong>Service Plans</strong> Set up unique plans for each service including details on people, songs, notes, and other items. </Tab>
                <Tab><strong>Service Types:</strong> Organize your service plans within specific categories, like Sunday Morning or Kids Midweek.</Tab>
                    <Tab><strong>Team Communication:</strong> Send scheduling requests to people via text, email, or push notifications on the mobile app. </Tab>
                <Tab><strong>Order of Service:</strong> Give people an agenda for the service by setting the order and length of each item on the schedule.</Tab>
                  </TabList>
                  <div className="product-tabs__panel-wrap tab-panel-1 column">
                    <TabPanel>
                      <img src={s1Image1} alt="" />
                    </TabPanel>
                    <TabPanel>
                      <img src={s1Image1} alt="" />
                    </TabPanel>
                    <TabPanel>
                      <img src={s1Image1} alt="" />
                    </TabPanel>
                    <TabPanel>
                      <img src={s1Image1} alt="" />
                    </TabPanel>
                  </div>
                </Tabs>
              </div>
              <BottomArc className="design-element absolute bottom-0" style={{ fill: 'F2FBFF' }} />
            </section>

          </React.Fragment>}
      </Layout>;
  }
}

export default ServicesIndex;
