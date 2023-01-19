

function mostrarDiv(div, caret){//mostrar/enconder div com direito a setinha a mudar de direção
    var element = document.getElementById(div);
    if (element.style.display === 'none') {
        element.style.display = 'block';
        document.getElementById(caret).classList.remove("fa-caret-right");
        document.getElementById(caret).classList.add("fa-caret-down");
    }else{
        element.style.display = 'none';
        document.getElementById(caret).classList.remove("fa-caret-down");
        document.getElementById(caret).classList.add("fa-caret-right");
    }
}

function capitalizeFirstLetter(string){//deixar o primeiro caracter maiúsculo
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let showErrorMessage = (div, message) => {
    var parentElement = document.getElementById(div);//encontra o div de erro

    var errorParagraph = document.createElement("p");//cria paragrafo
    var error = document.createTextNode(message);//cria text node
    errorParagraph.appendChild(error);//mete text node no paragrafo

    parentElement.appendChild(errorParagraph);//mete paragrafo no div
    parentElement.style.display = "block";//apresenta o erro
}

let clearPassword = () => {//limpar palavra passe
    document.getElementById("password").focus();
    document.getElementById("password").value = "";
}

let focusEmail = () => {//foco no email
    document.getElementById("email").focus();
}

let clearDiv = (div) => {//limpa todos os paragrafos do div (o resto tambem, mas so sao adicionados paragrafos)
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

let displayAllNone = (div, div2) =>{//esconder erros passados
    div.style.display = "none";
    div2.style.display = "none";
}

let clearErrors = () => {
    var divEmail = document.getElementById("emailError");
    var divPassword = document.getElementById("passwordError");

    clearDiv(divEmail);//limapr divs
    clearDiv(divPassword);
    displayAllNone(divEmail, divPassword);//esconde-los
}

function login(){//Entrar sessao
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;//dados que o utilizador submeteu

    clearErrors();

    if(email == "" || password == ""){
        showErrorMessage("passwordError", "Deve preencher todos os campos!");
        return;
    }

    var user = localStorage.getItem(email);//pesquisar na local storage
    if(user != null){//se existir
        if(password == user){//se a senha e o email coincidirem
            var name = email.split('@')[0];//nome ate ao @
            localStorage.setItem("name", capitalizeFirstLetter(name));//guarda o nome com a primeira letra maiuscula

            alert("Sessão iniciada com sucesso!");
            window.location.href = "index.html";//redirecionado ao inicio
        }else{
            clearPassword();
            showErrorMessage("passwordError", "Palavra-passe incorreta!");
        }
    }else{//se nao existir
        focusEmail();       
        showErrorMessage("emailError", "Uma conta com esse email não existe!");
    }
}

//apagar armazenamento local e maneira rápida
let clearLocalStorage = () =>{
    localStorage.clear();
    alert("Armazenamento local apagado com sucesso.");
}