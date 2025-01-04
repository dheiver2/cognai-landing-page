# Cognai - Plataforma de IA Médica

![Cognai Screenshot](/screenshot(7).png)

## Sobre o Projeto

A Cognai é uma plataforma avançada de diagnósticos médicos potencializada por Inteligência Artificial. O sistema oferece soluções para diferentes especialidades médicas, incluindo Cardiologia, Neurologia e Radiologia, com precisão superior a 99%.

### Características Principais

- 🧠 IA de última geração para diagnósticos médicos
- 📊 Dashboard interativo com métricas em tempo real
- 🏥 Integração com sistemas hospitalares
- 🔒 Certificações FDA, ANVISA e compliance com LGPD/HIPAA
- 📱 Interface responsiva e moderna
- ⚡ Performance otimizada

## Tecnologias Utilizadas

- React.js
- Tailwind CSS
- Lucide Icons
- Outras dependências:
  - PostCSS
  - Autoprefixer

## Pré-requisitos

- Node.js 16.x ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/cognai-landing-page.git
```

2. Instale as dependências:
```bash
cd cognai-landing-page
npm install
```

3. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

## Estrutura do Projeto

```
cognai-landing-page/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm build`: Gera a versão de produção
- `npm test`: Executa os testes
- `npm eject`: Ejeta as configurações do Create React App

## Configuração do Tailwind

O projeto utiliza Tailwind CSS para estilização. A configuração pode ser encontrada em `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Configurações personalizadas aqui
    },
  },
  plugins: [],
}
```

## Deploy

O projeto está configurado para deploy na Vercel. Para fazer o deploy:

1. Conecte seu repositório à Vercel
2. Configure as variáveis de ambiente necessárias
3. Deploy será feito automaticamente a cada push na branch main

## Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Contato

- Email: seu-email@exemplo.com
- LinkedIn: [Dheiver](https://linkedin.com/in/dheiver-santos)
- Website: [www.cognai.com.br]([https://www.cognai.com.br)](https://cognai-landing-page.vercel.app/)

## Agradecimentos

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
- [Lucide Icons](https://lucide.dev/)
