import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import GoToTop from './GoToTop';
import { HashLink } from 'react-router-hash-link';
const Sociohood = () => {
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
            SocioHood Technologies
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
            We are a project management which allows user to write their tasks,
            set out complaints, track task progress, communication with
            employees through messages and create surveys, polls.
          </p>
        </div>

        <img
          src="/images/sociohood.png"
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
          <p>UI/UX designer (Internship)</p>
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
          <p>April 2023(1 month)</p>
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
        A complete Township automation solution that increases security,
        productivity, convenience for the stakeholder involved. We believe
        automation will be a revolutionary step for any business which plans to
        adopt it. We at SocioHood are working towards, creating an awareness,
        about the need for change, with the help of our product and services.
        Our flagship product "Township Automation and Management Solution" has
        won the trust of major industry players AND REDUCED THEIR OPERATIONAL
        COST BY 60%. We don't want to restrict ourselves with just simplifying
        access, we aim to streamline the end-to end process. We have developed
        various features in our flagship product which provides multi
        dimensional benefits to our clients. From "access, security, convenience
        for residents" TO "ease of management, better productivity with
        minimised cost, vendor management, payouts, reports, attendance etc" we
        have covered all the aspects.
      </p>

      <Box
        sx={{
          backgroundColor: "#e3f5fa",

          marginTop: "90px",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "80px",
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
          Our mission was to provide a project management app along with few
          inventory management features. We wanted to create a space where users
          can maintain their different business through one platform with the
          help of features like, number of employee, budget, tasks and deadline
          tracking.
        </p>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "50px",
          marginLeft: "74px",
          paddingTop: "50px",
          marginBottom: "30px",
        }}>
        <Box
          style={{
            width: "42%",
            height: "1.4px",
            backgroundColor: "#222222",
          }}></Box>
        <p
          style={{
            fontFamily: "Lato, sans-serif",
            letterSpacing: "0.5px",
            fontSize: "14px",
          }}>
          WORK IN PROGRESS
        </p>
        <Box
          style={{
            width: "42%",
            height: "1.4px",
            backgroundColor: "#222222",
          }}></Box>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "80px",
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
          COMPETITIVE ANALYSIS
        </p>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
        }}>
        <img
          src="/images/tech-compare.png"
          style={{
            width: "48%",
            borderRadius: "4px",
          }}></img>

        <img
          src="/images/tech-compare2.png"
          style={{
            width: "48%",
            borderRadius: "4px",
          }}></img>
      </Box>
      
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "80px",
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
      {/* <div className="previous" style={{ textDecoration: "none" }}>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/wellnessZ">
          <p>Previous Project</p>
        </Link>
      </div> */}
      <GoToTop />
    </Box>
  );
}

export default Sociohood
