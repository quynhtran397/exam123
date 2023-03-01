import * as React from "react";
import Button from "react-bootstrap/Button";
import image1 from "./assets/el1.png";
import frame from "./assets/v1.svg";

import "./styles.css";


export default function App() {
  const propsData = {
    frame9: {
      size: "sm",
      disabled: false,
      variant: "outline-primary",
      children: "gadget"
    },
    frame91: {
      disabled: false,
      variant: "outline-primary",
      size: "sm",
      children: "electric"
    }
  };
  return (
    <div className="group-1">
      <div className="frame-28">
        <span className="users">Users</span>
        <div className="flex-container">
          <div className="frame-2">
            <img className="frame" src={frame} />
            <span className="search-users">Search users</span>
          </div>
          <span className="reputation">Reputation</span>
          <div className="frame-4">New users</div>
          <span className="voters">Voters</span>
          <span className="editors">Editors</span>
          <span className="moderators">Moderators</span>
        </div>
        <div className="flex-container-1">
          <div className="frame-19">
            <img className="ellipse" src={image1} />
            <div className="flex-container-2">
              <span className="lelah-nichols">Lelah Nichols</span>
              <span className="troy-mi">Troy, MI</span>
              <div className="flex-container-3">
                <div className="frame-8">clothes</div>
                <div className="frame-9">stem</div>
              </div>
            </div>
          </div>
          <div className="frame-20">
            <img className="ellipse-1" src={image1} />
            <div className="flex-container-4">
              <span className="jesus-weiss">Jesus Weiss</span>
              <span className="fort-worth-tx">Fort Worth, TX</span>
              <div className="flex-container-5">
                <div className="frame-8-1">headset</div>
                <div className="frame-8-1">gadget</div>
              </div>
              <div className="flex-container-6">
                <div className="frame-8-2">
                  <span className="speed">speed</span>
                </div>
                <div className="frame-9-1">winter</div>
              </div>
            </div>
          </div>
          <div className="frame-21">
            <img className="ellipse-2" src={image1} />
            <div className="flex-container-7">
              <span className="annie-rice">Annie Rice</span>
              <span className="austin-tx">Austin, TX</span>
              <div className="flex-container-8">
                <div className="frame-8-3">road</div>
                <div className="frame-9-2">mountain</div>
              </div>
              <div className="flex-container-9">
                <div className="frame-8-4">earth</div>
                <div className="frame-9-3">nature</div>
              </div>
            </div>
            <div className="frame-10">
              <span className="trip">trip</span>
            </div>
          </div>
        </div>
        <div className="flex-container-10">
          <div className="frame-19-1">
            <img className="ellipse-3" src={image1} />
            <div className="flex-container-11">
              <span className="robert-brower">Robert Brower</span>
              <span className="cincinnati-oh">Cincinnati, OH</span>
              <div className="flex-container-12">
                <div className="frame-8-5">Maintenance</div>
                <div className="frame-9-4">
                  <span className="gears">gears</span>
                </div>
              </div>
              <div className="flex-container-13">
                <div className="frame-8-6">frames</div>
                <div className="frame-9-5">
                  <span className="repair">repair</span>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-20-1">
            <img className="ellipse-4" src={image1} />
            <div className="flex-container-14">
              <span className="amy-campbell">Amy Campbell</span>
              <span className="warrior-al">Warrior, AL</span>
              <div className="flex-container-15">
                <div className="frame-8-7">music</div>
                <div className="frame-9-6">disks</div>
              </div>
            </div>
          </div>
          <div className="frame-21-1">
            <img className="ellipse-5" src={image1} />
            <div className="flex-container-16">
              <span className="anthony-s-morin">Anthony S. Morin</span>
              <span className="lyndhurst-nj">Lyndhurst, NJ</span>
              <div className="flex-container-17">
                <div className="frame-8-8">
                  <span className="vintage">vintage</span>
                </div>
                <div className="frame-8-8">
                  <span className="vintage">electric</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
