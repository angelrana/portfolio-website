import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import GoToTop from './GoToTop';
import { HashLink } from 'react-router-hash-link';

const WellnessZ = () => {
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
            WellnessZ
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
            “Helping wellness coaches to keep the world healthy and happier”.
            WellnessZ focuses on helping the fitness coaches keep track of their
            client progress, through multiple features provided by us.
          </p>
          <div className="prototype2">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
              to="https://www.figma.com/proto/OEMq0FhM9FEEu4QaO14A4h/WellnessZ?page-id=0%3A1&type=design&node-id=0-978&viewport=199%2C65%2C0.04&t=6lGgdLnsFLSRDA2S-1&scaling=scale-down&starting-point-node-id=0%3A3&show-proto-sidebar=1&mode=design">
              <p>Try Prototype</p>
            </Link>
          </div>
        </div>

        <img
          src="/images/wellnessZ2.svg"
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
          alignItems: "center",
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
          <p>UI/UX designer (freelance)</p>
        </div>
        <div>
          <p
            style={{
              fontWeight: "bold",
            }}>
            TEAM
          </p>
          <p>Angel Thapa (solo)</p>
        </div>
        <div>
          <p
            style={{
              fontWeight: "bold",
            }}>
            DURATION
          </p>
          <p>March 2023(1 month)</p>
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
        WellnessZ is a B2B platform for all the wellness coaches, nutritionist
        and fitness coaches. Specially dealing in all client management tasks.
        We provide features like - progress tracking, meal plan, herbalife
        products and story sharing which allows the users to keep in touch with
        the client. WellnessZ is basically built to make the fitness trainers
        life simpler, cause they can keep records of every client.
      </p>

      <Box
        sx={{
          backgroundColor: "#d7ecc6",
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
          The goal was to create a platform where trainers could manage client
          details, craft personalized diet plans, and easily share workout
          videos and picture templates via email or WhatsApp. Firstly, I focused
          on creating a user-friendly interface for trainers to input client
          information efficiently. This involved designing forms and layouts
          that made it simple to organize client data like fitness goals and
          progress. <br></br>
          <br></br>Crafting diet plans required a balance between comprehensive
          options and ease of use. I designed a system allowing trainers to
          customize meal plans based on individual needs, ensuring nutritional
          details were clear and easy to follow. In addition to the core
          features, the introduction of a retail aspect presented a unique
          challenge. I had to design a section where trainers could manage and
          track the sale of the herbalife products and to customise it.
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
          justifyContent: "center",
          gap: "30px",
          marginTop: "20px",
        }}>
        <img
          src="/images/wireframe1.jpg"
          style={{
            width: "43%",
            borderRadius: "4px",
          }}></img>

        <img
          src="/images/wireframe2.jpg"
          style={{
            width: "43%",
            borderRadius: "4px",
          }}></img>
      </Box>

      <div className="next" style={{ textDecoration: "none" }}>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/technixia">
          <p>Next Project</p>
        </Link>
      </div>
      <GoToTop />
    </Box>
  );
}

export default WellnessZ
