import {render} from './render.js';


const fetchData = async (url) =>{

    try{
        //todo o código que precisa que funcione 
        const response = await fetch(url);
        const json = await response.json();
        render(json);
    }catch (err){
        //usado quando da erro 
        console.log(err);
    } finally {
        //sempre ocorre 
        //usado para por exemplo tirar o loading 
        console.log('Sempre ocorre');
    }

} 

const data = fetchData('https://ranekapi.origamid.dev/json/api/produto');