$('.before-img').after('<img src="./assets/img/litleWorld.svg" />');


/* responsive sidebar - show sidebar */
$("#icon-bars-main-touch").on("click",()=>{
  setTimeout(() =>  { 
    $(".sidebar").toggleClass("sidebar-active");},400);
    $(".header-select-idiom-img").css("display","none");
} )


//$("#sidebar").css("background-color", "blue");