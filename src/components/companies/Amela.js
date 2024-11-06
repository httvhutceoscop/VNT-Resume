import React, { Component } from 'react';

class Amela extends Component {
    render() {
        return (
            <div className="w3-container">
                <h5 className="w3-opacity"><strong>AMELA Technology</strong></h5>
                <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                    <strong>7 months</strong> from July 2023 to February 2024
                </h6>

                <ul>
                    <li>
                        <strong>Project Manager Tasks</strong>
                        <ul>
                            <li>Analysis requirement + QA and discuss with client about the requirement</li>
                            <li>Making Estimation, Basic Design, Project Plan, WBS, Schedule, Master Schedule, Resource Plan, Risk Plan, ...</li>
                            <li>Review documents: Test Plan, Test Case, Test Report, Estimate.</li>
                            <li>Using Backlog to track the progress of project.</li>
                            <li>Making weekly report and join meeting with clients.</li>
                            <li>Daily and weekly MTG with client and team members.</li>
                            <li>Support BrSE, Comtor and development team the good solution before discussing with client.</li>
                            <li>Take part in the organization's  to improve the management skills</li>
                        </ul>
                    </li>
                </ul>

                <h6>Completed Major Projects</h6>
                <ul>
                    <li>
                        <strong>LRC</strong>
                        <ul>
                            <li><b><em>Description: </em></b>Building an adult web entertainment system along with a CMS to manage videos and payments.</li>
                            <li><b><em>Business Domain: </em></b>Entertainment</li>
                            <li><b><em>Position: </em></b> PM</li>
                            <li><b><em>Members: </em></b> 11 (1 PM, 1 Comtor, 3 FE, 2 BE, 2 Tester, 1 Infra, 1 Designer)</li>
                            <li><b><em>Technical: </em></b> Ubuntu, Ruby, VueJS3, TypeScript, HTML5, CSS3, AWS Services (EC2, CloudWatch, RDS, Load Balancer, WAF, CodeBuild, Batch, ...)</li>
                            <li><b><em>Tools - Utilities: </em></b> MS Teams, SharePoint, Backlog, Git, Figma</li>
                            <li><b><em>Project Phases: </em></b> Business analysis, Requirement definition, Basic design, Detailed design, Programming, Unit test, Integrated test, System test</li>
                            {/* <li><b><em>Project Type: </em></b>Based</li> */}
                            {/* <li><b><em>Duration: </em></b>04/09/2024 - 01/11/2024</li> */}
                            {/* <li><b><em>MM: </em></b>9.87</li> */}
                        </ul>
                    </li>
                </ul>
                <hr />
            </div>
        );
    }
}

export default Amela;
