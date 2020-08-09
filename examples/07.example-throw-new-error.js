import {render} from './render.js';


const fetchData = async (url) =>{

    try{
        //todo o código que precisa que funcione 
        const response = await fetch(url);
        //throw ele smepre vai jogar um erro, ele serve por exemplo, um servidor que a resquisão deu erro mais retorna uma mensagem, ai se a mensagem for diferente de ok eu consigo ver o erro, nesse caso erro de servidor 
        if(!response.ok) throw new Error('Erro de servidor!');
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


