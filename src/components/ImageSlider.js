import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
`;

const Slide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  z-index: 2;
  
  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
  
  &.prev {
    left: 1rem;
  }
  
  &.next {
    right: 1rem;
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
`;

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(current => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrent(current => (current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent(current => (current - 1 + images.length) % images.length);
  };

  return (
    <SliderContainer>
      {images.map((src, index) => (
        <Slide
          key={index}
          src={src}
          active={index === current}
          alt={`Slide ${index + 1}`}
        />
      ))}
      <SliderButton className="prev" onClick={prevSlide}>❮</SliderButton>
      <SliderButton className="next" onClick={nextSlide}>❯</SliderButton>
      <Dots>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === current}
            onClick={() => setCurrent(index)}
          />
        ))}
      </Dots>
    </SliderContainer>
  );
};

export default ImageSlider;