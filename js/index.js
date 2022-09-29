var imageArray = ["images/believe.png", "images/espectacular.png", "images/euphoria.png", "images/isla.png","images/lessons.png","images/marchar.png","images/own.png","images/private.png","images/stupid.png","images/vivir.png"];
var songArray = ["Believe","Espectacular","Euphoria","La Isla Bonita","Lessons in Love","Ahora te puedes marchar","On My Own","Private Dancer","Stupid Little Things","Vivir Mi Vida"];
var artistArray = ["Cher","Fangoria","Loreen","Madonna","Level 42","Luis Miguel","Nikka Costa","Tina Turner","Anastacia","Marc Anthony"];
var durationArray = ["4:00","4:00","3:34","4:03","4:32","3:10","3:33","4:00","3:31","4:12"];
var indexA = 1;
var indexB = -1;

var audio = new Audio(),
    i = 0;
var playlist = new Array("music/Cher.mp3","music/Espectacular.mp3","music/Euphoria.mp3","music/Isla.mp3","music/Lessons.mp3","music/Marchar.mp3","music/Own.mp3","music/Private.mp3","music/Stupid.mp3","music/Vivir.mp3");

audio.addEventListener('ended', function () {
    next_handler();
}, true);
audio.volume = 0.3;
audio.loop = false;
audio.src = playlist[0];

function init_web() {
    buttons_control();
    show_songs();
}

function buttons_control() {
    let back = document.getElementById("back");
    back.onclick = back_handler;

    let play = document.getElementById("play");
    play.onclick = play_handler;

    let pause = document.getElementById("pause");
    pause.onclick = pause_handler;

    let next = document.getElementById("next");
    next.onclick = next_handler;

    let stop = document.getElementById("stop");
    stop.onclick = stop_handler;

    let loop = document.getElementById("loop");
    loop.onclick = loop_handler;
}

function next_handler(){
    if(indexA < 0){
        indexA = 1;
    }
    console.log(indexA);
    if(indexA == 10) {
        indexA = 0;
    }
    //change cover image
    document.getElementById("mainImage").setAttribute("src",imageArray[indexA]);
    document.getElementById("mainImage").setAttribute("height", 300);
    document.getElementById("mainImage").setAttribute("width", 300);
    //change song title
    document.getElementById("song").innerHTML = songArray[indexA];
    //change artist
    document.getElementById("artist").innerHTML = artistArray[indexA];

    audio.src = playlist[indexA];
    play_handler();

    indexA++;
}

function back_handler(){
    if(indexB == -1) {
        indexB = 9; 
    }

    //change cover image
    document.getElementById("mainImage").setAttribute("src",imageArray[indexB]);
    document.getElementById("mainImage").setAttribute("height", 300);
    document.getElementById("mainImage").setAttribute("width", 300);
    //change song title
    document.getElementById("song").innerHTML = songArray[indexB];
    //change artist
    document.getElementById("artist").innerHTML = artistArray[indexB];

    audio.src = playlist[indexB];
    play_handler();
    indexB--;
}

function show_songs(){
    for (i = 0; i < playlist.length; i++) {
        var btn = document.createElement("button");
        btn.setAttribute("id", "list");
        btn.setAttribute("onclick", "button_play("+i+")");
        btn.innerHTML = (i+1) +"&emsp;&emsp;"+ artistArray[i] + " - " + songArray[i] + "&emsp;&emsp;&emsp;" + durationArray[i];
        document.getElementById("playlist").appendChild(btn);
    }
    
}

function button_play(i){
    document.getElementById("play").style.visibility = "hidden";
    document.getElementById("play").style.display = "none";
    document.getElementById("pause").style.visibility = "visible";
    document.getElementById("pause").style.display = "inline";
    //when u press from playlist
    document.getElementById("mainImage").setAttribute("src",imageArray[i]);
    document.getElementById("mainImage").setAttribute("height", 300);
    document.getElementById("mainImage").setAttribute("width", 300);
    //change song title
    document.getElementById("song").innerHTML = songArray[i];
    //change artist
    document.getElementById("artist").innerHTML = artistArray[i];

    audio.src = playlist[i];
    audio.play();
}

function play_handler() { 
    document.getElementById("play").style.visibility = "hidden";
    document.getElementById("play").style.display = "none";
    document.getElementById("pause").style.visibility = "visible";
    document.getElementById("pause").style.display = "inline";
    audio.play();
} 

function pause_handler() { 
    document.getElementById("pause").style.visibility = "hidden";
    document.getElementById("pause").style.display = "none";
    document.getElementById("play").style.visibility = "visible";
    document.getElementById("play").style.display = "inline";
    audio.pause();
}

function stop_handler(){
    document.getElementById("pause").style.visibility = "hidden";
    document.getElementById("pause").style.display = "none";
    document.getElementById("play").style.visibility = "visible";
    document.getElementById("play").style.display = "inline";
    audio.pause();
    audio.currentTime = 0;
}

function loop_handler(){
    audio.setAttribute("loop","loop");
}

window.onload = init_web;