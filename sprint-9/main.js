document.onclick = start;

var colors = ['FF0028','#FF0028','#780B74','#FFFF00','#00FF00','#00FFFF','#EE487B', '#40F933', '#FF00A8','#FF0028','#FFFF00','#EA9999']

function animateCircles () {
    var circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle);

    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';

    var color = colors[Math.floor(Math.random() * colors.length)];
    circle.style.borderColor = color;

    circle.style.transition = "all 0.5s linear 0s";

    circle.style.left = circle.offsetLeft - 20 + 'px';
    circle.style.top = circle.offsetTop - 20 + 'px';

    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.borderWidth = "5px";
    circle.style.opacity = 0;
}

function play(){
    var audio = document.getElementById("audio");
    audio.play();
}

function start (){
    play();
    animateCircles();
}