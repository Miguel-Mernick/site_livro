let lista = document.querySelectorAll('.personagem');
let next = document.getElementById('depois');
let prev = document.getElementById('antes');

let contar = lista.length;
let ativo = 0;

next.onclick = () => {
    let desativar = document.querySelector('.ativo');
    desativar.classList.remove('ativo');
    if (ativo >= contar -1) {
        ativo = 0;
    } else {
        ativo = ativo + 1;
    }
    lista[ativo].classList.add('ativo');
}

prev.onclick = () => {
    let desativar = document.querySelector('.ativo');
    desativar.classList.remove('ativo');
    if (ativo <= 0) {
        ativo = contar - 1;
    } else {
        ativo = ativo - 1;
    }
    lista[ativo].classList.add('ativo');
}

let listaReleituras = document.querySelectorAll('.releitura');
let nextReleitura = document.getElementById('depois-releitura');
let prevReleitura = document.getElementById('antes-releitura');

let contarReleituras = listaReleituras.length;
let ativoReleitura = 0;

listaReleituras[ativoReleitura].classList.add('ativo');

nextReleitura.onclick = () => {
    let desativar = document.querySelector('.releitura.ativo');
    desativar.classList.remove('ativo');
    if (ativoReleitura >= contarReleituras - 1) {
        ativoReleitura = 0;
    } else {
        ativoReleitura = ativoReleitura + 1;
    }
    listaReleituras[ativoReleitura].classList.add('ativo');
}

prevReleitura.onclick = () => {
    let desativar = document.querySelector('.releitura.ativo');
    desativar.classList.remove('ativo');
    if (ativoReleitura <= 0) {
        ativoReleitura = contarReleituras - 1;
    } else {
        ativoReleitura = ativoReleitura - 1;
    }
    listaReleituras[ativoReleitura].classList.add('ativo');
}
