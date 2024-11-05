import React, { Component } from 'react';

class VMO extends Component {
    render() {
        return (
            <div className="w3-container">
                <h5 className="w3-opacity"><strong>VMO Holdings</strong></h5>
                <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                    <span>March 2024 - <span className="w3-tag w3-teal w3-round">Current</span></span>
                </h6>

                <ul>
                    <li>
                        <strong>Project Manager Tasks</strong>
                        <ul>
                            <li>Analysis requirement + QA and discuss with client about the requirement, drawing mockup and wire-frame to confirm with client.</li>
                            <li>Making Estimation, Basic Design, Project Plan, WBS, Schedule, Master Schedule, Resource Plan, Risk Plan, ...</li>
                            <li>Review documents: Test Plan, Test Case, Test Report, Estimate.</li>
                            <li>Using Kanban, Burn-down Chart on Jira to track the progress of project.</li>
                            <li>Making weekly report to PMO and clients.</li>
                            <li>Daily and weekly MTG with client and team members.</li>
                            <li>Support BrSE, Comtor and development team the good solution before discussing with client.</li>
                            <li>Making deployment document to be released to the client.</li>
                            <li>Join almost organization's activities such as football club, E-sport Club, Book Club.</li>
                        </ul>
                    </li>
                </ul>

                <h6>Completed Major Projects</h6>
                <ul>
                    <li>
                        <strong>AI Character supports web users</strong>
                        <ul>
                            <li><b><em>Description: </em></b>Create an AI character that automatically answers questions. The AI ​​character answers with text and the voice of a female character in Anime and has animation when answering and when not answering. This AI character can answer in English, Japanese.</li>
                            <li><b><em>Business Domain: </em></b>AI</li>
                            <li><b><em>Position: </em></b>PM</li>
                            <li><b><em>Members: </em></b>10 (1 PM, 0.5 Comtor, 1 BE, 1 FE, 2 Dev AI, 0.5 BA, 1 Tester, 0.5 Infra, 0.5 Designer)</li>
                            <li><b><em>Technical: </em></b>ReactJS/NextJS, Python, ChatGPT4o mini, Google Cloud Platform, PostgreSQL</li>
                            <li><b><em>Tools - Utilities: </em></b>Slack, Jira, Google Chat, Google Drive, Gitlab, Agile/Scrum</li>
                            <li><b><em>Project Phases: </em></b>Business analysis, Requirement definition, Create SAD, Design UI/UX, Programming, Integrated test, System test</li>
                            {/* <li><b><em>Project Type: </em></b>Based</li> */}
                            {/* <li><b><em>Duration: </em></b>04/09/2024 - 01/11/2024</li> */}
                            {/* <li><b><em>MM: </em></b>9.87</li> */}
                        </ul>
                    </li>
                    <li>
                        <strong>Development International Driver Recruitment System</strong>
                        <ul>
                            <li><b><em>Description: </em></b>Recruitment and driver management system for a transportation company.</li>
                            <li><b><em>Business Domain: </em></b>Recruitment</li>
                            <li><b><em>Position: </em></b>PM</li>
                            <li><b><em>Members: </em></b>8 (1 PM, 0.5 Comtor, 2 FE, 1 BE, 0.5 BA, 1 Tester, 0.5 Infra)</li>
                            <li><b><em>Technical: </em></b>ReactJS/NextJS, NodeJS/NestJS, AWS, PostgreSQL</li>
                            <li><b><em>Tools - Utilities: </em></b>Slack, Jira, Google Chat, Google Drive, Gitlab, Agile/Scrum</li>
                            <li><b><em>Project Phases: </em></b>Business analysis, Requirement definition, Create SAD, Programming, Integrated test, System test</li>
                            {/* <li><b><em>Project Type: </em></b>Based</li> */}
                            {/* <li><b><em>Duration: </em></b>12/08/2024 - 28/08/2024</li> */}
                            {/* <li><b><em>MM: </em></b>4.32</li> */}
                        </ul>
                    </li>
                    <li>
                        <strong>YKT IoT</strong>
                        <ul>
                            <li><b><em>Description: </em></b>.</li>
                            <li><b><em>Business Domain: </em></b>IoT</li>
                            <li><b><em>Position: </em></b>PM</li>
                            <li><b><em>Members: </em></b>15 (1 PM, 2 FE, 5 BE, 2 BA, 3 Tester, 0.5 Infra, 0.5 Designer)</li>
                            <li><b><em>Technical: </em></b>HTML, CSS, NodeJS, MariaDB</li>
                            <li><b><em>Tools - Utilities: </em></b>Skype, Jira, Google Chat, Google Drive, Gitlab, Agile/Scrum</li>
                            <li><b><em>Project Phases: </em></b>Business analysis, Requirement definition, Create SAD, Design UI/UX, Programming, Unit Test, Integrated test, System test</li>
                            {/* <li><b><em>Project Type: </em></b>Based</li> */}
                            {/* <li><b><em>Duration: </em></b>01/01/2024 - 16/08/2024</li> */}
                            {/* <li><b><em>MM: </em></b>42.35</li> */}

                            Phase 2
                            The enhancements for Data Collector
                            Use current tech stacks in phase 1.
                            Support more Protocol for Ingestion Service (plugin concept)
                            + Full Modbus package: enhance modbus TCP, add modbus RTU, ASCII, use current library.
                            + OPC UA https://node-opcua.github.io/
                            + OPC DA
                            + MQTT:
                            Apply Compression Algorithm: Swing Door and Cloud Gateway service.  Gateway type (as plugin) include: Azure EventHub, Azure IoT Hub, MQTT (default), AMQP, COAP
                        </ul>
                    </li>
                    <li>
                        <strong>AI Chatbot</strong>
                        <ul>
                            <li><b><em>Description: </em></b>Build an AI chatbot to perform basic mathematical calculations on accounting data in the database.</li>
                            <li><b><em>Business Domain: </em></b>Manufacturing</li>
                            <li><b><em>Position: </em></b>PM</li>
                            <li><b><em>Members: </em></b>10 (1 PM, 0.5 Comtor, 1 FE, 1 BE, 2 Dev AI, 0.5 BA, 1 Tester, 0.5 Infra, 0.5 Designer)</li>
                            <li><b><em>Technical: </em></b>NextJS, ReactJS, NodeJS, Python, FastAPI, PandasAI, Azure Cloud, PostgreSQL</li>
                            <li><b><em>Tools - Utilities: </em></b>Slack, Jira, Google Chat, Google Drive, Gitlab, Agile/Scrum</li>
                            <li><b><em>Project Phases: </em></b>Business analysis, Requirement definition, Create SAD, Design UI/UX, Programming, Integrated test, System test</li>
                            {/* <li><b><em>Project Type: </em></b>Based</li> */}
                            {/* <li><b><em>Duration: </em></b>04/03/2024 - 21/03/2024</li> */}
                            {/* <li><b><em>MM: </em></b>5.84</li> */}
                        </ul>
                    </li>
                </ul>
                <hr />
            </div>
        );
    }
}

export default VMO;
