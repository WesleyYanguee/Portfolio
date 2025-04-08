import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  margin-top: 4rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  max-width: 1200px;
  margin: 4rem auto 2rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const IconLink = styled.a`
  color: #333;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <IconLink href="tel:+66991946348" title="Phone">
          <FaPhone />
        </IconLink>
        <IconLink href="mailto:yanpaing.o66@rsu.ac.th" title="Email">
          <FaEnvelope />
        </IconLink>
        <IconLink href="https://www.facebook.com/yan.paing.oo.web.dev" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FaFacebook />
        </IconLink>
        <IconLink href="https://www.instagram.com/yanpaioowd" target="_blank" rel="noopener noreferrer" title="Instagram">
          <FaInstagram />
        </IconLink>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;