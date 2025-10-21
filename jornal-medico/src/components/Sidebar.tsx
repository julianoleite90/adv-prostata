import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SidebarSection = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #e2e8f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h3`
  color: #2c5282;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid #2c5282;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  font-family: 'Times New Roman', serif;
`;

const RecentPost = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: #f7fafc;
  }
`;

const PostImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  background: #e2e8f0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #718096;
  font-size: 0.8rem;
`;

const PostContent = styled.div`
  flex: 1;
`;

const PostTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 8px;
  line-height: 1.3;
  color: #2c5282;
  font-weight: 600;
`;

const PostDate = styled.p`
  font-size: 0.85rem;
  color: #718096;
  margin: 0;
`;

const AdBanner = styled.div`
  background: linear-gradient(135deg, #f7fafc, #edf2f7);
  border: 2px dashed #cbd5e0;
  padding: 25px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const AdTitle = styled.h4`
  color: #4a5568;
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: bold;
`;

const AdText = styled.p`
  color: #718096;
  font-size: 0.9rem;
  margin: 5px 0;
`;

const NewsletterSignup = styled.div`
  background: linear-gradient(135deg, #2c5282, #2a4365);
  color: white;
  padding: 25px;
  border-radius: 8px;
  text-align: center;
`;

const NewsletterTitle = styled.h4`
  margin-bottom: 15px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const NewsletterText = styled.p`
  font-size: 0.95rem;
  margin-bottom: 20px;
  opacity: 0.9;
  line-height: 1.5;
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const NewsletterInput = styled.input`
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  background: white;
  color: #2d3748;
  
  &::placeholder {
    color: #a0aec0;
  }
`;

const NewsletterButton = styled.button`
  background: #38a169;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.95rem;
  
  &:hover {
    background: #2f855a;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  background: #2c5282;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  
  &:hover {
    background: #2a4365;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(44, 82, 130, 0.3);
  }
`;

const CategoriesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 10px;
`;

const CategoryLink = styled.a`
  color: #2c5282;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  display: block;
  padding: 8px 0;
  border-bottom: 1px solid transparent;
  
  &:hover {
    color: #2a4365;
    border-bottom-color: #2a4365;
  }
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      {/* Posts Recentes */}
      <SidebarSection>
        <SectionTitle>📰 Artigos Recentes</SectionTitle>
        <RecentPost>
          <PostImage>IMG</PostImage>
          <PostContent>
            <PostTitle>Como Identificar Problemas de Próstata</PostTitle>
            <PostDate>Há 2 dias</PostDate>
          </PostContent>
        </RecentPost>
        
        <RecentPost>
          <PostImage>IMG</PostImage>
          <PostContent>
            <PostTitle>Tratamentos Naturais vs Medicamentos</PostTitle>
            <PostDate>Há 5 dias</PostDate>
          </PostContent>
        </RecentPost>
        
        <RecentPost>
          <PostImage>IMG</PostImage>
          <PostContent>
            <PostTitle>Exercícios para Saúde Prostática</PostTitle>
            <PostDate>Há 1 semana</PostDate>
          </PostContent>
        </RecentPost>
      </SidebarSection>
      
      {/* Anúncio Principal */}
      <SidebarSection>
        <AdBanner>
          <AdTitle>🎯 ESPAÇO PUBLICITÁRIO</AdTitle>
          <AdText>Seu anúncio aqui</AdText>
          <AdText>Contato: anuncios@jornamedico.com.br</AdText>
        </AdBanner>
      </SidebarSection>
      
      {/* Newsletter */}
      <SidebarSection>
        <NewsletterSignup>
          <NewsletterTitle>📧 Newsletter Médica</NewsletterTitle>
          <NewsletterText>
            Receba as últimas descobertas e pesquisas médicas diretamente no seu e-mail
          </NewsletterText>
          <NewsletterForm>
            <NewsletterInput 
              type="email" 
              placeholder="Seu e-mail profissional" 
              required 
            />
            <NewsletterButton type="submit">
              Inscrever-se
            </NewsletterButton>
          </NewsletterForm>
        </NewsletterSignup>
      </SidebarSection>
      
      {/* Categorias */}
      <SidebarSection>
        <SectionTitle>📂 Especialidades</SectionTitle>
        <CategoriesList>
          <CategoryItem><CategoryLink href="#">Urologia</CategoryLink></CategoryItem>
          <CategoryItem><CategoryLink href="#">Tratamentos Naturais</CategoryLink></CategoryItem>
          <CategoryItem><CategoryLink href="#">Medicamentos</CategoryLink></CategoryItem>
          <CategoryItem><CategoryLink href="#">Exercícios Terapêuticos</CategoryLink></CategoryItem>
          <CategoryItem><CategoryLink href="#">Nutrição Médica</CategoryLink></CategoryItem>
          <CategoryItem><CategoryLink href="#">Prevenção</CategoryLink></CategoryItem>
          <CategoryItem><CategoryLink href="#">Diagnóstico</CategoryLink></CategoryItem>
        </CategoriesList>
      </SidebarSection>
      
      {/* Redes Sociais */}
      <SidebarSection>
        <SectionTitle>🌐 Siga-nos</SectionTitle>
        <SocialLinks>
          <SocialLink href="#" title="Facebook">📘</SocialLink>
          <SocialLink href="#" title="Instagram">📷</SocialLink>
          <SocialLink href="#" title="Twitter">🐦</SocialLink>
          <SocialLink href="#" title="YouTube">📺</SocialLink>
          <SocialLink href="#" title="LinkedIn">💼</SocialLink>
        </SocialLinks>
      </SidebarSection>
    </SidebarContainer>
  );
};

export default Sidebar;