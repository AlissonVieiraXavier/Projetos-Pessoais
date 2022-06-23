(function($) { 
    $(function() { 

         /* ///////////////////// NAVBAR TOP- START //////////////////// */
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
         
         
         /* ////////////////// NAVBAR END - END ///////////////////////*/
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
    }); 
    /* ////////////////// NAVBAR - END ///////////////////////*/
     /* ////////////////// BANNER-TOP ///////////////////////*/
  })(jQuery); 

