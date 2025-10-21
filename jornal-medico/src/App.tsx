import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ExpertInfo from './components/ExpertInfo';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const NewspaperContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
  padding: 15px;
  background-color: #fafafa;
  min-height: 100vh;
  font-family: 'Times New Roman', serif;
`;

const MainColumn = styled.div`
  flex: 1;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
`;

const SidebarColumn = styled.div`
  width: 280px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  border-radius: 4px;
  padding: 20px;
  height: fit-content;
  position: sticky;
  top: 15px;
  border: 1px solid #e0e0e0;
`;

const App: React.FC = () => {
  return (
    <NewspaperContainer>
      <MainColumn>
        <Header />
        <ExpertInfo />
        <MainContent />
        <Footer />
      </MainColumn>
      
      <SidebarColumn>
        <Sidebar />
      </SidebarColumn>
    </NewspaperContainer>
  );
};

export default App;