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
              paddingLeft: 9,
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
            <Link to="/">
              <a
                href="#about"
                style={{ textDecoration: "none", color: "#2c2c2c" }}
                className="hover-line-animation">
                Home
              </a>
            </Link>
            <a
              href="#work"
              style={{ textDecoration: "none", color: "#2c2c2c" }}
              className="hover-line-animation">
              Contact
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
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "50px",
          }}>
          <Box>
            <h1>This is technixxa project</h1>
          </Box>

          <img
            src="/images/Tech.png"
            style={{ width: "50%", borderRadius: "4px" }}
          />
        </Box>
      </Box>
    );
}

export default Technixia
