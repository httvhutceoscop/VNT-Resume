import React, { Component } from 'react';

class MyatsuVietNam extends Component {
    render() {
        return (
            <div className="w3-container">
                <h5 className="w3-opacity"><strong>Miyatsu Vietnam Co., LTD</strong></h5>
                <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                    <strong>18 months</strong> from September 2015 to March 2017
                </h6>

                <ul>
                    <li>Programming website using PHP, framework: Yii2, CakePHP, Laravel.</li>
                    <li>Programming website, SOAP API, Amedus API using MVC .NET.</li>
                    <li>Programming software mathematics using JavaScript, HTML, CSS, Canvas, SASS, SVG and C++.</li>
                </ul>

                <h6>Completed Major Projects</h6>
                <ul>
                    <li><strong>Tripanzee</strong>: Website for booking hotel, traveling, airport transfer and conference. Write API for booking hotel, hotel cancellation...</li>
                    <li><strong>Enginee</strong>: Making the software mathematics for pupil in Japan.</li>
                    <li><strong>Java to HTML</strong>: Converting the software from Java to Javascript, HTML and SVG.</li>
                </ul>
                <hr />
            </div>
        );
    }
}

export default MyatsuVietNam;
