const audio = new Plyr('#audio', {
    controls: ['play', 'mute', 'volume']
});
const video = new Plyr('#video');

// Not needed...
var source = document.getElementById("audioSource").src;
var title = document.getElementById("title");
var stream = source + "?nocache=" + Math.round((new Date()).getTime() / 1000);
var url = 'https://stream.radiochat.com.br:8010/7.xsl';
var intervalo;
var str = '';

let xhr = (url) => {
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var str = xmlhttp.responseText.slice(xmlhttp.responseText.lastIndexOf(',') + 1);
            document.getElementById("title").innerHTML = str;
        }
    }
    xmlhttp.open("GET", url);
    xmlhttp.send(null);
};

let refresh = () => {
    stream = source + "?nocache=" + Math.round((new Date()).getTime() / 1000);
    audio.source = {
        type: 'audio',
        title: 'Stream',
        sources: [
            {
                src: stream,
                type: 'audio/mp3',
            }
        ]
    };
    audio.load();
};

audio.on('pause', event => {
    refresh();
});


title.addEventListener("mouseover", function () {
    this.classList.remove('truncate');
});
title.addEventListener('mouseleave', function () {
    this.classList.add('truncate');
})

setInterval(function () { xhr(url); }, 3000);

// Not needed...
window.audio = audio;
window.video = video;
