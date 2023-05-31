import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Technixia = () => {

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
              style={{ textDecoration: "none", color: "#2c2c2c" }}
              className="hover-line-animation">
              Resume
            </a>
            <a
              style={{ textDecoration: "none", color: "#2c2c2c" }}
              className="hover-line-animation">
              Contact
            </a>
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
              Technixia
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
              “Technixia ready to become a part of your life”. Technixia is a
              technology innovator, pioneering in providing intelligent
              automation solutions with in-house scalable and customised
              technology to businesses. Our solutions have been an integral part
              of many businesses throughout their digital transformation
              journey.
            </p>
            <div
              className="prototype"
             >
              <p>Try Prototype</p>
            </div>
          </div>

          <img
            src="/images/technixia-page2.png"
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
            marginTop: "7em",
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
            <p>1 month</p>
          </div>
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
          Technixia’s intelligent analytics & automation solutions help
          residential housing societies, offices, industries, hotels, shopping
          malls and retail sector in REDUCING, MAINTAINING and OPTIMISING
          variety of appliances, and their power usage. By plugging-in to your
          infrastructure, we can help you understand your current energy profile
          by covering electrical, lighting, HVAC, motor & pump, mechanical and
          technical services. Technixia solution allows you to access and
          monitor your entire facility and premise energy consumption, anytime
          from anywhere which makes energy saving easier. We provide IoT Based
          energy monitoring device combined with the power of cloud computing &
          mobility provides you with simple, proactive & actionable insights in
          real-time.
        </p>

        <Box
          sx={{
            backgroundColor: "#fbe62a",

            marginTop: "60px",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: "80px",
              marginLeft: "74px",
              paddingTop: "40px",
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
              PROBLEM
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
              paddingBottom: "50px",
              wordSpacing: "3px",
            }}>
            All-in-one solution was lacking. After going through the previous
            designed app, we realized, users did'nt have multiple ways to
            operate their devices and even though there were good features
            provided in the app, the user's did'nt seem to understand it
            properly cause of the way it was designed. When Suruchi Gagan(who
            guided me in this Internship), told me about how "3-click-step" is
            important for the user when designing anything, it made a lot of
            sense. So as a UI/UX designer I wanted the user's journey to be as
            simple as possible, while keeping in mind about the design flow.
          </p>
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
            COMPARISION
          </p>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px",
            marginTop: "50px",
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
        </div>
      </Box>
    );
}

export default Technixia
