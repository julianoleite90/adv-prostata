import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background: #2d3748;
  color: white;
  padding: 25px 30px;
  text-align: center;
  font-size: 0.9rem;
  border-top: 2px solid #4a5568;
`;

const FooterTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #e2e8f0;
`;

const FooterInfo = styled.p`
  margin: 8px 0;
  color: #a0aec0;
  line-height: 1.5;
`;

const FooterDisclaimer = styled.p`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #4a5568;
  font-size: 0.9rem;
  color: #cbd5e0;
  font-style: italic;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  flex-wrap: wrap;
  gap: 20px;
`;

const ContactItem = styled.div`
  text-align: center;
  
  strong {
    color: #e2e8f0;
    display: block;
    margin-bottom: 5px;
  }
  
  span {
    color: #a0aec0;
    font-size: 0.9rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterTitle>JORNAL MÉDICO BRASILEIRO</FooterTitle>
      
      <FooterInfo>
        <strong>Dr. Carlos Eduardo Mendes - Urologista</strong><br/>
        CRM 123.456 | Membro da Sociedade Brasileira de Urologia
      </FooterInfo>
      
      <ContactInfo>
        <ContactItem>
          <strong>Editora</strong>
          <span>MedPress Editora Ltda</span>
        </ContactItem>
        
        <ContactItem>
          <strong>Redação</strong>
          <span>redacao@jornamedico.com.br</span>
        </ContactItem>
        
        <ContactItem>
          <strong>Publicidade</strong>
          <span>publicidade@jornamedico.com.br</span>
        </ContactItem>
        
        <ContactItem>
          <strong>Assinaturas</strong>
          <span>(11) 3000-0000</span>
        </ContactItem>
      </ContactInfo>
      
      <FooterInfo>
        ISSN: 1234-5678 | CNPJ: 12.345.678/0001-90<br/>
        Rua das Flores, 123 - Centro - São Paulo/SP - CEP: 01234-567
      </FooterInfo>
      
      <FooterDisclaimer>
        Este advertorial é pago e não representa necessariamente a opinião editorial do jornal. 
        As informações contidas neste artigo são de caráter informativo e não substituem a consulta médica.
      </FooterDisclaimer>
    </FooterContainer>
  );
};

export default Footer;