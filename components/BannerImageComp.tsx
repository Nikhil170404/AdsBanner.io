// components/BannerImageComp.tsx
import styled from 'styled-components';

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  onEdit: () => void;
}

const BannerContainer = styled.div`
  background: url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  border-radius: 8px;
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  position: relative;
  margin-bottom: 20px;
`;

const EditIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
`;

const CTAButton = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #005bb5;
  }
`;

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, image, onEdit }) => (
  <BannerContainer image={image}>
    <EditIcon onClick={onEdit}>✏️</EditIcon>
    <h2>{title}</h2>
    <p>{description}</p>
    <CTAButton>{cta}</CTAButton>
  </BannerContainer>
);

export default BannerImageComp;
