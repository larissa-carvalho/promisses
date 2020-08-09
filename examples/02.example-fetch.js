//exemplo mais simples de entender

fetch('https://ranekapi.origamid.dev/json/api/produto').then(response => {
    //nesse then eu recebo a resposta da api
    //e retorno ela, transformando-a em json 
    return response.json();
}).then((json) => {
    //nesse segundo then eu pego a promisse do then acima resolvida 
    // e renderizo na página (conforme a função render q foi importada do js render)
    render(json);
})
