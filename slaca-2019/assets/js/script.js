$('.before-img').after('<img src="./assets/img/litleWorld.svg" />');


/* responsive sidebar - show sidebar */
$("#icon-bars-main-touch").on("click",()=>{
  setTimeout(() =>  { 
    $(".sidebar").toggleClass("sidebar-active");},400);
    $(".header-select-idiom-img").css("display","none");
    setTimeout(() =>  {
      $(".header-select-idiom-img").css("display","flex");},4000)
} )


//$("#sidebar").css("background-color", "blue");