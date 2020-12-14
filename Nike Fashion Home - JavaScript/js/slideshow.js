// JavaScript source code
document.getElementsByClassName("icone_prox")[0].addEventListener("click", slide_prox);
document.getElementsByClassName("icone_ant")[0].addEventListener("click", slide_ant);
var meuIntervalo = setInterval(slide_prox, 7000);

function slide_prox() {


    var marginslide = document.getElementById("slide").style.marginLeft;
    document.getElementById("slide").style.transition = "all 0.7s";    
    switch (marginslide) {
        case '':
            document.getElementById("slide").style.marginLeft = "-20%";
            document.getElementsByClassName("icone_ant")[0].src = "img/anterior.png";
            document.getElementsByClassName("icone_prox")[0].src = "img/proximo.png";
            break;
        case '-20%':
            document.getElementById("slide").style.marginLeft = "-40%";
            document.getElementsByClassName("icone_ant")[0].src = "img/anterior_b.png";
            document.getElementsByClassName("icone_prox")[0].src = "img/proximo_b.png";
            break;
        case '-40%':
            document.getElementById("slide").style.marginLeft = "-60%";
            document.getElementsByClassName("icone_ant")[0].src = "img/anterior_b.png";
            document.getElementsByClassName("icone_prox")[0].src = "img/proximo.png";
            break;
        case '-60%':
            document.getElementById("slide").style.marginLeft = "-80%";
            document.getElementsByClassName("icone_prox")[0].src = "img/proximo_b.png";
            break;
        case '-80%':
            document.getElementsByClassName("icone_ant")[0].src = "img/anterior.png";
            document.getElementById("slide").style.marginLeft = '';
            break;
    }
}

function slide_ant() {

    var marginslide = document.getElementById("slide").style.marginLeft;
    document.getElementById("slide").style.transition = "all 0.7s";

    switch (marginslide) {
        case '':
            document.getElementById("slide").style.marginLeft = "-80%";
            document.getElementsByClassName("icone_ant")[0].src = "img/anterior_b.png";
            document.getElementsByClassName("icone_prox")[0].src = "img/proximo_b.png";
            break;
        case '-20%':
            document.getElementById("slide").style.marginLeft = '';
            document.getElementsByClassName("icone_ant")[0].src = "img/anterior.png";
            document.getElementsByClassName("icone_prox")[0].src = "img/proximo_b.png";
            break;
        case '-40%':
            document.getElementById("slide").style.marginLeft = "-20%";
            document.getElementsByClassName("icone_ant")[0].src = "img/anterior.png";
            document.getElementsByClassName("icone_prox")[0].src = "img/proximo.png";
            break;
        case '-60%':
            document.getElementById("slide").style.marginLeft = "-40%";
            document.getElementsByClassName("icone_prox")[0].src = "img/proximo_b.png";
            break;
        case '-80%':
            document.getElementById("slide").style.marginLeft = '-60%';
            document.getElementsByClassName("icone_prox")[0].src = "img/proximo.png";
            break;
    }
}