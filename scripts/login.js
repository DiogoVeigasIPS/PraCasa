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

function login (){//captura o nome de um email
    var email = document.getElementById("email").value;
    var name = email.split('@')[0];
    localStorage.setItem("name", capitalizeFirstLetter(name));
}