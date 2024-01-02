import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import GoToTop from "./GoToTop";
import { HashLink } from "react-router-hash-link";

const AnsrCoach = () => {
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
            AnsrCoach
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
            AnsrCoach is a social learning platform to help students learn,
            intern and engage, all at once. We help students and professionals
            connect with industry leaders, helping them learn skills that matter
            in the industry.
          </p>
          <div className="prototype4">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
              to="https://www.figma.com/file/iPPOa3OXgU32ZjMYstLH2l/AnsrCoach?type=design&node-id=0%3A1&mode=design&t=x9ld7CZXk4rPhSmS-1">
              <p>Try Prototype</p>
            </Link>
          </div>
        </div>

        <img
          src="/images/ansrcoach.png"
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
          <p>Angel Thapa </p>
        </div>
        <div>
          <p
            style={{
              fontWeight: "bold",
            }}>
            DURATION
          </p>
          <p>December 2022(5 months)</p>
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
        At AnsrCoach we thrive to prepare the leaders of tomorrow with
        sophisticated, best in class learning approaches. We believe in
        upskilling each and every Individual. Why We? Our online learning
        platform offers technical skill development training to undergraduate,
        intermediate students, freelancers, and those who want to switch jobs.
        Imagine the first year of University with all the diversified knowledge
        you'd possess. You'd undoubtedly leave an indelible mark on everyone's
        mind.
      </p>

      <Box
        sx={{
          backgroundColor: "#FAEAE8",
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
          Designing a study app that offered students subject-specific videos,
          tests, online quizzes, and notes for their courses was quite an
          interesting challenge. The main focus was creating an interface that
          made it super easy for students to find what they needed. I worked on
          making the app feel organized and user-friendly so that students could
          easily discover and watch videos related to their subjects. The tests
          and quizzes were a big part of the app too. I made sure these sections
          were engaging and easy to use. Students could jump into tests and get
          feedback instantly. Access to subject notes was another important
          feature. I designed a section where students could easily find and
          read through their course materials. <br></br>
          <br></br> It was crucial that everything flowed smoothly within the
          app. So, I made sure that transitioning between videos, tests,
          quizzes, and notes felt seamless. This way, students could easily
          switch between different study materials without any hassle. In terms
          of visual design, I aimed for a clean and appealing look with a
          consistent color scheme and user-friendly text. The idea was to make
          the learning experience enjoyable, encouraging students to use the app
          regularly.
        </p>
      </Box>

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
};

export default AnsrCoach;
