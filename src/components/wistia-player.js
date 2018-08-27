import { Component, createElement } from "react";

let wistiaAPILoaded = false;

function loadWistiaAPI() {
  const script = document.createElement("script");
  script.src = "//fast.wistia.com/assets/external/E-v1.js";
  script.async = true;
  script.charset = "ISO-8859-1";
  window._wq = window._wq || [];
  document.head.appendChild(script);
}

class WistiaPlayer extends Component {
  static defaultProps = {
    tag: "div",
    popover: true,
    responsive: "true",
  };

  state = {
    video: null,
  };

  componentDidMount() {
    this.mounted = true;

    if (!wistiaAPILoaded) {
      loadWistiaAPI();
    }

    _wq.push({
      id: this.props.id,
      onReady: video => {
        if (this.mounted) {
          this.setState({ video });
        }
      },
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleKeyDown = event => {
    if (event.key === "Enter") {
      this.state.video.play();
    }
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  };

  render() {
    const {
      tag,
      children,
      className,
      onKeyDown,
      id,
      popover,
      ...restProps
    } = this.props;
    let api = `wistia_embed wistia_async_${id} popoverContent=html`;
    if (popover) {
      api += " popover=true";
    }
    return createElement(
      tag,
      {
        tabIndex: 0,
        onKeyDown: this.handleKeyDown,
        className: className ? `${className} ${api}` : api,
        ...restProps,
      },
      children
    );
  }
}

export default WistiaPlayer;
