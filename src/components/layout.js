import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "@planningcenter/icons/css/symbol.css";

import "../styles/bulma-import.scss";
import styles from "../styles/global-layout.module.scss";

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    return <div className="">
        <NavBar />
        {header}
        <main className={styles.container}>{children}</main>
      <Footer/>
      </div>;
  }
}

export default Template
