import React from "react";
import { Box, Typography, Divider, makeStyles } from "@material-ui/core";
import theme from "../../theme/theme";
import * as styles from "../../theme/commonStyles";

const TeachingPage = () => {
  const useStyles = makeStyles({
    listItem: {
        marginBottom: "1rem",
    },

    subListItem: {
        marginLeft: "1rem",
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

  return (
    <section id="Teaching">
        <div style={{ backgroundColor: "#fcf8f8" }}>
        <Box className={`${classes.columnDiv} ${classes.mainDiv}`} id="Teaching">
            <Typography className={`${classes.aboutText} ${classes.headerText}`}>
            Teachings
            </Typography>
            <Divider classes={{ root: classes.divider }} />
            <Typography className={classes.bodyText}>
                    {/* <a href="https://link.springer.com/chapter/10.1007/978-3-030-67540-0_30"> */}
                <ul>
                    <li className={classes.listItem}>
                        <a href="https://www.mun.ca/" className={classes.link}>Memorial University of Newfoundland</a>
                        <ul className={classes.subListItem}> 
                            <li><b>COMP 3200/6980:</b> TA for AI and path finding in JavaScript.</li>
                            <li><b>COMP 4300:</b> TA for Game programming with C++.</li>
                            <li><b>COMP 1001:</b> TA for Introduction to programming with Python.</li>
                            <li><b>ENGI 9818:</b> TA for Software Foundation with Java.</li>
                            <li><b>ME 6202:</b> TA for Control Systems I.</li>
                            <li><b>AI 6001:</b> for Game programming with C++.</li>
                            <li><b>COMP 4300:</b> TA for AI topic course.</li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://www.cvut.cz/en" className={classes.link}>Czech technical university in Prague</a>
                        <ul className={classes.subListItem}> 
                            <li><b>C/C++ COURSE ASSISTANT:</b> TA for C/C++ programming languages in STM32 NUCLEO boards.</li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://tabrizu.ac.ir/en" className={classes.link}>University of Tabriz</a>
                        <ul className={classes.subListItem}> 
                            <li><b>C/C++ COURSE ASSISTANT:</b> TA for C/C++ programming languages.</li>
                        </ul>
                    </li>
                </ul>
            </Typography>
        </Box>
        </div>
    </section>
  );
};

export default TeachingPage;
/*


ME 6202
• TA for Control Systems I
Sep 2021 -
Dec 2021
C/C++ COURSE ASSISTANT IN CTU
• TA for C/C++ programming languages in STM32 NUCLEO boards.
Sep 2018 -
Dec 2019
C/C++ COURSE ASSISTANT IN UNIVERSITY OF TABRIZ
• TA for C/C++ programming languages.

*/