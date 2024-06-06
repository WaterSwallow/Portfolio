import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import bcgame from "../../Assets/Projects/bcgame.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/PachecoCole/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/PachecoCole/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/PachecoCole/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Three.js Material"
              description="The Texture Projection Material in Three.js seamlessly maps textures onto 3D models, enhancing realism and visual fidelity. This feature showcases the potential for creating immersive virtual environments with Three.js."
              ghLink="https://github.com/PachecoCole/ThreeJS-Ptojects"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Crash"
              description="Experience the thrill of betting on your favorite games with our dynamic platform. Enjoy real-time updates, diverse betting options, and secure transactions. Join us for exciting gameplay and the chance to win big today!"
              // ghLink="#"
              demoLink="http://162.255.116.172:5000/app/games/crash"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="reece"
              description="Welcome to our innovative project, where you can effortlessly design your dream room layout from a simple 2D floor plan and explore it in stunning 3D detail. With our intuitive platform, you have the freedom to unleash your creativity and visualize your space like never before. Join us and bring your vision to life today."
              // ghLink=""
              demoLink="https://imagin3d.reece.com.au/3d-planner?no-redirect="
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bcgame}
              isBlog={false}
              title="Home of Blockchain games"
              description="Step into the world of blockchain with our uniquely entertaining project! Discover a blend of innovation and amusement as we redefine what it means to engage with cryptocurrency. Join our vibrant community and embark on a journey filled with laughter, excitement, and endless possibilities."
              // ghLink=""
              demoLink="https://spintop.network/gamepedia"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
