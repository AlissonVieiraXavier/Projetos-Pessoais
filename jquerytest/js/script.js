$(".main").css("background-color","red");

$(".button").on("click",function(){
    console.log("its working");
})

//CARROSEL
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 3,
    speed:400,
    autoplay:true
  });