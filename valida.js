/*Variaveis*/
let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let senha = document.querySelector('#senha')
let nomeOk = false
let emailOk = false
let senhaOk = false

/*Funções*/
function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
    }
    else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaSenha() {
    let txtSenha = document.querySelector('#txtSenha')
    if (senha.value.length < 3) {
        txtSenha.innerHTML = "Senha inválida"
        txtSenha.style.color = 'red'
    } else {
        txtSenha.innerHTML = "Senha válida"
        txtSenha.style.color = 'green'
        senhaOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && senhaOk == true){
        
        alert('Inscrição realizada com sucesso!')
    } else {
        console.log(nomeOk,emailOk,senhaOk)
        alert('Por favor revise suas informações!')
        
    }
}

