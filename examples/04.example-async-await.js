
//com async falamos que é uma função assincrona 
async function fetchData(url){

    //await trava o código até o restante ser resolvido 
    const response = await fetch(url);

    //await trava o código até o restante ser resolvido 
    const json = await response.json();
    render(json);

    console.log(json);
}


fetchData('https://ranekapi.origamid.dev/json/api/produto');
