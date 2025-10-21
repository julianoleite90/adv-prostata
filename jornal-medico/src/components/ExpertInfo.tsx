import React from 'react';
import styled from 'styled-components';
import especialistaImage from '../assets/especialista1.png';

const ExpertContainer = styled.div`
  background: #f8f9fa;
  padding: 25px 30px;
  border-left: 4px solid #2c5282;
  margin: 20px 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
`;

const ExpertImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #2c5282;
  flex-shrink: 0;
`;

const ExpertText = styled.div`
  flex: 1;
`;

const ExpertName = styled.h3`
  color: #2c5282;
  margin-bottom: 15px;
  font-size: 1.4rem;
  font-weight: bold;
`;

const ExpertTitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #4a5568;
  font-weight: 600;
`;

const ExpertQuote = styled.blockquote`
  font-style: italic;
  font-size: 1.1rem;
  color: #2d3748;
  margin: 15px 0;
  padding-left: 20px;
  border-left: 3px solid #2c5282;
  line-height: 1.6;
`;

const ExpertCredentials = styled.div`
  font-size: 0.95rem;
  color: #718096;
  margin-top: 10px;
`;

const ExpertInfo: React.FC = () => {
  return (
    <ExpertContainer>
      <ExpertImage 
        src={especialistaImage} 
        alt="Dr. Carlos Eduardo Mendes"
      />
      <ExpertText>
        <ExpertName>Dr. Carlos Eduardo Mendes</ExpertName>
        <ExpertTitle>Especialista em Saúde Prostática</ExpertTitle>
        <ExpertCredentials>
          Membro da Sociedade Brasileira de Urologia<br/>
          CRM 123.456 | 20+ anos de experiência
        </ExpertCredentials>
        <ExpertQuote>
          "Após 6 meses de pesquisa intensiva, analisei mais de 200 tratamentos para próstata. 
          Encontrei apenas 3 que realmente funcionam e são seguros para os pacientes."
        </ExpertQuote>
      </ExpertText>
    </ExpertContainer>
  );
};

export default ExpertInfo;