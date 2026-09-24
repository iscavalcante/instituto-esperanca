const CHAVE='cadastrosInstituto';
export function carregarCadastros(){try{return JSON.parse(localStorage.getItem(CHAVE))||[]}catch(e){console.error('Falha ao ler localStorage',e);return[]}}
export function salvarCadastros(lista){localStorage.setItem(CHAVE,JSON.stringify(lista))}
export function adicionarCadastro(cadastro){const lista=carregarCadastros();lista.push({...cadastro,id:crypto.randomUUID?crypto.randomUUID():String(Date.now())});salvarCadastros(lista)}
export function removerCadastro(id){salvarCadastros(carregarCadastros().filter(item=>item.id!==id))}
