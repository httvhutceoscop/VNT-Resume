import React, { Component } from 'react';
import PMPBadge from "../../assets/img/pmp_badge.png";
import Claude101Badge from "../../assets/img/claude_101_badge.jpg";
import ClaudeCode101Badge from "../../assets/img/claude_code_101_badge.jpg";
import GenAIBadge from "../../assets/img/generative-ai-overview-for-project-managers.png";
import EssenMOREBadge from "../../assets/img/pmi-essentials-m-o-r-e-maximizing-project-success.png";
import SevenAIBadge from "../../assets/img/pmi-essentials-seven-ai-project-patterns.png";
// import PMPBadge from "../../assets/img/.png";
import GenAI2Badge from "../../assets/img/practical-application-of-gen-ai-for-project-manager.png";
import PromptEngBadge from "../../assets/img/talking-to-ai-prompt-engineering-for-project-manage.png";

class Certification extends Component {
    render() {
        return (
            <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                    <span>Certification</span>
                </h2>
                <div className="w3-container">
                    {/* <h5>
                        <a href='' target='_blank' rel='noreferrer'>
                            <img className="w3-margin-right" src={PMPBadge} alt="" width="auto" height="110" />
                            <strong></strong>
                        </a>
                    </h5> */}
                    <h5>
                        <a href='https://www.credly.com/badges/718695e7-fe8b-43f3-84f2-da370020d6ac/public_url' target='_blank' rel='noreferrer'>
                            <img className="w3-margin-right" src={PMPBadge} alt="Project Management Professional (PMP)®" width="auto" height="110" />
                            <strong>Project Management Professional (PMP)®</strong>
                        </a>
                    </h5>
                    <h5>
                        <a href='https://www.credly.com/badges/d805f391-e420-4bff-941a-6b33e46d9ceb/public_url' target='_blank' rel='noreferrer'>
                            <img className="w3-margin-right" src={GenAIBadge} alt="Generative AI Overview for Project Managers" width="auto" height="110" />
                            <strong>Generative AI Overview for Project Managers</strong>
                        </a>
                    </h5>
                    <h5>
                        <a href='https://www.credly.com/badges/dabe5a00-c69d-4e32-bb83-12a9e049f913/public_url' target='_blank' rel='noreferrer'>
                            <img className="w3-margin-right" src={EssenMOREBadge} alt="PMI Essentials M.O.R.E. Maximizing Project Success" width="auto" height="110" />
                            <strong>PMI Essentials M.O.R.E. Maximizing Project Success</strong>
                        </a>
                    </h5>
                    <h5>
                        <a href='https://www.credly.com/badges/e9a398fb-7ff2-40f9-8fd6-02f840e1effc/public_url' target='_blank' rel='noreferrer'>
                            <img className="w3-margin-right" src={SevenAIBadge} alt="PMI® Essentials: Seven AI Project Patterns" width="auto" height="110" />
                            <strong>PMI® Essentials: Seven AI Project Patterns</strong>
                        </a>
                    </h5>
                    <h5>
                        <a href='https://www.credly.com/badges/5451f9c2-e56c-44f0-bd29-8ea316bfabfe/public_url' target='_blank' rel='noreferrer'>
                            <img className="w3-margin-right" src={GenAI2Badge} alt="Practical Application of Gen AI for Project Managers" width="auto" height="110" />
                            <strong>Practical Application of Gen AI for Project Managers</strong>
                        </a>
                    </h5>
                    <h5>
                        <a href='https://www.credly.com/badges/70d1f898-c0e5-4805-a8e2-d1edd8d16f77/public_url' target='_blank' rel='noreferrer'>
                            <img className="w3-margin-right" src={PromptEngBadge} alt="Talking to AI: Prompt Engineering for Project Managers" width="auto" height="110" />
                            <strong>Talking to AI: Prompt Engineering for Project Managers</strong>
                        </a>
                    </h5>
                    <h5>
                        <a href='https://academy.claude.com/verify/87d5e1a8abcbc66aea5d3797f0120b19' target='_blank' rel='noreferrer'>
                            <img className="w3-margin-right" src={Claude101Badge} alt="Claude Academy: Claude 101" width="auto" height="64" />
                            <strong>Claude Academy: Claude 101</strong>
                        </a>
                    </h5>
                    <h5>
                        <a href='https://academy.claude.com/verify/ddc4dcee528280df54f6026bfd1fbb09' target='_blank' rel='noreferrer'>
                            <img className="w3-margin-right" src={ClaudeCode101Badge} alt="Claude Academy: Claude Code 101" width="auto" height="64" />
                            <strong>Claude Academy: Claude Code 101</strong>
                        </a>
                    </h5>
                    <br />
                </div>
            </div>
        );
    }
}

export default Certification;
