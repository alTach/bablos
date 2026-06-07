window.onscroll= function animatePage(){
    header();
    // isFilming(window.scrollY);
}

function header(){  
    var nav = document.querySelector(".header-navigation");
    var logo_1 = document.querySelector(".bb-logo-var-1");
    var logo_2 = document.querySelector(".bb-logo-var-2");
    var video = document.querySelector(".ui-cover");
    if(window.scrollY > 0){
        nav.classList.add('header-navigation_black');

        logo_1.classList.add('uk-hidden');
        logo_2.classList.remove('uk-hidden'); 
    }
    else{
        nav.classList.remove('header-navigation_black');

        logo_2.classList.add('uk-hidden');
        logo_1.classList.remove('uk-hidden'); 
    }
}
// function isFilming(isUp){
//     var is_filming = document.querySelector("#test-easing > div > div > div.bb-is-filming-video");
//     var top = is_filming.getBoundingClientRect().top;
//     var lastValue = isUp;
//     console.log(12);
//     $(window).bind('mousewheel', function(event) {
//         if (event.originalEvent.wheelDelta >= 0) {
//             if(top < 828 && top > 300){
//                 is_filming.style.width = (parseInt(is_filming.style.width) + 10) + "px"
//             }
//         } else {
//             is_filming.style.width = (parseInt(is_filming.style.width) - 10) + "px"
//         }
//     });
// }