$(document).ready(function(){

  $(".main-slider").owlCarousel({
    navigation : false,
    pagination : true,
    paginationNumbers: false,
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,
    items : 1,
    itemsCustom : false,
    singleItem : true,
    itemsScaleUp : false,
  });

  $(".vacansii-slider").owlCarousel({
    navigation : true,
    pagination : false,
    paginationNumbers: false,
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,
    items : 1,
    itemsCustom : false,
    singleItem : true,
    itemsScaleUp : false,
  });

    $(".certificates-slider").owlCarousel({
    navigation : true,
    pagination : false,
    paginationNumbers: false,
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,
    items : 6,
    itemsCustom : false,
    itemsDesktop : [1199,5],
    itemsDesktopSmall : [980,4],
    itemsTablet: [768,3],
    itemsTabletSmall: false,
    itemsMobile : [479,2],
    singleItem : false,
    itemsScaleUp : false,
  });
 

  $(".fancybox").fancybox({
  	padding:0,
  });
























$(".gallery__left-holder .btn-01").click(function() {
    $('html, body').animate({
        scrollTop: $("#footer").offset().top
    }, 2000);
});

$('.slider-holder .main-slider ul li').each(function(e) {
	var bg_ = 'url(' + $(this).find('img').attr('src') + ')';
	$(this).css('background-image', bg_);
});

    $('.faq-page__open').on("click", function() {
      $(this).toggleClass('active');
       $(".faq-page__scroll-menu, .faq-page__left-title span").slideToggle("slow");

    });

});