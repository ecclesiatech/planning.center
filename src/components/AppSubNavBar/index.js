import React from 'react'
// import Link from 'gatsby-link'
import Icon from "../icon";

const AppSubNavBar = () => {
  return <nav className="navbar level app-page-nav" aria-label="page navigation">
    <div className="container level d-f@palm">
        <div className="navbar-brand">
        <Icon symbol="apps#services-badge" style={{ height: "37px", width: "156px"}} />
        </div>

        <div className="navbar-menu">
          <div className="navbarTextOptions navbar-start navbar-menu-container">
            <a className="navbar-item navbar-item--current" href="#features">
              Features
            </a>
            <a className="navbar-item" href="#pricing">
              Pricing
            </a>
            <a className="navbar-item" href="#support">
              Support
            </a>            
          </div>
          <div className="navbar-end">
            <button className="button navbar-item" to="">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>;
}

export default AppSubNavBar
