import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

// Initialize EmailJS
emailjs.init("weZnuo9_VQrwuhDQi");

const ContactContainer = styled.div`
  padding-top: 80px;
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 2rem 2rem;
`;

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.send(
      'service_mp69f1h',
      'template_t5m316a',
      {
        subject: `Contact Form Message from ${formData.name}`,
        from_name: formData.name,
        message: formData.message,
        reply_to: formData.email
      },
      'weZnuo9_VQrwuhDQi'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.log('FAILED...', error.text);
      setStatus('Failed to send message. Please try again.');
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactContainer>
      <h1>Contact Me</h1>
      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Message</Label>
          <TextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit">Send Message</Button>
        {status && <p style={{ marginTop: '1rem', color: status.includes('Failed') ? 'red' : 'green' }}>{status}</p>}
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;