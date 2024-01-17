// FeaturedSolution.js
import React from 'react';
import styled from 'styled-components';

const SolutionContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
  max-width: 300px;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #007bff;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

const FeaturedSolution = ({ title, description }) => {
  return (
    <SolutionContainer>     
      <h3>{title}</h3>
      <p>{description}</p>
    </SolutionContainer>
  );
};

export default FeaturedSolution;
