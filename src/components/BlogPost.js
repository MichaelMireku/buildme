import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  margin-bottom: 20px;
  max-width: 300px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const PostContent = styled.div`
  padding: 15px;
`;

const PostTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 10px;
`;

const PostExcerpt = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 5px;
`;

const PostDate = styled.span`
  font-size: 0.8rem;
  color: #888;
  display: block;
  margin-top: 5px;
`;

const BlogPost = ({ title, excerpt, date }) => {
  return (
    <PostContainer>
      <PostContent>
        <PostTitle>{title}</PostTitle>
        <PostExcerpt>{excerpt}</PostExcerpt>
        <PostDate>{date}</PostDate>
      </PostContent>
    </PostContainer>
  );
};

export default BlogPost;