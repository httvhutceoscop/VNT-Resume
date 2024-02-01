// Roles | BrSE (Bridge System Engineer) | PL (Project Leader) | SL (Sub Leader) | M (Member) |
// Areas | Project Management | SE (System Engineer) | PG (Software Engineer/ Programmer) | T (Tester) |
// Project phases | 1)Business analysis | 2)Requirement definition | 3)Basic design  | 4)Detailed design | 5)Programming | 6)Unit test | 7)Integrated test  | 8)System test | 9)Maitenance and Operation | 10)Server design | 11)Server construction | 12)Network design | 13)Network construction | | 14)Infrastructure implementation and test |

import React, { Component } from 'react';

class RightContent extends Component {
  render() {
    return (
        <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-user fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                    Introduction
                </h2>
                <div className="w3-container">
                    <p>
                    I am very active in life, thirst for knowledge, and have high responsibility for my job. I love reading books, animals and sports, especially football.<br />
                    I am very interested in community activities.<br />
                    I love programming and management.<br />
                    I learned new language programming myself and built an education app on CH Play: <a href='https://play.google.com/store/apps/details?id=com.toilamit.EssentialWordsByImage&hl=vi&gl=US' target='_blank' rel='noopener noreferrer'>600 Từ Vựng TOEIC</a> <br />
                    I often read a book, online to research new technical or management while drinking a cup of coffee. Writting blog is also my hobbit, you can see my blog here: <a href='https://kysuit.net' target='_blank' rel='noopener noreferrer'>https://kysuit.net</a><br />
                    I always make a clear plan in my career path and thus it helps me a lot in works and life.<br />
                    </p>
                    <br />
                </div>
            </div>

            <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                    Work Experience
                </h2>
                <div className="w3-container">
                    <h5 className="w3-opacity"><strong>Kaopiz Software Co., Ltd.</strong></h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        September 2021 - <span className="w3-tag w3-teal w3-round">Current</span>
                    </h6>
                    <p>
                        <ul>
                            <li>
                                <strong>Project Manager Tasks</strong>
                                <ul>
                                    <li>Analysis requirement + QA and dicuss with client about the requirement, drawing mockup and wireframe to confirm with client.</li>
                                    <li>Making Estimation, Basic Design, Project Plan, WBS, Schedule, Master Schedule, Resource Plan, Risk Plan, ...</li>
                                    <li>Review documents: Test Plan, Test Case, Test Report, Estimate.</li>
                                    <li>Using Kanban, Timeline on Jira, Backlog to track the progress of project.</li>
                                    <li>Calculating: EE, EV, CPI, SPI to evaluate project quality.</li>
                                    <li>Making weekly report to PMO and clients.</li>
                                    <li>Daily and weekly MTG with client and team members.</li>
                                    <li>Support BrSE, Comtor and development team the good solution before dicussing with client.</li>
                                    <li>Review ERD and review code via checklist.</li>
                                    <li>Making deployment document to be released to the client.</li>
                                    <li>Making the organization's template: postmortem definition, conflict solver.</li>
                                    <li>Training Estimate Skill.</li>
                                    <li>Join almost organization's activities such as football club, E-sport Club, Book Club.</li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                    <h6>Completed Major Projects</h6>
                    <ul>
                        <li>
                            <strong>Project About The EL System (Base)</strong>
                            <ul>
                                <li><b><em>Description:</em></b> The add-on system helps automate the process of sending mail, correspondence, and status feedback.</li>
                                <li><b><em>Position:</em></b> PM</li>
                                <li><b><em>Members:</em></b> 10 (1 PM, 1 Comtor, 4 Dev, 1.5 Tester, 1.5 Infra, 1 Designer)</li>
                                <li><b><em>Technical:</em></b> Ubuntu, Ruby, VueJS3, TypeScript, HTML5, CSS3, AWS Services (EC2, CloudWatch, RDS, Load Balancer, WAF, CodeBuild, Batch, ...)</li>
                                <li><b><em>Tools - Utilities:</em></b> MS Teams, SharePoint, Box, Email, Visual Code, Jira, Git, Bitbucket, Figma, Outlook</li>
                                <li><b><em>Project Phases:</em></b> Business analysis, Requirement definition, Basic design, Detailed design, Programming, Unit test, Integrated test, System test, Maitenance and Operation, Server design, Server construction, Network design, Network construction, Infrastructure implementation and test</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Project About VR (Base)</strong>
                            <ul>
                                <li><b><em>Description:</em></b> VR device management system and related videos</li>
                                <li><b><em>Position:</em></b> PM</li>
                                <li><b><em>Members:</em></b> 5 (1 PM, 1 Comtor, 2 Dev, 1 Tester)</li>
                                <li><b><em>Technical:</em></b> Ubuntu, MySQL, Java Spring Boot, VueJS2, HTML5, CSS3, JavaScript, AWS S3, AWS EC2</li>
                                <li><b><em>Tools - Utilities:</em></b> MS Teams, SharePoint, Email, Visual Code, Slack, Jira, Git, Bitbucket</li>
                                <li><b><em>Project Phases:</em></b> Business analysis, Requirement definition, Basic design, Detailed design, Programming, Unit test, Integrated test, System test, Maitenance and Operation, Server design</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Project About Labor Safety (Labo)</strong>
                            <ul>
                                <li><b><em>Description:</em></b> Occupational safety management system. Allow export report file for each construction location, contractor.</li>
                                <li><b><em>Position:</em></b> PM</li>
                                <li><b><em>Members:</em></b> 26 (1 PM, 1 BrSE VN, 2 BrSE JP, 2 TL, 15 Dev, 5 Tester)</li>
                                <li><b><em>Technical:</em></b> Linux, MySQL, C#, .Net, HTML5, CSS3, JavaScript, AWS S3, Git</li>
                                <li><b><em>Tools - Utilities:</em></b> MS Teams, Backlog, SharePoint, Jira, Email, Visual Studio, Reshaper</li>
                                <li><b><em>Project Phases:</em></b> Requirement definition, Basic design, Detailed design, Programming, Unit test, Integrated test, System test, Maitenance and Operation, Server design</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Project About Medical (Labo)</strong>
                            <ul>
                                <li><b><em>Description:</em></b> Allows the doctor of each hospital to monitor the patient's examination information such as: blood pressure, heart rate, pulse, activities, diet ... Make request related to electrocardiogram, export to PDF. Develop patient app using Flutter for both Android and iOS, deploy to TestFlight</li>
                                <li><b><em>Position:</em></b> PM</li>
                                <li><b><em>Members:</em></b> 23 (1 PM, 1 BrSE, 2 TL, 15 Dev, 4 Tester)</li>
                                <li><b><em>Technical:</em></b> Linux, Amazon Aura MySQL, Dart, JavaScript, TypeScript, NodeJS, HTML5, CSS3, Flutter, Angular, ArmChart, Bootstrap 4, AWS Services (S3, Gateway, RDS, Cognito, SES, Batch, CodeBuild, Code Pipeline, ClouldTrail, Route 53, CloudWatch ...) ELK, Firebase</li>
                                <li><b><em>Tools - Utilities:</em></b> MS Teams, SharePoint, Backlog, ChatWork, Email, Visual Code, Jira, Git, Bitbucket, TestFlight, DeployGate, JMeter, Figma</li>
                                <li><b><em>Project Phases:</em></b> Business analysis, Requirement definition, Basic design, Detailed design, Programming, Unit test, Integrated test, System test, Maitenance and Operation, Server design, Server construction, Network design, Network construction, Infrastructure implementation and test</li>
                            </ul>
                        </li>
                    </ul>
                    <hr />
                </div>

                {/* FujitechjJSC */}
                <div className="w3-container">
                    <h5 className="w3-opacity"><strong>FujitechjJSC</strong></h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        <strong>04 years 05 months</strong> from March 2017 to August 2021
                    </h6>
                    <p>
                        <ul>
                            <li>
                                <strong>Project Manager Tasks</strong>
                                <ul>
                                    <li>Analyzed and then effectively strategies in regard to business goals, deadlines, schedules, budgets, needed resources, and team member coordination</li>
                                    <li>Clearly communicated problems and progress to upper management via engaging and artful presentations</li>
                                    <li>Estimate project cost, build team and making the rules, convention, people management and risk management</li>
                                    <li>Communicated with, coached, and coordinated project employees</li>
                                    <li>Manage work, teams, clients and reporting structure of Agile and Scrum Development Frameworks.</li>
                                    <li>Lead and motivate the development team, supervise and evaluate team members, provide them with valid and constructive feedback, supportive and professional mentoring.</li>
                                    <li>Engaging recruiter as interviewer</li>
                                    <li>Take initiative in improving on reporting, processes, and workflow and client outcomes.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Leader Tasks</strong>
                                <ul>
                                    <li>Engaging and analyzing business, making basic design and detail design</li>
                                    <li>Design database, architecture and infrastructure</li>
                                    <li>Build development environment and deploy, release products by using Git</li>
                                    <li>Making documentation and wiki</li>
                                    <li>Creating tasks and assign tasks to member</li>
                                    <li>Checking coding quality and process</li>
                                    <li>Manage risks</li>
                                    <li>Support and training members</li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                    <h6>Completed Major Projects</h6>
                    <ul>
                        <li>
                            <strong>Kantan Nenchou</strong>
                            <ul>
                                <li><b><em>Description:</em></b> System of management and registration of relevant information for tax finalization for employees.</li>
                                <li><b><em>Position:</em></b> PM</li>
                                <li><b><em>Members:</em></b> 14 (1 PM, 1 Comtor, 1 TL, 9 Dev, 2 Tester)</li>
                                <li><b><em>Technical:</em></b> Linux/CentOS, TypeScript, JavaScript, HTML5, CSS3, Angular, Git, Bootstrap 4, AWS Service (EC2, S3), MySQL, Resful API</li>
                                <li><b><em>Tools - Utilities:</em></b> Backlog, ChatWork, Skype, Google Drive, Email, Visual Code, Slack</li>
                                <li><b><em>Project Phases:</em></b> Requirement definition, Programming, Unit test, Integrated test, Maitenance and Operation</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Affiliate Friends</strong>
                            <ul>
                                <li>Build system to manage the rewards from many service providers. <br />Export CSV report daily, monthly, yearly</li>
                                <li><b><em>Position:</em></b> PM / TL</li>
                                <li><b><em>Technical:</em></b> Python, Django, Html5, CSS3, Bootstrap 4, jQuery, <br />AWS EC2, Lambda Function, DynamoDB, RDS - PostgreSQL, SQS, SNS, ElasticBeanstalk, CloudWatch, Redis, Celery</li>
                            </ul>
                        </li>
                        <li>
                            <strong>JCCI</strong>
                            <ul>
                                <li>A website to show events and news about the Japanese Chamber of Commerce and Industry in Vietnam with multiple languages.</li>
                                <li><b><em>Position:</em></b> PM / TL</li>
                                <li>Web: https://jcci.vn</li>
                                <li><b><em>Technical:</em></b> PHP, Wordpress, Html5, CSS3, Bootstrap, jQuery, MySQL, Google Analytic, AWS EC2, AWS CloudWatch</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Powerwork</strong>
                            <ul>
                                <li>A website to search jobs and search areas.</li>
                                <li><b><em>Position:</em></b> PM / TL</li>
                                <li>Web: https://powerwork.jp/</li>
                                <li><b><em>Technical:</em></b> PHP, , Html5, CSS3, jQuery, MySQL, Google Analytic, VPS, Apache</li>
                            </ul>
                        </li>
                        <li>
                            <strong>TRECO</strong>
                            <ul>
                                <li>Building a staff evaluation website, manage surveys.</li>
                                <li><b><em>Position:</em></b> TL</li>
                                <li>Web: https://treco.achievement.co.jp</li>
                                <li><b><em>Technical:</em></b> PHP Laravel, Html5, CSS3, Bootstrap, jQuery, AngularJS, PostgreSQL, Google Analytic, AWS EC2, AWS CloudWatch, AWS RDS, AWS Route53, AWS SES, Zabbix, Docker</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Ninja Points App</strong>
                            <ul>
                                <li>Build system to manage the reward points for merchant. Give points whenever user finish purchasing.</li>
                                <li><b><em>Position:</em></b> TL</li>
                                <li>App: https://spotted.cool/shopify-apps/%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%83%8B%E3%83%B3%E3%82%B8%E3%83%A3%E2%80%91point-ninja%E2%80%91/</li>
                                <li><b><em>Technical:</em></b> C#, .Net, Html5, CSS3, Bootstrap 4, jQuery, AzurePortals, AzureDevOps, SQL</li>
                            </ul>
                        </li>
                        <li>Acrospera: Building websites to introduce businesses, restaurants. https://www.suminozuimade.com/, https://www.ran-hongkong.com/, ...</li>
                        <li>Building CRM website for student status analysis and reporting.</li>
                        <li>Website buying book online: http://motsachmogu.vn/</li>
                        <li>Website introducing game shinchan: http://shinchan.vn/</li>
                        <li>Website introducing company: http://zodia-q.com/</li>
                        <li>Website booking event: https://narhanoiforum.com/</li>
                    </ul>
                    <hr />
                </div>

                {/* Miyatsu Vietnam Co., LTD */}
                <div className="w3-container">
                    <h5 className="w3-opacity"><strong>Miyatsu Vietnam Co., LTD</strong></h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        <strong>18 months</strong> from September 2015 to March 2017
                    </h6>
                    <p>
                        <ul>
                            <li>Programming website using PHP and Yii2 framework.</li>
                            <li>Programming website, SOAP API, Amedus API using MVC .NET.</li>
                            <li>Programming software mathematics using javascript, SVG and C++.</li>
                        </ul>
                    </p>
                    <h6>Completed Major Projects</h6>
                    <ul>
                        <li><strong>Tripanzee</strong>: Website for booking hotel, travelling, airport transfer and conference. Write API for booking hotel, hotel cancellation...</li>
                        <li><strong>Enginee</strong>: Making the software mathematics for pupil in Japan.</li>
                        <li><strong>Java to HTML</strong>: Converting the software from Java to Javascript, HTML and SVG.</li>
                    </ul>
                    <hr />
                </div>

                {/* Star Media Joint Stock Company (StarCom JSC) */}
                <div className="w3-container">
                    <h5 className="w3-opacity"><strong>Star Media Joint Stock Company (StarCom JSC)</strong></h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        <strong>02 years</strong> from July 2013 to August 2015
                    </h6>
                    <p>
                        <ul>
                            <li>Programming website using PHP</li>
                            <li>Programming Standard SEO website for the Company basing on cms Drupal, Wordpress.</li>
                            <li>Administration of and building website system of the Company.</li>
                            <li>Server administration, installing and configuring Linux server on  Centos with webservices such as: Apache, Nginx, PHP và MySQL.</li>
                        </ul>
                    </p>
                    <h6>Completed Major Projects</h6>
                    <ul>
                        <li>Website for watching free movies: http://starmovies.mobi, http://phimhayvai.com</li>
                        <li>Website for game news and allowing to download games for free: http://stargame.vn</li>
                        <li>Website introducing game programming department of the company: http://starmobile.vn</li>
                        <li>Wapsite providing lottery results service: http://xoso.homnay24h.com, http://soicaumb.net</li>
                    </ul>
                    <br />
                </div>
            </div>

            <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                    Certification
                </h2>
                <div className="w3-container">
                    <h5>
                        <a href='https://www.credly.com/badges/39dd44d5-e14a-4acf-9041-7676d1a195dd/public_url' target='_blank'>
                            <img class="w3-margin-right" src="https://images.credly.com/size/220x220/images/260e36dc-d100-45c3-852f-9d8063fa71e6/pmp-600px.png" alt="Project Management Professional (PMP)®" width="110" height="110" />
                            <strong>Project Management Professional (PMP)®</strong>
                        </a>
                    </h5>
                </div>
            </div>

            <div className="w3-container w3-card w3-white">
                <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-solid fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                    Education
                </h2>
                <div className="w3-container">
                    <h5 className="w3-opacity"><strong>PMA Center in Hanoi</strong></h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        09/2022 - 12/2022
                    </h6>
                    <p><em>PMP® Pass4Sure Course</em></p>
                    <hr />
                </div>
                <div className="w3-container">
                    <h5 className="w3-opacity"><strong>Mina Japanese Center</strong></h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                        06/2018 - 09/2018
                    </h6>
                    <p><em>N4 - Japanese Course</em></p>
                    <hr />
                </div>
                <div className="w3-container">
                    <h5 className="w3-opacity"><strong>SEO Pro Internet Marketing 41 - Litado</strong></h5>
                    <h6 className="w3-text-teal">
                        <i className="fa fa-calendar fa-fw w3-margin-right"></i>08/2014 - 10/2014
                    </h6>
                    <p><em>SEO Website Training Course</em></p>
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

            
        </div>
    );
  }
}

export default RightContent;
