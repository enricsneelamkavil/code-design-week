import React, { useState } from "react";
import "./header.css";
import play from "../../assets/header-play-img.svg";
import loc from "../../assets/location-logo.svg";
import cal from "../../assets/calender-logo.svg";
import he from "../../assets/header-image.png";
import arrow from "../../assets/apply-devfolio.png";
import Nametag from "./namebar";
import dots from "../../assets/dots-header.svg";
import twinkle from "../../assets/twinkle-star.svg";
import Marqueuecomponent from "./Marqueuecomponent";
import gif from "../../assets/home-page/home-page.gif";
import togglePlays from "../../assets/home-page/Maroon 5 - Girls Like You.mp3";
const Header = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [enableoverlay, setEnableOverlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    const audio = document.getElementById('audio');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };
  return (
    <section id="header">
      <div className="header-wrapper">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            alignItems: "center",
            justifyContent: "center",
            width: "85vw",
          }}
        >
          <div className="header-head">
            <div className="dots-image">
              <img src={dots} alt="" />
            </div>
            <div
              className="code-design-week-heading"
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "-20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginBottom: "-60px",
                  gap: "2.5vw",
                  alignItems: "center",
                }}
              >
                <p className="font-style">CODE</p>
                <div className="text-image-wrap">
                  <div className="text-image">
                    <img src={twinkle} alt="" />
                    <img src={twinkle} alt="" />
                  </div>
                  <audio className="play" id="audio" src={togglePlays} />
                  <button onClick={togglePlay}>
                    {isPlaying ? (
                      <img className="play" src={play} alt="" />
                    ) : (
                      <img className="play" src={play} alt="" />
                    )}
                  </button>
                </div>
              </div>
              <div className="text-image-wrap">
                <p className="font-styles">DESIGN WEEK</p>
                <div className="text-image sec-twin">
                  <img src={twinkle} alt="" />
                  <img src={twinkle} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="loc-cal">
            <div>
              <img src={loc} alt="location" />
              <h3>CHRIST COLLEGE OF ENGINEERING, IRINJALAKUDA</h3>
            </div>
            <div>
              <img src={cal} alt="calander" />
              <h3>22 - 28 MAY 2023</h3>
            </div>
          </div>
          {/* <div
            className="design-arrow"
            style={{ background: `url(${he})`, backgroundRepeat: "no-repeat" }}
          >
            {enableoverlay && (
              <div className="heroOverlay">
                <div>
                  <h1 style={{ fontFamily: "NeueMachinaUltrabold" }}>
                    DESIGNATHON
                  </h1>
                  <span style={{ fontFamily: "NeueMachinaRegular" }}>
                    By CODe
                  </span>
                </div>
                <div
                  className="apply-button"
                  data-hackathon-slug="designathon"
                  data-button-theme="dark"
                  style={{ height: "44px", width: "312px" }}
                ></div>
              </div>
            )}
            <button
              className="image-button"
              onClick={() => setEnableOverlay(!enableoverlay)}
            >
              <img
                className=""
                src={arrow}
                alt=""
                style={{ rotate: enableoverlay ? "80deg" : "" }}
              />
            </button>
          </div> */}
          <div className="design-arrow">
            <img src={he} alt="" />
          </div>
        </div>
      </div>
      <Marqueuecomponent />
    </section>
  );
};

export default Header;
