import React from "react";
import { Box, Typography, Divider, makeStyles } from "@material-ui/core";
import theme from "../../theme/theme";
import * as styles from "../../theme/commonStyles";
import CCP from "./../../images/CCP.png";

import SkillsPage from "./SkillsPage.js";

const AboutPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      ...styles.columnDiv,
    },
    mainDiv: {
      [theme.breakpoints.down("xl")]: {
        width: "45%",
      },
      [theme.breakpoints.down("lg")]: {
        width: "60%",
      },
      [theme.breakpoints.down("md")]: {
        width: "60%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
      margin: "0 auto",
    },
    headerText: {
      ...styles.headerText,
    },
    aboutText: {
      marginTop: "6rem",
    },
    divider: {
      ...styles.divider,
    },
    bodyText: {
      fontSize: "1.1rem",
      color: "black",
      maxWidth: "100%",
      maxHeight: "100%",
      margin: "1rem",
      marginBottom: "0.02rem",
      lineHeight: "1.6rem",
      textAlign: "justify", 
      textJustify: "inter-word",
    },
    link: {
      color: "black",
      textShadow: "1px 1px #b2dfdb",
      textDecoration: "none",
      borderBottom: "1px solid #b2dfdb",
      "&:hover": {
        color: "#b2dfdb",
        cursor: "pointer",
      },
    },
    picture: {
      maxHeight: "100%",
      maxWidth: "100%",
      margin: "2rem",
      marginBottom: "6rem",
      width: "80%",
      [theme.breakpoints.down("md")]: {
        width: "50%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "60%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "70%",
      },
      boxShadow: "8px 8px 12px rgba(0, 0, 0, 0.25)",
    },
  });
  const classes = useStyles();

  return (
    <section id="AboutMe">
      <div style={{ backgroundColor: "#fcf8f8" }}>
        <Box className={`${classes.columnDiv} ${classes.mainDiv}`} id="AboutMe">
          <Typography className={`${classes.aboutText} ${classes.headerText}`}>
            About Me
          </Typography>
          <Divider classes={{ root: classes.divider }} />
          <Typography className={classes.bodyText}>
          I'm Arash Sadeghi Amjadi, a passionate developer with a solid foundation in AI, Robotics, and Software Development. I hold an MSc in Computer Science from Memorial University (4.0 GPA), where I focused on generative AI for music creation. I additionally hold MSc in Mechanical Eningeering (METU, top university in enigneering in Turkey) and BSc in electrical engineering, control systems (Tabriz University). My experience spans diverse projects, from building a movie recommendation system to developing drone control websites, 3D simulations, and researching robot navigation using computer vision. I'm a fast learner, an effective communicator, and a team player who has collaborated with engineers and developers from various countries and backgrounds.

          I hold a valid work permit and am legally authorized to work in Canada, with the flexibility to relocate if needed. I am actively seeking new opportunities in robotics, AI, and software development. Welcome to my portfolio, where you can explore my projects and publications in greater detail!
          </Typography>
          <div style={{ height: "20px" }} /> {/* Adjust height as needed */}
          <Divider classes={{ root: classes.divider }} />
          <Typography className={` ${classes.headerText}`}>
            Certifications
          </Typography>

          <Box
            component="img"
            src={CCP}
            alt="A picture of me"
            className={classes.picture}
          />
          <div style={{ height: "20px" }} /> {/* Adjust height as needed */}
        </Box>
        <SkillsPage />
      </div>
    </section>
  );
};

export default AboutPage;
