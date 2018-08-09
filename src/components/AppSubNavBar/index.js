import React from 'react'
import Link from 'gatsby-link'
import styles from "../../styles/app-subnavbar.module.scss"
import Icon from "../icon";

const AppSubNavBar = () => {
  return <nav className={[styles.navbar, "is-spaced level"].join(" ")} aria-label="page navigation">
    <div className="container d-f@palm">
        <div className="navbar-brand">
          <Icon symbol="apps#services-badge" style={{ height: "37px", width: "156px", marginBottom: "30px" }} />
        </div>

        <div className="navbar-menu">
          <div className={[styles.navbarTextOptions, "navbar-start navbar-menu-container"].join(" ")}>
            <div className="navbar-item">
              <Link className="navbar-item" to="/">
                Products
              </Link>
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
            <Link className="button is-text navbar-item" to="/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </nav>;
}

export default AppSubNavBar
