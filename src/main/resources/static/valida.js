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
        nomeOk = false
    }
    else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        nomeOk = true
    }
}

function validaEmailComAtualizacao() {
    let txtEmail = document.querySelector('#txtEmail')
    if (validaEmail()) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = 'red'
        emailOk = false
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaEmail() {
    return email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1
}

function validaSenhaComAtualizacao() {
    let txtSenha = document.querySelector('#txtSenha')
    if (senha.value.length < 3) {
        txtSenha.innerHTML = "Senha inválida"
        txtSenha.style.color = 'red'
        senhaOk = false
    } else {
        txtSenha.innerHTML = "Senha válida"
        txtSenha.style.color = 'green'
        senhaOk = true
    }
}

function validaSenha() {
    return senha.value.length < 3
}

function enviar(event) {
    event.preventDefault()
    if(nomeOk == true && emailOk == true && senhaOk == true){
        
        let body = {
            name: document.querySelector('#nome').value,
            email: document.querySelector('#email').value,
            password: document.querySelector('#senha').value,
            date: new Date(),
            newsletter: true
        }

        console.log(JSON.stringify(body))
        fetch("/form", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(data => {
            if (data.ok) {
                alert('Inscrição realizada com sucesso!')
                window.location="/"
            } else {
                alert('Deu ruim, amigo, foi mal...')
            }
        })

    } else {
        alert('Por favor revise suas informações!')   
    }
}

function logar(event) {
    event.preventDefault()

    if (!emailOk || !senhaOk) {
        console.log(emailOk, senhaOk)
        alert('Por favor revise suas informações!')
        return
    } 

    let body = {
        email: document.querySelector('#email').value,
        password: document.querySelector('#senha').value
    }

    fetch("/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(data => {
        if (data.ok) {
            alert("tá dentro!")
        } else if (data.status == 401) {
            alert("cê num pode entrar, não, foi mal...")
        } else if (data.status == 404) {
            alert("eu nem te conheço, mano! vai, circulando...")
        } else {
            alert("eu não faço ideia do que aconteceu, mas você não pode entrar, pois é")
        }
    })

}
