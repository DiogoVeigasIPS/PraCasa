function addToCar(){ //nao é preciso fazer
    var name = document.getElementById("product-name").innerHTML;
    var price = document.getElementById("product-price").innerHTML;
    var img = document.getElementById("big-picture").getAttribute('src');
    var firstItem = {"items": [{"name": name, "price": price, "quantity": 1, "img": img}]};
    var firstItemStringified = JSON.stringify(firstItem);
    
    if("cart" in localStorage){ 
        var cart = JSON.parse(localStorage.getItem("cart"));
        var flag = 0;
        //console.log(cart.item.name); ja ta a funcionar
        for (i in cart) {
            if (cart.hasOwnProperty(i)){
                if(cart[i].name == name){
                    cart[i].quantity++;
                    console.log(cart[i].quantity);
                    flag =  1;
                    localStorage.setItem("cart", JSON.stringify(cart));
                    break;
                }
            }
        }
        if(flag == 0){
            //começar aqui, condição caso não seja nome igual
            var newItem = {"name": name, "price": price, "quantity": 1, "img": img};
            var items = "[" + cart + ", " + newItem + "]";
            var newItemFormation = JSON.stringify(items);
            localStorage.setItem("cart", JSON.stringify(newItemFormation));
        }
        
    }else{
        localStorage.setItem("cart", firstItemStringified);
    }
}

/* function addToCar(){
    var name = document.getElementById("product-name").innerHTML;
    var price = document.getElementById("product-price").innerHTML;
    var item = JSON.stringify({item: {name: name, price: price, quantity: 1}});
    
    if("cart" in localStorage){ 
        const cart = JSON.parse(localStorage.getItem("cart"));
        var flag = 0;
        var i;
            for (i in cart) {
                if (cart.hasOwnProperty(i)){
                    if(cart[i].name == name){
                        cart[i].quantity++;
                        flag = 1;
                        localStorage.setItem("cart", JSON.stringify(cart));
                        break;
                    }
                }
            }
            if(flag == 0){
                cart.push({"item": {name: name, price: price, quantity: 1}});
            }
    }else{
        localStorage.setItem("cart", item);
    }
} */