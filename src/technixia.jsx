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
                color: "#909090",
                lineHeight: "35px",
                marginTop: "-30px",
                letterSpacing: "0.3px",
                fontWeight: "lighter",
              }}>
              Technixia wanted the their users to be able to control their home
              devices through mobile app, leading to less hassle
            </p>
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
            width: "82%",
            height: "50%",
            marginLeft: "66px",
            marginTop: "10em",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            fontFamily: "Lato, sans-serif",
            padding: "40px",
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
            marginLeft: "70px",
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
            width: "86%",
            fontFamily: "Lato, sans-serif",
            marginLeft: "4em",
            fontSize: "18px",
            letterSpacing: "0.5px",
            lineHeight: "35px",
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          explicabo esse ex tenetur rerum sunt assumenda dolorem, debitis fugit
          reiciendis. Rem, repellat sint quasi modi maxime harum debitis amet
          reprehenderit? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Neque reprehenderit odio, eveniet unde ipsum ea aliquid commodi
          exercitationem accusantium aspernatur, perferendis deleniti similique
          nobis ipsam mollitia sequi, quod quia. Suscipit.
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
              marginLeft: "70px",
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
              width: "86%",
              fontFamily: "Lato, sans-serif",
              marginLeft: "4em",
              fontSize: "18px",
              letterSpacing: "0.5px",
              lineHeight: "35px",
            }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            explicabo esse ex tenetur rerum sunt assumenda dolorem, debitis
            fugit reiciendis. Rem, repellat sint quasi modi maxime harum debitis
            amet reprehenderit? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Neque reprehenderit odio, eveniet unde ipsum ea
            aliquid commodi exercitationem accusantium aspernatur, perferendis
            deleniti similique nobis ipsam mollitia sequi, quod quia. Suscipit.
          </p>
        </Box>
      </Box>
    );
}

export default Technixia
