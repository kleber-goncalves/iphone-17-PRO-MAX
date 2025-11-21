## Clone do site MVP do iPhone 17 Pro 📱

Este é um projeto inspirada no design e na estrutura do site oficial do iPhone 17 Pro da Apple.

O objetivo do projeto foi demonstrar a habilidade de recriar interfaces modernas e responsivas utilizando tecnologias de ponta, com foco especial em **animações fluidas** e **performance**.

-----

### 🚀 Tecnologias Utilizadas

| Tecnologia | Função |
| :--- | :--- |
| **Node.js** | Ambiente de execução para gerenciar dependências. |
| **Vite** | Ferramenta de build extremamente rápida para inicialização e desenvolvimento. |
| **React** | Biblioteca JavaScript para a construção da interface do usuário (UI). |
| **Tailwind CSS** | Framework CSS *utility-first* para um design rápido, responsivo e customizável. |
| **`react-awesome-reveal`** | Biblioteca React para adicionar animações de *scroll* (como Fade e Zoom) ao revelar elementos. |

-----

### ✨ Destaques da Implementação

O projeto está estruturado em componentes React e implementa várias funcionalidades importantes para replicar a experiência do site original:

  - **Responsividade (Mobile-First):** O layout é totalmente responsivo, adaptando-se perfeitamente de dispositivos móveis a desktops.
      - **Imagens Responsivas (`Hero.jsx`):** Implementação de carregamento condicional de diferentes imagens (`mobileImageSrc` e `desktopImageSrc`) usando **Tailwind CSS Media Queries** (`md:hidden`, `hidden md:block`) para otimizar a performance em dispositivos móveis.
  - **Animações de Scroll (`react-awesome-reveal`):** Utilização das *props* `Fade`, `Zoom` e `cascade` em praticamente todos os componentes (`Intro.jsx`, `Highlights.jsx`, `Colors.jsx`, `Footer.jsx`) para criar um efeito de entrada visualmente agradável à medida que o usuário rola a página.
  - **Navegação e Estrutura:**
      - **Menu Fixo (`NavBar.jsx`):** Componente de navegação fixo com menu *hambúrguer* para mobile.
      - **Acordeão no Footer (`Footer.jsx`):** Implementação de um menu de rodapé que se comporta como um acordeão em telas móveis (`isMobile` state) para economizar espaço, mas que é sempre expandido em desktop.
      - **Links Dinâmicos:** As URLs para todos os links do rodapé (`Footer.jsx`) e botões de compra foram definidas de forma estruturada nos dados.
  - **Seleção de Cores (`Colors.jsx`):** Implementa um sistema de estado (`useState`) para trocar dinamicamente a imagem do iPhone e o nome da cor selecionada ao clicar nos botões de cor.

## 📁 Estrutura do Projeto

```
src/
├── assets/
│   └── img/
├── components/
│   ├── Colors.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Highlights.jsx
│   ├── Intro.jsx
│   └── NavBar.jsx
├── App.tsx
├── index.tsx
└── main.tsx
```

-----

### 💻 Como Executar o Projeto

1.  **Clone o repositório:** (Se estiver em um repositório Git)
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```
3.  **Inicie o servidor de desenvolvimento (Vite):**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
4.  O projeto será executado em `http://localhost:5173` (ou porta similar).

**Observação:** Certifique-se de que os caminhos das imagens (`/src/assets/img/...`) estão corretos no seu ambiente local, caso contrário, as imagens não serão carregadas.

## 📱 Design Responsivo

O site é totalmente responsivo, com pontos de quebra em:
- Mobile: 768px
- Tablet: 1024px
- Desktop: 1280px

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch para sua funcionalidade (`git checkout -b feature/SuaFeature`)
3. Faça o commit de suas alterações (`git commit -m 'Add some SuaFeature'`)
4. Faça o push para a branch (`git push origin feature/SuaFeature`)
5. Abra um Pull Request