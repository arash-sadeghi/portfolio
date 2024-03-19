import React from "react";
import { Box, Typography, Divider, Link, makeStyles } from "@material-ui/core";
import theme from "../../theme/theme";
import * as styles from "../../theme/commonStyles";
import picture from "./../../images/me.png";

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

  const scrollTo = (id) => {
    console.log(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="AboutMe">
      <div style={{ backgroundColor: "#fcf8f8" }}>
        <Box className={`${classes.columnDiv} ${classes.mainDiv}`} id="AboutMe">
          <Typography className={`${classes.aboutText} ${classes.headerText}`}>
            About Me
          </Typography>
          <Divider classes={{ root: classes.divider }} />
          <Typography className={classes.bodyText}>
            I'm Arash Sadeghi Amjadi, a passionate developer with a strong foundation in AI, Robotics, and Software Development. Completing my MSc in Computer Science at Memorial University (4.0 GPA) with a focus on generative AI for music creation, I bring diverse experience from building a movie recommendation system to developing drone control websites, 3D simulations, and researching robot navigation with computer vision. Skilled in Python, C/C++, Java, Javascript, React.js, and cloud computing (Azure), I'm a fast learner, effective communicator, and team player eager to explore exciting opportunities.  Welcome to my portfolio, where you can delve deeper into my projects and publications!
          </Typography>
          <Box
            component="img"
            src={picture}
            alt="A picture of me"
            className={classes.picture}
          />
        </Box>
        <SkillsPage />
      </div>
    </section>
  );
};

export default AboutPage;
