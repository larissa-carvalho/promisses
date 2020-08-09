import {render} from './render.js';

//essa requisição é otimizada por os produto são buscados de uma vez juntos, ele não tem o await para esperar que a requisição sem si seja resolvida

async function fetchProdutos(url) {

 //fetchs que são iniciados de uma vez so
  const p1 = fetch(url + '/notebook').then((r) => r.json());
  console.log('Iniciou 1');

  const p2 = fetch(url + '/smartphone').then((r) => r.json());
  console.log('Iniciou 2');

  const p3 = fetch(url + '/camera').then((r) => r.json());
  console.log('Iniciou 3');

  const produto1 = await p1;
  const produto2 = await p2; 
  const produto3 = await p3;
  render([produto1, produto2, produto3]);
}

fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');



