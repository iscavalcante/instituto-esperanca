
# Instituto Esperança — Experiência Prática IV

Projeto acadêmico de Desenvolvimento Front-End que simula a presença digital de uma ONG. A quarta etapa consolida HTML, CSS e JavaScript das experiências anteriores com versionamento, acessibilidade WCAG 2.1 AA, otimização e preparação para deploy.

## Tecnologias
- HTML5 semântico
- CSS3 responsivo (Grid/Flexbox)
- JavaScript ES6 Modules
- SPA com roteamento por hash e DOM
- localStorage
- SweetAlert2 via CDN
- Vite para desenvolvimento e build de produção

## Funcionalidades
Navegação SPA, projetos gerados por templates, cadastro validado, persistência local, listagem/exclusão de cadastros, menu responsivo, feedback visual e modo de alto contraste persistente.

## Acessibilidade
Inclui landmarks semânticos, skip link, labels, `aria-expanded`, `aria-live`, `aria-invalid`, foco visível, navegação por teclado, textos alternativos, `prefers-reduced-motion` e modo de alto contraste. A versão final deve ser auditada no navegador (Lighthouse/axe/WAVE) antes da entrega para registrar evidências.

## Instalação e execução
Requer Node.js 20.19+ ou 22.12+.
```bash
npm install
npm run dev
```
Abra a URL indicada pelo Vite.

## Build de produção
```bash
npm run build
npm run preview
```
A build otimizada é gerada em `dist/`.

## GitFlow sugerido
- `main`: versão estável/produção
- `develop`: integração de desenvolvimento
- `feature/acessibilidade`
- `feature/otimizacao`
- `feature/documentacao`

Commits seguem Conventional Commits, por exemplo: `feat:`, `fix:`, `perf:` e `docs:`.

## Deploy
O projeto está preparado para hospedagem estática. Para GitHub Pages, publique o conteúdo de `dist/` por GitHub Actions ou uma branch de publicação. O link real deve ser registrado somente após o deploy.

## Manutenção
Edite código em `src/`, conteúdos estáticos em `public/html/` e imagens em `public/imagens/`. Execute nova build e testes antes de cada release.

## Acessibilidade

O projeto foi desenvolvido considerando as diretrizes WCAG 2.1 Nível AA.

Entre os recursos implementados estão:

- HTML semântico e landmarks;
- navegação completa por teclado;
- foco visível nos elementos interativos;
- textos alternativos nas imagens;
- labels associados aos campos dos formulários;
- atributos WAI-ARIA em componentes dinâmicos;
- link para pular diretamente ao conteúdo principal;
- modo de alto contraste;
- mensagens de feedback acessíveis.

## Performance e otimização

O projeto foi preparado para ambiente de produção com foco na redução do tempo de carregamento e no uso eficiente dos recursos.

As principais práticas adotadas foram:

- utilização de imagens em formato WebP para reduzir o tamanho dos arquivos;
- manutenção de imagens JPG como alternativa de compatibilidade;
- carregamento otimizado dos recursos estáticos;
- organização modular dos arquivos CSS e JavaScript;
- preparação do projeto para minificação durante o processo de build;
- utilização de Vite para geração da versão de produção;
- estrutura responsiva para diferentes tamanhos de tela;
- redução de código desnecessário e melhor organização dos módulos.

A versão de produção pode ser gerada através do comando:

`npm run build`

O processo gera os arquivos otimizados para publicação, reduzindo o tamanho dos recursos e melhorando o desempenho da aplicação.