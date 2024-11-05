// Roles | BrSE (Bridge System Engineer) | PL (Project Leader) | SL (Sub Leader) | M (Member) |
// Areas | Project Management | SE (System Engineer) | PG (Software Engineer/ Programmer) | T (Tester) |
// Project phases | 1)Business analysis | 2)Requirement definition | 3)Basic design  | 4)Detailed design | 5)Programming | 6)Unit test | 7)Integrated test  | 8)System test | 9)Maitenance and Operation | 10)Server design | 11)Server construction | 12)Network design | 13)Network construction | | 14)Infrastructure implementation and test |

import React, { Component } from 'react';
import Introduction from './parts/Introduction';
import WorkExperience from './parts/WorkExperience';
import Certification from './parts/Certification';
import Education from './parts/Education';

class RightContent extends Component {
  render() {
    return (
        <div className="w3-twothird">
            <Introduction />
            <WorkExperience />
            <Certification />
            <Education />
        </div>
    );
  }
}

export default RightContent;
