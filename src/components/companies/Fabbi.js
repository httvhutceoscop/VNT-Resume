import React, { Component } from 'react';

class Fabbi extends Component {
    render() {
        return (
            <div className="w3-container">
                <h5 className="w3-opacity"><strong>Fabbi Software</strong></h5>
                <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                    <span>March 2025 - <span className="w3-tag w3-teal w3-round">Current</span></span>
                </h6>

                <ul>
                    <li>
                        <strong>Project Manager Tasks</strong>
                        <ul>
                            <li>Analyze requirements, drive Q&A sessions with clients to clarify scope, and create mockups/wireframes for visual confirmation.</li>
                            <li>Develop core project deliverables, including Estimations, Basic Designs, Project Plans, WBS, Master Schedules, Resource Plans, and Risk Management Plans.</li>
                            <li>Review key project artifacts such as Test Plans, Test Cases, Test Reports, and Cost/Time Estimates.</li>
                            <li>Utilize Kanban boards in Nulab Backlog to track project progress and team velocity.</li>
                            <li>Prepare and submit weekly status reports to the CDO and client stakeholders.</li>
                            <li>Facilitate daily standups and weekly alignment meetings with clients and internal team members.</li>
                            <li>Support BrSEs, Comtors, and the development team in formulating technical solutions prior to client discussions.</li>
                            <li>Draft deployment documentation and release guides for client delivery.</li>
                            <li>Actively participate in company culture and activities (Football Club, Esports Club, Book Club).</li>
                            <li>Contribute to establishing organizational processes, while monitoring and ensuring strict process compliance.</li>
                            <li>Participate in developing project management tools and templates, including executive dashboards and key performance indicators (KPIs).</li>
                            <li>Collaborate in building domain-specific AI Agents and Skills for project workflows (e.g., Code Reviewer, Estimator).</li>
                            <li>Work directly with the Chief Product Officer (CPO) to define and build the FundHub product.</li>
                            <li>Directly manage the CMMI Level 3 initiative: establishing process frameworks, creating standard templates, and coordinating audits to achieve certification.</li>
                        </ul>
                    </li>
                </ul>

                <h6>Completed Major Projects</h6>
                <ul>
                    <li>
                        <strong>FundHub</strong>
                        <ul>
                            <li><b><em>Description: </em></b>A university funding support and management system: AI-driven discovery & recommendations, application submission management, review, and post-award tracking. Users: URA/admin offices, faculty, researchers, and reviewers.</li>
                            <li><b><em>Business Domain: </em></b>Fund</li>
                            <li><b><em>Position: </em></b>PM</li>
                            <li><b><em>Members: </em></b>11 (1 PM, 1 Designer, 0.5 DevOps, 0.5 Dev AI, 2 Dev BE, 4 Dev FE, 2 Tester)</li>
                            <li><b><em>Technical: </em></b>ReactJS, NodeJS/NestJS, AWS (RDS, S3, CloudFront, Rout53, ECS, ALB, SES, NAT Gateway), gpt-4.1-mini, text-embedding-3-small, pgvector</li>
                            <li><b><em>Tools - Utilities: </em></b>Google Chat, Nulab Backlog, Google Drive, Git Backlog, Agile/Scrum, Figma</li>
                            <li><b><em>Project Phases: </em></b>Business analysis, Requirement definition, Architecture Design, Design UI/UX, Programming, Integrated test, System test</li>
                            {/* <li><b><em>Project Type: </em></b>Based</li> */}
                            {/* <li><b><em>Duration: </em></b>06/2025 - 10/2025</li> */}
                            {/* <li><b><em>MM: </em></b>15</li> */}
                        </ul>
                    </li>
                    {/* <li> */}
                        {/* <strong></strong> */}
                        {/* <ul> */}
                            {/* <li><b><em>Description: </em></b></li> */}
                            {/* <li><b><em>Business Domain: </em></b></li> */}
                            {/* <li><b><em>Position: </em></b>PM</li> */}
                            {/* <li><b><em>Members: </em></b>12 (1 PM, 1 BrSE, 0.5 Designer, 0.5 DevOps, 0.5 Dev AI, 2 Dev BE, 3 Dev FE, 2 Tester)</li> */}
                            {/* <li><b><em>Technical: </em></b></li> */}
                            {/* <li><b><em>Tools - Utilities: </em></b></li> */}
                            {/* <li><b><em>Project Phases: </em></b>Business analysis, Requirement definition, Architecture Design, Design UI/UX, Programming, Integrated test, System test</li> */}
                            {/* <li><b><em>Project Type: </em></b>Based</li> */}
                            {/* <li><b><em>Duration: </em></b>06/2025 - 09/2025</li> */}
                            {/* <li><b><em>MM: </em></b>4.32</li> */}
                        {/* </ul> */}
                    {/* </li> */}
                    <li>
                        <strong>Vital Camera</strong>
                        <ul>
                            <li><b><em>Description: </em></b>Developed a millimeter-wave radar monitoring application that automates business management for subscription-based services. This comprehensive system handles standard sales routines including customer registration, order management, invoicing, and collection. Additionally, it features an integrated AI assistant for status analysis and report generation, streamlining operations and enhancing customer relationship management.</li>
                            <li><b><em>Business Domain: </em></b>HealthCare</li>
                            <li><b><em>Position: </em></b>PM</li>
                            <li><b><em>Members: </em></b>12 (1 PM, 1 BrSE, 0.5 Designer, 0.5 DevOps, 0.5 Dev AI, 2 Dev BE, 3 Dev FE, 2 Tester)</li>
                            <li><b><em>Technical: </em></b>VueJS, CMS Strapi, Nodejs, AWS, PostgreSQL, Lambda, AWS Bedrock, OpenAI, Claude</li>
                            <li><b><em>Tools - Utilities: </em></b>Slack, Nulab Backlog, Google Drive, Git Backlog, Agile/Scrum, Claude Code</li>
                            <li><b><em>Project Phases: </em></b>Business analysis, Requirement definition, Architecture Design, Design UI/UX, Programming, Integrated test, System test</li>
                            {/* <li><b><em>Project Type: </em></b>Based</li> */}
                            {/* <li><b><em>Duration: </em></b>06/2025 - 09/2025</li> */}
                            {/* <li><b><em>MM: </em></b>4.32</li> */}
                        </ul>
                    </li>
                    <li>
                        <strong>Bingo Game</strong>
                        <ul>
                            <li><b><em>Description: </em></b>Build a bingo game that allows multiple players simultaneously. Registration via QR code scanning. Real-time player, max 999 player.</li>
                            <li><b><em>Business Domain: </em></b>Entertainment</li>
                            <li><b><em>Position: </em></b>PM</li>
                            <li><b><em>Members: </em></b>8 (0.5 PM, 0.5 BrSE, 0.5 Designer, 0.5 DevOps, 1 Dev BE, 2 Dev FE, 1 Tester)</li>
                            <li><b><em>Technical: </em></b>AWS, PostgreSQL, ReactJS, Phaser.js, CloudFlare, CloudFlare Worker, Socket</li>
                            <li><b><em>Tools - Utilities: </em></b>Nulab Backlog, Google Chat, Google Drive, Figma, Agile/Scrum</li>
                            <li><b><em>Project Phases: </em></b>Business analysis, Requirement definition, Architecture Design, Design UI/UX, Programming, Unit Test, Integrated test, System test</li>
                            {/* <li><b><em>Project Type: </em></b>Based</li> */}
                            {/* <li><b><em>Duration: </em></b>07/2025 - 10/2025</li> */}
                            {/* <li><b><em>MM: </em></b>xxx</li> */}
                        </ul>
                    </li>
                    <li>
                        <strong>Workpass</strong>
                        <ul>
                            <li><b><em>Description: </em></b>CMS system for managing job postings from companies and stores. Mobile app allowing users to search for jobs and apply to positions at individual stores.</li>
                            <li><b><em>Business Domain: </em></b>Recruitment</li>
                            <li><b><em>Position: </em></b>PM</li>
                            <li><b><em>Members: </em></b>10( 0.5 PM. 0.5 BrSE, 0.5 DevOps, 1 Dev Mobile, 2 Dev BE, 3 Dev FE, 2 Tester)</li>
                            <li><b><em>Technical: </em></b>AWS, PostgreSQL, PHP Laravel, Google Map API, Swift</li>
                            <li><b><em>Tools - Utilities: </em></b>Slack, Nulab Backlog, Google Drive, Git Backlog, Agile/Scrum, Testflight, Google Play Console</li>
                            <li><b><em>Project Phases: </em></b>Requirement definition, Architecture Design, Programming, Integrated test, System test</li>
                            {/* <li><b><em>Project Type: </em></b>Based</li> */}
                            {/* <li><b><em>Duration: </em></b>04/2025 - 06/2025</li> */}
                            {/* <li><b><em>MM: </em></b>xxx</li> */}
                        </ul>
                    </li>
                    <li>
                        <strong>Self-L</strong>
                        <ul>
                            <li><b><em>Description: </em></b>Develop a debt status tracking system integrated with AI for analyzing and forecasting repayment capabilities within appropriate timeframes.</li>
                            <li><b><em>Business Domain: </em></b>Finance</li>
                            <li><b><em>Position: </em></b>PM</li>
                            <li><b><em>Members: </em></b>12 (1 PM, 1 BrSE, 0.5 DevOps, 0.5 BA, 1 DevAI, 2 Dev BE, 3 Dev FE, 3 Tester)</li>
                            <li><b><em>Technical: </em></b>ReactJS/NextJS, PHP Laravel, ChatGPT4o mini, AWS, PostgreSQL</li>
                            <li><b><em>Tools - Utilities: </em></b>Slack, Nulab Backlog, Google Chat, Google Drive, Github, Agile/Scrum</li>
                            <li><b><em>Project Phases: </em></b>Requirement definition, Architecture Design, Programming, Integrated test, System test</li>
                            {/* <li><b><em>Project Type: </em></b>Based</li> */}
                            {/* <li><b><em>Duration: </em></b>11/2024 - 03/2025</li> */}
                            {/* <li><b><em>MM: </em></b>xxx</li> */}
                        </ul>
                    </li>
                </ul>
                <hr />
            </div>
        );
    }
}

export default Fabbi;
