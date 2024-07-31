"use client";
import BannerList from '../components/BannerList';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Home = () => {
  return (
    <PageContainer>
      <h1>Home</h1>
      <BannerList />
    </PageContainer>
  );
};

export default Home;
