const fetchData = async (url) =>{
    //await trava o código até o restante ser resolvido 
    const response = await fetch(url);

    //await trava o código até o restante ser resolvido 
    const json = await response.json();
    return json
} 

const data = fetchData('https://ranekapi.origamid.dev/json/api/produto');

data.then((json) => {
    render(json);
})
