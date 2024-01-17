// Services.js
import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
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

  .services-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  .service-card {
    max-width: 300px;
    padding: 20px;
    margin: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    h3 {
      font-size: 1.8rem;
      color: #333;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2rem;
      color: #555;
    }
  }
`;

const servicesData = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Crafting modern and responsive web applications tailored to your needs.',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Building cross-platform mobile apps for iOS and Android devices.',
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description: 'Utilizing cloud technologies for scalable and flexible business solutions.',
  },
  {
    id: 4,
    title: 'Backend Development',
    description: 'Designing and implementing APIs for seamless communication between different software components.',
  },
  {
    id: 5,
    title: 'Microservices Architecture',
    description: 'Developing and implementing microservices-based architectures for modular and scalable applications.',
  },
   
  {
    id: 6,
    title: 'Security Solutions',
    description: 'Providing ongoing maintenance and support services for deployed applications.',
  },
  {
    id: 7,
    title: 'Maintenance and Support',
    description: 'Providing ongoing maintenance and support services for deployed applications.',
  },

  // Add more services
];

const Services = () => {
  return (
    <ServicesSection>
      <h2>Our Services</h2>
      <p>Explore the wide range of services we offer to elevate your business.</p>
      <div className="services-container">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </ServicesSection>
  );
};

export default Services;
