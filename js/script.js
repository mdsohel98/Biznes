 
// mixitUp start-------
var container = document.querySelector('.gallery');

var mixer = mixitup(container, {
    selectors:{
        control:'[our-mix-control]'
    }
});

// Slick slider logo part
$('.slide-logo').slick({
    dots:false,
    infinite:true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
                  
  // custom jquery
  $('.navbar-nav li').click(function(){
    $(this).addClass('active').siblings().removeClass("active");
  })
  
  // search bar

  $(function() {
    var searchbar = $("#searchbar");
    var search = $("#search");
  
    function extendSearchBar() {
      searchbar.css("width", "160px");
      // searchbar.css("margin", "0px 16px");
      // searchbar.css("padding", "0px 6px");
  
      search.css("width", "0px");
      search.css("height", "0px");
      search.css("margin-left", "5px");
      search.css("margin-top", "-20px");
  
      searchbar.focus();
    }
  
    function minimizeSearchBar() {
      searchbar.css("width", "0px");
      searchbar.css("margin", "0px 0px");
      searchbar.css("padding", "0px 0px");
  
      search.css("width", "32px");
      search.css("height", "32px");
      search.css("margin-left", "0px");
      search.css("margin-top", "15px");
    }
  
    $(document).click(function() {
      minimizeSearchBar();
    });
  
    searchbar.click(function(e) {
      e.stopPropagation();
  
      // If needed, do something when clicking on the search bar here
    });
  
    search.click(function(e) {
      e.stopPropagation();
  
      extendSearchBar();
    });
  });
  // ======================================
  // navbar style
  $(window).scroll(function(){
    var ourWindow = $(this).scrollTop();

    if (ourWindow>100) {
      $('body').addClass('fixed');
    }else{
      $('body').removeClass('fixed');
    }
  });
  // ===========================
  // scrollup button style
  

  function show_hide_scrollup(){
    if($(window).scrollTop()>500){
         $('.scrollup').fadeIn(200);
    } 
    else{
        $('.scrollup').fadeOut(200); 
    }
  }
 
 $(window).ready(function(){
   
         // au défilement de la page, on affiche ou cache le bouton
        $(window).on('scroll',function(){
             /* debug */
             $('.var1').text($(window).scrollTop());      
             show_hide_scrollup();
       });
       // au clic sur le bouton, retour en haut de la page avec animation
       $('.scrollup').on('click',function(){
           // ne pas utiliser e.preventdefault
           $('html, body').animate({ scrollTop : 0 }, 500); 
           return false;
       });
       // au  chargement de la page
       show_hide_scrollup();       
 });

//  wow animation start

new WOW().init();
