// let progress = document.querySelector(".progress-bar");
// let halfwindow = window.innerHeight * 0.25;

// window.onscroll = function(){
//     // let scrolled = (scrollY / documentHeight) * 100;
//     let scrolled = scrollY - halfwindow;
//     progress.style.height = scrolled + "px";
//     updatePos();
//     // console.log(elementHeight);
//     // console.log(i);
// }

// $(document).ready(function(){
//     $('section').each(function(){
//         $('.progress-bar').prepend('<div class="tick"></div>');
//     });

//     $('.tick').on('click', function(){
//         var ticketIndex = $(this).index();
//         $('body').scrollTop($(window).height() * ticketIndex);
//     });

// });

// // var i = 0;
// var sliderTop,pointerPos,curretSection;
// var bodyHeight = $('body').height();
// var sliderHeight = $('.progress-bar').height();
// var marginTop = $('.section2').css('margin-top');
// var marginBot = $('.section2').css('margin-bottom');
// var marginTopInt = parseInt(marginTop.replace('px', ''));
// var marginBotInt = parseInt(marginBot.replace('px', ''));
// var sectionHeight = [$('.line1').height() + ($('.section1').height() / 2), $('.line2').height(), $('.line3').height(), $('.line4').height()];
// var elementHeight = sectionHeight[0];
// var sectionAmount = $('section').length;
// var scale = (bodyHeight - (elementHeight)) / (sliderHeight - $('.progress-bar').outerHeight());
// var currentSection = 0;
// var angka = 1;
// var validator = angka;


// function updatePos(){
//     // var scale = (bodyHeight - (elementHeight)) / (sliderHeight - $('.progress-bar').outerHeight());
//     // var currentSection = $(window).scrollTop() / elementHeight;
//     currentSection = $(window).scrollTop() / elementHeight;
//     angka = Math.ceil(currentSection + 0.01);
//     var currentSectionNum = 1;
//     // var angka = Math.ceil(currentSection + 0.01);
//     // var validator = angka;
//     var sliderTop = $(window).scrollTop() / scale;
//     var i = 0;

//     if (angka !== validator){
//         currentSectionNum++;
//         i++;
//         // validator = angka;
//     }
//     // if (currentSection >= angka){
//     //     currentSectionNum++;
//     //     i++;
//     //     elementHeight = sectionHeight[i];
//     // } else{
//     //     angka++;
//     // }


//     console.log(currentSection);
//     // console.log(sectionHeight[i]);
//     // console.log(validator);
//     console.log(angka);
//     $('.progress-bar-text').css('top', sliderTop).text(currentSectionNum + '/' + sectionAmount);

//     elementHeight = sectionHeight[i];
    
// }