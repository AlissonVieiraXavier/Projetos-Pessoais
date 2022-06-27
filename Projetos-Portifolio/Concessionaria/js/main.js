(function($) { 
    $(function() { 

         /* ///////////////////// Icons - START //////////////////// */
         $(".youtubeicon").click( () => {
           window.open("https://www.youtube.com/","_blank")
         })
         $(".tiktokicon").click( () => {
           window.open("https://www.tiktok.com/foryou","_blank")
         })
         $(".instaicon").click( () => {
           window.open("https://www.instagram.com/","_blank")
         })
         $(".faceicon").click( () => {
           window.open("https://www.facebook.com/","_blank")
         })
         $(".faceicon").click( () => {
          window.redirect("index.html")
        })
         
         
         /* ////////////////// icons - END ///////////////////////*/
         /* ///////////////////// NAVBAR - START //////////////////// */
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
    
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
      // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
     // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
      /* ////////////////// NAVBAR - END ///////////////////////*/
      /* ////////////////// PARTNERS ///////////////////////*/
      $('.autoplay-parceiros').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows:false,
        responsive:[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      /* ////////////////// PARTNERS - END ///////////////////////*/
    }); 
  })(jQuery); 

