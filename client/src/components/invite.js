import React from "react";

function Invite(){
    return(
        <div className="invite-block">
            <div className="invite-line" ></div>
            <div className="row">
            <div className="col-md invite">
            <div className="invite-h">squad</div>
            </div>
            </div>

            <div className="row">
            <div className="col-sm invite-item"><div className="invite-item-h">squad join</div></div>
            </div>
            <div className="invite-line" ></div>
            <div className="row">
            <div className="col-md invite online">
            <div className="invite-h">Online</div>
            </div>
            </div>

            <div className="row">
            <div className="col-sm invite-item Ionline"><div className="invite-item-h">Mary Jane <p>online</p></div></div>
            </div>

            <div className="invite-line" ></div>
            <div className="row">
            <div className="col-md invite offline">
            <div className="invite-h">offline</div>
            </div>
            </div>

            <div className="row">
            <div className="col-sm invite-item Ioffline"><div className="invite-item-h">420 <p>offline</p></div></div>
            </div>
        </div>
    );
}

export default Invite