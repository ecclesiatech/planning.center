import React from 'react'
import Link from 'gatsby-link'
import {PCLogoColor} from "../../components/icons/planning-center-icons";
import styles from "../../styles/navbar.module.scss"

const NavBar = () => {
  return <nav className={[styles.navbar, "is-fixed-top"].join(" ")} aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <button className="button navbar-burger" data-target="navMenu">
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start">
          <PCLogoColor />
          </div>

          <div className="navbar-end">
            <Link className="navbar-item" to="/pricing">
              Products
            </Link>
            <Link className="navbar-item" to="/about">
              Learn
            </Link>
            <Link className="navbar-item" to="/blog">
              Pricing
            </Link>
            <Link className="navbar-item" to="/blog">
              About
            </Link>
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
