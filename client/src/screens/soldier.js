import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SoldierMenuBar from "../components/soldierMenuBar";

function Soldier() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from the server
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/data");
        // Assuming your server has an endpoint /api/data that returns the required data
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);
  const soldierMenuData = data && data.soldierMenu ? data.soldierMenu : [];
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
                <div className="soldier-level-text">
                  {data &&
                    data.gamestats &&
                    data.gamestats.length > 0 &&
                    data.gamestats[0].levelNo}
                </div>
              </div>
              <div className="col-sm-4 soldier-level-current">
                {data &&
                  data.gamestats &&
                  data.gamestats.length > 0 &&
                  data.gamestats[0].currentLevel}
              </div>
              <div className="col-sm-4 soldier-level-estimate">
                - Estimated rank up in 1h
              </div>
            </div>
          </div>
        </div>
        <div className="soldier-select">
          <div className="row soldier-menu">
            {soldierMenuData.map((menu, index) => (
              <SoldierMenuBar
                key={index}
                heading={menu.Heading}
                stats={menu.stats}
                width={menu.width}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="col-lg-4 soldier-game-stats">
        <div className="soldier-stats-w">
          <div className="soldier-stats">
            <div className="soldier-stats-h">wins</div>
            <div className="soldier-stats-percent">
              {data &&
                data.gamestats &&
                data.gamestats.length > 0 &&
                data.gamestats[0].wins}
              %
            </div>
          </div>
          <div className="soldier-stats">
            <div className="soldier-stats-h">score/min</div>
            <div className="soldier-stats-percent">
              {data &&
                data.gamestats &&
                data.gamestats.length > 0 &&
                data.gamestats[0].score}
            </div>
          </div>
          <div className="soldier-stats">
            <div className="soldier-stats-h">kills/min</div>
            <div className="soldier-stats-percent">
              {data &&
                data.gamestats &&
                data.gamestats.length > 0 &&
                data.gamestats[0].kills}
            </div>
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
