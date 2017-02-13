$(document).ready(function() {
  $(".scroolTo").click(function() {
      var id = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(id).offset().top
      }, 2000);
  });
	$('.closebtn').click(function(){
			$('.overlays').hide();
	});
	$('.btn-cancel').click(function(){
    var magnificPopup = $.magnificPopup.instance;
		magnificPopup.close();
	});
  $('.sf-menu').slicknav({
    label: '',
    duration: 1000,
    easingOpen: "easeOutBounce", //available with jQuery UI
    prependTo:'#mobile-navigation'
  });
  function close(){
      $( ".closeall" ).click(function() {
          var linkid = $(this).attr('rel');
          var target = $(this).attr('target');
          $("."+linkid+" a").removeAttr( "class" );
          $(target).toggleClass( "in" );
          $(this).remove();
      });
  }
  $('.cutomscroll').perfectScrollbar();
	$('.showPopup').magnificPopup({
	  type: 'inline',
	  fixedContentPos: false,
	  fixedBgPos: true,
	  overflowY: 'auto',
	  closeBtnInside: true,
	  preloader: false,
	  midClick: true,
	  removalDelay: 300,
	  mainClass: 'my-mfp-zoom-in'
	});
  $( function() {
    $( ".accordion" ).accordion({
      heightStyle: "content",
      collapsible: true,
      active: false,
    });
  } );
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      dots:false,
      navText:["<i class='icon-chevron-left2'></i>","<i class='icon-chevron-right2'></i>"],
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:3,
              nav:true,
              loop:false
          }
      }
  })
});

$(window).load(function() {
  $('.flexslider').flexslider({
      animation: "slide",
      controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
      directionNav: true,

    });
  $('.carousel').flexslider({
      animation: "slide",
      controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
      directionNav: true,
      slideshow:false,
      video:true,
      start: function(){
        $(".player").stop();
      },
    });
});
