import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  padding: 30px 40px;
`;

const IntroSection = styled.div`
  font-size: 1.1rem;
  margin-bottom: 30px;
  text-align: justify;
  line-height: 1.7;
  color: #2d3748;
`;

const IntroParagraph = styled.p`
  margin-bottom: 15px;
  text-indent: 2rem;
`;

const HighlightText = styled.strong`
  color: #2c5282;
  font-weight: bold;
`;

const RankingSection = styled.div`
  background: #f8f9fa;
  padding: 25px 30px;
  margin: 25px 0;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

const RankingTitle = styled.h2`
  color: #2c5282;
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  padding-bottom: 12px;
  border-bottom: 2px solid #2c5282;
`;

const ProductCard = styled.div<{ rank: number }>`
  background: white;
  margin: 20px 0;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  border-left: 4px solid ${props => 
    props.rank === 1 ? '#ffd700' : 
    props.rank === 2 ? '#c0c0c0' : '#cd7f32'
  };
  transition: box-shadow 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
`;

const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const ProductTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #2c5282;
  letter-spacing: 0.3px;
`;

const Score = styled.div`
  background: #38a169;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1rem;
`;

const ProductImage = styled.div`
  width: 100%;
  height: 120px;
  background: #f7fafc;
  border: 2px dashed #cbd5e0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: #718096;
  font-size: 0.9rem;
  font-style: italic;
`;

const ProductDescription = styled.p`
  font-size: 0.95rem;
  margin-bottom: 15px;
  color: #4a5568;
  line-height: 1.5;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 10px;
  margin: 15px 0;
  flex-wrap: wrap;
`;

const Button = styled.a<{ variant: 'primary' | 'secondary' }>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: background-color 0.2s ease;
  background: ${props => 
    props.variant === 'primary' 
      ? '#3182ce' 
      : '#718096'
  };
  color: white;
  min-width: 120px;
  
  &:hover {
    background: ${props => 
      props.variant === 'primary' 
        ? '#2c5282' 
        : '#4a5568'
    };
  }
`;

const MainContent: React.FC = () => {
  return (
    <ContentContainer>
      <IntroSection>
        <IntroParagraph>
          Imagine acordar revigorado, sem desconfortos que sabotam sua rotina, com a vitalidade de volta para curtir a vida sem limites. Se você busca uma saída real para os desafios da próstata – sem invasões ou soluções paliativas –, pare tudo. O que revelo aqui pode ser sua virada.
        </IntroParagraph>
        
        <IntroParagraph>
          Como especialista em saúde prostática com mais de 20 anos de dedicação, mergulhei em uma análise rigorosa: seis meses dissecando mais de 200 opções, de fármacos a naturais.
        </IntroParagraph>
        
        <IntroParagraph>
          Avaliei eficácia, segurança, rapidez e custo real. Resultado? Apenas <HighlightText>três emergiram como campeões</HighlightText>: acessíveis, seguros e transformadores em semanas.
        </IntroParagraph>
      </IntroSection>
      
      <RankingSection>
        <RankingTitle>RANKING DOS 3 MELHORES TRATAMENTOS PARA PRÓSTATA</RankingTitle>
        
        <ProductCard rank={1}>
          <ProductHeader>
            <ProductTitle>1º LUGAR: ProstaMax Ultra</ProductTitle>
            <Score>9.2/10</Score>
          </ProductHeader>
          
          <ProductImage>
            Espaço para imagem do produto
          </ProductImage>
          
          <ProductDescription>
            <strong>Descrição:</strong> Suplemento natural com Saw Palmetto, Pygeum e Beta-sitosterol. Fórmula concentrada com 90% de ingredientes ativos.
          </ProductDescription>
          
          <CTAButtons>
            <Button variant="primary" href="#">COMPRAR AGORA - R$ 89,90</Button>
            <Button variant="secondary" href="#">SABER MAIS</Button>
          </CTAButtons>
        </ProductCard>
        
        <ProductCard rank={2}>
          <ProductHeader>
            <ProductTitle>2º LUGAR: Finasterida 5mg</ProductTitle>
            <Score>8.5/10</Score>
          </ProductHeader>
          
          <ProductImage>
            Espaço para imagem do produto
          </ProductImage>
          
          <ProductDescription>
            <strong>Descrição:</strong> Medicamento alopático que inibe a enzima 5-alfa-redutase, reduzindo o tamanho da próstata.
          </ProductDescription>
          
          <CTAButtons>
            <Button variant="primary" href="#">CONSULTAR MÉDICO</Button>
            <Button variant="secondary" href="#">SABER MAIS</Button>
          </CTAButtons>
        </ProductCard>
        
        <ProductCard rank={3}>
          <ProductHeader>
            <ProductTitle>3º LUGAR: Tamsulosina 0.4mg</ProductTitle>
            <Score>7.8/10</Score>
          </ProductHeader>
          
          <ProductImage>
            Espaço para imagem do produto
          </ProductImage>
          
          <ProductDescription>
            <strong>Descrição:</strong> Medicamento que relaxa os músculos da próstata e bexiga, melhorando o fluxo urinário.
          </ProductDescription>
          
          <CTAButtons>
            <Button variant="primary" href="#">CONSULTAR MÉDICO</Button>
            <Button variant="secondary" href="#">SABER MAIS</Button>
          </CTAButtons>
        </ProductCard>
      </RankingSection>
    </ContentContainer>
  );
};

export default MainContent;