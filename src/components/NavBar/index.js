import React from 'react'
import Link from 'gatsby-link'
import {PCLogoColor} from "../../components/icons/planning-center-icons";
import styles from "../../styles/navbar.module.scss"
import Icon from "../icon";

const NavBar = () => {
  return <nav className={[styles.navbar, "topbar is-fixed-top has-shadow is-spaced"].join(" ")} aria-label="main navigation">
    <div className="container d-f@palm">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <PCLogoColor />
          </Link>
          <button className="button navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div className="navbar-menu">
          <div className={[styles.navbarTextOptions, "navbar-start navbar-menu-container"].join(" ")}>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-item" to="/">
                Products
              </Link>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/check-ins">
                  <article className="media">
                    <figure className="media-left">
                      <Icon symbol="apps#check-ins-app" />
                    </figure>
                  </article>
                  <div className="media-content">
                    <div className="app-name">Check-Ins</div>
                    <div className="app-tagline">
                      Child &amp; Volunteer Check‑In
                    </div>
                  </div>
                </Link>
                <Link className="navbar-item" to="/giving">
                  <article className="media">
                    <figure className="media-left">
                      <Icon symbol="apps#giving-app" />
                    </figure>
                  </article>
                  <div className="media-content">
                    <div className="app-name">Giving</div>
                    <div className="app-tagline">Donation Management</div>
                  </div>
                </Link>
                <Link className="navbar-item" to="/groups">
                  <article className="media">
                    <figure className="media-left">
                      <Icon symbol="apps#groups-app" />
                    </figure>
                  </article>
                  <div className="media-content">
                    <div className="app-name">Groups</div>
                    <div className="app-tagline">Groups Management</div>
                  </div>
                </Link>
                <Link className="navbar-item" to="/people">
                  <article className="media">
                    <figure className="media-left">
                      <Icon symbol="apps#people-app" />
                    </figure>
                  </article>
                  <div className="media-content">
                    <div className="app-name">People</div>
                    <div className="app-tagline">Membership Management</div>
                  </div>
                </Link>
                <Link className="navbar-item" to="/registrations">
                  <article className="media">
                    <figure className="media-left">
                      <Icon symbol="apps#registrations-app" />
                    </figure>
                  </article>
                  <div className="media-content">
                    <div className="app-name">Registrations</div>
                    <div className="app-tagline">Event Registrations</div>
                  </div>
                </Link>
                <Link className="navbar-item" to="/resources">
                  <article className="media">
                    <figure className="media-left">
                      <Icon symbol="apps#resources-app" />
                    </figure>
                  </article>
                  <div className="media-content">
                    <div className="app-name">Resources</div>
                    <div className="app-tagline">Church Event Management</div>
                  </div>
                </Link>
                <Link className="navbar-item" to="/services">
                  <article className="media">
                    <figure className="media-left">
                      <Icon symbol="apps#services-app" />
                    </figure>
                  </article>
                  <div className="media-content">
                    <div className="app-name">Services</div>
                    <div className="app-tagline">
                      Service Planning &amp; Scheduling
                    </div>
                  </div>
                </Link>
                <Link className="navbar-item add-on" to="/music-stand">
                  <article className="media">
                    <figure className="media-left">
                      <Icon symbol="apps#music-stand-app" />
                    </figure>
                  </article>
                  <div className="media-content">
                    <div className="app-name">Music Stand</div>
                  </div>
                </Link>
              </div>
            </div>
            {/*END PRODUCT DROPDOWN*/}
            <Link className="navbar-item" to="/about">
              Learn
            </Link>
            <Link className="navbar-item" to="/blog">
              Pricing
            </Link>
            <Link className="navbar-item" to="/blog">
              About
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link className="button is-primary is-outlined" to="/contact">
                    Sign up
                  </Link>
                  <Link className="button is-primary is-outlined" to="/contact">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>;
}

export default NavBar
