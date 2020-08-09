import {render} from './render.js';

async function fetchProdutos(url) {
  const p1 =fetch(url + '/notebook').then((r) => r.json());
  console.log('Iniciou 1');

  const p2 = fetch(url + '/smartphone').then((r) => r.json());
  console.log('Iniciou 2');

  const p3 = fetch(url + '/camera').then((r) => r.json());
  console.log('Iniciou 3');

  //retorna todas as requisições de uma vez 
  // sempre vai precisar de await pq é uma promisse
  const total = await Promise.all([p1, p2, p3]);
  render(total);
}

fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');

