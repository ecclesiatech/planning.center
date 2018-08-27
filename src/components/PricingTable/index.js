import React from 'react'
import Link from 'gatsby-link'


class PricingTable extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        isActive: false,
      }
  };

  render() {
    
    return(
      <div className="pricing-table columns is-2 is-variable is-multilinez">
        <div className="column">
          <div className="card">
            <div className="pricing-content">
              <header>
                <h3 className="pricing-h1">10</h3>
                <h4 className="pricing-h2">Managed Rooms</h4>
              </header>
              <p className="pricing-body">$14 a month</p>
            </div>
            <button className="button button-ice pricing-button">Start free trial</button>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="pricing-content">
              <header>
                <h3 className="pricing-h1">25</h3>
                <h4 className="pricing-h2">Managed Rooms</h4>
              </header>
              <p className="pricing-body">$29 a month</p>
            </div>
            <button className="button button-ice pricing-button">Start free trial</button>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="pricing-content">
              <header>
                <h3 className="pricing-h1">55</h3>
                <h4 className="pricing-h2">Managed Rooms</h4>
              </header>
              <p className="pricing-body">$59 a month</p>
            </div>
            <button className="button button-ice pricing-button">Start free trial</button>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="pricing-content">
              <header>
                <h3 className="pricing-h1">100</h3>
                <h4 className="pricing-h2">Managed Rooms</h4>
              </header>
              <p className="pricing-body">$99 a month</p>
            </div>
            <button className="button button-ice pricing-button">Start free trial</button>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="pricing-content">
              <header>
                <h3 className="pricing-h1">150</h3>
                <h4 className="pricing-h2">Managed Rooms</h4>
              </header>
              <p className="pricing-body">$149 a month</p>
            </div>
            <button className="button button-ice pricing-button">Start free trial</button>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="pricing-content">
              <header>
                <h3 className="pricing-h1">Unltd</h3>
                <h4 className="pricing-h2">Managed Rooms</h4>
              </header>
              <p className="pricing-body">$199 a month</p>
            </div>
            <button className="button button-ice pricing-button">Start free trial</button>
          </div>
        </div>

      </div>
    
    
    );}
}

export default PricingTable

