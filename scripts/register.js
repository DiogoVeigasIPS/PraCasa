let clearPasswords = () => {//limpar os campos de palavra passe
    document.getElementById("password").focus();
    document.getElementById("password").value = "";
    document.getElementById("password2").value = "";
}

let clearEmail = () => {//limpar os campos do email
    //document.getElementById("email").value = "";
    document.getElementById("email").focus();
}

function hasNumeric(string) {//tem numero?
    for(var i = 0; i < string.length; i++){
        if(string.charAt(i) > 0 && string.charAt(i) < 9){//verificar se o caractere entra entre os digitos 0 e 9
            return 1;
        }
    }
    return 0;
}

function hasUpperCase(string) {//tem maiúsucla
    for(var i = 0; i < string.length; i++){
        if(string.charAt(i) == string.charAt(i).toUpperCase()){//verificar se o caractere é igual à sua versão maiúsucla
            return i;
        }
    }
    return -1;
}

let displayAllNone3 = (div, div2, div3) =>{//esconde divs
    div.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
}

let clearErrors3 = () => {//remove os erros antigos
    var divEmail = document.getElementById("emailError");
    var divPassword = document.getElementById("passwordError");
    var divPassword2 = document.getElementById("password2Error");

    clearDiv(divEmail);//remove paragrafos
    clearDiv(divPassword);
    clearDiv(divPassword2);
    displayAllNone3(divEmail, divPassword, divPassword2);
}


let register = () =>{
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    password2 = document.getElementById("password2").value;//dados do utilizador

    clearErrors3();

    if(email == "" || password == "" || password2 == ""){
        showErrorMessage("password2Error", "Deve preencher todos os campos!");
        return;
    }

    var regularExpression = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;//regex de verificacao de email (roubado)

    if(!email.match(regularExpression)){
        clearEmail();
        showErrorMessage("emailError", "Email inválido! (Ex: example@gmail.com)");
        return;
    }

    if(localStorage.getItem(email) != null){//verifica se ja existe alguma conta com tal email
        clearEmail();
        showErrorMessage("emailError", "Uma conta com esse email já existe!");
        return;
    }

    if(password != password2){
        clearPasswords();
        showErrorMessage("password2Error", "As palavras passe não são iguais!");
        return;
    }

    if(password.length < 8){
        clearPasswords();
        showErrorMessage("passwordError", "A palavra passe deve possuir pelo menos 8 caracteres!");
        return;
    }

    if(password.length > 16){
        clearPasswords();
        showErrorMessage("passwordError", "A palavra passe não deve possuir mais de 16 caracteres!");
        return;
    }

    if(hasNumeric(password) == 0){//verifica se tem numero
        clearPasswords();
        showErrorMessage("passwordError", "A palavra passe deve possuir pelo menos 1 número!");
        return;
    }

    if(hasUpperCase(password) == -1){//verifica se tem maiuscula
        clearPasswords();
        showErrorMessage("passwordError", "A palavra passe deve possuir pelo menos 1 maiúscula!");
        return;
    }

    localStorage.setItem(email, password);//cria uma conta nova caso nenhum erro ocorra
    alert("Conta registada com sucesso!");
    window.location.href = "login.html";//redirecionar para login
}