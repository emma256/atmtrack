/*var botonProcesador = document.querySelector('#content-procesador');
var botonMemoria = document.querySelector('#content-memoria');

botonProcesador.addEventListener('click', extraInfo)
botonMemoria.addEventListener('click', extraInfo)

function extraInfo () {
    var extra = this.children[0].children[1]
    extra.classList.toggle('content-extra-open');
}

var safari;
if ( navigator.vendor.indexOf('Apple') > -1 ) {
    safari = true;
} else {
    safari = false;
}

function safariFunction(){
    if (safari) {
        console.log('Safari Detected');
        h = botonProcesador.parentElement.parentElement.clientHeight - 16;
        botonProcesador.style.height = h + 'px';
        
        var SistOperativo = document.querySelector('#content-sistema-operativo');
        h2 = SistOperativo.parentElement.parentElement.clientHeight - 16;
        SistOperativo.style.height = h2 + 'px';
    }
}*/