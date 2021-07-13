import React, { Component } from 'react';
import Footer from './components/Footer';
import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="w3-content w3-margin-top" style={{maxWidth: 1400}}>
          <div className="w3-row-padding">
            <LeftContent />
            <RightContent />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
