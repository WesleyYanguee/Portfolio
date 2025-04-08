import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem 2rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const Projects = () => {
  const projects = [
    {
      title: "WokStar Express",
      description: "Web Design & Development",
      image: "/images/WokStar.png"
    },
    {
      title: "Chow Mein Man",
      description: "Web Design & Development",
      image: "/images/ChowMeinMan.png"
    },
    {
      title: "The Lost Aussie",
      description: "Web Design & Development",
      image: "/images/TheLostAussie.png"
    }
  ];

  return (
    <ProjectsContainer>
      <h1>My Projects</h1>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;