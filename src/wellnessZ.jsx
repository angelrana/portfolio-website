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
        <Box
          sx={{
            //   paddingLeft: 9,
            marginLeft: 9,
          }}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h1
              style={{
                fontFamily: "Wendy One, sans-serif",
                letterSpacing: "3px",
              }}>
              A.
            </h1>
          </Link>
        </Box>
        <Box
          sx={{
            marginRight: 9,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "55px",
            fontFamily: "Lato, sans-serif",
            fontSize: "16px",
            fontWeight: "light",
          }}>
          <Link to="/">
            <a
              style={{ textDecoration: "none", color: "#2c2c2c" }}
              className="hover-line-animation">
              Home
            </a>
          </Link>
          <a
            href="pdf/AngelThapa_Resume.pdf"
            style={{ textDecoration: "none", color: "#2c2c2c" }}
            className="hover-line-animation">
            Resume
          </a>
          <HashLink to="/#about">
            <a
              style={{ textDecoration: "none", color: "#2c2c2c" }}
              className="hover-line-animation">
              Contact
            </a>
          </HashLink>
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
              style={{ textDecoration: "none", color: "inherit" }}
              target="_blank"
              to="https://www.figma.com/proto/OEMq0FhM9FEEu4QaO14A4h/The-WellnessZ?page-id=0%3A1&type=design&node-id=0-163&viewport=-947%2C-2115%2C0.24&scaling=scale-down&starting-point-node-id=0%3A3&show-proto-sidebar=1">
              <p>Try Prototype</p>
            </Link>
          </div>
        </div>

        <img
          src="/images/wellnessZ-page.png"
          style={{
            width: "50%",
            borderRadius: "4px",
          }}></img>
      </Box>
      <Box
        className="role"
        style={{
          width: "87.6%",
          height: "50%",
          marginLeft: "74px",
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
            MISSION
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
          Helping the fitness coaches, nutritionis to make their work simpler.
          We wanted to allow the fitness trainers to keep track and records of
          their client progress without much hassle. So our mission was to make
          a app version of pen-n-paper work but in a better way.
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
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "80px",
          marginLeft: "74px",
        }}> */}
      {/* <Box
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
          WHY'S AND WHY NOT
        </p>
      </Box>
      <div>
        <ul
          style={{
            width: "87%",
            fontFamily: "Lato, sans-serif",
            marginLeft: "3em",
            fontSize: "18px",
            letterSpacing: "0.5px",
            lineHeight: "35px",
            paddingBottom: "50px",
            wordSpacing: "3px",
          }}>
          <li>hekko</li>
        </ul>
      </div> */}
      <div className="next" style={{ textDecoration: "none" }}>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/sociohood">
          <p>Next Project</p>
        </Link>
      </div>
      <GoToTop />
    </Box>
  );
}

export default WellnessZ
