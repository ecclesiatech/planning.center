import React from 'react'
import Link from 'gatsby-link'


class SupportBlock extends React.Component {

  render() {
    const { className, ...restProps } = this.props;    
    
    return(
      <div className="support-block">

        <div className="support-container container">

          <header className="section-header">
            <h1 className="section-header__main">Customer Support</h1>
            <h2 className="section-header__sub">Our team is built of people who work and volunteer in the church and are ready to support you in your goals.</h2>
          </header>      

          <div className="columns is-2 is-variable">
            <div className="column is-narrow">
              <article className="media">
                <figure className="media-left" style={{ marginRight: "1.7rem" }}>
                  {/*<Calculator style={{ height: "48px" }} />*/}
                  ICON
                </figure>
                <div className="media-content">
                  <h3 className="media-alt-header">Want the whole Planning Center system?</h3>
                  <p>
                    Our calculator can help you price it out.
                  </p>
                </div>
              </article>
            </div>

            <div className="column">
              <div className="card">
                <div className="pricing-content">
                  <header>
                    <h3 className="pricing-h1">10</h3>
                    <h4 className="pricing-h2">Managed Rooms</h4>
                  </header>
                  <p className="pricing-body">$14 a month</p>
                </div>
                <button className="button pricing-button">Start free trial</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    
    );}
}

export default SupportBlock

