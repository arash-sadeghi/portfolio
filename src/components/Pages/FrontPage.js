import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    IconButton,
    Fab,
    Hidden,
    makeStyles,
} from "@material-ui/core";
// import backgroundImage from "./../../images/background.png";
import backgroundImage from "./../../images/me.png";
import theme from "../../theme/theme";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const FrontPage = () => {
    const useStyles = makeStyles({
        textContainer: {
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Transparent white background
            padding: "20px 20px",
            borderRadius: "10px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        background: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center 60px",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            backgroundSize: "cover",
        },
        name: {
            position: "relative",
            top: "20rem",
            margin: "0.5rem 1rem",
            fontWeight: "bold",
            [theme.breakpoints.down("xs")]: {
                top: "2rem",
                fontSize: "3.4rem",
            },
            [theme.breakpoints.up("lg")]: {
                top: "1rem",
                fontSize: "5rem",
            },
        },
        bottomText: {
            position: "relative",
            top: "6rem",
            margin: "0 1.4rem",
            fontSize: "1.5rem",
            [theme.breakpoints.down("xs")]: {
                top: "1rem",
                fontSize: "1.4rem",
            },
            [theme.breakpoints.up("lg")]: {
                top: "1rem",
                fontSize: "2rem",
            },
        },
        button: {
            position: "relative",
            top: "2rem",
            fontSize: "3.75rem",
            [theme.breakpoints.down("xs")]: {
                top: "2rem",
                fontSize: "3.5rem",
            },
        },
        backToTopButton: {
            position: "fixed",
            bottom: "0",
            right: "0",
            margin: "1rem",
            zIndex: "99999",
        },
        backToTopButtonMobile: {
            margin: "0.8rem",
            marginBottom: "3rem",
        },
    });
    const classes = useStyles();

    // makes the typing animation run on an infinite loop
    const [count, setCount] = useState(1);
    useEffect(() => {
        setCount(1);
    }, [count]);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Box className={classes.background} id="Top">      
            <Box className={classes.textContainer}>
                <Typography className={classes.name} variant="h2" align="top">
                    Arash
                </Typography>
                <Typography className={classes.name} variant="h2" align="top">
                    Sadeghi Amjadi
                </Typography>

                <Typography className={classes.bottomText} align="top">
                    Software Developer - AI Engineer - Robotic Engineer
                </Typography>
                <IconButton
                    className={classes.button}
                    aria-label="Scroll Down"
                    onClick={() => scrollTo("AboutMe")}
                >
                    <span
                        className="iconify"
                        data-icon="bi:chevron-compact-down"
                        data-inline="false"
                    />
                </IconButton>
                </Box>

            <Hidden xsDown>
                <Fab
                    className={classes.backToTopButton}
                    variant="extended"
                    size="small"
                    aria-label="Back to Top"
                    onClick={() => scrollTo("Top")}
                >
                    <KeyboardArrowUpIcon />
                    Back to Top
                </Fab>
            </Hidden>
            <Hidden smUp>
                <Fab
                    className={`${classes.backToTopButton} ${classes.backToTopButtonMobile}`}
                    size="small"
                    aria-label="Back to Top"
                    onClick={() => scrollTo("Top")}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </Hidden>
        </Box>
    );
};

export default FrontPage;
