let ligada = document.getElementById('but-1');
let desligada = document.getElementById('but-2');
let imagem = document.getElementById('lp-fun');

function verificaLamp() {
    return imagem.src.indexOf ('quebrada') > -1
}

function lamLig() {
    if (!verificaLamp ()) {
        imagem.src = "./img/ligada.jpg"
    }
    
}

function lamDes() {
    if (!verificaLamp()) {
        imagem.src = "./img/desligada.jpg"
    }
    
}

function duplo() {
    imagem.src = "./img/quebrada.jpg"
    
}

ligada.addEventListener("click", lamLig)
desligada.addEventListener("click", lamDes)
imagem.addEventListener ( 'mouseover', lamLig );
imagem.addEventListener ( 'mouseleave', lamDes );
imagem.addEventListener ("dblclick", duplo)