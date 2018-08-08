import React from 'react'
import { Link } from 'gatsby'

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "@planningcenter/icons/css/symbol.css";

import "../styles/bulma-import.scss";

import "../styles/global/_all.scss";

class Template extends React.Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 300;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }  

  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    return <div className="">
      <div inverse toggleable style={{ top: 0 }} className={this.state.isTop ? 'navbar-is-top' : 'navbar-is-scrolling'}>
        <NavBar />
      </div>
      {header}
      {children}
      <Footer/>
    </div>;
  }
}

export default Template
