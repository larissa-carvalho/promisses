const promessa = new Promise((resolve, reject) => {
    let condicao = true;
    
    if(condicao){
        setTimeout(() => {
            resolve({ok : true});
        }, 2000);
    }else{
        reject('Rejeitado');
    }
});


promessa.then((response) => {
    //quando a promessa foi resolvida
    console.log(response);
}).catch((erro) => {
    //quando a promessa não foi resolvida
    console.log(erro);
}).finally(() => {
    //sempre acontece
    console.log('sempre ocorre');
})

console.log(promessa);