if(localStorage.getItem("name") !== null){ //verifica se alguem entrou na conta
    var loggedId = document.getElementById("entrar");
    loggedId.innerHTML = "Olá, " + localStorage.getItem("name");
    loggedId.setAttribute("href", "#");//nao pode fazer login enquanto iniciado
    loggedId.onclick = function(){
        let leave = confirm("Tem a certeza que deseja sair?");
        if(leave === true){
            localStorage.removeItem("name");
            location.reload();
        }
    };
}

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}

function mostrarMenu(){
    var pageMask = document.getElementById("page-mask");
    var checkbox = document.getElementById("side-menu");

    if(checkbox.checked == false){//menu telemovel ativado
        pageMask.classList.add("page-mask");
        disableScrolling();
    }else{//menu telemovel desativado
        pageMask.classList.remove("page-mask");
        enableScrolling();
    }
}

function turnDark(){//deixar escuro
    document.documentElement.style.setProperty('--background-color', '#333');
    document.documentElement.style.setProperty('--white', '#111');
    document.documentElement.style.setProperty('--boxShadowColor', 'rgba(140, 140, 140, 0.2) 0px 7px 29px 0px');
    document.documentElement.style.setProperty('--h1-color', '#f5e5e4');
    document.documentElement.style.setProperty('--text-color', '#cfcfcf');
    document.documentElement.style.setProperty('--gray', '#cfcfcf');
    document.documentElement.style.setProperty('--light-gray', '#2b2b2b');
    document.documentElement.style.setProperty('--border-color', '#2b2b2b');
    document.documentElement.style.setProperty('--lighter-gray', '#404040');
}

function turnLight(){//deixar claro
    document.documentElement.style.setProperty('--background-color', '#f1f1f1');
    document.documentElement.style.setProperty('--white', '#f9f9f9');
    document.documentElement.style.setProperty('--boxShadowColor', 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px');
    document.documentElement.style.setProperty('--h1-color', 'black');
    document.documentElement.style.setProperty('--text-color', '#262626');
    document.documentElement.style.setProperty('--gray', '#5f5f5f');
    document.documentElement.style.setProperty('--light-gray', '#b8b8b8');
    document.documentElement.style.setProperty('--border-color', '#e9e9e9');
    document.documentElement.style.setProperty('--lighter-gray', '#d9d9d9');
}

let checkIfDarkMode = () =>{//verificar ao entrar na pagina o modo atual
    if(localStorage.getItem("mode") == "dark"){
        turnDark();
        document.getElementById("mode-toggler").innerHTML = "🌚 Mode";
    }else{
        turnLight();
        document.getElementById("mode-toggler").innerHTML = "☀️ Mode";
    }
}

let darkMode = () => {//ao carregar no botao, alterar o modo
    if(localStorage.getItem("mode") == "light"){
        turnDark();
        document.getElementById("mode-toggler").innerHTML = "🌚 Mode";
        localStorage.setItem("mode", "dark");
    }else{
        turnLight();
        document.getElementById("mode-toggler").innerHTML = "☀️ Mode";
        localStorage.setItem("mode", "light");
    }
}

