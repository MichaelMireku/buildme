import React from 'react';
import styled from 'styled-components';

const TestimonialContainer = styled.div`
  margin-bottom: 20px;
  max-width: 400px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const TestimonialContent = styled.div`
  padding: 15px;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
`;

const TestimonialAuthor = styled.div`
  font-weight: bold;
  margin-top: 10px;
`;

const TestimonialPosition = styled.div`
  color: #888;
  font-size: 0.9rem;
`;

const Testimonial = ({ text, author, position }) => {
  return (
    <TestimonialContainer>
      <TestimonialContent>
        <TestimonialText>{text}</TestimonialText>
        <TestimonialAuthor>{author}</TestimonialAuthor>
        <TestimonialPosition>{position}</TestimonialPosition>
      </TestimonialContent>
    </TestimonialContainer>
  );
};

export default Testimonial;