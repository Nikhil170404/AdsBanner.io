// BannerList.tsx
import { useState } from 'react';
import BannerImageComp from './BannerImageComp';
import EditBannerTemplateBs from './EditBannerTemplateBs';
import styled from 'styled-components';

interface Banner {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
}

const initialBanners: Banner[] = [
    { id: 1, title: 'Banner 1', description: 'Description 1', cta: 'Click Here', image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png' },
    { id: 2, title: 'Banner 2', description: 'Description 2', cta: 'Learn More', image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/2/square.png' },
    { id: 3, title: 'Banner 3', description: 'Description 3', cta: 'Click Here', image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/3/square.png' },
    { id: 4, title: 'Banner 4', description: 'Description 4', cta: 'Learn More', image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/4/square.png' },
    { id: 5, title: 'Banner 5', description: 'Description 5', cta: 'Click Here', image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png' },
    { id: 6, title: 'Banner 6', description: 'Description 6', cta: 'Learn More', image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/6/square.png' },
    { id: 7, title: 'Banner 7', description: 'Description 7', cta: 'Learn More', image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/7/square.png' },
    { id: 8, title: 'Banner 8', description: 'Description 8', cta: 'Learn More', image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/8/square.png' },
    { id: 9, title: 'Banner 9', description: 'Description 9', cta: 'Click Here', image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/9/square.png' },
    { id: 10, title: 'Banner 10', description: 'Description 10', cta: 'Learn More', image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/10/square.png' },
    // Add more sample banners if needed
];

const BannerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const BannerList = () => {
  const [banners, setBanners] = useState<Banner[]>(initialBanners);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);

  const handleEdit = (banner: Banner) => {
    setEditingBanner(banner);
  };

  const handleSave = (id: number, title: string, description: string, cta: string, image: string) => {
    setBanners(banners.map(banner => banner.id === id ? { ...banner, title, description, cta, image } : banner));
    setEditingBanner(null);
  };

  return (
    <div>
      <BannerGrid>
        {banners.map(banner => (
          <BannerImageComp
            key={banner.id}
            title={banner.title}
            description={banner.description}
            cta={banner.cta}
            image={banner.image}
            onEdit={() => handleEdit(banner)}
          />
        ))}
      </BannerGrid>
      {editingBanner && (
        <EditBannerTemplateBs
          title={editingBanner.title}
          description={editingBanner.description}
          cta={editingBanner.cta}
          image={editingBanner.image}
          onSave={(title, description, cta, image) => handleSave(editingBanner.id, title, description, cta, image)}
          onClose={() => setEditingBanner(null)}
        />
      )}
    </div>
  );
};

export default BannerList;
