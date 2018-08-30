import React from 'react'
import { Link } from "gatsby";


class TrialBanner extends React.Component {
  
  render() {
    const { className, ...restProps } = this.props;  
    
    return( 
      <div className={`cta-trial-banner ${className}`}>
        <div className="container">
        <div className="columns">
            <h2 className="column three-fourths is-marginless is-paddingless has-text-white">
              Join over 35,000 other churches already using Planning Center as
              part of their ministry!
            </h2>
            <div className="column one-fourth ta-r">
              <Link className="button is-medium button-ghost" to="/">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    );}
}

export default TrialBanner;

