import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import heroImage from "./services.svg";
import s1Image1 from "../../images/bgs/services/section-1/image-1.png";
import Icon from "../../components/icon";
import { ServicesLive, MusicStand} from "../../images/illustrations/simple-bits";
import { BottomArc, BottomWave } from "../../components/design-elements/svg-design-elements";

import Layout from "../../components/layout";
import AppSubNavBar from "../../components/AppSubNavBar";

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
                      <h1>Lead powerful services with unified teams.</h1>
                    </header>

                    <ul className="inline-links hero-buttons" style={{ display: "block" }}>
                      <li>
                        <button className="button is-medium is-white">
                          Start a Free Trial
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
            
            <section id="features" name="#features" className="section--extra-light-color section is-medium section--content-wrap relative">
              <div className="container" style={{paddingBottom: '30px'}}>
                <header className="section-header">
                  <h3 className="section-header__lead">Scheduling</h3>
                  <h1 className="section-header__main">Coordinate with volunteers</h1>
                  <h2 className="section-header__sub">Schedule people for every ministry position in the church.</h2>
                </header>
                <Tabs className="product-tabs columns columns--flip-sides">
                  <TabList className="product-tabs__tabs column branded-ul">
                    <Tab><strong>Teams:</strong> Assign volunteers to positions on teams—like “Usher” on the “Hospitality” team—and schedule people to fill those positions.</Tab>
                    <Tab><strong>Calendar Preferences:</strong> Schedule people according to their marked preferences, blockout dates, conflicts, and declined requests.</Tab>
                    <Tab><strong>Team Communication:</strong> Send scheduling requests to people via text, email, or push notifications on the mobile app.</Tab>
                    <Tab><strong>Long-Term Scheduling:</strong> Schedule teams months at a time from The Matrix and use Auto-Scheduling to fill any needed positions.</Tab>
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

            <section className="section--light-color section is-medium section--content-wrap relative">
              <div className="container" style={{paddingBottom: '30px'}}>
                <header className="section-header">
                  <h3 className="section-header__lead">Planning</h3>
                  <h1 className="section-header__main">Service Road Map</h1>
                  <h2 className="section-header__sub">Prepare for services by creating detailed plans for people to follow.</h2>
                </header>
                <Tabs className="product-tabs columns">
                  <TabList className="product-tabs__tabs column branded-ul">
                    <Tab><strong>Service Plans:</strong> Set up unique plans for each service including details on people, songs, notes, and other items. </Tab>
                    <Tab><strong>Service Types:</strong> Organize your plans within specific ministries like Children’s Ministry, or services, like Sunday Morning Contemporary.</Tab>
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
                  </div>
                </Tabs>
              </div>
              <BottomWave className="design-element absolute bottom-0" style={{ fill: 'FAFDFF' }} />
            </section>

            <section className="section--extra-light-color section is-medium section--content-wrap relative">
              <div className="container" >
                <header className="section-header">
                  <h3 className="section-header__lead">Rehearsing</h3>
                  <h1 className="section-header__main">Tools for Musicians</h1>
                  <h2 className="section-header__sub">Encourage musicians to collaborate creatively by giving them practice tools.</h2>
                </header>
                <Tabs className="product-tabs columns columns--flip-sides">
                  <TabList className="product-tabs__tabs column branded-ul">
                    <Tab><strong>Transposing:</strong> Help musicians practice songs in the right key by transposing chord charts and audio files of any song.</Tab>
                    <Tab><strong>Song Library:</strong> Upload your own songs or import from 3rd-party apps  and include arrangement details.</Tab>
                    <Tab><strong>Rehearsal Files:</strong> Share any files with your team—chord charts, audio files, or videos—by attaching them to the service plan.</Tab>
                    <Tab><strong>Mobile Media Player:</strong> Musicians can practice music on or offline, loop tricky sections of audio, or use a metronome using our mobile app.</Tab>
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
            </section>

            <section className="section is-medium section--content-wrap sub-products section--high-contrast has-text-white">
              <div className="container" >
              <div className="columns is-variable is-8" >
                  <div className="column">
                    <article className="media">
                      <figure className="media-left" style={{marginRight: "1.7rem"}}>
                        <MusicStand style={{width: "70px"}} />
                      </figure>
                      <div className="media-content">
                        <h2 style={{marginBottom: "0.45em"}}>Services Live</h2>
                        <p style={{fontSize: "18px"}}>
                          Record the length of every item in your Order of Service—songs, announcements, videos, sermon—in real time to evaluate how closely your service plans align with reality.
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="column">
                    <article className="media">
                      <figure className="media-left" style={{marginRight: "1.7rem"}}>
                        <ServicesLive style={{width: "70px"}} />
                      </figure>
                      <div className="media-content">
                        <h2 style={{marginBottom: "0.45em"}}>Music Stand</h2>
                        <p style={{fontSize: "18px"}}>
                          An add-on mobile app to Services designed for musicians to quickly turn through sheet music with a foot pedal or by swiping, save personalized notes, and play audio.  
                        </p>
                      </div>
                    </article>
                  </div>                
                </div>
              </div>
            </section>
            <section className="section--brand-color section is-medium section--content-wrap relative has-text-white">
              <div className="container" >
                <header className="section-header">
                  <h1 className="section-header__main section-header__main-underline is-white">More Things You Can Do With Services </h1>
                </header>              

                <ul className="columns is-multiline is-variable is-8">
                  <li className="column is-one-third">
                    <h3 className="">
                      <Icon symbol="apps#services-app"/>
                      Reporting 
                    </h3>
                    Create custom reports to evaluate info on people, song selection,scheduling, service length and more!
                  </li>
                  <li className="column is-one-third">
                    <h3 className="">
                      <Icon symbol="apps#services-app" />
                      Permission Levels
                    </h3>
                    Keep your database clean and secure by assigning different permissions to staff and volunteers.
                  </li>
                  <li className="column is-one-third">
                    <h3 className="">
                      <Icon symbol="apps#services-app" />
                      Stage Layouts 
                    </h3>
                    Place your team where you want your team with color-coded stage layouts, and save plans as templates for later!
                  </li>
                  <li className="column is-one-third">
                    <h3 className="">
                      <Icon symbol="apps#services-app"/>
                      Media Library  
                    </h3>
                    Hold on to photos, videos and documents so you can use them again during later services.
                  </li>
                  <li className="column is-one-third">
                    <h3 className="">
                      <Icon symbol="apps#services-app" />
                      Household Scheduling 
                    </h3>
                    Families can plan their service times together by sharing their volunteer schedules with each other.
                  </li>
                  <li className="column is-one-third">
                    <h3 className="">
                      <Icon symbol="apps#services-app" />
                      Calendar Subscription 
                    </h3>
                    People can subscribe to their volunteer schedules from their personal calendar applications.
                  </li>
                  <li className="column is-one-third">
                    <h3 className="">
                      <Icon symbol="apps#services-app"/>
                      Mobile app 
                    </h3>
                    Everyone can access the main features in Services on the go using our mobile app, available for iOS and Android.
                  </li>
                  <li className="column is-one-third">
                    <h3 className="">
                      <Icon symbol="apps#services-app" />
                      Integrations
                    </h3>
                    We integrate with many web-based applications, like SongSelect and PraiseCharts. For a full list click: 
                  </li>                                
                </ul>

              </div>
            </section>

          </React.Fragment>}
      </Layout>;
  }
}

export default ServicesIndex;
