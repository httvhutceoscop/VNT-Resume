import React, { Component } from "react";
import Avatar from "../assets/img/avatar.png";
import urls, { info } from "./Constants";

class LeftContent extends Component {
  render() {
    const skills = [
      {
        type: "Management Skills",
        items: [
          { name: "Leadership", value: 80 },
          { name: "Delegation", value: 80 },
          { name: "Organization", value: 80 },
          { name: "Problem Solving", value: 80 },
          { name: "Conflict resolution", value: 80 },
          { name: "Agile Scrum / Waterfall", value: 80 },
          { name: "Business Process Improvement", value: 80 },
          { name: "Project Scheduling", value: 80 },
          { name: "Strategic Planning", value: 80 },
          { name: "Communication Skills", value: 80 },
          { name: "Risk Management Skills", value: 80 },
          { name: "A/B Testing & Experimentation", value: 70 },
          { name: "Google Analytics / Google Search", value: 65 },
          { name: "Tools: Backlog / Redmine", value: 65 },
          { name: "報・連・相 (Ho-Ren-So)", value: 65 },
        ],
      },
      {
        type: "Web/App Programming",
        items: [
          {
            name: "HTML5 / CSS3 / Boostrap / Grid CSS / Less / Sass",
            value: 95,
          },
          { name: "Nodejs / Angular / VueJS", value: 85 },
          { name: "Javascript / Ajax / JSON / JSONP / XML / p5js", value: 85 },
          { name: "SEO", value: 65 },
          { name: "Drupal / Wordpress", value: 95 },
          { name: "C#, .NET", value: 95 },
          { name: "Python, Django", value: 80 },
          { name: "PHP, Laravel, MVC, CakePHP, Yii2, FuelPHP", value: 95 },
          { name: "MySQL / SQL / NoSQL", value: 95 },
          { name: "RestfulAPI / GraphQL", value: 80 },
          { name: "Git, SVN, Gitlab, Github", value: 80 },
          { name: "Jenkin / Git Action", value: 60 },
          { name: "Linux / Ubuntu / CentOS / Apache / Nginx", value: 80 },
          { name: "Docker", value: 60 },
          { name: "Flutter", value: 60 },
          { name: "Markdown", value: 80 },
        ],
      },
      {
        type: "System Cloud",
        items: [
          {
            name: "AWS / EC2 / Lambda / DynamoDB / RDS / EB / ELB / CloudWatch / SNS / SQS",
            value: 80,
          },
          { name: "Microsof Azure", value: 60 },
        ],
      },
      {
        type: "Adobe Creative Cloud",
        items: [
          { name: "Photoshop / Illustrator", value: 80 },
          { name: "InDesign", value: 70 },
          { name: "Dreamweaver", value: 90 },
          { name: "After Effects", value: 45 },
        ],
      },
      {
        type: "Office",
        items: [
          { name: "Word / Excel / PowerPoint", value: 90 },
          { name: "Google: Docs, SpreadSheet, Slide", value: 90 },
        ],
      },
      {
        type: "Soft Skills",
        items: [
          { name: "Communication", value: 95 },
          { name: "Creativity and thinking", value: 90 },
          { name: "Teamworking", value: 90 },
          { name: "Honesty and trusty", value: 100 },
        ],
      },
      {
        type: "Foreign Language",
        items: [
          { name: "English", value: 80 },
          { name: "Japanese", value: 40 },
        ],
      },
    ];
    const hobbits = [
      "Reading books",
      "Playing football",
      "Listening to music - Watching films",
      "Photographing",
      "Drinkng beer",
    ];
    const listSkills = skills.map((skill) => {
      let items = skill.items;
      let listItems = items.map((item) => {
        return (
          <div className="skill__item">
            <p>- {item.name}</p>
            <div className="w3-light-grey w3-round-xlarge w3-small w3-hide">
              <div
                className="w3-container w3-center w3-round-xlarge w3-teal"
                style={{ width: item.value + "%" }}
              >
                <div className="w3-center w3-text-white">{item.value}%</div>
              </div>
            </div>
          </div>
        );
      });
      return (
        <div>
          <p className="w3-large">
            <strong>
              <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
              {skill.type}
            </strong>
          </p>
          {listItems}
          <br />
        </div>
      );
    });
    const listHobbits = hobbits.map((hobbit) => <li>{hobbit}</li>);

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
              {info.POSITION}
            </p>
            <p>
              <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-large w3-text-teal"></i>
              {info.BIRTHDAY}
            </p>
            <p>
              <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
              <a target="_blank" href={info.ADDRESS_URL}>
                {info.ADDRESS}
              </a>
            </p>
            <p>
              <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
              <a target="_blank" href="tel:+84 986 901110">
                {info.PHONE}
              </a>
            </p>
            <p>
              <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
              <a target="_blank" href="mailto:tienvietnguyen1110@gmail.com">
                {info.EMAIL}
              </a>
            </p>
            <p>
              <i className="fa fa-skype fa-fw w3-margin-right w3-large w3-text-teal"></i>
              {info.SKYPE_ID}
            </p>
            <p>
              <i className="fa fa-github fa-fw w3-margin-right w3-large w3-text-teal"></i>
              <a target="_blank" href={urls.GITHUB_URL}>
                {urls.GITHUB_URL}
              </a>
            </p>
            <p>
              <i className="fa fa-globe fa-fw w3-margin-right w3-large w3-text-teal"></i>
              <a target="_blank" href={urls.MY_SITE}>
                {urls.MY_SITE}
              </a>
            </p>
            <hr />

            {listSkills}

            <p className="w3-large w3-text-theme">
              <strong>
                <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
                Hobbits
              </strong>
            </p>
            <ul>{listHobbits}</ul>
            <br />
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default LeftContent;
