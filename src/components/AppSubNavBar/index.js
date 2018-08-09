import React from 'react'
import Link from 'gatsby-link'
import styles from "../../styles/app-subnavbar.module.scss"
import Icon from "../icon";

const AppSubNavBar = () => {
  return <nav className={[styles.navbar, "is-spaced level app-page-nav"].join(" ")} aria-label="page navigation">
    <div className="container level d-f@palm">
        <div className="navbar-brand">
        <Icon symbol="apps#services-badge" style={{ height: "37px", width: "156px"}} />
        </div>

        <div className="navbar-menu">
          <div className={[styles.navbarTextOptions, "navbar-start navbar-menu-container"].join(" ")}>
            <Link className="navbar-item navbar-item--current" to="/">
              Features
            </Link>
            <Link className="navbar-item" to="/">
              Pricing
            </Link>
            <Link className="navbar-item" to="/">
              Support
            </Link>            
          </div>
          <div className="navbar-end">
            <Link className="button navbar-item" to="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>;
}

export default AppSubNavBar
