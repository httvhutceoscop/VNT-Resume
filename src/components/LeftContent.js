import React, { Component } from "react";
import Avatar from "../assets/img/avatar.png";
import urls, { info, skills, hobbits } from "./Constants";

class LeftContent extends Component {
  render() {
    const listSkills = skills.map((skill, index) => {
      let items = skill.items;
      let listItems = items.map((item) => {
        return (
          <li className="skill__item" key={item.name}>{item.name}</li>
        );
      });
      return (
        <div className="skill__group">
          <div className="w3-large">
            <strong>
              <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
              {skill.type}
            </strong>
          </div>
          <ul className="skill__item--list">
          {listItems}
          </ul>
        </div>
      );
    });
    const listHobbits = hobbits.map((hobbit) => <li key={hobbit}>{hobbit}</li>);

    return (
      <div className="w3-third">
        <div className="w3-white w3-text-grey w3-card-4">
          <div className="w3-display-container">
            <div className="avatar__bg">
              <img className="avatar__img" src={Avatar} alt="Avatar" />
              <div className="w3-container w3-text-black">
                <h2 className="avatar__name">{info.MY_NAME}</h2>
              </div>
            </div>
          </div>
          <div className="w3-container">
            <p>
              <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
              <strong>{info.POSITION}</strong>
            </p>
            {/* <p>
              <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-large w3-text-teal"></i>
              {info.BIRTHDAY}
            </p>
            <p>
              <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
              <a target="_blank" href="tel:+84 986 901110" rel='noreferrer'>
                {info.PHONE}
              </a>
            </p> */}
            <p>
              <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
              <a target="_blank" href="mailto:tienvietnguyen1110@gmail.com" rel='noreferrer'>
                {info.EMAIL}
              </a>
            </p>
            <p>
              <i className="fa fa-skype fa-fw w3-margin-right w3-large w3-text-teal"></i>
              {info.SKYPE_ID}
            </p>
            <p>
              <i className="fa fa-github fa-fw w3-margin-right w3-large w3-text-teal"></i>
              <a target="_blank" href={urls.GITHUB_URL} rel='noreferrer'>
                {urls.GITHUB_URL}
              </a>
            </p>
            <p>
              <i className="fa fa-globe fa-fw w3-margin-right w3-large w3-text-teal"></i>
              <a target="_blank" href={urls.MY_SITE} rel='noreferrer'>
                {urls.MY_SITE}
              </a>
            </p>
            <hr />

            {listSkills}

            <p className="w3-large w3-text-theme">
              <strong>
                <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
                <span>Hobbits</span>
              </strong>
            </p>
            <ul>{listHobbits}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftContent;
