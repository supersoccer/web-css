/* This is all script licensed by supersoccer */
/*
 * Author: Satia Putra
 * Project Name: Super Soccer TV
 * Version: 1.0
 */

var appMaster = {
	slider : function() {
		//$('.slider .carousel-inner').find('.item:first-child').addClass('active');
	},
	toggleElement: function(){
        $('.dropdown').hover(function(){
            $(this).addClass('open');
            $('.navbar .dropdown > a').click(function(){
				location.href = this.href;
			});
        },function(){
            $(this).removeClass('open');
        });
    },
    slimScroller : function(){
    	$('.scroller').each(function () {
	        $(this).slimScroll({
	        	position: 'left',
	            right: '10px',
	            color: '#ea2d34',
	            opacity: 1,
	            height: $(this).attr("data-height"),
	            alwaysVisible: ($(this).attr("data-always-visible") == "1" ? true : false),
	            railVisible: true,
  				railColor: '#f7ac54',
  				railOpacity: 1,
	            disableFadeOut: true,
	            borderRadius: "0px",
	            railBorderRadius: "0px",
	            distance: "0px",
	        });
	    });
    },
	slickScroller : function(){
		$(".schedule-box .schedule-list").slick({
			dots: !1,
			infinite: !1,
			speed: 300,
			slidesToShow: 7,
			centerPadding: 30,
			prevArrow: $(".schedule-control .prev"),
			nextArrow: $(".schedule-control .next"),
			responsive: [{
						breakpoint: 769,
						settings: {slidesToShow: 5,initialSlide: 3}
					}, 
					{
						breakpoint: 480,
						settings: {slidesToShow: 3,initialSlide: 4}
					}]
		});
    },
    scheduleHome : function(){
		/* url schedule table */
		var tableRowLiveAndReplay = $('table#replays>tbody>tr,table#live>tbody>tr'),
			tableRowLWhatsOn = $('table#whatsOn>tbody>tr');

		tableRowLiveAndReplay.hover(function(){
	        $(this).find('td').css({"color":"#ea2d34","cursor":"pointer"});

	        }, function(){
	        $(this).find('td').css("color", "#666");
	    }).click(function(){
			var urlVideo = $(this).attr('url');

			if (typeof urlVideo !== typeof undefined && urlVideo !== false) {
				if(urlVideo.length) {
					window.location.href = urlVideo;
				}
			}
	    });

		tableRowLWhatsOn.hover(function(){
			$(this).toggleClass("active");
			$(this).find('td>a').css({"cursor":"pointer"});
	    });

	    tableRowLWhatsOn.find('td').click(function(){
			var urlVideo = $(this).find('a').attr('url');

			if (typeof urlVideo !== typeof undefined && urlVideo !== false) {
				if(urlVideo.length) {
					window.location.href = urlVideo;
				}
			}
	    });
    }
}

$(document).ready(function(){
	appMaster.slider();
	appMaster.toggleElement();
	appMaster.slimScroller();
	appMaster.slickScroller();
	appMaster.scheduleHome();

	$('.carousel').carousel({
	  interval: false
	});
	$('.carousel').carousel('pause');
	$('.carousel').on('slide.bs.carousel', function () {
	$('.player').each(function(){
		$(this).data("flowplayer").stop();
	});
	  
	});

	
});