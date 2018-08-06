import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

import NavBar from "../components/global-navbar";
import Footer from "../components/global-footer";

import "@planningcenter/icons/css/symbol.css";

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    return (
      <div className="wrapper">
        <div      
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <NavBar />
          {header}
          {children}
        </div>
        <div><Footer/></div>
      </div>
    )
  }
}

export default Template
