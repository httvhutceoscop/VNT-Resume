import React, { Component } from 'react';

class RightContent extends Component {
  render() {
    return (
        <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                    Introduction
                </h2>
                <div className="w3-container">
                    <p>
                    I am very active in life, thirst for knowledge, and have high responsibility for my job.<br />
                    I love animals and sports, especially football.<br />
                    I am very interested in community activities.<br />
                    I love programming.</p>
                    <br />
                </div>
            </div>

            <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                    Work Experience
                </h2>
                <div className="w3-container">
                    <h5 className="w3-opacity"><strong>Front End Developer / w3schools.com</strong></h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        {/*Jan 2015 - <span className="w3-tag w3-teal w3-round">Current</span>*/}
                        2008 - 2013
                    </h6>
                    <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                    <hr />
                </div>
                <div className="w3-container">
                    <h5 className="w3-opacity"><strong>Web Developer / something.com</strong></h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014
                    </h6>
                    <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                    <hr />
                </div>
                <div className="w3-container">
                    <h5 className="w3-opacity"><strong>Hanoi University of Science and Technology</strong></h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>2008 - 2013
                    </h6>
                    <p><em>Faculty of Electronics and Telecommunications</em></p>
                    <br />
                </div>
            </div>

            <div className="w3-container w3-card w3-white">
                <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                    Education
                </h2>
                <div className="w3-container">
                    <h5 className="w3-opacity"><strong>W3Schools.com</strong></h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>Forever
                    </h6>
                    <p>Web Development! All I need to know in one place</p>
                    <hr />
                </div>
                <div className="w3-container">
                    <h5 className="w3-opacity"><strong>London Business School</strong></h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015
                    </h6>
                    <p>Master Degree</p>
                    <hr />
                </div>
                <div className="w3-container">
                    <h5 className="w3-opacity"><strong>School of Coding</strong></h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013
                    </h6>
                    <p>Bachelor Degree</p>
                    <br />
                </div>
            </div>
        </div>
    );
  }
}

export default RightContent;
