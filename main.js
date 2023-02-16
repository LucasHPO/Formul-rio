
var form = document.getElementById('form-numeros');

form.addEventListener('submit', function(e) {

    e.preventDefault();
    verificar();
})

function verificar() {

    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;

    if (campoA < campoB){
        
        const mensagemSucesso = document.querySelector('.mensagem-sucesso');
        mensagemSucesso.style.display = 'block';
        
        campoA = ' ';
        campoB = ' ';
        
    } else {

        const mensagemErro = document.querySelector('.mensagem-erro');
        mensagemErro.style.display = 'block';

    }
}
