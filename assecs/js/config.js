/*
Arquivo configuração em Javascript feito por Erasmo Cardoso
*/ 

//variaveis globais

let newpon = document.querySelector('#newpont');
let pontos = document.getElementById('pontos');
let mostra = document.getElementById('contador')
let pont = 0;
let sort;

//funçoes 

function sorteio() {
    let letra = 'ABCDEFGHIJLMNOPQRSTUVXZYW';
    let mostra = document.getElementById('contador')
    sort = letra.charAt(Math.floor(Math.random() * letra.length));
    mostra.innerText = (sort);
    limpa();
    return sort;
}

function gravaepontos() {
    let nom = document.querySelector('#nometext');
    let lug = document.querySelector('#lugartext');
    let esp = document.querySelector('#esportetext');
    let resulnome = document.getElementById('resnome');
    let resulugar = document.getElementById('reslugar');
    let resulesport = document.getElementById('resesport');
    let animal = document.querySelector('#animaltext');
    let cor = document.querySelector('#cortext');
    let alim = document.querySelector('#alimtext');
    let resulani = document.getElementById('resulanimal');
    let resucor = document.getElementById('resulcor');
    let resulalim = document.getElementById('resulalim');
    let filme = document.querySelector('#filmetext');
    let jogo = document.querySelector('#jogotext');
    let obj = document.querySelector('#objtext');
    let resulfilme = document.getElementById('resulfilme');
    let resujogo = document.getElementById('resuljogo');
    let resulobj = document.getElementById('resulobj');
    let marcaponto = 5;

    let text1 = nom.value;
    resulnome.innerText = text1;
    let text11 = lug.value;
    resulugar.innerText = text11;
    let text13 = esp.value;
    resulesport.innerText = text13;
    let text2 = animal.value;
    resulani.innerText = text2;
    let text21 = cor.value;
    resucor.innerText = text21;
    let text23 = alim.value;
    resulalim.innerText = text23;
    let text3 = filme.value;
    resulfilme.innerText = text3;
    let text31 = jogo.value;
    resujogo.innerText = text31;
    let text33 = obj.value;
    resulobj.innerText = text33;

    let nomev = text1.substr(0, 1).toUpperCase()
    let lugv = text11.substr(0, 1).toUpperCase()
    let espv = text13.substr(0, 1).toUpperCase()
    let animalv = text2.substr(0, 1).toUpperCase()
    let corv = text21.substr(0, 1).toUpperCase()
    let alimv = text23.substr(0, 1).toUpperCase()
    let filmev = text3.substr(0, 1).toUpperCase()
    let jogov = text31.substr(0, 1).toUpperCase()
    let objv = text33.substr(0, 1).toUpperCase()


    if (nomev == sort) {
                
        pont = pont + marcaponto;
    }

    if (lugv == sort) {
        pont = pont + marcaponto;
    }
    if (espv == sort) {
        pont = pont + marcaponto;
    }

    if (animalv == sort) {
        pont = pont + marcaponto;
    }

    if (corv == sort) {
        pont = pont + marcaponto;
    }    
    if (alimv == sort) {
        pont = pont + marcaponto;
    }

    if (filmev == sort) {
        pont = pont + marcaponto;
    }

    if (jogov == sort) {
        pont = pont + marcaponto;
    }
    if (objv == sort) {
        pont = pont + marcaponto;
    }

    pontos.innerHTML = pont;

    

}

function sorteado(){
    let sorteado1 = document.querySelector('#sorteado');
    sort = sorteado1.value.toUpperCase()
    mostra.innerText = (sort);
    limpa();
    
}

function tiraponto(){
    pont = pont -5 ;
    pontos.innerHTML = pont;

}

function limpa(){
    document.getElementById('sorteado').value = '';
    document.getElementById('filmetext').value = '';
    document.getElementById('jogotext').value = '';
    document.getElementById('objtext').value = '';
    document.getElementById('nometext').value = '';
    document.getElementById('lugartext').value = '';
    document.getElementById('esportetext').value = '';
    document.getElementById('animaltext').value = '';
    document.getElementById('cortext').value = '';
    document.getElementById('alimtext').value = ''; 

}