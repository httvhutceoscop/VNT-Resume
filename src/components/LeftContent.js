import React, { Component } from 'react';
import Avatar from '../assets/img/avatar.png';

class LeftContent extends Component {
  render() {
    const skills = [
        {
            type: 'Web Programming',
            items: [
                {name: 'HTML5 / CSS3', value: 95},
                {name: 'Nodejs / AngularJS / VueJS', value: 85},
                {name: 'Javascript / Ajax', value: 85},
                {name: 'Boostrap / Grid CSS', value: 80},
                {name: 'Less / Sass', value: 80},
                {name: 'JSON / JSONP / XML', value: 85},
                {name: 'SEO', value: 65},
                {name: 'Drupal', value: 95},
                {name: 'Wordpress', value: 95},
                {name: 'C#, .NET', value: 95},
                {name: 'PHP', value: 95},
                {name: 'MySQL / SQL', value: 95},
                {name: 'Laravel, MVC, Yii2, FuelPHP', value: 95},
                {name: 'Git, SVN, Gitlab', value: 80},
                {name: 'Jenkin', value: 60},
                {name: 'Ubuntu / CentOS', value: 80},
                {name: 'Apache / Nginx', value: 80},
                {name: 'Docker', value: 60},
                {name: 'Markdown', value: 80},
            ],
        },{
            type: 'Adobe Creative Cloud',
            items: [
                {name: 'Photoshop', value: 80},
                {name: 'Illustrator', value: 50},
                {name: 'InDesign', value: 70},
                {name: 'Dreamweaver', value: 90},
                {name: 'After Effects', value: 45},
            ],
        },{
            type: 'Microsoft Office',
            items: [
                {name: 'Word', value: 90},
                {name: 'Excel', value: 90},
                {name: 'Powerpoint', value: 90},
            ],
        },{
            type: 'Soft Skills',
            items: [
                {name: 'Communication', value: 95},
                {name: 'Creativity and thinking', value: 90},
                {name: 'Teamworking', value: 90},
                {name: 'Making plan, schedule', value: 80},
                {name: 'Honesty and trusty', value: 100},
                {name: 'English', value: 80},
                {name: 'Japanese', value: 40},
            ],
        },
    ];
    const hobbits = [
        'Reading books',
        'Playing football',
        'Listening to music - Watching films',
        'Photographing',
        'Drinkng beer',
    ];
    const listSkills = skills.map((skill) => {
        let items = skill.items;
        let listItems = items.map((item) => {
            return (
                <div>
                    <p>{item.name}</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:item.value + '%'}}>
                            <div className="w3-center w3-text-white">{item.value}%</div>
                        </div>
                    </div>
                </div>
            )
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

                    {listSkills}

                    <p className="w3-large w3-text-theme">
                        <strong><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Hobbits</strong>
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
