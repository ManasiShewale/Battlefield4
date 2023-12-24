import React from "react";
import { Link } from "react-router-dom";

function Soldier() {
  return (
    <div className="row soldier">
      <div className="col-lg-4 soldier-look">
        <div className="dogtags">
          <img
            src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc400244d4c8d9870cd_premium%20dog%20tag.png"
            alt=""
            className="soldier-dogtags-left"
          />
          <img
            src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc4c0c4fca91b669847_BF4_Celebration_Dog_Tag.png"
            alt=""
            className="soldier-dogtags-right"
          />
        </div>
        <img
          src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc5c0c4fc008966984e_soldier__pic.png"
          alt=""
          className="soldier-pic"
        />
      </div>
      <div className="col-lg-4 soldier-content">
        <div className="row soldier-info">
          <div className="col-lg-6 soldier-level">
            <div className="soldier-level-bar">
              <img
                src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1b899e303b6e902c5e4_home__level-icon.png"
                alt="My Logo"
                className="soldier-level-icon"
              />
            </div>
          </div>
          <div className="col-lg-6 soldier-level-info">
            <div className="soldier-level-info-h">Cookie</div>
            <div className="row soldier-level-stats">
              <div className="col-sm-4 soldier-level-no">
                <div className="soldier-level-text">63</div>
              </div>
              <div className="col-sm-4 soldier-level-current">
                69,840 / 110,000
              </div>
              <div className="col-sm-4 soldier-level-estimate">
                - Estimated rank up in 1h
              </div>
            </div>
          </div>
        </div>
        <div className="soldier-select">
          <div className="row soldier-menu">
            <div className="col-lg-12 soldier-menu-w">
              <div className="soldier-menu-h">Weapons</div>

              <div className="soldier-menu-stats">
                <div className="col-lg-12 soldier-menu-stats-h">134/185</div>

                <div className="soldier-menu-stats-bar">
                  <div className="soldier-stats-bar-orange soldier-stats-bar-orange--weapons"></div>
                  <div className="soldier-stats-bar-black"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 soldier-menu-w">
              <div className="soldier-menu-h">kits</div>

              <div className="soldier-menu-stats">
                <div className="col-lg-12 soldier-menu-stats-h">46/64</div>

                <div className="soldier-menu-stats-bar">
                  <div className="soldier-stats-bar-orange soldier-stats-bar-orange--kits"></div>
                  <div className="soldier-stats-bar-black"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 soldier-menu-w">
              <div className="soldier-menu-h">Vehicles</div>

              <div className="soldier-menu-stats">
                <div className="col-lg-12 soldier-menu-stats-h">77/182</div>

                <div className="soldier-menu-stats-bar">
                  <div className="soldier-stats-bar-orange soldier-stats-bar-orange--vehicles"></div>
                  <div
                    className="soldier-stats-bar-black"
                    style={{ "background-color": "rgba(16, 16, 16, 0.5)" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 soldier-menu-w">
              <div className="soldier-menu-h">Medals</div>

              <div className="soldier-menu-stats">
                <div className="col-lg-12 soldier-menu-stats-h">11/54</div>
                <div className="soldier-menu-stats-bar">
                  <div className="soldier-stats-bar-orange soldier-stats-bar-orange--medals"></div>
                  <div className="soldier-stats-bar-black"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 soldier-menu-w">
              <div className="soldier-menu-h">Assignments</div>

              <div className="soldier-menu-stats">
                <div className="col-lg-12 soldier-menu-stats-h">21/110</div>
                <div className="soldier-menu-stats-bar">
                  <div className="soldier-stats-bar-orange soldier-stats-bar-orange--assignments"></div>
                  <div className="soldier-stats-bar-black"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 soldier-menu-w">
              <div className="soldier-menu-h">Dog tags</div>

              <div className="soldier-menu-stats">
                <div className="col-lg-12 soldier-menu-stats-h">357/720</div>

                <div className="soldier-menu-stats-bar">
                  <div className="soldier-stats-bar-orange soldier-stats-bar-orange--dogtagss"></div>
                  <div className="soldier-stats-bar-black"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 soldier-menu-w">
              <div className="soldier-menu-h">Battlepacks</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 soldier-game-stats">
        <div className="soldier-stats-w">
          <div className="soldier-stats">
            <div className="soldier-stats-h">wins</div>
            <div className="soldier-stats-percent">44%</div>
          </div>
          <div className="soldier-stats">
            <div className="soldier-stats-h">score/min</div>
            <div className="soldier-stats-percent">592</div>
          </div>
          <div className="soldier-stats">
            <div className="soldier-stats-h">kills/min</div>
            <div className="soldier-stats-percent">0.60</div>
          </div>
        </div>
        <div className="soldier-top-stats-w">
          <Link className="soldier-top-stats w-inline-block">
            <div className="soldier-top-stats-h">top vehicle</div>
            <div className="soldier-top-stats-info">
              <div className="soldier-top-stats-weapon">Main Battle tank</div>
              <div className="soldier-top-stats-weapon-s">33 kills</div>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc52754eb82199acdb5_soldier__tank-black.png"
              loading="eager"
              alt=""
              className="soldier-tank-black"
            />
            <img
              src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc68123215c0f47c3c8_soldier__tank-white.png"
              loading="eager"
              alt=""
              className="soldier-tank-white"
            />
          </Link>
          <Link className="soldier-top-stats w-inline-block">
            <div className="soldier-top-stats-h">top primary</div>
            <div className="soldier-top-stats-info">
              <div className="soldier-top-stats-weapon">ACW-R</div>
              <div className="soldier-top-stats-weapon-s">495 kills</div>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc6eabe3734a771d95a_acw-black.png"
              loading="eager"
              alt=""
              className="soldier-acw-black"
            />
            <img
              src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc6b1a1baf4c6b4bff4_acw-white.png"
              loading="eager"
              alt=""
              className="soldier-acw-white"
            />
          </Link>
          <Link className="soldier-top-stats w-inline-block">
            <div className="soldier-top-stats-h">top class</div>
            <div className="soldier-top-stats-info">
              <div className="soldier-top-stats-weapon">Engineer</div>
              <div className="soldier-top-stats-weapon-s">828,514 score</div>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1fa034ba969f815fb11_engineer-black.svg"
              loading="eager"
              alt=""
              className="soldier-engineer-black"
            />
            <img
              src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1fa6cf2747d4ae31e5b_engineer-white.svg"
              loading="eager"
              alt=""
              className="soldier-engineer-white"
            />
          </Link>
          <Link className="soldier-top-stats w-inline-block">
            <div className="soldier-top-stats-h">top sidearm</div>
            <div className="soldier-top-stats-info">
              <div className="soldier-top-stats-weapon">M9</div>
              <div className="soldier-top-stats-weapon-s">112 kills</div>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc3fbd3c9aec8ff96ed_m9-black.png"
              loading="eager"
              alt=""
              className="soldier-m9-black"
            />
            <img
              src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc4d687fc55d8d3ed57_m9-white.png"
              loading="eager"
              alt=""
              className="soldier-m9-white"
            />
          </Link>
        </div>
        <img
          src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc47b02ee10043f39c3_soldier__BFemblem.png"
          alt=""
          className="soldier-emblem"
        />
      </div>
    </div>
  );
}

export default Soldier;
