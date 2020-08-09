import {render, load, error} from './render.js';

async function fetchProdutos(url) {
    try {
        load(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error(reponse.statusText);
        const json = await response.json();
        render(json);
    } catch (err) {
        error(err);
    } finally {
        load(false);

    }
}

fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');