// Roles | BrSE (Bridge System Engineer) | PL (Project Leader) | SL (Sub Leader) | M (Member) |
// Areas | Project Management | SE (System Engineer) | PG (Software Engineer/ Programmer) | T (Tester) |
// Project phases | 1)Business analysis | 2)Requirement definition | 3)Basic design  | 4)Detailed design | 5)Programming | 6)Unit test | 7)Integrated test  | 8)System test | 9)Maitenance and Operation | 10)Server design | 11)Server construction | 12)Network design | 13)Network construction | | 14)Infrastructure implementation and test |

import React, { Component } from 'react';
import VMO from '../companies/VMO';
import Amela from '../companies/Amela';
import Kaopiz from '../companies/Kaopiz';
import FujitechJSC from '../companies/FujitechJSC';
import MyatsuVietNam from '../companies/MyatsuVietNam';
import StarComJSC from '../companies/StarComJSC';

class WorkExperience extends Component {
    render() {
        return (
            <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                    <span>Work Experience</span>
                </h2>
                {/* List companies */}
                <VMO />
                <Amela />
                <Kaopiz />
                <FujitechJSC />
                <MyatsuVietNam />
                <StarComJSC />
            </div>
        );
    }
}

export default WorkExperience;
