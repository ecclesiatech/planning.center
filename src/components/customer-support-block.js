import React from 'react'
import WistiaPlayer from "../components/wistia-player";
import styles from "../styles/modules/support.module.scss"
import { Calendar, Stopwatch, Padlock } from "../images/illustrations/simple-bits";

import supportPosterFrame from "../images/misc/support-frame.jpg";

class SupportBlock extends React.Component {

  render() {
    const { className, ...restProps } = this.props;  
    
    return <section className={`${className} section section-support section--light-color is-medium section--content-wrap relative`}>
        <div className="support-block">
          <div className="support-container container">
            <header className="section-header">
              <h1 className="section-header__main">Customer Support</h1>
              <h2 className="section-header__sub section-header-underline">
                Our team is built of people who work and volunteer in the
                church and are ready to support you in your goals.
              </h2>
            </header>

            <div className="is-flex-961 jc-c">
              <div className={styles.supportList}>
                <article className={[styles.supportListItem, "media is-borderless"].join(" ")} style={{ minWidth: "300px", maxWidth: "366px", alignItems: "center" }}>
                  <figure className="media-left mb-0" style={{ marginRight: "1.7rem", width: "70px" }}>
                    <Stopwatch style={{ width: "69px" }} />
                  </figure>
                  <div className="media-content">
                    <h3 className="media-alt-header">1-hour Responses</h3>
                    <p className="mb-0">
                      Receive an answer to your question in one business
                      hour, M-F.
                    </p>
                  </div>
                </article>
                <article className={[styles.supportListItem, "media is-borderless"].join(" ")} style={{ minWidth: "300px", maxWidth: "366px", alignItems: "center" }}>
                  <figure className="media-left mb-0" style={{ marginRight: "1.7rem", width: "70px" }}>
                    <Calendar style={{ width: "66px" }} />
                  </figure>
                  <div className="media-content">
                    <h3 className="media-alt-header">Sunday Support</h3>
                    <p className="mb-0">
                      We are online Sunday mornings to address emergencies.
                    </p>
                  </div>
                </article>
                <article className={[styles.supportListItem, "media is-borderless"].join(" ")} style={{ minWidth: "300px", maxWidth: "366px", alignItems: "center" }}>
                  <figure className="media-left mb-0" style={{ marginRight: "1.7rem", width: "70px" }}>
                    <Padlock style={{ width: "56px" }} />
                  </figure>
                  <div className="media-content">
                    <h3 className="media-alt-header">Open Door</h3>
                    <p className="mb-0">
                      Any user can contact us to get help, not just
                      administrators.
                    </p>
                  </div>
                </article>
              </div>

              <div className="relative" style={{ maxWidth: "640px" }}>
                <div className="blob-filled blob-filled--color-med blob-absolute">&nbsp;</div>
                <div className={[styles.supportVideo, "video wistia-responsive"].join(" ")}>
                  <WistiaPlayer id="vn1v5r7j28">
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

