import "./Projects.css";
import ProjectImg1 from "../../assets/Project1.png";
import ProjectImg2 from "../../assets/Project2.jpg";
import ProjectImg3 from "../../assets/Project3.jpeg";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import { useState } from "react";

export default function Projects() {
  const [project, setProject] = useState(0);

  return (
    <div className="Projects">
      <span className="subtitle">OUR PROJECTS</span>
      <span className="title">WHY WE ARE BEST</span>

      <div className="project-container">
        {project === 0 && <img src={ProjectImg1} alt="project" />}
        {project === 1 && <img src={ProjectImg2} alt="project" />}
        {project === 2 && <img src={ProjectImg3} alt="project" />}

        <div className="project-details">
          <ProjectDetail
            project={project}
            setProject={setProject}
            index={0}
            title="Genderless Kei – Japan’s Hot"
            desc="Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of"
          />

          <ProjectDetail
            project={project}
            setProject={setProject}
            index={1}
            title="Better Strategy & Quality"
            desc="Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of"
          />

          <ProjectDetail
            project={project}
            setProject={setProject}
            index={2}
            title="Genderless Kei – Japan’s Hot"
            desc="Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of"
          />
        </div>
      </div>
    </div>
  );
}
