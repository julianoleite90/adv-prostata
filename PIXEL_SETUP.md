# Configuração dos Pixels do Google

## Google Analytics
Para configurar o Google Analytics, substitua `GA_MEASUREMENT_ID` pelo seu ID de medição real.

**Como encontrar seu ID:**
1. Acesse o Google Analytics
2. Vá em Administração > Propriedades
3. Selecione sua propriedade
4. Vá em "Dados de fluxo" > "Web"
5. Copie o ID de medição (formato: G-XXXXXXXXXX)

**Substitua no código:**
```html
gtag('config', 'GA_MEASUREMENT_ID');
```

## Google Ads
Para configurar o Google Ads, substitua `AW-CONVERSION_ID` pelo seu ID de conversão real.

**Como encontrar seu ID:**
1. Acesse o Google Ads
2. Vá em Ferramentas e configurações > Conversões
3. Crie uma nova conversão ou use uma existente
4. Copie o ID de conversão (formato: AW-XXXXXXXXX)

**Substitua no código:**
```html
gtag('config', 'AW-CONVERSION_ID');
```

## Eventos Rastreados

### CTAs dos Produtos
- **ProstCare:** Acessar Site, Mais Info
- **MaxProt:** Acessar Site, Mais Info  
- **Prost Support:** Acessar Site, Mais Info

### Banner Publicitário
- **Sidebar Banner:** Clique no banner da sidebar

## Como Testar
1. Abra o site no navegador
2. Abra as Ferramentas do Desenvolvedor (F12)
3. Vá na aba "Console"
4. Clique nos botões e verifique se os eventos aparecem
5. No Google Analytics, vá em "Tempo real" > "Eventos" para ver os cliques

## Deploy
1. Faça commit das alterações
2. Faça push para o GitHub
3. Configure o domínio no seu provedor de hospedagem
4. Teste os pixels em produção
