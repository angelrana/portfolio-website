import { Box } from '@mui/material';
import React from 'react';
import "./App.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

// function Heading() {
//     return (
    
//         <Box>
//           <img
//             alt="angel wings"
//             src="https://t3.ftcdn.net/jpg/05/30/60/16/360_F_530601668_ZQ8ehfZvV18rfvOA4GSX5YLoHj3gaIY1.jpg"
//             className="image"
//             style={{
//                 width: "100vw",
//                 height: "128vh",
//               overflow: "hidden",
//               position: "absolute",
//               top: 0,
//               left: 0,
           
//             }}></img>
//         </Box>
     
//     );
// }


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
                    <a
                        
              style={{ textDecoration: "none", color: "#2c2c2c" }}
              className="hover-line-animation">
              Home
            </a>
            <a
              style={{ textDecoration: "none", color: "#2c2c2c" }}
              className="hover-line-animation">
              Resume
            </a>
            <a
              href="#about"
              style={{ textDecoration: "none", color: "#2c2c2c" }}
              className="hover-line-animation">
              Contact
            </a>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "8em",
          }}>
          <p
            style={{
              fontFamily: "Lato, sans-serif",
              fontSize: "16px",
              lineHeight: "70px",
              textAlign: "left",
            }}>
            Hello, I'm
            <br></br>
            <span
              //   onMouseOver={handleMouseOver}
              //   onMouseOut={handleMouseOut}
              className="color"
              style={{
                fontFamily: "Wendy One, sans-serif",
                fontWeight: "bold",
                marginTop: "-16px",
              }}>
              ANGEL
            </span>
            {/* {isHovering && <Heading />} */}
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
              marginTop: "145px",
              marginRight: "4.1em",
              letterSpacing: "0.5px",
            }}>
            -a self-taught UI/UX designer
          </p>
        </Box>

        <hr style={{ width: "96%", marginTop: "115px" }}></hr>

        <Box sx={{ marginTop: "8em" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "60px",
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
                Technixia
              </p>
              <p
                style={{
                  fontSize: "18px",
                  color: "#909090",
                  lineHeight: "35px",
                  marginTop: "-30px",
                  letterSpacing: "0.3px",
                  fontWeight: "lighter",
                }}>
                “Technixia ready to become a part of your life”. Technixia is a
                technology innovator, pioneering in providing intelligent
                automation solutions with
              </p>

              <div
                style={{
                  backgroundColor: "#f7f7f7",
                  width: "110px",
                  height: "30px",
                  borderRadius: "16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#353535",
                    letterSpacing: "0.3px",
                  }}>
                  Redesign
                </p>
              </div>
                        <Link 
                            
                to="/technixia"
                style={{ textDecoration: "none", color: "#353535" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <h4
                    style={{
                      fontSize: "16px",

                      letterSpacing: "0.4px",
                      marginTop: "30px",
                    }}>
                    View Project
                  </h4>
                  <img
                    src="/images/greenarrow.png"
                    style={{
                      width: "40px",
                      marginTop: "10px",
                    }}></img>
                </div>
              </Link>
            </div>

            <img
              src="/images/technixia-page2.png"
              style={{
                width: "50%",
                borderRadius: "4px",
              }}></img>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "60px",
              marginTop: "170px",
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
                  color: "#909090",
                  lineHeight: "35px",
                  marginTop: "-30px",
                  letterSpacing: "0.3px",
                  fontWeight: "lighter",
                }}>
                "Helping wellness coaches to keep the world healthy and happier"
              </p>

              <div
                style={{
                  backgroundColor: "#f7f7f7",
                  width: "110px",
                  height: "30px",
                  borderRadius: "16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#353535",
                    letterSpacing: "0.3px",
                  }}>
                  UI/UX
                </p>
              </div>
              <Link
                to="/wellnessZ"
                style={{ textDecoration: "none", color: "#353535" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <h4
                    style={{
                      fontSize: "16px",

                      letterSpacing: "0.4px",
                      marginTop: "30px",
                    }}>
                    View Project
                  </h4>
                  <img
                    src="/images/greenarrow.png"
                    style={{
                      width: "40px",
                      marginTop: "10px",
                    }}></img>
                </div>
              </Link>
            </div>

            <img
              src="/images/wellnessZ-page.png"
              style={{
                width: "50%",
                borderRadius: "4px",
              }}></img>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "60px",
            marginTop: "170px",
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
              SocioHood
            </p>
            <p
              style={{
                fontSize: "18px",
                color: "#909090",
                lineHeight: "35px",
                marginTop: "-30px",
                letterSpacing: "0.3px",
                fontWeight: "lighter",
              }}>
              "Helping wellness coaches to keep the world healthy and happier"
            </p>

            <div
              style={{
                backgroundColor: "#f7f7f7",
                width: "110px",
                height: "30px",
                borderRadius: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <p
                style={{
                  fontSize: "14px",
                  color: "#353535",
                  letterSpacing: "0.3px",
                }}>
                Case Study
              </p>
            </div>
            <Link
              to="/sociohood"
              style={{ textDecoration: "none", color: "#353535" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}>
                <h4
                  style={{
                    fontSize: "16px",

                    letterSpacing: "0.4px",
                    marginTop: "30px",
                  }}>
                  View Project
                </h4>
                <img
                  src="/images/greenarrow.png"
                  style={{
                    width: "40px",
                    marginTop: "10px",
                  }}></img>
              </div>
            </Link>
          </div>

          <img
            src="/images/Messages.png"
            style={{
              width: "50%",
              borderRadius: "4px",
            }}></img>
        </Box>

        <Box style={{ position: "relative" }} id="about">
          <Box>
            <img
              src="/images/paper.jpg"
              style={{
                width: "98.5vw",
                height: "115vh",
            
                marginTop: "100px",
              }}></img>
          </Box>

          <Box
            sx={{
              position: "absolute",
              display: "flex",
              top: "18em",
              left: "3em",
            }}>
            <Box>
              <img
                src="/images/angel.jpg"
                style={{
                  width: "60%",
                  borderRadius: "20px",
                  marginLeft: "8em",
                  marginTop: "1em",
                }}></img>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  color: "white",
                  fontFamily: "Lato, sans-serif",
                  lineHeight: "35px",
                  fontWeight: "light",
                  fontSize: "18px",
                  letterSpacing: "0.5px",
                  marginLeft: "40px",
                  marginRight: "120px",
                  wordSpacing: "3px",
                }}>
                Hey there! I'm Angel Thapa - a UI/UX designer and a MERN stack
                developer with a great passion for design and art.
                <br></br>I love to create designs and products that favours the
                user needs and expections.<br></br>
                <span>Let's connect and create amazing projects :)</span>
              </p>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  marginLeft: "40px",
                }}>
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
