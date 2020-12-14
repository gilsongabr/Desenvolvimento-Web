// JavaScript source code

document.getElementsByClassName("prox")[0].addEventListener("click", slide_prox);
document.getElementsByClassName("ant")[0].addEventListener("click", slide_ant);
document.getElementsByClassName("prox1")[0].addEventListener("click", slide_prox1);
document.getElementsByClassName("ant1")[0].addEventListener("click", slide_ant1);

function slide_prox() {

    var marginslide = document.getElementById("n_slide").style.marginLeft;
    document.getElementById("n_slide").style.transition = "all 0.7s";

    switch (marginslide) {
        case '':
            document.getElementById("n_slide").style.marginLeft = "-16.666%";
            break;
        case '-16.666%':
            document.getElementById("n_slide").style.marginLeft = "-33.2222%";
            break;
        case '-33.2222%':
            document.getElementById("n_slide").style.marginLeft = "-50%";
            break;
    }

    if ((document.getElementsByTagName("body")[0].clientWidth) <= "700") {
        switch (marginslide) {
            case '-50%':
                document.getElementById("n_slide").style.marginLeft = "-66.666%";
                break;
            case '-66.666%':
                document.getElementById("n_slide").style.marginLeft = "-83.332%";
                break;
        }
    }

    if ((document.getElementsByTagName("body")[0].clientWidth) >= "700" && (document.getElementsByTagName("body")[0].clientWidth) <= "1100") {
        switch (marginslide) {
            case '-50%':
                document.getElementById("n_slide").style.marginLeft = "-66.666%";
                break;
        }
    }

}

function slide_ant() {
    var marginslide = document.getElementById("n_slide").style.marginLeft;
    document.getElementById("n_slide").style.transition = "all 0.7s";

    switch (marginslide) {
        case '-16.666%':
            document.getElementById("n_slide").style.marginLeft = '';
            break;
        case '-33.2222%':
            document.getElementById("n_slide").style.marginLeft = "-16.666%";
            break;
        case '-50%':
            document.getElementById("n_slide").style.marginLeft = "-33.2222%";
            break;
    }

    if ((document.getElementsByTagName("body")[0].clientWidth) <= "1100") {
        switch (marginslide) {
            case '-66.666%':
                document.getElementById("n_slide").style.marginLeft = "-50%";
                break;
            case '-83.332%':
                document.getElementById("n_slide").style.marginLeft = "-66.666%";
                break;
        }
    }
}

function slide_prox1() {

    var marginslide = document.getElementById("v_slide").style.marginLeft;
    document.getElementById("v_slide").style.transition = "all 0.7s";

    switch (marginslide) {
        case '':
            document.getElementById("v_slide").style.marginLeft = "-16.666%";
            break;
        case '-16.666%':
            document.getElementById("v_slide").style.marginLeft = "-33.2222%";
            break;
        case '-33.2222%':
            document.getElementById("v_slide").style.marginLeft = "-50%";
            break;
    }

    if ((document.getElementsByTagName("body")[0].clientWidth) <= "700") {
        switch (marginslide) {
            case '-50%':
                document.getElementById("v_slide").style.marginLeft = "-66.666%";
                break;
            case '-66.666%':
                document.getElementById("v_slide").style.marginLeft = "-83.332%";
                break;
        }
    }

    if ((document.getElementsByTagName("body")[0].clientWidth) >= "700" && (document.getElementsByTagName("body")[0].clientWidth) <= "1100") {
        switch (marginslide) {
            case '-50%':
                document.getElementById("v_slide").style.marginLeft = "-66.666%";
                break;
        }
    }

}

function slide_ant1() {
    var marginslide = document.getElementById("v_slide").style.marginLeft;
    document.getElementById("v_slide").style.transition = "all 0.7s";

    switch (marginslide) {
        case '-16.666%':
            document.getElementById("v_slide").style.marginLeft = '';
            break;
        case '-33.2222%':
            document.getElementById("v_slide").style.marginLeft = "-16.666%";
            break;
        case '-50%':
            document.getElementById("v_slide").style.marginLeft = "-33.2222%";
            break;
    }

    if ((document.getElementsByTagName("body")[0].clientWidth) <= "1100") {
        switch (marginslide) {
            case '-66.666%':
                document.getElementById("v_slide").style.marginLeft = "-50%";
                break;
            case '-83.332%':
                document.getElementById("v_slide").style.marginLeft = "-66.666%";
                break;
        }
    }
}