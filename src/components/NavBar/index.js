import React from 'react'
import Link from 'gatsby-link'
// import "../../styles/navbar.scss";
import styles from "../../styles/navbar.module.scss"

const NavBar = () => {
  return <nav className={styles.navbar} aria-label="main navigation">
      <div className="navbar-brand">
        <button className="button navbar-burger" data-target="navMenu">
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="navbar-menu" id="navMenu">
        <div className="navbar-start">
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
    </nav>;
}

export default NavBar
