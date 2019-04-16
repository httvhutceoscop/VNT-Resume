import React, { Component } from 'react';
import Avatar from '../assets/img/avatar.png';

class LeftContent extends Component {
  render() {
    return (
        <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-display-container">
                    <div className="avatar__bg">
                        <img className="avatar__img" src={Avatar} alt="Avatar" />
                        <div className="w3-container w3-text-black">
                            <h2 className="avatar__name">Nguyen Tien Viet</h2>
                        </div>
                    </div>
                </div>
                <div className="w3-container">
                    <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                        Developer
                    </p>
                    <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-large w3-text-teal"></i>
                        November 10, 1990
                    </p>
                    <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
                        <a target="_blank" href="https://goo.gl/maps/SZ1Ym2rNUqj">Vinh Quynh - Thanh Tri - Ha Noi</a>
                    </p>
                    <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                        <a target="_blank" href="tel:+84 986 901110">+84 986 901110</a>
                    </p>
                    <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
                        <a target="_blank" href="mailto:tienvietnguyen1110@gmail.com">tienvietnguyen1110@gmail.com</a>
                    </p>
                    <p><i className="fa fa-skype fa-fw w3-margin-right w3-large w3-text-teal"></i>
                        tienvietnguyen1110
                    </p>
                    <p><i className="fa fa-github fa-fw w3-margin-right w3-large w3-text-teal"></i>
                        <a target="_blank" href="https://github.com/httvhutceoscop">https://github.com/httvhutceoscop</a>
                    </p>
                    <p><i className="fa fa-globe fa-fw w3-margin-right w3-large w3-text-teal"></i>
                        <a target="_blank" href="https://toilamit.com/">https://toilamit.com/</a>, <a href="https://jpviet.com/">https://jpviet.com/</a>
                    </p>
                    <hr />

                    <p className="w3-large">
                        <strong><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</strong>
                    </p>
                    <p>Adobe Photoshop</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:90 + '%'}}>90%</div>
                    </div>
                    <p>Photography</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:80 + '%'}}>
                            <div className="w3-center w3-text-white">80%</div>
                        </div>
                    </div>
                    <p>Illustrator</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:75 + '%'}}>75%</div>
                    </div>
                    <p>Media</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:50 + '%'}}>50%</div>
                    </div>
                    <br />

                    <p className="w3-large w3-text-theme">
                        <strong><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</strong>
                    </p>
                    <p>English</p>
                    <div className="w3-light-grey w3-round-xlarge">
                        <div className="w3-round-xlarge w3-teal" style={{height:24, width:100 + '%'}}></div>
                    </div>
                    <p>Spanish</p>
                    <div className="w3-light-grey w3-round-xlarge">
                        <div className="w3-round-xlarge w3-teal" style={{height:24, width:55 + '%'}}></div>
                    </div>
                    <p>German</p>
                    <div className="w3-light-grey w3-round-xlarge">
                        <div className="w3-round-xlarge w3-teal" style={{height:24, width:25 + '%'}}></div>
                    </div>
                    <br />

                </div>
            </div>
            <br />
        </div>
    );
  }
}

export default LeftContent;
