import { Box, Button } from '@mui/material';
import React from 'react';
import "./App.css";
import GoToTop from './GoToTop';
import { Link } from 'react-router-dom';


const Home = () => {

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
            <a
              href="#about"
              style={{ textDecoration: "none", color: "#2c2c2c" }}
              className="hover-line-animation">
              About
            </a>
            <a
              href="#project"
              style={{ textDecoration: "none", color: "#2c2c2c" }}
              className="hover-line-animation">
              Project
            </a>
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
          style={{
            backgroundColor: "rgba(248, 226, 233, 24%)",
            width: "1110px",
            height: "420px",
            marginTop: "30px",
          }}>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "50px",
            }}>
            <Box>
              <p
                className="font"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontSize: "66px",
                  lineHeight: "80px",
                  textAlign: "left",
                  letterSpacing: "2px",
                  color: "#200513",
                }}>
                Hi! I am<br></br>
                <span style={{ color: "#6D1240" }}>Angel Thapa</span>
              </p>
              <p
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontSize: "18px",
                  fontWeight: "lighter",
                  marginTop: "-55px",
                  color: "#200513",
                }}>
                a <span className="font-semi">UI/UX Designer</span> and{" "}
                <span className="font-semi" style={{ fontWeight: "bold" }}>
                  front-end developer
                </span>
              </p>

              <a
                className="button"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "16px",
                  fontFamily: "Urbanist, sans-serif",
                  letterSpacing: "0.5px",
                  backgroundColor: "#6D1240",
                  width: "200px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  marginTop: "24px",
                }}
                href="mailto:ranannjel77@gmail.com?subject='Let's connect'">
                Connect with me
              </a>
            </Box>
            <img
              src="/images/image.svg"
              style={{
                width: "469.33px",
                height: "352px",

                marginTop: "30px",
              }}></img>
          </Box>
        </Box>

        <h2
          className="font-h"
          style={{
            textAlign: "center",
            fontFamily: "Lato, sans-serif",
            fontSize: "40px",
            letterSpacing: "0.5px",
            lineHeight: "54px",
            marginTop: "140px",
            color: "#200513",
          }}>
          Some of the work I was <br></br>repsonsible for
        </h2>

        <Box
          id="project"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "140px",
          }}>
          <img src="/images/cinepebble.svg"></img>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "680px",
              alignItems: "center",
              marginTop: "-8px",
            }}>
            <Link to="/cinepebble" style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}>
                <p
                  className="font-semi"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontSize: "20px",
                    color: "#200513",
                  }}>
                  Cinepebble
                </p>
                <img
                  src="/images/arrow.svg"
                  style={{ width: "18px", marginTop: "3px" }}></img>
              </div>
            </Link>

            <p
              className="font-text"
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: "16px",
                color: "#5E5E5E",
              }}>
              July, 2023
            </p>
          </Box>
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "140px",
          }}>
          <img src="/images/wellnessZ.svg"></img>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "670px",
              alignItems: "center",
              marginTop: "-8px",
            }}>
            <Link to="/wellnessZ" style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}>
                <p
                  className="font-semi"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontSize: "20px",
                    color: "#200513",
                  }}>
                  WellnessZ
                </p>
                <img
                  src="/images/arrow.svg"
                  style={{ width: "18px", marginTop: "3px" }}></img>
              </div>
            </Link>

            <p
              className="font-text"
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: "16px",
                color: "#5E5E5E",
              }}>
              March, 2023
            </p>
          </Box>
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "140px",
          }}>
          <img src="/images/technixia.svg"></img>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "694px",
              alignItems: "center",
              marginTop: "-8px",
            }}>
            <Link to="/technixia" style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}>
                <p
                  className="font-semi"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontSize: "20px",
                    color: "#200513",
                  }}>
                  Technixia
                </p>
                <img
                  src="/images/arrow.svg"
                  style={{ width: "18px", marginTop: "3px" }}></img>
              </div>
            </Link>

            <p
              className="font-text"
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: "16px",
                color: "#5E5E5E",
              }}>
              May, 2023
            </p>
          </Box>
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "140px",
          }}>
          <img src="/images/ansrcoach.svg"></img>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "640px",
              alignItems: "center",
              marginTop: "-8px",
            }}>
            <Link to="/ansrcoach" style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}>
                <p
                  className="font-semi"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontSize: "20px",
                    color: "#200513",
                  }}>
                  AnsrCoach
                </p>
                <img
                  src="/images/arrow.svg"
                  style={{ width: "18px", marginTop: "3px" }}></img>
              </div>
            </Link>

            <p
              className="font-text"
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: "16px",
                color: "#5E5E5E",
              }}>
              December, 2022
            </p>
          </Box>
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "140px",
          }}>
          <img src="/images/sociohood.svg"></img>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "680px",
              alignItems: "center",
              marginTop: "-8px",
            }}>
            <Link to="/sociohood" style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}>
                <p
                  className="font-semi"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontSize: "20px",
                    color: "#200513",
                  }}>
                  Sociohood
                </p>
                <img
                  src="/images/arrow.svg"
                  style={{ width: "18px", marginTop: "3px" }}></img>
              </div>
            </Link>

            <p
              className="font-text"
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: "16px",
                color: "#5E5E5E",
              }}>
              April, 2023
            </p>
          </Box>
        </Box>

        <Box
          id="about"
          style={{
            backgroundColor: "rgba(248, 226, 233, 24%)",
            width: "1110px",
            height: "420px",
            marginTop: "100px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}>
          <Box>
            <img src="images/sitting.svg"></img>
          </Box>
          <Box
            sx={{
              color: "#000000",
              fontFamily: "Lato, sans-serif",
              letterSpacing: "0.2px",
              width: "40%",
              wordSpacing: "0.6px",
              lineHeight: "26px",
            }}>
            <p className="font-semi" style={{ fontSize: "22px" }}>
              About me
            </p>
            <p>
              Hey, I'm a UI/UX designer with 2 years of experience. I specialize
              in creating designs that are not just visually appealing but also
              user-friendly.
            </p>
            <p>
              My strengths include crafting intuitive interfaces, solving design
              challenges with creativity, and ensuring a smooth user experience.
              <br></br>
            </p>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "24px",
                color: "#656465",
                marginTop: "8px",
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
        </Box>

        <Box>
          <h4
            className="font-h"
            style={{
              textAlign: "left",
              fontFamily: "Lato, sans-serif",
              fontSize: "28px",
              letterSpacing: "0.5px",
              marginTop: "100px",
              color: "#200513",
            }}>
            Check out my other prototypes
          </h4>

          <Box
            sx={{
              marginTop: "60px",
            }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                gap: "80px",
              }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <img
                  src="/images/1.svg"
                  style={{ width: "318px", height: "218px" }}></img>
                <a
                  target="_blank"
                  href="https://www.figma.com/proto/3jUS4GKhdfCJJfYFzgVGzq/Research-session?page-id=0%3A1&type=design&node-id=6-450&viewport=332%2C250%2C0.14&t=LcirLfELeNAx6Iw9-1&scaling=min-zoom&mode=design"
                  className="button"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "16px",
                    fontFamily: "Urbanist, sans-serif",
                    letterSpacing: "0.5px",
                    backgroundColor: "#3F3838",
                    width: "310px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    marginTop: "24px",
                  }}>
                  Try it out
                </a>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <img
                  src="/images/2.svg"
                  style={{ width: "318px", height: "218px" }}></img>
                <a
                  target="_blank"
                  href="https://www.figma.com/proto/3jUS4GKhdfCJJfYFzgVGzq/Research-session?page-id=46%3A125&type=design&node-id=46-126&viewport=408%2C303%2C0.08&t=dRtKDu6PKB0qHWVW-1&scaling=scale-down&starting-point-node-id=46%3A126&mode=design"
                  className="button"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "16px",
                    fontFamily: "Urbanist, sans-serif",
                    letterSpacing: "0.5px",
                    backgroundColor: "#3F3838",
                    width: "310px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    marginTop: "24px",
                  }}>
                  Try it out
                </a>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <img
                  src="/images/3.svg"
                  style={{ width: "318px", height: "218px" }}></img>
                <a
                  target="_blank"
                  href="https://www.figma.com/proto/3jUS4GKhdfCJJfYFzgVGzq/Research-session?page-id=9%3A493&type=design&node-id=12-598&viewport=128%2C140%2C0.05&t=UEvzIsI4rcfVbNH2-1&scaling=scale-down&starting-point-node-id=12%3A598&show-proto-sidebar=1&mode=design"
                  className="button"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "16px",
                    fontFamily: "Urbanist, sans-serif",
                    letterSpacing: "0.5px",
                    backgroundColor: "#3F3838",
                    width: "310px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    marginTop: "24px",
                  }}>
                  Try it out
                </a>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "60px",
            marginTop: "170px",
          }}>
          <img
            src="/images/cinepebble.png"
            style={{
              width: "50%",
              borderRadius: "4px",
            }}></img>

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
              CinePebble
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
              "Cinepebble is the first social network designed exclusively for
              movie enthusiasts! Our features make it easy to connect with film
              aficionados, find collaborators, and raise funds."
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
              to="/cinepebble"
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
        </Box>

        <Box sx={{ marginTop: "9em" }}>
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
            <img
              src="/images/wellnessZ-page.png"
              style={{
                width: "50%",
                borderRadius: "4px",
              }}></img>

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
              We are a project management which allows user to write their
              tasks, set out complaints, track task
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
            src="/images/sociohood.png"
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
          <img
            src="/images/ansrcoach.png"
            style={{
              width: "50%",
              borderRadius: "4px",
            }}></img>

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
              AnsrCoach
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
              I designed the studying app while working as a web developer.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
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
              <div
                style={{
                  backgroundColor: "#f7f7f7",
                  width: "180px",
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
                  Mern Stack Developer
                </p>
              </div>
            </div>
            <div className="prototype4">
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                target="_blank"
                to="https://www.figma.com/file/3d3THcLovRIRWxuw1lwK9V/AnsrCoach-UI%2FUX?type=design&node-id=0%3A1&t=5iFK63m2u7ShwRbo-1">
                <p>View design</p>
              </Link>
            </div>
          </div>
        </Box> */}

        <GoToTop />
      </Box>
    );
}

export default Home
