
window.addEventListener('DOMContentLoaded', function(){
new WOW().init();
});

window.addEventListener('DOMContentLoaded', function(){
    var header = $(".container-wrapper").offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop() > header){
            $(".container-wrapper").css("position","fixed");
        }
    });
});

window.addEventListener('DOMContentLoaded', function() {
    $('header a').click(function(){
        var id =$(this).attr('href');
        var position = $(id).offset().top;
        $('html,body').animate({
            'scrollTop':position
        },3000);
    });
});

window.addEventListener('DOMContentLoaded', function() {
   $('#lnquiry').click(function() {
       var position = $('#contact').offset().top;
       $('html,body').animate({
           'scrollTop':position
       },1000);
   });
});



window.addEventListener('DOMContentLoaded', function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100) {
            $('.floating').show();
            $('.floating').addClass('scrollin');

        } else {
            $('.floating').hide();
        };
    });

});

window.addEventListener('DOMContentLoaded', function(){
    $('.floating').click(function() {
        var position = $('.home-inner').offset().top;
        $('html,body').animate({
            'scrollTop':position
        },3000);
    });
});

window.addEventListener('DOMContentLoaded', function(){
    $('header li a').click(function(){
        $('header li a').removeClass('active');
        $(this).addClass('active');
    });
});

window.addEventListener('DOMContentLoaded', function(){
    $('#privacy-btn').click(function() {
        $('#modal-wrapper').fadeIn(500);
    });
});

window.addEventListener('DOMContentLoaded', function(){
    $('#close').click(function() {
        $('#modal-wrapper').fadeOut(500);
    })
});

window.addEventListener('DOMContentLoaded', function(){
    $('.question-ansewer').click(function() {
        var $answer = $(this).find('.answer');
        if($answer.hasClass('open')) {
            $answer.removeClass('open');
            $answer.slideUp();
            $(this).find('span').html('<img src="img/plus.svg" alt="">')
        }else {
            $answer.addClass('open');
            $answer.slideDown();
            $(this).find('span').html('<img src="img/minus.svg" alt="">')
        }
    });
});

window.addEventListener('DOMContentLoaded', function(){
    $('.btns').click(function() {
        var $content = $(this).find('.acordion-content');
        $content.slideToggle();
    });
});


// window.addEventListener('DOMContentLoaded', function(){
//     $(window).scroll(function() {
//         $('.fadein').each(function(){
//             var elemPos = $(this).offset().top;
//             var scroll =$(window).scrollTop();
//             if(scroll > elemPos -windowHeight + 100){
//             }
//         })
//     })
// });



// window.addEventListener('DOMContentLoaded', function() {
// $('.swiper-pagination-bullet').click(function() {
//     $('.active').removeClass('active');
//     var clickedIndex = $('.swiper-pagination-bullet').index($(this));
//     $('.slide-image').eq(clickedIndex).addClass('active');
// });
// });

// window.addEventListener('DOMContentLoaded', function() {
//     $('.change').click(function() {
//        var $displaySlide = $('.active');
//        var $slideIndex = $('.slide-image').index('.active');
//        $displaySlide.removeClass('active');
//        if($(this).hasClass('next-btn')) {
//            $displaySlide.next().addClass('active');
//        } else if ($slideIndex == $('.images').eq(length)){
//         $('images').eq(0).addClass('active');
//        } else if ($slideIndex == $('.images').eq(0)){
//         $('images').eq(length).addClass('active');
//     } else {
//         $displaySlide.prev().addClass('active');

//        }
       
       
//        });
//     });

    






// const images = [
//     'img/mainvisual.png',
//     'img/sky.jpg',
//     'img/beach.jpg'
// ]

// let currentIndex = 0;

// const mainImage = document.getElementById('mainimg');
// mainImage.src = images[currentIndex];
// console.log(currentIndex);

// images.forEach((image,index) =>{
//     const img = document.createElement('img');
//     img.src = image;
// });


// const next = document.getElementById('next');
// next.addEventListener('click' , () =>{
//     let target = currentIndex + 1;
//     if(target === images.length) {
//         target = 0;
//     }
// });
// const prev = document.getElementById('prev');
// prev.addEventListener('click' , () =>{
//     let target = currentIndex -1;
//     if(target < 0) {
//         target = images.length -1;

//     }
// });
// const prev = document.getElementById('prev');


// $(window).on('resize', function () {
//     if (window.matchMedia('(min-width:768px)').matches) {
//           $("nav ul").slideUp(200);
//      }
// });



// window.addEventListener('DOMContentLoaded', function(){
//         $("button").click(function(){
//             $("nav ul").slideToggle(200);
// });
// });

// 'use strict';
// {
//    const header = document.getElementById('header');

//    $(window).scroll(function() {
//        let scroll = $
//    })
// }
