import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import GoToTop from "./GoToTop";
import { HashLink } from "react-router-hash-link";

const Cinepebble = () => {
  return (
    <Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Box>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h1
              style={{
                fontFamily: "Wendy One, sans-serif",
                letterSpacing: "3px",
                color: "#200513",
              }}>
              A.
            </h1>
          </Link>
        </Box>
        <Box
          className="font-link"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "56px",
            fontFamily: "Lato, sans-serif",
            fontSize: "16px",
            color: "#656465",
          }}>
          <HashLink to="/#about">
            <a
              href="#about"
              style={{ textDecoration: "none", color: "#2c2c2c" }}
              className="hover-line-animation">
              About
            </a>
          </HashLink>
          <HashLink to="/#project">
            <a
              href="#project"
              style={{ textDecoration: "none", color: "#2c2c2c" }}
              className="hover-line-animation">
              Project
            </a>
          </HashLink>
          <a
            href="pdf/AngelThapa_Resume.pdf"
            target="_blank"
            style={{ textDecoration: "none", color: "#2c2c2c" }}
            className="hover-line-animation">
            Resume
          </a>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "30px",
            color: "#656465",
          }}>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/angel-rana-a725a5231/">
            <img src="/images/linkedin.svg" style={{ width: "22px" }}></img>
          </Link>
          <Link target="_blank" to="https://dribbble.com/Ann_rana">
            <img src="/images/dribble.svg" style={{ width: "22px" }}></img>
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "60px",
          marginTop: "50px",
        }}>
        <div
          style={{
            fontFamily: "Lato, sans-serif",
            width: "26em",
            marginTop: "-40px",
          }}>
          <p
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "#222222",
            }}>
            Cinepebble
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#353535",
              lineHeight: "35px",
              marginTop: "-20px",
              letterSpacing: "0.3px",
              fontWeight: "lighter",
            }}>
            "Cinepebble is the first social network designed exclusively for
            movie enthusiasts! Our features make it easy to connect with film
            aficionados, find collaborators, and raise funds."
          </p>
          <div className="prototype1">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
              to="https://www.figma.com/proto/XNfHlFW5i6u7zM6Saotehi/Cinepebble?page-id=0%3A1&type=design&node-id=0-471&viewport=-1992%2C25%2C0.09&t=QLyB0OMUcLxNtB3C-1&scaling=scale-down&starting-point-node-id=0%3A471&show-proto-sidebar=1&mode=design">
              <p>Try Prototype</p>
            </Link>
          </div>
        </div>

        <img
          src="/images/cinepebble2.svg"
          style={{
            width: "50%",
            borderRadius: "4px",
          }}></img>
      </Box>
      <Box
        className="role"
        style={{
          width: "93%",
          height: "50%",
          marginLeft: "39px",
          marginTop: "9em",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "start",
          fontFamily: "Lato, sans-serif",
          paddingBottom: "50px",
          paddingTop: "50px",
        }}>
        <div>
          <p
            style={{
              fontWeight: "bold",
            }}>
            ROLE
          </p>
          <p>UI/UX designer (full-time)</p>
        </div>
        <div>
          <p
            style={{
              fontWeight: "bold",
            }}>
            TEAM
          </p>
          <p>Angel Thapa</p>
        </div>
        <div>
          <p
            style={{
              fontWeight: "bold",
            }}>
            DURATION
          </p>
          <p>July 2023 (6 months)</p>
        </div>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "90px",
          marginLeft: "74px",
        }}>
        <Box
          style={{
            width: "5%",
            height: "1.4px",
            backgroundColor: "#222222",
          }}></Box>
        <p
          style={{
            fontFamily: "Lato, sans-serif",
            letterSpacing: "0.5px",
            fontSize: "14px",
            marginLeft: "10px",
          }}>
          OVERVIEW
        </p>
      </Box>
      <p
        style={{
          width: "87%",
          fontFamily: "Lato, sans-serif",
          marginLeft: "4em",
          fontSize: "18px",
          letterSpacing: "0.5px",
          lineHeight: "35px",
          wordSpacing: "3px",
        }}>
        Cinepebble is a Global Networking Platform for media enthusiasts looking
        to connect, collaborate, and crowd-fund media projects powered by our
        network of investors and audience members. Building a career in this
        industry can be difficult and sometimes unattainable. Therefore we are
        committed to making it convenient through technology for you to execute
        and practice what you like to do. Every member willing to receive and
        offer support to our creative members will be in a safe environment.
      </p>

      <Box
        sx={{
          backgroundColor: "#fff8e1",
          marginTop: "60px",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "90px",
            marginLeft: "74px",
            paddingTop: "50px",
          }}>
          <Box
            style={{
              width: "5%",
              height: "1.4px",
              backgroundColor: "#222222",
            }}></Box>
          <p
            style={{
              fontFamily: "Lato, sans-serif",
              letterSpacing: "0.5px",
              fontSize: "14px",
              marginLeft: "10px",
            }}>
            CHALLENGES
          </p>
        </Box>
        <p
          style={{
            width: "87%",
            fontFamily: "Lato, sans-serif",
            marginLeft: "4em",
            fontSize: "18px",
            letterSpacing: "0.5px",
            lineHeight: "35px",
            paddingBottom: "60px",
            wordSpacing: "3px",
          }}>
          The task involved a comprehensive overhaul, focusing on altering the
          app's layout, repositioning main icons, and essentially giving it a
          makeover to achieve a minimalistic, clean, and aesthetically pleasing
          look. Firstly, I dove into reshaping how everything was organized in
          the app. The goal was to make it more user-friendly and intuitive. I
          wanted users to effortlessly navigate through the platform, whether
          they were checking out their friends' updates or posting their own
          content.
          <br></br>
          <br></br>
          The main icons, like those for messaging or notifications,got a new,
          more logical spot. I strategically placed them to enhance user
          experience, ensuring easy access to key features. The idea was to
          simplify the interface, making sure users could easily understand and
          use the essential functionalities.
          <br></br>
          <br></br>
          We carefully selected colors, fonts, and design elements to achieve a
          harmonious and pleasing aesthetic. The aim was to not just improve
          functionality but also make the app visually appealing, creating an
          enjoyable user experience. To inform the redesign decisions, we
          conducted user interviews and research. Understanding how people
          interacted with the platform, their preferences, and pain points
          guided the changes we implemented. Regular feedback loops helped us
          iterate on the design, ensuring it resonated well with the user base.
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "90px",
          marginLeft: "74px",
        }}>
        <Box
          style={{
            width: "5%",
            height: "1.4px",
            backgroundColor: "#222222",
          }}></Box>
        <p
          style={{
            fontFamily: "Lato, sans-serif",
            letterSpacing: "0.5px",
            fontSize: "14px",
            marginLeft: "10px",
          }}>
          WIREFRAME
        </p>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",

          marginTop: "20px",
          marginLeft: "74px",
        }}>
        <img
          src="/images/wf1.jpg"
          style={{
            width: "43%",
            borderRadius: "4px",
          }}></img>
      </Box>

      <div className="next" style={{ textDecoration: "none" }}>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/wellnessZ">
          <p>Next Project</p>
        </Link>
      </div>
      <GoToTop />
    </Box>
  );
};

export default Cinepebble;
