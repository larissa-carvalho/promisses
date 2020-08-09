import {render} from './render.js';


//essa requisão não é otimizada, pois é preciso esperar que cada requisição de cada produto seja resolvida, causando assim lentidão 

async function fetchProdutos(url) {
  const produto1 = await fetch(url + '/notebook').then((r) => r.json());
  console.log('Iniciou 1');

  const produto2 = await fetch(url + '/smartphone').then((r) => r.json());
  console.log('Iniciou 2');

  const produto3 = await fetch(url + '/camera').then((r) => r.json());
  console.log('Iniciou 3');
  
  render([produto1, produto2, produto3]);
}

fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');