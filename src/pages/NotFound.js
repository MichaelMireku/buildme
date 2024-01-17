// NotFound.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundSection = styled.section`
  padding: 40px 20px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #007bff;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-top: 20px;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
  }

  a {
    color: #007bff;
    text-decoration: underline;
    font-weight: bold;
  }
`;

const NotFound = () => {
  return (
    <NotFoundSection>
      <h2>Page Not Found</h2>
      <p>Oops! It seems like you've reached a page that doesn't exist.</p>
      <img src="path_to_image_not_found.jpg" alt="404 Error" />
      <p>
        Go back to <Link to="/">home</Link> or check our <Link to="/services">services</Link>.
      </p>
    </NotFoundSection>
  );
};

export default NotFound;
