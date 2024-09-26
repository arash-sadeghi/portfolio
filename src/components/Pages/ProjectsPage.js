import React from "react";
import {
  Box,
  Typography,
  Divider,
  makeStyles,
} from "@material-ui/core";
import * as styles from "../../theme/commonStyles";

import Project from "./../Project";
import swarmJS from "./../../images/swarmJS.png";
import DroneGazebo from "./../../images/DroneGazebo.png";
import CTU from "./../../images/CTU.webp";
import Roboroyal from "./../../images/Roboroyal.png";
import BSc from "./../../images/BSc.gif";

const ProjectsPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      ...styles.columnDiv,
      width: "auto",
      paddingBottom: "5rem",
      textAlign: "justify", 
      textJustify: "inter-word",
    },
    headerText: {
      ...styles.headerText,
      marginTop: "5rem",
    },
    divider: {
      ...styles.divider,
      paddingBottom: "0.15rem",
    },
    icons: {
      fontSize: "1.5rem",
      display: "flex",
      width: "100%",
      margin: "0.5rem 0",
      gap: "0.7rem",
    },
    button: {
      margin: "0.5rem",
      marginTop: "1rem",
      backgroundColor: "#347f78",
      color: "white",
      boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
      "&:hover": {
        backgroundColor: "#409b93",
      },
    },
  });
  const classes = useStyles();

  const aws = (
    <span
      className="iconify"
      data-icon="logos:aws"
      data-inline="false"
      style={{ fontSize: "1.5rem" }}
    />
  );

  const jenkinIcon = (
    <span
      className="iconify"
      data-icon="logos:jenkins"
      data-inline="false"
      style={{ fontSize: "1.5rem" }}
    />
  );
  const gazeboIcon = (
    <span
      className="iconify"
      data-icon="logos:gazebo"
      data-inline="false"
      style={{ fontSize: "1.5rem" }}
    />
  );
  const ueIcon = (
    <span
      className="iconify"
      data-icon="logos:unrealengine"
      data-inline="false"
      style={{ fontSize: "1.5rem" }}
    />
  );
  const rosIcon = (
    <span
      className="iconify"
      data-icon="logos:ros"
      data-inline="false"
      style={{ fontSize: "1.5rem" }}
    />
  );
  const AzureIcon = (
    <span
      className="iconify"
      data-icon="logos:azure"
      data-inline="false"
      style={{ fontSize: "1.5rem" }}
    />
  );
  const flaskIcon = (
    <span
      className="iconify"
      data-icon="logos:flask"
      data-inline="false"
      style={{ fontSize: "1.5rem" }}
    />
  );
  const dockerIcon = (
    <span
      className="iconify"
      data-icon="logos:docker"
      data-inline="false"
      style={{ fontSize: "1.5rem" }}
    />
  );

  const pytorchIcon = (
    <span
      className="iconify"
      data-icon="logos:pytorch"
      data-inline="false"
      style={{ fontSize: "1.5rem" }}
    />
  );

  const reactIcon = (
    <span
      className="iconify"
      data-icon="logos:react"
      data-inline="false"
      style={{ fontSize: "1.5rem" }}
    />
  );

  const javascriptIcon = (
    <span
      className="iconify"
      data-icon="logos:javascript"
      data-inline="false"
      style={{ fontSize: "1.6rem" }}
    />
  );

  const htmlIcon = (
    <span
      className="iconify"
      data-icon="vscode-icons:file-type-html"
      data-inline="false"
      style={{ fontSize: "1.7rem" }}
    />
  );

  const cssIcon = (
    <span
      className="iconify"
      data-icon="vscode-icons:file-type-css"
      data-inline="false"
      style={{ fontSize: "1.7rem" }}
    />
  );

  const javaIcon = (
    <span
      className="iconify"
      data-icon="logos:java"
      data-inline="false"
      style={{ fontSize: "1.7rem" }}
    />
  );

  const pythonIcon = (
    <span
      className="iconify"
      data-icon="logos:python"
      data-inline="false"
      style={{ fontSize: "1.7rem" }}
    ></span>
  );

  const nodeIcon = (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      alt="Nodejs Icon"
      style={{
        width: "1.7rem",
        height: "1.7rem",
      }}
    />
  );


  const cPlusPlusIcon = (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
      alt="C++ Icon"
      style={{
        width: "2rem",
        height: "2rem",
      }}
    />
  );

  const MusicDrummerIcons = (
    <Box className={classes.icons}>
      {htmlIcon}{cssIcon}{javascriptIcon}{pythonIcon}{pytorchIcon}{dockerIcon}{flaskIcon}{AzureIcon}{aws}
    </Box>
  );
  const swarmJSIcons = (
    <Box className={classes.icons}>
      {htmlIcon}{cssIcon}{pythonIcon}{reactIcon}{nodeIcon}
    </Box>
  );
  const goodaiWebIcons = (
    <Box className={classes.icons}>
      {htmlIcon}{cssIcon}{pythonIcon}{reactIcon}{nodeIcon}{rosIcon}
    </Box>
  );
  const goodaiDroneIcons = (
    <Box className={classes.icons}>
      {cPlusPlusIcon}{pythonIcon}{rosIcon}{ueIcon}{gazeboIcon}{javaIcon}
    </Box>
  );
  const CTU1Icons = (
    <Box className={classes.icons}>
      {cPlusPlusIcon}{pythonIcon}{rosIcon}{pytorchIcon}{jenkinIcon}
    </Box>
  );

  return (
    <section id="Projects">
      <Box
        className={classes.columnDiv}
        id="Projects"
        style={{ backgroundColor: "#fcf8f8" }}
      >
        <Typography className={classes.headerText}>Projects</Typography>
        <Divider className={classes.divider} />

        <Project
          title="MSc Thesis: Generative Drummer Companion (Music & AI)"
          icons={MusicDrummerIcons}
          description={
            <div style={{ lineHeight: "1.2em" }}>
              <p>My MSc thesis at Memorial University (MUN) focused on using AI to revolutionize music creation. I developed a generative drummer companion for musicians. Imagine practicing guitar at home and wishing you had a drummer to jam with! This project uses Conditional Generative Adversarial Networks (CGANs) to create drum tracks that adapt to your bass playing.</p>

              <p>Humanizing the Machine: To ensure the generated tracks feel natural, I incorporated a BERT large language model. This model refines the output, making it sound more human-made and less robotic.</p>

              <p>Accessibility for Musicians:  Prioritizing accessibility, I containerized the model using Docker and deployed it on a secure AWS Docker Web App. The web app itself utilizes a Flask back-end with a user-friendly React based front-end. The application uses rest API for enhanced used experience and also websockets were use to enable real time jamming with AI model</p>

              <p>CI/CD piplines were designed for both backend (GitHub actions) and frontend (AWS code pipline) for fast development and deployment stages.</p>
            </div>
          }
          // image={MUN}
          videoSrc="https://www.youtube.com/embed/f2No-GWe9iE"
          // imageTitle="SmartVR Pointer gif"
          link1="https://github.com/arash-sadeghi/Music-CGAN-app"
          link2="https://arash-sadeghi.github.io/MusicAiPage/"
          buttonText1="GITHUB"
          buttonText2="More Info"
        />

        <Project
          title="SwarmJS: Expanding Control with a Flask Backend"
          icons={swarmJSIcons}
          description={
            <div style={{ lineHeight: "1.2em" }}>
              {/* https://github.com/m-abdulhak/SwarmJS */}
              <p> <a href="https://github.com/m-abdulhak/SwarmJSm">SwarmJS</a>  is a powerful web-based swarm robotics simulator. While it excels in front-end development using JavaScript, it can sometimes limit developers who prefer other languages or libraries.</p>

              <p>To bridge this gap, I designed a collaborative backend using Flask. This backend acts as a bridge, allowing developers to use any programming language to control robots within SwarmJS. Here's how it works:</p>

              <ul>
              <li>The robots' states are collected and sent to the backend via WebSockets.</li>
              <li>The backend receives these states, regardless of the programming language used.</li>
              <li>Developers can implement their robot control logic in any language they choose.</li>
              <li>The backend processes these commands and sends them back to the robots in SwarmJS.</li>
              </ul>

              <p>This innovative approach grants developers the freedom to leverage their preferred tools while still benefiting from SwarmJS's user-friendly interface. This collaboration resulted in a published paper: 
                <br/><br/>
                SwarmJS: Swarm Robotics Simulation on the Web by Abdullhak, M., Vardy, A., & Sadeghi Amjadi, A. (2023) presented at the International Symposium on Multi-Robot and Multi-Agent Systems (MRS).</p>
            </div>
          }
          image={swarmJS}
          imageTitle="SwarmJS Page"
          link1="https://github.com/m-abdulhak/SwarmJS"
          link2=""
          buttonText1="Github Link"
        />

        <Project
          title="Client-friendly Drone Control Interface at GoodAI"
          icons={goodaiWebIcons}
          description={
            <div style={{ lineHeight: "1.2em" }}>

              <p>As a software developer and robotic engineer at <a href="https://www.goodai.com/">GoodAI</a>, I designed a user-friendly web interface for streamlined drone control.</p>

              <p>This project aimed to simplify drone operation for clients. I built both the front-end and back-end components:</p>

              <ul>
                <li>Informative Front-end:  Developed a clear interface to display crucial flight information in real-time, allowing users to monitor drone activity.</li>
                <li>Interactive Back-end:  Implemented the back-end functionality to transmit control commands to the drone and receive data streams.</li>
              </ul>

              <p>By creating this comprehensive web interface, I ensured a user-centric approach to drone control, enhancing accessibility and ease of use for clients.</p>


            </div>
          }
          // image={GoodAI}
          // imageTitle="SmartVR Pointer gif"
          videoSrc='https://www.youtube.com/embed/qwbYcFMOwpI'
          link1="https://www.goodai.com/introducing-goodai-drones-safety-as-a-human-right/"
          link2=""
          buttonText1="Webpage"
          // buttonText2="Project Link"
        />

        <Project
          title="Drone Mission Control & Simulation at GoodAI"
          icons={goodaiDroneIcons}
          description={
            <div style={{ lineHeight: "1.2em" }}>
              <p>During my time as a software developer and robotic engineer at <a href="https://www.goodai.com/">GoodAI</a>, I spearheaded a project to streamline drone mission development and testing.</p>

              <p><strong>Key elements:</strong></p>

              <ul>
                <li><strong>Drone Controller Development:</strong> I designed and implemented controllers to guide drones in accomplishing specific mission objectives. I additionally integrated this controller with drone using SDK.</li>
                <li><strong>ROS-powered Data Flow:</strong> Leveraging the Robot Operating System (ROS), I ensured seamless communication between the drone's sensors and the control algorithms. This allowed for real-time data acquisition and command transmission.</li>
                <li><strong>Unreal Engine Simulation:</strong> To create a realistic testing environment, I utilized Unreal Engine's advanced visual rendering capabilities. This was particularly crucial for tasks like human tracking, where precise simulations are vital.</li>
              </ul>

              <p>By combining these technologies, I facilitated efficient development and testing of drone missions before real-world deployment. This project exemplifies my expertise in software development, robotics engineering, and utilizing ROS and Unreal Engine for effective simulation.</p>
            </div>
          }
          image={DroneGazebo}
          // imageTitle="SmartVR Pointer gif"
          link1="https://drive.google.com/file/d/1LqRMP-BjpmqY21ipx7zK9ywz1MEK-VE_/view"
          link2="https://github.com/arash-sadeghi/GNC_drone"
          buttonText1="Video"
          buttonText2="Github"
        />

        <Project
          title="Visual Navigation of Robots"
          icons={CTU1Icons}
          description={
            <div style={{ lineHeight: "1.2em" }}>
              This project was part of my duties in <a href="https://www.cvut.cz/en">Czech Technical University</a> in Prague where I worked as PhD researcher. The aim of this project was to combine image processing techniques and Convolutional Neural Networks to extract information from robots camera and navigate robot based on that information. This project required heavy utilization of Pytorch and C++ and resulted in this publication:
              <br /><br />
              Rouček, T., Sadeghi Amjadi, A., Rozsypálek, Z., Broughton, G., Blaha, J., Kusumam, K., & Krajník, T. (2022) Self-Supervised Robust Feature Matching Pipeline for Teach and Repeat Navigation. Sensors, 22(8), 2836.
            </div>
          }
          image={CTU}
          // imageTitle="SmartVR Pointer gif"
          link1="https://www.mdpi.com/1424-8220/22/8/2836"
          link2="https://github.com/rouceto1/VTRL"
          buttonText1="Publication"
          buttonText2="Github"
        />

        <Project
          title="Queen Bee Detection & Tracking (PhD Research, CTU Prague)"
          icons={CTU1Icons}
          description={
            <div style={{ lineHeight: "1.2em" }}>

              <p>During my PhD research at the Czech Technical University in Prague (<a href="https://www.cvut.cz/en">CTU Prague</a>), I collaborated with the University of Graz (<a href="https://www.uni-graz.at/en/">University of Graz</a>) on a challenging project: detecting and tracking queen bees.</p>

              <p>The Challenge:  Unlike standard object detection, most bees appear identical.  This project demanded innovative solutions to distinguish the queen bee and track her movement amidst worker bees.</p>

              <p>My Approach:  I leveraged computer vision techniques, including image convolution, to identify the queen bee. A custom C++ tracker followed her movements in real-time. Additionally, the entire system was developed within the ROS framework, ensuring flexibility and future integration with robots.</p>

              <p>This research exemplifies my expertise in computer vision, real-time tracking algorithms, and utilizing ROS for complex robotic systems.</p>

            </div>
          }
          image={Roboroyal}
          // imageTitle="SmartVR Pointer gif"
          link1="https://gitlab.com/arash.sadeghi1997/convolutional_bee_tracker_node/-/tree/master?ref_type=heads"
          link2=""
          buttonText1="Gitlab"
          // buttonText2="Project Link"
        />

        <Project
          title="Swarm Robotics with Reinforcement Learning (MSc Thesis, METU)"
          // icons={p1}
          description={
            <div style={{ lineHeight: "1.2em" }}>

              <p>My MSc thesis in Mechanical Engineering at Middle East Technical University, Ankara, Turkey (<a href="https://www.metu.edu.tr/">METU</a>), explored the exciting intersection of software development and robot engineering.</p>

              <p>This project focused on developing an innovative solution for swarm robot behavior using reinforcement learning (RL). Here's a breakdown of the key steps:</p>

              <ul>
                <li>RL-based Behavior Design: I spearheaded the creation of a novel RL-based algorithm to control the movement and decision-making of robots within the swarm.</li>
                <li>Custom 2D Simulator: To efficiently test and refine the RL algorithm, I developed a custom Python simulator capable of fast 2D simulations.</li>
                <li>Real-world Deployment: Finally, we successfully deployed our RL-based controller onto real robots, leveraging the Robot Operating System (ROS) for seamless communication.</li>
              </ul>

              <p>This project resulted in the following publications:</p>

              <ul>
                <li>Sadeghi Amjadi, A., et al. (2023). Reinforcement learning-based aggregation for robot swarms. Adaptive Behavior, 10597123231202593.</li>
                <li>Sadeghi Amjadi, A. (2021). Landmark-based Aggregation method for Robot Swarms (Master's thesis, Middle East Technical University).</li>
              </ul>

              <p>This research demonstrates my ability to bridge software development and robotics,  contributing to the advancement of swarm intelligence.</p>


            </div>
          }
          // image={METU}
          videoSrc='https://www.youtube.com/embed/FWl9zttqvvE'
          // imageTitle="SmartVR Pointer gif"
          link1="https://youtu.be/loVxa1s61jY"
          link2="https://github.com/arash-sadeghi/RLA"
          buttonText1="Simulator Software Video Link"
          buttonText2="GITHUB"
        />

        <Project
          title="Movie Recommendation System (BSc Project, University of Tabriz)"
          // icons={p1}
          description={
            <div style={{ lineHeight: "1.2em" }}>
              <p>During my undergraduate studies in Electrical Engineering at the University of Tabriz, Iran, I tackled a project in unsupervised machine learning. This project involved developing a movie recommendation system that personalizes suggestions based on a user's past viewing history.</p>

              <p>I explored techniques like Collaborative Filtering to analyze user data and recommend movies with similar characteristics to those the user has already enjoyed. This project honed my skills in data analysis and working with machine learning libraries.</p>

              <p>This project provided valuable hands-on experience in applying machine learning concepts to a real-world scenario - personalizing user experiences through movie recommendations.</p>
            </div>
          }
          // image={honoursGif}
          // imageTitle="SmartVR Pointer gif"
          link1=""
          link2=""
          // buttonText1="Honours Dissertation PDF"
          // buttonText2="Project Link"
        />

        <Project
          title="Multi-agent Robot Platform"
          // icons={p1}
          description={
            <div style={{ lineHeight: "1.2em" }}>

              <p>My BSc thesis in Electrical Engineering at the University of Tabriz, Iran, focused on developing a comprehensive robotic control platform. This project involved two key aspects:</p>

              <ul>
                <li><strong>Custom Robot Development:</strong>  I designed and programmed software for custom robots using the C programming language. These robots were equipped with ATmega32 microcontrollers responsible for sensor processing and generating motor commands.</li>
                <li><strong>Centralized Control System:</strong>  I created a centralized platform using MATLAB on a PC for object detection. This platform then transmitted control commands to the robots via a radio module, enabling coordinated operation.</li>
              </ul>

              <p>This project showcased my ability to:</p>

              <ul>
                <li>Develop low-level control software using C.</li>
                <li>Design and build custom robots with microcontrollers.</li>
                <li>Integrate object detection with robotic control using MATLAB.</li>
                <li>Establish a centralized communication system for a multi-robot system.</li>
              </ul>

              <p>By successfully completing this thesis, I demonstrated strong skills in hardware and software integration for complex robotic systems.</p>

            </div>
          }
          image={BSc}
          // imageTitle="SmartVR Pointer gif"
          link1="https://drive.google.com/file/d/13nCrRGSRfLhtQ755hfbioehPDHSVg1GW/view?usp=sharing"
          link2=""
          buttonText1="video Link"
          // buttonText2="Project Link"
        />
      </Box>
    </section>
  );
};

export default ProjectsPage;
