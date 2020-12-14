// JavaScript source code
var width700_n_slide = window.matchMedia("(min-width: 700px)");
width_responsivo_n_slide(width700_n_slide);
width700_n_slide.addListener(width_responsivo_n_slide);

var width1100_n_slide = window.matchMedia("(min-width: 1110px)");
width_responsivo_n_slide(width1100_n_slide);
width1100_n_slide.addListener(width_responsivo_n_slide);

var width700_v_slide = window.matchMedia("(min-width: 700px)");
width_responsivo_v_slide(width700_v_slide);
width700_v_slide.addListener(width_responsivo_v_slide);

var width1100_v_slide = window.matchMedia("(min-width: 1110px)");
width_responsivo_v_slide(width1100_v_slide);
width1100_v_slide.addListener(width_responsivo_v_slide);


function width_responsivo_n_slide(width) {

    if (width.matches) {
        var marginslide = document.getElementById("n_slide").style.marginLeft;
        switch (marginslide) {
            case '-83.332%':
                document.getElementById("n_slide").style.marginLeft = "-66.666%";
                break;
            case '-66.666%':
                document.getElementById("n_slide").style.marginLeft = "-50%";
                break;
        }
    }
}

function width_responsivo_v_slide(width) {

    if (width.matches) {
        var marginslide = document.getElementById("v_slide").style.marginLeft;
        switch (marginslide) {
            case '-83.332%':
                document.getElementById("v_slide").style.marginLeft = "-66.666%";
                break;
            case '-66.666%':
                document.getElementById("v_slide").style.marginLeft = "-50%";
                break;
        }
    }
}