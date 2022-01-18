const botao = document.getElementById("menubotton");
const menuNav = document.querySelector(".navbar");
const tituloBackMobile = document.querySelector(".titulo-backmobile")

botao.addEventListener("click", function botaonavmenu() {
    menuNav.classList.toggle('navbar--ativo');
    // tituloBackMobile.style.top = "130px";


})


//setTimeout(() => function botaonavmenu() , 3000)


