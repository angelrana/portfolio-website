import { Box } from '@mui/material';
import React from 'react';
import "./App.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

function Heading() {
    return (
    
        <Box>
          <img
            alt="angel wings"
            src="https://t3.ftcdn.net/jpg/05/30/60/16/360_F_530601668_ZQ8ehfZvV18rfvOA4GSX5YLoHj3gaIY1.jpg"
            className="image"
            style={{
                width: "100vw",
                height: "128vh",
              overflow: "hidden",
              position: "absolute",
              top: 0,
              left: 0,
           
            }}></img>
        </Box>
     
    );
}


const Home = () => {
 const [isHovering, setIsHovering] = useState(false);

 const handleMouseOver = () => {
     setIsHovering(true);
 };

 const handleMouseOut = () => {
   setIsHovering(false);
 };

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
              paddingLeft: 9,
            }}>
            {/* <img
              src="/images/logo.png"
              style={{
                width: "25%",
              }}></img> */}
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
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
              paddingRight: 9,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",

              gap: "60px",
              fontFamily: "Lato, sans-serif",
              fontSize: "16px",
              fontWeight: "light",
            }}>
            <a
              href="#about"
              style={{ textDecoration: "none", color: "#2c2c2c" }}
              className="hover-line-animation">
              About
            </a>
            <a
              href="#work"
              style={{ textDecoration: "none", color: "#2c2c2c" }}
              className="hover-line-animation">
              Work
            </a>
            <a
              href="#"
              style={{ textDecoration: "none", color: "#2c2c2c" }}
              className="hover-line-animation">
              Resume
            </a>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "8.5em",
          }}>
          <p
            style={{
              fontFamily: "Lato, sans-serif",
              fontSize: "16px",
              lineHeight: "70px",
              textAlign: "left",
              fontWeight: "bold",
            }}>
            Hello, I'm
            <br></br>
            <span
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className="color"
              style={{
                fontFamily: "Wendy One, sans-serif",

                marginTop: "-16px",
              }}>
              ANGEL
            </span>
            {isHovering && <Heading />}
          </p>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}>
          <p
            style={{
              fontFamily: "Lato, sans-serif",
              fontStyle: "italic",
              fontSize: "17px",
              marginTop: "140px",
              paddingRight: "65px",
              letterSpacing: "0.5px",
            }}>
            -a self-taught UI/UX designer
          </p>
        </Box>

        <hr style={{ width: "90%", marginTop: "130px" }}></hr>

        <Box sx={{ marginTop: "4.5em" }} id="work">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
              alignItems: "center",
            }}>
            {/* <img
              src="/images/one.png"
              style={{
                position: "absolute",
                width: "40px",
                marginLeft: "-60.4em",
                marginTop: "-35px",
              }}></img> */}

            <Box
              sx={{
                fontFamily: "Lato, sans-serif",
              }}>
              <h1
                style={{
                  fontSize: "42px",
                  letterSpacing: "1px",
                  fontWeight: "700",
                }}>
                Technixia
              </h1>

              <p
                style={{
                  fontSize: "15px",
                  letterSpacing: "1px",
                  color: "#909090",
                  position: "relative",
                  left: "5px",
                  top: "-10px",
                }}>
                MARKETING APP REDESIGN
              </p>
            </Box>
            <Box
              sx={{
                fontFamily: "Lato, sans-serif",
              }}>
              <p style={{ fontSize: "22px" }}>
                Controlling your home devives is just - one click away.
              </p>
              <Link
                to="/technixia"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}>
                <p
                  style={{
                    fontSize: "19px",
                    fontWeight: "bold",
                    letterSpacing: "0.4px",
                  }}>
                  View Project
                  <img
                    src="/images/greenarrow.png"
                    style={{
                      position: "absolute",
                      width: "50px",
                      marginTop: "-14px",
                    }}></img>
                </p>
              </Link>
            </Box>
          </Box>

          <Box>
            <img
              src="/images/technixia.png"
              style={{
                width: "80%",
                marginLeft: "7em",
              }}></img>
          </Box>
        </Box>

        <hr style={{ width: "90%", marginTop: "80px" }}></hr>

        <Box sx={{ marginTop: "4.5em" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
              alignItems: "center",
            }}>
            {/* <img
              src="/images/two.png"
              style={{
                position: "absolute",
                width: "40px",
                marginLeft: "-61.5em",
                marginTop: "-35px",
              }}></img> */}
            <Box
              sx={{
                fontFamily: "Lato, sans-serif",
              }}>
              <h1
                style={{
                  fontSize: "42px",
                  letterSpacing: "1px",
                  fontWeight: "700",
                }}>
                WellnessZ
              </h1>
              <p
                style={{
                  fontSize: "15px",
                  letterSpacing: "1px",
                  color: "#909090",
                  position: "relative",
                  left: "5px",
                  top: "-10px",
                }}>
                FITNESS WEBSITE DESIGN
              </p>
            </Box>
            <Box
              sx={{
                fontFamily: "Lato, sans-serif",
              }}>
              <p style={{ fontSize: "22px" }}>
                Controlling your home devives is just - one click away.
              </p>

              <Link
                to="/wellnessZ"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}>
                <p
                  style={{
                    fontSize: "19px",
                    fontWeight: "bold",
                    letterSpacing: "0.4px",
                  }}>
                  View Project
                  <img
                    src="/images/greenarrow.png"
                    style={{
                      position: "absolute",
                      width: "50px",
                      marginTop: "-14px",
                    }}></img>
                </p>
              </Link>
            </Box>
          </Box>
          <Box>
            <img
              src="/images/wellnessZ.png"
              style={{
                width: "80%",
                marginLeft: "7em",
              }}></img>
          </Box>
        </Box>

        <Box style={{ position: "relative" }} id="about">
          <Box>
            <img
              src="/images/paper.jpg"
              style={{
                width: "98.5vw",
                height: "130vh",
                marginLeft: "-8px",
                marginTop: "20px",
              }}></img>
          </Box>

          <Box
            sx={{
              position: "absolute",
              display: "flex",
              justifyContent: "space-evenly",
              top: "15em",
              left: "3em",
              gap: "-50px",
            }}>
            <Box>
              <img
                src="/images/angel.jpg"
                style={{
                  width: "70%",
                  borderRadius: "4px",
                  marginLeft: "6em",
                  marginTop: "1em",
                }}></img>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  color: "white",
                  fontFamily: "Lato, sans-serif",
                  lineHeight: "27px",
                  fontWeight: "light",
                  fontSize: "18px",
                  letterSpacing: "0.8px",
                  marginLeft: "40px",
                  marginRight: "100px",
                }}>
                Hey there! I'm Angel Thapa - a UI/UX designer and a MERN stack
                developer with a great passion for design and art.
                <br></br>I love to create designs and products that favours the
                user needs and expections.<br></br>
                <span>Let's connect and create amazing projects :)</span>
              </p>
              <Box
                style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <img src="/images/linkedin.png" style={{ width: "25px" }}></img>
                <img src="/images/dribble.png" style={{ width: "25px" }}></img>
                <img src="/images/gmail.png" style={{ width: "25px" }}></img>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
}

export default Home