import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";

import Layout from "../components/layout";

import { BottomArc } from "../components/design-elements/svg-design-elements";
import heroImage from "./home-hero-balanced-chaos.svg";
import { ArrowRight } from "../components/icons/planning-center-icons";
import * as AppLogos from "../components/icons/app-logos";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return <Layout location={this.props.location}>
      {layoutState => <React.Fragment>
        <Helmet>
          <title>{siteTitle}</title>
          <body inverse="true" toggleable="true" className={layoutState.isTop ? `navbar-is-top home has-hero hero-is-light nav-is-light` : `navbar-is-scrolling home has-hero hero-is-light nav-is-light`} />
        </Helmet>        
        <section className="hero section">
          <div className="hero-body container">
            <div className="columns is-8 is-variable ai-c">
              <div className="column column-text">
                <header style={{ marginBottom: "48px" }}>
                  <h1>Ministry doesn't have to be so hard. </h1>
                  <h2 className="hero__subheading">We equip you with the tools you need to focus on what matters: your ministry. </h2>
                </header>

                <ul className="inline-links hero-buttons" style={{ display: "block" }}>
                  <li>
                    <button className="button is-medium is-primary">
                      Start Free Trial
                    </button>
                  </li>
                  <li>
                    <button className="button has-shadow is-medium is-white nudge-right">
                      Plans and Pricing
                    </button>
                  </li>
                </ul>
              </div>

              <div className="column column-image is-hidden-mobile">
                <img src={heroImage} style={{ height: "470px", display: "inline-block", margin: "0" }} alt="" />
              </div>
            </div>
          </div>
          <BottomArc className="section-divide-shape absolute bottom-0" style={{ fill: '#fff'}} />
        </section>

        <section id="features" name="#features" className="section is-medium section--content-wrap relative">
          <div className="container" style={{ paddingBottom: '30px' }}>
            <header className="section-header">
              <h1 className="section-header__main">Sofware for Every Ministry</h1>
              <h2 className="section-header__sub section-header-underline">Planning Center is a set of seven online applications you can use together as a full church management system or subscribe to each one individually.</h2>
            </header>
            <div className="container--med-width">
              <Link to="/people/">
                <article className="media is-borderless home-people-feature-card ai-c">
                  <figure className="media-left mb-0" style={{ marginRight: "42px"}}>
                    <span className="feature-list__logo"><AppLogos.PeopleBadge /></span>
                  </figure>
                  <div className="media-content">
                    <p className="mb-0" style={{fontSize: "18px", color:"#333333"}}>
                      Planning Center People is the hub that connects all our apps. Equip staff with insights on church members so they can effectively minister to them. 
                    </p>
                  </div>
                </article> 
              </Link>           

              <ul className="feature-list columns is-multiline is-variable is-8">
                <li className="column is-one-third">
                  <h3 className="feature-list__heading">
                    <span className="feature-list__logo"><AppLogos.CheckInsBadge /></span>
                  </h3>
                  <p className="feature-list__body">
                    Safely and quickly check kids or volunteers in to classrooms and track attendance for any event.
                  </p>
                  <p><Link to="/check-ins/" className="product-exploration-link">Learn more <ArrowRight className="icon-more-arrow" /></Link></p>
                </li>
                <li className="column is-one-third">
                  <h3 className="feature-list__heading">
                    <span className="feature-list__logo"><AppLogos.GivingBadge /></span>
                  </h3>
                  <p className="feature-list__body">
                    Manage cash, check, and online donations, track donor giving, and issue statements in one system.
                  </p>
                  <p><Link to="/giving/" className="product-exploration-link">Learn more <ArrowRight className="icon-more-arrow" /></Link></p>
                </li>
                <li className="column is-one-third">
                  <h3 className="feature-list__heading">
                    <span className="feature-list__logo"><AppLogos.GroupsBadge /></span>
                  </h3>
                  <p className="feature-list__body">
                    Create a directory for small groups, communicate with members, and track attendance.
                  </p>
                  <p><Link to="/groups" className="product-exploration-link">Learn more <ArrowRight className="icon-more-arrow" /></Link></p>
                </li>
                <li className="column is-one-third">
                  <h3 className="feature-list__heading">
                    <span className="feature-list__logo"><AppLogos.RegistrationsBadge /></span>
                  </h3>
                  <p className="feature-list__body">
                    Accept sign-ups, receive payments, and organize the details of events.
                  </p>
                  <p><Link to="/registrations/" className="product-exploration-link">Learn more <ArrowRight className="icon-more-arrow" /></Link></p>
                </li>
                <li className="column is-one-third">
                  <h3 className="feature-list__heading">
                    <span className="feature-list__logo"><AppLogos.ResourcesBadge /></span>
                  </h3>
                  <p className="feature-list__body">
                    Track and approve what rooms and resources are being used, who can use them, and when.
                  </p>
                  <p><Link to="/resources/" className="product-exploration-link">Learn more <ArrowRight className="icon-more-arrow" /></Link></p>
                </li>
                <li className="column is-one-third">
                  <h3 className="feature-list__heading">
                    <span className="feature-list__logo"><AppLogos.ServicesBadge /></span>
                  </h3>
                  <p className="feature-list__body">
                    Coordinate service plans, schedule volunteers, and provide rehearsal tools for music teams.
                  </p>
                  <p><Link to="/services/" className="product-exploration-link">Learn more <ArrowRight className="icon-more-arrow" /></Link></p>
                </li>                              
              </ul>
            </div>
          </div>
          <BottomArc className="section-divide-shape absolute bottom-0 left-0" style={{ fill: '#F2FBFF'}} />
        </section>        
        <section className="section--light-color section is-medium section--content-wrap relative">
        
        </section>

      </React.Fragment>}
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
