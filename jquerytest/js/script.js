$(".main").css("background-color","red");

$(".button").on("click",function(){
    console.log("its working");
})

//CARROSEL
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });