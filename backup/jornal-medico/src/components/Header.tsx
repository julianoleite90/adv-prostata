import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: #2c5282;
  color: white;
  padding: 30px 25px;
  text-align: center;
  border-bottom: 2px solid #1a365d;
`;

const NewspaperTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 8px;
  letter-spacing: 1px;
  font-family: 'Times New Roman', serif;
  text-transform: uppercase;
`;

const Subtitle = styled.div`
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 12px;
  font-style: italic;
`;

const DateInfo = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
  border-top: 1px solid rgba(255,255,255,0.3);
  padding-top: 12px;
  margin-top: 12px;
`;

const VolumeInfo = styled.div`
  position: absolute;
  top: 15px;
  right: 25px;
  font-size: 0.8rem;
  opacity: 0.8;
  text-align: right;
`;

const Header: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <HeaderContainer>
      <VolumeInfo>
        <div>Vol. 47, No. 12</div>
        <div>ISSN: 1234-5678</div>
      </VolumeInfo>
      
      <NewspaperTitle>JORNAL MÉDICO BRASILEIRO</NewspaperTitle>
      <Subtitle>Pesquisa Exclusiva - Edição Especial 2024</Subtitle>
      <DateInfo>
        {currentDate} | Circulação Nacional | R$ 8,50
      </DateInfo>
    </HeaderContainer>
  );
};

export default Header;