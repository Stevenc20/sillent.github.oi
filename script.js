let progress = document.querySelector(".progress-bar");
let halfwindow = window.innerHeight * 0.25;

window.onscroll = function(){
    let scrolled = scrollY - halfwindow;
    progress.style.height = scrolled + "px";
}

window.addEventListener('scroll', reveal);

function reveal (){
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 90;

    if (revealtop < windowheight - revealpoint){
      reveals[i].classList.add('anime')
    }
    else{
      reveals[i].classList.remove('anime')
    }
  }
}
// ke kanan
window.addEventListener('scroll', reveal2);
function reveal2 (){
  var reveals = document.querySelectorAll('.reveal2');

  for (var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 90;

    if (revealtop < windowheight - revealpoint){
      reveals[i].classList.add('anime')
    }
    else{
      reveals[i].classList.remove('anime')
    }
  }
}
// ke kiri
window.addEventListener('scroll', reveal3);
function reveal3 (){
  var reveals = document.querySelectorAll('.reveal3');

  for (var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 90;

    if (revealtop < windowheight - revealpoint){
      reveals[i].classList.add('anime')
    }
    else{
      reveals[i].classList.remove('anime')
    }
  }
}