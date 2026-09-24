export const projetos=[
{titulo:'Educação',categoria:'Projeto ativo',imagem:'imagens/projeto-educacao.webp',descricao:'Apoio educacional e oficinas para crianças e jovens.'},
{titulo:'Cestas Solidárias',categoria:'Doações',imagem:'imagens/projeto-cestas.webp',descricao:'Arrecadação e distribuição de alimentos para famílias.'},
{titulo:'Apoio à Comunidade',categoria:'Comunidade',imagem:'imagens/projeto-comunidade.webp',descricao:'Ações de acolhimento, convivência e fortalecimento comunitário.'},
{titulo:'Voluntariado',categoria:'Participe',imagem:'imagens/voluntariado.webp',descricao:'Rede de pessoas que dedicam tempo e conhecimento às ações.'}
];
export function renderizarProjetos(container){container.innerHTML=projetos.map(p=>`<article class="card projeto-card"><img src="${p.imagem}" alt="Ação social do projeto ${p.titulo}" loading="lazy" width="640" height="400"><span class="badge">${p.categoria}</span><h2>${p.titulo}</h2><p>${p.descricao}</p><button class="button saiba-mais" data-projeto="${p.titulo}">Saiba mais</button></article>`).join('')}
