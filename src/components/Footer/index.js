import React from 'react'
import Link from 'gatsby-link'
import PCLogoMono from "../../components/icons/planning-center-logo-mono";
import styles from "../../styles/footer.module.scss";

const Footer = () => {
  return <footer className={[styles.footer, "bd-main"].join(" ")}>

    <div className="container">
      <div className="columns">

        <div className="column columns">
          <Link className="column" to="/">
            <PCLogoMono className={styles.footerLogo} />
          </Link>
          <ul className="field is-grouped social-media column">
            <li>
              <Link className="" to="http://twitter.com">
                TW
              </Link>
            </li>
            <li>
              <Link className="" to="http://facebook.com">
                FB
              </Link>
            </li>
            <li>
              <Link className="" to="http://instagram">
                IG
              </Link>
            </li>
            <li>
              <Link className="" to="http://youtube">
                YT
              </Link>
            </li>
          </ul>
        </div>

          <div className="field is-grouped column">
            <ul className="control inline-links d-f" style={{textAlign: 'right'}}>
              <li>
                <Link className="" to="/api">
                  API
                </Link>
              </li>
              <li>
                <Link className="" to="/careers">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="" to="/legal">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
      </div>
    </div>
  </footer>;
}

export default Footer
