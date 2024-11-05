import React, { Component } from "react";
import "../assets/css/Footer.css";
import urls from "./Constants";

class Footer extends Component {
  render() {
    return (
      <footer className="w3-container w3-teal w3-center w3-margin-top">
        <p className="footer__social">Find me on social media.</p>
        <a href={urls.FB_URL}>
          <i className="fa fa-facebook-official w3-hover-opacity footer__social-icon"></i>
        </a>
        <a href={urls.GITHUB_URL}>
          <i className="fa fa-github w3-hover-opacity footer__social-icon"></i>
        </a>
        <a href={urls.TWITTER_URL}>
          <i className="fa fa-twitter w3-hover-opacity footer__social-icon"></i>
        </a>
        <a href={urls.LINKED_IN_URL}>
          <i className="fa fa-linkedin w3-hover-opacity footer__social-icon"></i>
        </a>
        <p>
          Powered by{" "}
          <a href={urls.MY_SITE} target="_blank" rel='noreferrer'>
            kysuit.net
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
