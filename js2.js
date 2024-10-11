let btnToggle = document.querySelector('#toggle');
let proCart = document.querySelector('.list');

    function cartView(){
        if(proCart.style.display === "block"){
            proCart.style.display = "none";
        }else {
            proCart.style.display = "block";
        }
    }
