function filterShipping(type){//Não há produtos sem portes de envio
    var items = document.getElementsByClassName("result-item");
    
    if(type == "free"){
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }
    }else{
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'grid';
        }
    }
}

function filterPrice(min, max){//Filtrar por preço
    if(document.getElementById("100").checked == true 
    || document.getElementById("200").checked == true
    || document.getElementById("500").checked == true
    || document.getElementById("1000").checked == true
    || document.getElementById("2000").checked == true){//se algum filtro estiver ativado
        var items = document.getElementsByClassName("retult-item-price");
        for (var i = 0; i < items.length; i++) {
            if(parseFloat(items[i].innerHTML) > max || parseFloat(items[i].innerHTML) < min){
                items[i].parentNode.parentNode.parentNode.style.display = 'none';
            }else{
                items[i].parentNode.parentNode.parentNode.style.display = 'grid';//apenas o que estiver dentro do limite será mantido
            }
        }
    }
    if(document.getElementById("all-prices").checked == true){//se o selecionado for todos, todos serão mostrados
        var items = document.getElementsByClassName("retult-item-price");
        for (var i = 0; i < items.length; i++) {
            items[i].parentNode.parentNode.parentNode.style.display = 'grid';
        }
    }
}

let searchProducts = () => {//pesquisa produtos pela search bar
    document.getElementById("all-prices").checked = "true";
    var items = document.getElementsByClassName("retult-item-title");

    var searchBar = document.getElementById("searchBar");

    for(var i = 0; i < items.length; i++) {
        items[i].parentNode.parentNode.parentNode.style.display = 'grid';
        if(!(items[i].innerHTML.toLowerCase().includes(searchBar.value.toLowerCase()))){
            items[i].parentNode.parentNode.parentNode.style.display = 'none';
        }   
    }

    if(sessionStorage.getItem("search-value")){
        sessionStorage.clear();
    }
}

let transportValue = () =>{ //pesquisar por outra pagina
    var value = document.getElementById("searchBarForm");
    sessionStorage.setItem("search-value", value.value);
}

let loadValue = () => { //ao carregar página de produtos
    document.getElementById("searchBar").value = sessionStorage.getItem("search-value");
    searchProducts();
}

let changeSearchValue = (valueToSearch) =>{ //quando se carrega numa imagem ou link e faz pesquisa sozinha
    sessionStorage.setItem("search-value", valueToSearch);
}