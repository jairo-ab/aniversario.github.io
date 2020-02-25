/*$(window).on(load, function () {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("status").style.display = "block";
});*/
var intervalo = setInterval(function (){
    clearInterval(intervalo);
    document.getElementById("loading").style.display = "none";
    document.getElementById("status").style.display = "block";
},3000);

$(function(){
    var scroll = new SmoothScroll('a[href*="#section-"]');
});