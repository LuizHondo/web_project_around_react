# Around the U.S. - Aplicação Web com React

Este projeto é uma aplicação web de página única (SPA) totalmente responsiva, desenvolvida com React. Ela permite que os usuários compartilhem fotos de suas viagens, criem perfis e interajam com o conteúdo de outros usuários. O projeto demonstra uma arquitetura de frontend moderna e o uso eficaz das principais bibliotecas e ferramentas do ecossistema React.

## Visão Geral Técnica e Habilidades Demonstradas

Este projeto não é apenas uma aplicação funcional, mas uma demonstração de habilidades técnicas essenciais no desenvolvimento de frontend moderno. A arquitetura e as tecnologias foram escolhidas para construir uma base de código escalável, de fácil manutenção e de alto desempenho.

*   **Arquitetura Baseada em Componentes com React:**
    *   Utilizei uma abordagem modular, quebrando a interface do usuário em componentes reutilizáveis e independentes (como `Header`, `Card`, `Popup`). Isso não apenas organiza o código de forma limpa, mas também melhora a produtividade do desenvolvimento e a manutenção a longo prazo.

*   **Gerenciamento de Estado Avançado com React Context:**
    *   Implementei o React Context (`CurrentUserContext`) para gerenciar de forma eficiente o estado global da aplicação, como informações do usuário autenticado. Essa técnica elimina o "prop drilling" e fornece uma maneira limpa e escalável de compartilhar dados entre componentes, demonstrando o entendimento de padrões de gerenciamento de estado complexos.

*   **Integração com API e Operações Assíncronas:**
    *   Desenvolvi um módulo de API (`src/utils/api.js`) dedicado para lidar com todas as comunicações com um backend externo. Isso centraliza a lógica de busca de dados, simplificando o tratamento de operações assíncronas (CRUD - Criar, Ler, Atualizar, Excluir) para perfis de usuário e cartões de fotos.

*   **Desenvolvimento Rápido com Vite:**
    *   Utilizei o Vite como a ferramenta de construção do projeto para aproveitar seu ambiente de desenvolvimento extremamente rápido, com Hot Module Replacement (HMR) instantâneo. Isso acelera o ciclo de feedback e aumenta a produtividade.

*   **Estilização Responsiva e Estruturada (Metodologia BEM):**
    *   Adotei uma abordagem de nomenclatura BEM (Block, Element, Modifier) para as folhas de estilo CSS. Essa metodologia garante que os estilos sejam previsíveis, reutilizáveis e fáceis de depurar, resultando em um design totalmente responsivo e adaptável a diferentes tamanhos de tela.

*   **Qualidade de Código e Melhores Práticas com ESLint:**
    *   Configurei o ESLint para impor um estilo de código consistente e identificar possíveis erros antes mesmo da execução. Isso demonstra um compromisso com a escrita de código de alta qualidade e a manutenção de um projeto saudável.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`

Executa a aplicação em modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizá-la em seu navegador.

### `npm run build`

Compila a aplicação para produção na pasta `dist`. Ele agrupa o React em modo de produção e otimiza a compilação para o melhor desempenho.
