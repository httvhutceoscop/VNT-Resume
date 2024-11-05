import React, { Component } from "react";

class Education extends Component {
    render() {
        return (
            <div className="w3-container w3-card w3-white">
                <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-solid fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                    <span>Education</span>
                </h2>
                <div className="w3-container">
                    <h5 className="w3-opacity">
                        <strong>PMA Center in Hanoi</strong>
                    </h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        <span>09/2022 -12/2022</span>
                    </h6>
                    <p>
                        <em>PMP® Pass4Sure Course</em>
                    </p>
                    <hr />
                </div>
                <div className="w3-container">
                    <h5 className="w3-opacity">
                        <strong>Mina Japanese Center</strong>
                    </h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        <span>06/2018 - 09/2018</span>
                    </h6>
                    <p>
                        <em>N4 - Japanese Course</em>
                    </p>
                    <hr />
                </div>
                <div className="w3-container">
                    <h5 className="w3-opacity">
                        <strong>SEO Pro Internet Marketing 41 - Litado</strong>
                    </h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        <span>08/2014 - 10/2014</span>
                    </h6>
                    <p>
                        <em>SEO Website Training Course</em>
                    </p>
                    <hr />
                </div>
                <div className="w3-container">
                    <h5 className="w3-opacity">
                        <strong>Hanoi University of Science and Technology</strong>
                    </h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        <span>2008 - 2013</span>
                    </h6>
                    <p>
                        <em>Faculty of Electronics and Telecommunications</em>
                    </p>
                    <br />
                </div>
            </div>
        );
    }
}

export default Education;
