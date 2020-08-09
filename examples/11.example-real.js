import {render} from './render.js';

async function fetchProdutos(url, busca){
    const lista = await fetch(`${url}?q=${busca}`).then((r) => r.json());
    const produtosPromise = lista.map(produto => 
        fetch(`${url}/${produto.id}`).then(r => r.json())
    );

    const produtos = await Promise.all(produtosPromise);

    render(produtos)
}

fetchProdutos('https://ranekapi.origamid.dev/json/api/produto', 'notebook');