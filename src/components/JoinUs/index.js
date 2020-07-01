import React from "react";
import { Typography, Row } from "antd";
import GooglePlay from "../../assets/images/google-play.png";
import AppStore from "../../assets/svgs/appStore";
import QrCode from "../../assets/svgs/qrCode";
import ArrowLoop from "../../assets/svgs/arrowLoop";
import AndroidMobilePic from '../../assets/images/AndroidMobile.png'
import LoginMobilePic from '../../assets/images/LoginMobile.png'

const JoinUs = () => (
  <div
    style={{
      width: "100vw",
      paddingBottom: "10vh",
      background: "linear-gradient(136deg, #7a81ea 33%, #545bcd 100%)",
    }}
  >
    <div
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        flexDirection: "column",
        // alignItems: "center",
      }}
    >
      <Typography
        style={{
          color: "#fff",
          fontSize: 36,
          fontWeight: 600,
          lineHeight: 1.13,
          textAlign: "center",
          marginTop: "10vh",
        }}
      >
        We're on a mission to build India's strongest and youngest
      </Typography>
      <Typography
        style={{
          color: "#fff",
          fontSize: 36,
          fontWeight: 600,
          lineHeight: 1.13,
          textAlign: "center",
          marginBottom: "10vh",
          marginTop: "1rem",
        }}
      >
        on-demand workforce. Join us today.
      </Typography>
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          width: "45%",
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          paddingLeft: 121,
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{ color: "white", fontSize: 18, marginTop: "5vh", width: 562 }}
        >
          Get the Pracify app and work for your favourite companies.
          <br />
          Create your account within minutes and pick gigs which match your
          skills and interests
        </Typography>

        <div style={{ margin: "3vh 0", display: "flex", width: "55%" }}>
          <div style={{ display: "flex" }}>
            <img
              src={GooglePlay}
              alt="gpay"
              style={{
                height: 68,
                width: 178,
                position: "relative",
                right: 10,
              }}
            />
          </div>
          <div style={{ position: "relative", right: 10, top: 10 }}>
            <AppStore />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "55%",
            alignItems: "center",
          }}
        >
          <Typography
            style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff" }}
          >
            Scan to Download
          </Typography>
          <Row style={{ margin: "20px 0" }}>
            <ArrowLoop />
          </Row>
          <QrCode />
        </div>
      </div>
      <div
        style={{ display: "flex", alignItems: "space-between", width: "45%" }}
      >
        <img
          src={LoginMobilePic}
          alt="Login"
          style={{ margin: 5, marginRight: "3rem" }}
        />
        <div
        style={{
          border:"1px solid white",
          height:410,
          width:247,
          borderRadius:18
        }}
        >
          <img 
          className="animate__animated animate__fadeIn animate__delay-2s"
          src={AndroidMobilePic}
          alt="android"  />
        </div>
      </div>
    </div>
  </div>
);

export default JoinUs;
