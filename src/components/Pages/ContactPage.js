import React from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  Divider,
  Tooltip,
  makeStyles,
  Zoom,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import Scholar from "@material-ui/icons/School";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import theme from "../../theme/theme";
import * as styles from "../../theme/commonStyles";

const ContactPage = () => {
  const useStyles = makeStyles({
    mainDiv: {
      backgroundColor: "rgba(0, 0, 0, 0.92)",
      position: "relative",
      bottom: "0",
      paddingTop: "1rem",
      paddingBottom: "0.6rem",
    },
    columnDiv: {
      ...styles.columnDiv,
    },
    rowDiv: {
      ...styles.rowDiv,
    },
    headerText: {
      ...styles.headerText,
    },
    contactText: {
      color: "#eeeeee",
      margin: "0.5rem",
      textShadow: "0.1rem 0.1rem #4f4f4f",
    },
    divider: {
      ...styles.divider,
    },
    contactDivider: {
      backgroundColor: "#eeeeee",
    },
    emailText: {
      color: "#eeeeee",
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    link: {
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    icon: {
      color: "#eeeeee",
      [theme.breakpoints.down("xl")]: {
        margin: "0.2rem 1.4rem",
      },
      [theme.breakpoints.down("md")]: {
        margin: "0.2rem 0.5rem",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "0.1rem",
      },
    },
    github: {
      fontSize: "2.2rem",
    },
    linkedIn: {
      fontSize: "2.7rem",
    },
    twitter: {
      fontSize: "2.6rem",
    },
  });
  const classes = useStyles();

  const icons = (
    <Box className={classes.rowDiv} id="Contact">
      <Tooltip title="LinkedIn" arrow TransitionComponent={Zoom}>
        <IconButton
          className={classes.icon}
          aria-label="LinkedIn Link"
          onClick={() =>
            window.open("www.linkedin.com/in/arash-s-amjadi")
          }
        >
          <LinkedInIcon className={classes.linkedIn} />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub" arrow TransitionComponent={Zoom}>
        <IconButton
          className={classes.icon}
          aria-label="GitHub link"
          onClick={() => window.open("https://github.com/arash-sadeghi")}
        >
          <GitHubIcon className={classes.github} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Google Scholar" arrow TransitionComponent={Zoom}>
        <IconButton
          className={classes.icon}
          aria-label="Google Scholar link"
          onClick={() => window.open("https://scholar.google.com/citations?user=wiDZaUAAAAAJ&hl=en")}
        >
          
          <Scholar className={classes.github} />
        </IconButton>
      </Tooltip>
    </Box>
  );

  return (
    <section id="Contact">
      <Box className={`${classes.columnDiv} ${classes.mainDiv}`}>
        <Typography className={`${classes.headerText} ${classes.contactText}`}>
          Contact Me
        </Typography>
        <Divider
          classes={{
            root: `${classes.divider} ${classes.contactDivider}`,
          }}
        />
        <Box className={classes.rowDiv}>
          <Typography className={classes.emailText}>
            Email:&nbsp;&nbsp;&nbsp;&nbsp;
          </Typography>
          <Link href="mailto: brmcdonald@mun.ca" className={classes.link}>
            arash.sadeghi1997@gmail.com
          </Link>
        </Box>
        {icons}
      </Box>
    </section>
  );
};

export default ContactPage;
