import React, { Component } from 'react';
// import logo from './logo.svg';
import '../assets/css/Footer.css';

class Footer extends Component {
  render() {
    return (
        <footer className="w3-container w3-teal w3-center w3-margin-top">
            <p className="footer__social">Find me on social media.</p>
              <i className="fa fa-facebook-official w3-hover-opacity footer__social-icon"></i>
              <i className="fa fa-instagram w3-hover-opacity footer__social-icon"></i>
              {/*<i className="fa fa-snapchat w3-hover-opacity footer__social-icon"></i>*/}
              {<i className="fa fa-pinterest-p w3-hover-opacity footer__social-icon"></i>}
              {<i className="fa fa-twitter w3-hover-opacity footer__social-icon"></i>}
              <i className="fa fa-linkedin w3-hover-opacity footer__social-icon"></i>
            <p>Powered by <a href="https://toilamit.com" target="_blank">toilamit.com</a></p>
        </footer>
    );
  }
}

export default Footer;
