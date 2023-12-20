$('.owl-carousel').owlCarousel({
    loop: true,
    // margin: 10,
    // center:true,
    autoplay: true,
    autoplayHoverPause: true,
    dots:false,
    // smartSpeed: 250,
    // lazyLoad: true,
    // slideBy: 2,
    // mouseDrag: true,
    // touchDrag:true,
    // freeDrag:true,
    // mergeFit:true,
    autoplayTimeout: 1500,
    responsive: {
    300: {
    items: 2,
    },
    600: {
    items: 3,
    },
    1000: {
    items: 5,
    },
},
});


// video carousel

$('.owl-carousel').owlCarousel({
    // items:1,
    merge:true,
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoplayTimeout:1500,
    video:true,
    lazyLoad:true,
    center:true,
    responsive:{
        300:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})