//primeiro coloca a url 

// r é a response 
// => arrow function 
// r.json() - transforma a response em json 

//proximo then renderiza o json 

//fetch simplificado
fetch('https://ranekapi.origamid.dev/json/api/produto').then(r => r.json()).then((json) =>  render(json));