import React from "react";
import {
  Box,
  Typography,
  Divider,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";
import theme from "../../theme/theme";
import * as styles from "../../theme/commonStyles";

import SkillBox from "../SkillBox";

const NewSkillsPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      ...styles.columnDiv,
    },
    mainDiv: {
      backgroundColor: "#e8e8e8",
      margin: "0 auto",
      paddingBottom: "2.25rem",
    },
    rowDiv: {
      ...styles.rowDiv,
    },
    rowDivider: {
      width: "85%",
      [theme.breakpoints.down("sm")]: {
        width: "95%",
      },
    },
    divider: {
      ...styles.divider,
    },
    headerText: {
      ...styles.headerText,
    },
    skillsText: {
      marginTop: "2rem",
    },
    listItemText: {
      color: "black",
      fontSize: "1.2rem",
      margin: "0 1rem",
    },
  });
  const classes = useStyles();
  const showMedRows = useMediaQuery(theme.breakpoints.down("md"));
  const showSmallRows = useMediaQuery(theme.breakpoints.down("sm"));

  const python = (
    <SkillBox
      title="PYTHON"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    />
  );
  const javascript = (
    <SkillBox
      title="JAVASCRIPT"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    />
  );
  const cplusplus = (
    <SkillBox
      title="C++"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
    />
  );
  const java = (
    <SkillBox
      title="JAVA"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    />
  );
  const ue = (
    <SkillBox
      title="UE5"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg"
    />
  );
  const react = (
    <SkillBox
      title="REACT JS"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    />
  );
  const node = (
    <SkillBox
      title="NODE JS"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    />
  );
  const azure = (
    <SkillBox
      title="AZURE"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
    />
  );
  const AWS = (
    <SkillBox
      title="AWS"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    />
  );
  const ros = (
    <SkillBox
      title="ROS"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ros/ros-original.svg"
    />
  );
  const html = (
    <SkillBox
      title="HTML"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    />
  );
  const css = (
    <SkillBox
      title="CSS"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    />
  );
  const git = (
    <SkillBox
      title="GIT"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    />
  );
  const docker = (
    <SkillBox
      title="DOCKER"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"          
    />
  );
  const flask = (
    <SkillBox
      title="FLASK"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
    />
  );
  const GithubActions = (
    <SkillBox
      title="Github Actions"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg"
    />
  );
  const c = (
    <SkillBox
      title="C"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
    />
  );
  const cSharp = (
    <SkillBox
      title="C#"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
    />
  );
  const mysql = (
    <SkillBox
      title="MySQL"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    />
  );
  const bash = (
    <SkillBox
      title="BASH"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
    />
  );
  const linux = (
    <SkillBox
      title="LINUX"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
    />
  );
  const pytorch = (
    <SkillBox
      title="PYTORCH"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
    />
  );

  const largeRows = (
    <Box className={classes.rowDivider}>
      <Box className={classes.rowDiv}>
        {python}
        {javascript}
        {cplusplus}
        {cSharp}
        {c}
        {java}
        {docker}
      </Box>
      <Box className={classes.rowDiv}>
        {react}
        {node}
        {ue}
        {html}
        {css}
        {azure}
        {bash}
      </Box>
      <Box className={classes.rowDiv}>
        {git}
        {linux}
        {ros}
        {flask}
        {mysql}
        {AWS}
        {pytorch}
      </Box>
      <Box className={classes.rowDiv}>
        {GithubActions}
      </Box>

    </Box>
  );
  const mediumRows = (
    <Box className={classes.rowDivider}>
      <Box className={classes.rowDiv}>
      {python}
        {javascript}
        {cplusplus}
        {cSharp}
        {c}
      </Box>
      <Box className={classes.rowDiv}>
        {java}
        {docker}
        {react}
        {node}
      </Box>
      <Box className={classes.rowDiv}>
        {ue}
        {html}
        {css}
        {azure}
      </Box>
      <Box className={classes.rowDiv}>
        {bash}
        {git}
        {linux}
        {ros}
      </Box>
      <Box className={classes.rowDiv}>
        {flask}
        {mysql}
        {AWS}
        {pytorch}
      </Box>
      <Box className={classes.rowDiv}>
        {GithubActions}
      </Box>
    </Box>
  );
  const smallRows = (
    <Box className={classes.rowDivider}>
      <Box className={classes.rowDiv}>
        {python}
        {javascript}
        {cplusplus}
      </Box>
      <Box className={classes.rowDiv}>
        {cSharp}
        {c}
        {java}
      </Box>
      <Box className={classes.rowDiv}>
        {docker}
        {react}
        {node}
      </Box>
      <Box className={classes.rowDiv}>
        {ue}
        {html}
        {css}
      </Box>
      <Box className={classes.rowDiv}>
        {azure}
        {bash}
        {git}
      </Box>
      <Box className={classes.rowDiv}>
        {linux}
        {ros}
        {flask}
      </Box>
      <Box className={classes.rowDiv}>
        {mysql}
        {AWS}
        {pytorch}
      </Box>
      <Box className={classes.rowDiv}>
        {GithubActions}
      </Box>
    </Box>
  );

  return (
    <Box className={`${classes.columnDiv} ${classes.mainDiv}`}>
      <Typography
        className={`${classes.skillsText} ${classes.headerText}`}
        align="center"
      >
        My Skills & Tools
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      {showSmallRows ? smallRows : showMedRows ? mediumRows : largeRows}
    </Box>
  );
};

export default NewSkillsPage;
