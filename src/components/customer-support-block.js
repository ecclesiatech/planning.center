import React from 'react'
import WistiaPlayer from "../components/wistia-player";
import styles from "../styles/modules/support.module.scss"

import supportPosterFrame from "../images/misc/support-frame.jpg";

class SupportBlock extends React.Component {

  render() {
    const { className, ...restProps } = this.props;  
    
    return <section className={`${className} section section-support section--light-color is-medium section--content-wrap relative`}>
        <div className="support-block">
          <div className="support-container container">
            <header className="section-header">
              <h1 className="section-header__main">Customer Support</h1>
              <h2 className="section-header__sub">
                Our team is built of people who work and volunteer in the
                church and are ready to support you in your goals.
              </h2>
            </header>

            <div className="columns is-2 is-variable">
              <div className="column is-narrow">
                <article className="media is-borderless">
                  <figure className="media-left" style={{ marginRight: "1.7rem" }}>
                    {/*<Calculator style={{ height: "48px" }} />*/}
                    ICON
                  </figure>
                  <div className="media-content">
                    <h3 className="media-alt-header">
                      Want the whole Planning Center system?
                    </h3>
                    <p>Our calculator can help you price it out.</p>
                  </div>
                </article>
                <article className="media is-borderless">
                  <figure className="media-left" style={{ marginRight: "1.7rem" }}>
                    {/*<Calculator style={{ height: "48px" }} />*/}
                    ICON 2
                  </figure>
                  <div className="media-content">
                    <h3 className="media-alt-header">Sunday Support</h3>
                    <p>
                      We are online Sunday mornings to address emergencies.
                    </p>
                  </div>
                </article>
                <article className="media is-borderless">
                  <figure className="media-left" style={{ marginRight: "1.7rem" }}>
                    {/*<Calculator style={{ height: "48px" }} />*/}
                    ICON 3
                  </figure>
                  <div className="media-content">
                    <h3 className="media-alt-header">Open Door</h3>
                    <p>
                      Any user can contact us to get help, not just administrators.
                    </p>
                  </div>
                </article>
              </div>

              <div className="column relative">
                <div className={[styles.supportVideo, "video"].join(" ")}>
                  <WistiaPlayer
                    id="vn1v5r7j28"
                  >
                    <img src={supportPosterFrame} style={{ display: "block", margin: "0" }} alt="" />
                    <button className={[styles.playButton, ""].join(" ")} />
                  </WistiaPlayer>                    
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>;}
}

export default SupportBlock

