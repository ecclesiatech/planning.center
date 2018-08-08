import React from 'react'
import Link from 'gatsby-link'
import {PCLogoColorReversed} from "../../components/icons/planning-center-icons";
import {IconFacebook} from "../../components/icons/planning-center-icons";
import {IconInstagram} from "../../components/icons/planning-center-icons";
import {IconTwitter} from "../../components/icons/planning-center-icons";
import {IconYouTube} from "../../components/icons/planning-center-icons";
import styles from "../../styles/footer.module.scss";

const Footer = () => {
  return <footer className={[styles.footer, "bd-main"].join(" ")}>

    <div className="container">
      <div className="d-f@palm">

        <div className="f-1 d-f@palm">
          <Link to="/">
            <PCLogoColorReversed className={styles.logo}/>
          </Link>
          <ul className={[styles.social, "field is-grouped social-media f-1"].join(" ")}>
            <li>
              <Link className="" to="http://twitter.com">
                <IconTwitter/>
              </Link>
            </li>
            <li>
              <Link className="" to="http://facebook.com">
                <IconFacebook/>
              </Link>
            </li>
            <li>
              <Link className="" to="http://instagram">
                <IconInstagram/>
              </Link>
            </li>
            <li>
              <Link className="" to="http://youtube">
                <IconYouTube/>
              </Link>
            </li>
          </ul>
        </div>

          <div className="field is-grouped d-f@palm">
            <ul className={[styles.links, "field is-grouped social-media f-1"].join(" ")}>
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
