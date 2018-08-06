import React from 'react'
import Link from 'gatsby-link'

const NavBar = () => {
  return <nav className="" aria-label="main navigation">
      <div>
        <div className="">
          <Link className="" to="/">
            Planning Center
          </Link>
          <div className="field is-grouped social-media">
            <Link className="" to="http://twitter.com">
              TW
            </Link>
            <Link className="" to="http://facebook.com">
              FB
            </Link>
            <Link className="" to="http://instagram">
              IG
            </Link>
            <Link className="" to="http://youtube">
              YT
            </Link>            
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="field is-grouped">
              <p className="control">
                <Link className="" to="/api">
                  API
                </Link>
                <Link className="" to="/careers">
                  Careers
                </Link>
                <Link className="" to="/contact">
                  Contact
                </Link>
                <Link className="" to="/legal">
                  Legal
                </Link>                          
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>;
}

export default NavBar
