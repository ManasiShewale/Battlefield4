import React from "react";

function SoldierMenuBar(props) {
  const width = props.width + "vh";
  return (
    <div className="col-lg-12 soldier-menu-w">
      <div className="soldier-menu-h">{props.heading}</div>

      <div className="soldier-menu-stats">
        <div className="col-lg-12 soldier-menu-stats-h">{props.stats}</div>

        <div className="soldier-menu-stats-bar">
          <div
            className="soldier-stats-bar-orange soldier-stats-bar-orange "
            style={{ width: width }}
          ></div>
          <div className="soldier-stats-bar-black"></div>
        </div>
      </div>
    </div>
  );
}

export default SoldierMenuBar;
