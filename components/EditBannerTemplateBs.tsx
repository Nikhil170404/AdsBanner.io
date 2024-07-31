import { useState } from 'react';
import styled from 'styled-components';

interface EditBannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  onSave: (title: string, description: string, cta: string, image: string) => void;
  onClose: () => void;
}

const BottomSheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px; /* Smaller max-width */
  background: #fff;
  box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.1);
  padding: 16px; /* Reduced padding */
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  z-index: 1000;
  overflow-y: auto;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 90%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px; /* Adjusted padding */
  margin: 8px 0; /* Reduced margin */
  border: 1px solid #ddd;
  border-radius: 6px; /* Slightly smaller border-radius */
  box-sizing: border-box;
  color: #333;
  font-size: 0.875rem; /* Slightly smaller font size */
`;

const SaveButton = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  padding: 10px 20px; /* Reduced padding */
  border-radius: 6px; /* Slightly smaller border-radius */
  cursor: pointer;
  font-weight: bold;
  font-size: 0.875rem; /* Slightly smaller font size */
  transition: background-color 0.3s ease;
  margin-top: 16px; /* Reduced margin-top */

  &:hover {
    background-color: #005bb5;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #0070f3;
  font-size: 24px; /* Adjusted font size */
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  transition: color 0.3s ease;
  z-index: 1001; /* Ensure it's above other elements */

  &:hover {
    color: #005bb5;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.75rem; /* Slightly smaller font size */
  margin-top: 8px; /* Reduced margin-top */
`;

const ImagePreview = styled.div`
  margin: 10px 0;
  text-align: center;

  img {
    max-width: 100%;
    max-height: 150px; /* Reduced max-height */
    object-fit: cover;
    border-radius: 6px; /* Slightly smaller border-radius */
  }
`;

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ title: initialTitle, description: initialDescription, cta: initialCta, image: initialImage, onSave, onClose }) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [cta, setCta] = useState(initialCta);
  const [image, setImage] = useState(initialImage);
  const [error, setError] = useState<string | null>(null);

  const handleSave = () => {
    if (!title || !description || !cta || !image) {
      setError('All fields are required');
      return;
    }

    if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(image)) {
      setError('Invalid image URL');
      return;
    }

    onSave(title, description, cta, image);
    onClose();
  };

  return (
    <BottomSheet>
      <CloseButton onClick={onClose} aria-label="Close Edit">✖</CloseButton>
      <h2>Edit Banner</h2>
      <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <Input placeholder="CTA" value={cta} onChange={(e) => setCta(e.target.value)} />
      <Input placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
      {image && <ImagePreview><img src={image} alt="Preview" /></ImagePreview>}
      {error && <ErrorText>{error}</ErrorText>}
      <SaveButton onClick={handleSave}>Save Changes</SaveButton>
    </BottomSheet>
  );
};

export default EditBannerTemplateBs;
