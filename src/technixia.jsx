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
            marginTop: "30px"
            }}>
            <div
              style={{
                fontFamily: "Lato, sans-serif",
                width: "28em",
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
                Technixia wanted the their users to be able to control their
                home devices through mobile app, leading to less hassle
              </p>
            
            </div>

            <img
              src="/images/technixia-page2.png"
              style={{
                width: "50%",
                borderRadius: "4px",
              }}></img>
            </Box>
            
            <Box className="role" style={{
                width: "60%", height: "30%",
         display: "flex", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "white"
            }}>
                <div>
                    <p>Role</p>
                </div>
                <div>
                    Team
                </div>
                <div>Duration</div>
            </Box>

      </Box>
    );
}

export default Technixia
