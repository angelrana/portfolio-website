import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import GoToTop from './GoToTop';
import { HashLink } from 'react-router-hash-link';

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

            <div className="prototype" style={{ textDecoration: "none" }}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
                to="https://www.figma.com/file/BLkO2XCFEiTQbqpZA7XEU4/Technixia?type=design&node-id=0%3A1&mode=design&t=DR1T1i1Po4yx7nLB-1">
                <p>Try Prototype</p>
              </Link>
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
            <p>May 2023 (1 month)</p>
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
            backgroundColor: "#fff9c3",
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
            In redesigning our UI/UX, a key challenge was users struggling with
            the quick lines feature, causing delays. We opted for a
            comprehensive redesign to not only fix this but also improve the
            entire user experience. My role expanded beyond quick lines to
            ensure users could easily save their favorite devices. As part of
            the redesign, we introduced a feature enabling users to link devices
            to specific rooms, allowing scheduling and seamless device
            management. <br></br>
            <br></br>Users could also create personalized scenes like "morning"
            or "night" for automated device actions. A notable addition was the
            flexibility for users to change their locations based on where they
            have different devices, such as home or office.
          </p>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "85px",
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
            WHY'S AND WHY NOT
          </p>
        </Box>
        <div>
          <ul
            style={{
              width: "85%",
              fontFamily: "Lato, sans-serif",
              marginLeft: "3em",
              fontSize: "18px",
              letterSpacing: "0.5px",
              lineHeight: "35px",
              paddingBottom: "50px",
                        wordSpacing: "3px",
            }}>
            <li>
              The user has an option to maintain devices which is designated to
              particular place, for eg: home, office etc
            </li>
            <li>
              The add button allows the user to add device right away, either
              with scanning or choosing the device shown in the app.
            </li>
            <li>
              When clicked or long pressed on the device box, it leads them to
              explore more options- as in adding to the scenes, favourites and
              scheduling it, making their one-way route easier.
            </li>
          </ul>
            </div> */}
        <div className="next" style={{ textDecoration: "none" }}>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/ansrcoach">
            <p>Next Project</p>
          </Link>
        </div>

        <GoToTop />
      </Box>
    );
}

export default Technixia
