import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface EditBannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  fontColor: string;
  onSave: (title: string, description: string, cta: string, image: string, fontColor: string) => void;
  onClose: () => void;
}

const BottomSheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px;
  max-height: 80vh; /* Adjust height to make it smaller */
  background: #fff;
  box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.1);
  padding: 16px;
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
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;
  color: #333;
  font-size: 0.875rem;
`;

const SaveButton = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.875rem;
  transition: background-color 0.3s ease;
  margin-top: 16px;

  &:hover {
    background-color: #005bb5;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #0070f3;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  transition: color 0.3s ease;
  z-index: 1001;

  &:hover {
    color: #005bb5;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.75rem;
  margin-top: 8px;
`;

const ImagePreview = styled.div`
  margin: 10px 0;
  text-align: center;
`;

const ColorPickerWrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;
  background-color: transparent;
`;

const ColorPickerLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  margin-bottom: 4px;
`;

const ColorPickerInput = styled.input<{ value: string }>`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  appearance: none;
  background-color: ${({ value }) => value};
`;

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({
  title: initialTitle,
  description: initialDescription,
  cta: initialCta,
  image: initialImage,
  fontColor: initialFontColor,
  onSave,
  onClose
}) => {
  const [title, setTitle] = React.useState(initialTitle);
  const [description, setDescription] = React.useState(initialDescription);
  const [cta, setCta] = React.useState(initialCta);
  const [image, setImage] = React.useState(initialImage);
  const [fontColor, setFontColor] = React.useState(initialFontColor);
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const handleSave = () => {
    const newErrors: { [key: string]: string } = {};

    if (!title) newErrors.title = 'Title is required';
    if (!description) newErrors.description = 'Description is required';
    if (!cta) newErrors.cta = 'CTA is required';
    if (!image) newErrors.image = 'Image URL is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSave(title, description, cta, image, fontColor);
    }
  };

  return (
    <BottomSheet>
      <CloseButton onClick={onClose} aria-label="Close Edit Banner">×</CloseButton>
      <h2>Edit Banner</h2>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      {errors.title && <ErrorText>{errors.title}</ErrorText>}
      
      <Input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      {errors.description && <ErrorText>{errors.description}</ErrorText>}
      
      <Input
        type="text"
        value={cta}
        onChange={(e) => setCta(e.target.value)}
        placeholder="CTA"
      />
      {errors.cta && <ErrorText>{errors.cta}</ErrorText>}
      
      <Input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />
      {errors.image && <ErrorText>{errors.image}</ErrorText>}
      
      <ColorPickerWrapper>
        <ColorPickerLabel>Font Color</ColorPickerLabel>
        <ColorPickerInput
          type="color"
          value={fontColor}
          onChange={(e) => setFontColor(e.target.value)}
        />
      </ColorPickerWrapper>
      
      <ImagePreview>
        {image && <Image src={image} alt="Banner" width={200} height={100} />}
      </ImagePreview>
      
      <SaveButton onClick={handleSave}>Save</SaveButton>
    </BottomSheet>
  );
};

export default EditBannerTemplateBs;
