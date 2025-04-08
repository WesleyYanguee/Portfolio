import React from 'react';
import styled from 'styled-components';
import ImageSlider from '../components/ImageSlider';

const HomeContainer = styled.div`
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem 2rem;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ExperienceContainer = styled.div`
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const SliderContainer = styled.div`
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ExperienceItem = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ExperienceTitle = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
`;

const ExperienceDate = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ExperienceDescription = styled.p`
  color: #444;
  line-height: 1.6;
`;

// Remove unused styled components
const Home = () => {
  const experiences = [
    {
      title: "International Trading (Thailand)",
      date: "2023 - Present",
      description: "Working on various digital design projects and web development."
    },
    {
      title: "BFI Education Services",
      date: "2019 - 2023",
      description: "Performed various tasks such as web development, graphic design, and video editing."
    }
  ];

  const images = [
    "/images/WokStar.png",
    "/images/ChowMeinMan.png",
    "/images/CharliesBurgerPizza.png",
    "/images/TheLostAussie.png",
    "/images/NoodleManiaExpress.png"
  ];

  return (
    <HomeContainer>
      <Hero>
        <Title>Welcome to My Portfolio</Title>
        <Subtitle>
          I'm currently studying at Digital Innovation Technology department from Rangsit University., Thailand. 
          Passionate about Digital Design and animation, have used my time to bring visually aesthetic, responsive, 
          and accessible creations to my community. If you need to discuss with me any kind of suggestions or 
          information, please knock me anytime. I am eager to speak with new people and greatly appreciate your 
          consideration to reach out to me.
        </Subtitle>
      </Hero>
      <ContentWrapper>
        <ExperienceContainer>
          <h2>Experience</h2>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index}>
              <ExperienceTitle>{exp.title}</ExperienceTitle>
              <ExperienceDate>{exp.date}</ExperienceDate>
              <ExperienceDescription>{exp.description}</ExperienceDescription>
            </ExperienceItem>
          ))}
        </ExperienceContainer>
        <SliderContainer>
          <ImageSlider images={images} />
        </SliderContainer>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;