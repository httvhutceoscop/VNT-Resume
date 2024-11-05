import React, { Component } from 'react';
import PMPBadge from "../../assets/img/pmp_badge.png";

class Certification extends Component {
    render() {
        return (
            <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                    <span>Certification</span>
                </h2>
                <div className="w3-container">
                    <h5>
                        <a href='https://www.credly.com/badges/39dd44d5-e14a-4acf-9041-7676d1a195dd/public_url' target='_blank' rel='noreferrer'>
                            <img className="w3-margin-right" src={PMPBadge} alt="Project Management Professional (PMP)®" width="110" height="110" />
                            <strong>Project Management Professional (PMP)®</strong>
                        </a>
                    </h5>
                    <br />
                </div>
            </div>
        );
    }
}

export default Certification;
