let iconeNavbar = document.querySelector(".icone-navbar");
let lista = document.querySelector(".lista");
let iconeLista = document.querySelector(".icon-navbar-mobile-transition");
let imagesSlider = document.querySelectorAll("#slider");

var time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img"),
    max = images.length;


iconeNavbar.addEventListener("click", () => {
    lista.style.display = "block";

    //tira mas só por alguns instantes devemos ajustar
    images[currentImageIndex].classList.remove("selected");


});

iconeLista.addEventListener("click", () => {
    lista.style.display = "none";
});


function nextImage() {

    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++;

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex].classList.add("selected");
};

function start() {
    setInterval(() => {
        nextImage();
    }, time)
};


window.addEventListener("load", start());

