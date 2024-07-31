"use client";
import styled from 'styled-components';
import React from 'react';

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  onEdit: () => void;
}

interface BannerContainerProps {
  image: string;
}

const BannerContainer = styled.div<BannerContainerProps>`
  background: url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  border-radius: 12px;
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  position: relative;
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const EditIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  color: #0070f3;
  transition: color 0.3s ease;
  
  &:hover {
    color: #005bb5;
  }
`;

const CTAButton = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #005bb5;
  }
`;

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, image, onEdit }) => (
  <BannerContainer image={image}>
    <EditIcon onClick={onEdit} aria-label="Edit Banner">✏️</EditIcon>
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <CTAButton>{cta}</CTAButton>
  </BannerContainer>
);

export default BannerImageComp;
