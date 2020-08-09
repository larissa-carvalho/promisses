export function render(data){
    const vitrine = document.getElementById('vitrine');

    data.forEach((produto) => {
        vitrine.innerHTML += `
            <div class="produto">
                <div class="image">
                <img src="${produto.fotos[0].src}" alt="${produto.fotos[0].titulo}"/>
                <div>
                    <h1>${produto.nome}</h1>
                    <h2>R$ ${produto.preco}</h2>
                </div>
            </div>
        `;
    }) 
}

export function load(ativo) {
    if (ativo === true) {
      const load = document.createElement('div');
            load.id = 'load';
      document.querySelector('#vitrine').append(load);
    }else{
      const load = document.getElementById('load');
      if (load) load.remove();
    }
}
  
  export function error() {
    const vitrine = document.getElementById('vitrine');
    vitrine.innerHTML = `<div class="error">Não conseguimos carregar os dados :( </div>`;
  }