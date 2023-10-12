import React from "react";
import PortfolioProject from "./PortfolioProject";
import portfolioData from "../data/portfolioData";
function PortfolioProjects() {
  return (
    <section className="py-12 flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioData.map((project) => (
          <PortfolioProject
            key={portfolioData.indexOf(project)}
            title={project.title}
            img={project.img}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default PortfolioProjects;
