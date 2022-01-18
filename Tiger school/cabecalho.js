const botao = document.getElementById("menubotton");
const menuNav = document.querySelector(".navbar");
const tituloBackMobile = document.querySelector(".titulo-backmobile")

botao.addEventListener("click", function botaonavmenu() {
    menuNav.classList.toggle('navbar--ativo')

})

//setTimeout(() => function botaonavmenu() , 3000)


