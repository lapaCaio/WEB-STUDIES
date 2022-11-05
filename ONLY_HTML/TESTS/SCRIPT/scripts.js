function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnReadMore = document.getElementById("btnReadMore");

    //talvez usar o this e passar algo como parametro...


    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btnReadMore.innerHTML = "Read More"
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btnReadMore.innerHTML = "No Read More"
    }
}

function readMoreII(d, m, b) {
    var dots = document.getElementById(d);
    var moreText = document.getElementById(m);
    var btnReadMore = document.getElementById(b);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btnReadMore.innerHTML = "Read More"
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btnReadMore.innerHTML = "No Read More"
    }
}