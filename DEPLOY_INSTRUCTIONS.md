# Instruções de Deploy para https://www.estimulantes-naturais.com/

## Arquivos Principais
- `advertorial-prostata.html` - Página principal do advertorial
- `especialista1.png` - Imagem do especialista
- `prostcare-img.png` - Imagem do produto ProstCare
- `maxprot.png` - Imagem do produto MaxProt
- `suport.png` - Imagem do produto Prost Support
- `raizes.png` - Imagem do banner publicitário

## Configuração do Domínio

### 1. Upload dos Arquivos
Faça upload de todos os arquivos para a raiz do seu servidor web:
```
/
├── advertorial-prostata.html (renomear para index.html)
├── especialista1.png
├── prostcare-img.png
├── maxprot.png
├── suport.png
├── raizes.png
└── PIXEL_SETUP.md
```

### 2. Renomear Arquivo Principal
Renomeie `advertorial-prostata.html` para `index.html` para que seja a página inicial do domínio.

### 3. Configuração DNS
Configure o DNS do domínio `estimulantes-naturais.com` para apontar para seu servidor:
- **A Record:** @ → IP do servidor
- **CNAME:** www → estimulantes-naturais.com

### 4. Configuração do Servidor Web
Certifique-se de que o servidor está configurado para:
- Servir arquivos HTML estáticos
- Suportar HTTPS (SSL)
- Redirecionar HTTP para HTTPS

## Configuração dos Pixels

### Google Analytics
1. Acesse o Google Analytics
2. Crie uma nova propriedade para o domínio
3. Copie o ID de medição (G-XXXXXXXXXX)
4. Substitua `GA_MEASUREMENT_ID` no arquivo index.html

### Google Ads
1. Acesse o Google Ads
2. Crie uma nova conversão
3. Copie o ID de conversão (AW-XXXXXXXXX)
4. Substitua `AW-CONVERSION_ID` no arquivo index.html

## Testes Pós-Deploy

### 1. Teste de Acessibilidade
- Acesse https://www.estimulantes-naturais.com/
- Verifique se todas as imagens carregam
- Teste todos os links dos produtos

### 2. Teste de Tracking
- Abra as Ferramentas do Desenvolvedor (F12)
- Vá na aba "Console"
- Clique nos botões e verifique se os eventos aparecem
- No Google Analytics, vá em "Tempo real" > "Eventos"

### 3. Teste Mobile
- Teste em diferentes dispositivos móveis
- Verifique se o layout responsivo funciona
- Teste a navegação e cliques

## Estrutura Final do Site
```
https://www.estimulantes-naturais.com/
├── index.html (advertorial principal)
├── especialista1.png
├── prostcare-img.png
├── maxprot.png
├── suport.png
└── raizes.png
```

## Suporte
Se precisar de ajuda com a configuração, consulte:
- PIXEL_SETUP.md - Instruções detalhadas dos pixels
- Este arquivo - Instruções de deploy
