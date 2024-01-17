// Home.js
import React from 'react';
import styled from 'styled-components';
import FeaturedSolution from '../components/FeaturedSolution';
import BlogPost from '../components/BlogPost';
import Testimonial from '../components/Testimonial';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  background-color: #007bff;
  color: white;
  padding: 100px 20px;
  text-align: center;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
    margin-top: 20px;
  }

  button {
    background-color: #fff;
    color: #007bff;
    padding: 10px 20px;
    font-size: 1.2rem;
    border: 2px solid #007bff;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
`;

const FeaturedSolutionsSection = styled.section`
  background-color: #f0f0f0;
  padding: 40px 20px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
  }

  .solutions-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 30px;
  }
`;

const BlogSection = styled.section`
  padding: 40px 20px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
  }

  .blog-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 30px;
  }
`;

const TestimonialsSection = styled.section`
  background-color: #f0f0f0;
  padding: 40px 20px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
  }

  .testimonials-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 30px;
  }
`;

const CtaSection = styled.section`
  padding: 40px 20px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-top: 20px;
  }

  button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
`;

const heroCtaHandler = () => {
  // Add logic for the button click (e.g., redirect to services page)
  console.log('Button clicked! Implement your logic here.');
};

const solutionsData = [
  {
    id: 1,
    title: 'Cloud Integration',
    description: 'Seamlessly integrate cloud solutions for improved scalability and flexibility.',

  },
  // Add more technology solutions
];

const blogPostsData = [
  {
    id: 1,
    title: 'Embracing Microservices Architecture',
    excerpt: 'Explore the benefits and challenges of adopting microservices architecture in modern applications.',
    date: '2024-01-17',
  },
  // Add more blog posts
];

const testimonialsData = [
  {
    id: 1,
    text: 'BuildMe transformed our business with their cutting-edge solutions. Highly recommended!',
    author: 'Wayne Osei Agyemang',
    position: 'CEO, Clad by Wayne',
  },
  // Add more testimonials
];

const Home = () => {
  return (
    <div>
      <HeroSection>
        <h1>Welcome to BuildMe</h1>
        <p>Empowering your business with innovative technology solutions.</p>
        <Link to="/services">
          <button onClick={heroCtaHandler}>Explore Our Services</button>
        </Link>
      </HeroSection>
      <FeaturedSolutionsSection>
        <h2>Featured Solutions</h2>
        <div className="solutions-container">
          {solutionsData.map((solution) => (
            <FeaturedSolution key={solution.id} {...solution} />
          ))}
        </div>
      </FeaturedSolutionsSection>
      <BlogSection>
        <h2>Latest Blog Posts</h2>
        <div className="blog-container">
          {blogPostsData.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
      </BlogSection>
      <TestimonialsSection>
        <h2>What Our Clients Say</h2>
        <div className="testimonials-container">
          {testimonialsData.map((testimonial) => (
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </TestimonialsSection>
      <CtaSection>
        <h2>Ready to Transform Your Business?</h2>
        <p>Contact us today and let's discuss how buildme can drive your success.</p>
        <Link to="/contact">
          <button onClick={heroCtaHandler}>Get in Touch</button>
        </Link>
      </CtaSection>
    </div>
  );
};

export default Home;