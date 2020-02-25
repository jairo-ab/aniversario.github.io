/*$(window).on('load', function () {
    document.getElementById("carregar").style.display = "none";
    document.getElementById("corpo").style.display = "block";
});*/
var intervalo = setInterval(function () {
    clearInterval(intervalo);
    document.getElementById("carregar").style.display = "none";
    document.getElementById("corpo").style.display = "block";
}, 3000)


