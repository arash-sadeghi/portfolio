import React from "react";
import { Box, Typography, Divider, Link, makeStyles } from "@material-ui/core";
import theme from "../../theme/theme";
import * as styles from "../../theme/commonStyles";
import picture from "./../../images/me.png";

const PublicationPage = () => {
  const useStyles = makeStyles({
    link: {
        color: "#1976d2", // Adjust link color
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },      
    },
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
    <div style={{ backgroundColor: "#fcf8f8" }}>
      <Box className={`${classes.columnDiv} ${classes.mainDiv}`} id="Publications">
        <Typography className={`${classes.aboutText} ${classes.headerText}`}>
          Publications
        </Typography>
        <Divider classes={{ root: classes.divider }} />
        <Typography className={classes.bodyText}>
        <ol>
            <li>
                <a href="https://link.springer.com/chapter/10.1007/978-3-030-67540-0_30" className={classes.link}>
                    Sadeghi Amjadi, A., Raoufi, M., Turgut, A. E., Broughton, G., Krajník, T., & Arvin, F. (2021). <b>Cooperative pollution source exploration and cleanup with a bio-inspired swarm robot aggregation.</b> In Collaborative Computing: Networking, Applications and Worksharing: 16th EAI International Conference, CollaborateCom 2020, Shanghai, China, October 16–18, 2020, Proceedings, Part II 16 (pp. 469-481). Springer International Publishing.
                </a>
            </li>
            <br/>
            <li>
                <a href="https://journals.sagepub.com/doi/full/10.1177/1059712320985543?casa_token=J46ttpaqKAkAAAAA%3AnzGkTLuXPw7gCLqk8dwKK4sNsxpU1TtrCfUvpRIsHHJcZNzpaLh3EEZ2DROMnsrZ8suz43iScnky" className={classes.link}>
                    Sadeghi Amjadi, A., Raoufi, M., & Turgut, A. E. (2022). <b>A self-adaptive landmark-based aggregation method for robot swarms.</b> Adaptive Behavior, 30(3), 223-236.
                </a>
            </li>
            <br/>
            <li>
                <a href="https://www.mdpi.com/1424-8220/22/8/2836" className={classes.link}>
                    Rouček, T., Amjadi, A. S., Rozsypálek, Z., Broughton, G., Blaha, J., Kusumam, K., & Krajník, T. (2022). <b>Self-supervised robust feature matching pipeline for teach and repeat navigation.</b> Sensors, 22(8), 2836.
                </a>
            </li>
            <br/>
            <li>
                <a href="https://ieeexplore.ieee.org/abstract/document/10416791?casa_token=FMupignkg-4AAAAA:momFm781bgcN_3HVh7bKm4YOV4Ou7ITUtwpNLkd1LLO1lo4wkmZD_29h1NkWYvGIyjlX543MoQ" className={classes.link}>
                    Abdullhak, M., Amjadi, A. S., & Vardy, A. (2023, December). <b>SwarmJS: Swarm Robotics Simulation on the Web.</b> In 2023 International Symposium on Multi-Robot and Multi-Agent Systems (MRS) (pp. 177-183). IEEE.
                </a>
            </li>
            <br/>
            <li>
                <a href="https://journals.sagepub.com/doi/full/10.1177/10597123231202593" className={classes.link}>
                    Sadeghi Amjadi, A., Bilaloğlu, C., Turgut, A. E., Na, S., Şahin, E., Krajník, T., & Arvin, F. (2023). <b>Reinforcement learning-based aggregation for robot swarms.</b> Adaptive Behavior, 10597123231202593.
                </a>
            </li>
            <br/>
            <li>
                <a href="https://ieeesmc2023.org/abstract_files/SMC23_1569_FI.pdf" className={classes.link}>
                    Vardy, A., Amjadi, A. S., & Abdullhak, M. <b>Interaction and Control of Light-Guided Robots.</b>
                </a>
            </li>
            <br/>
            <li>
                <a href="https://open.metu.edu.tr/handle/11511/91629" className={classes.link}>
                    Sadeghi Amjadi, A. (2021). <b>Landmark-based Aggregation method for Robot Swarms</b> (Master's thesis, Middle East Technical University).
                </a>
            </li>
        </ol>
        </Typography>
      </Box>
    </div>
  );
};

export default PublicationPage;
