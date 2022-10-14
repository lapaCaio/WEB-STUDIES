function readMore(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnReadMore = Document.getElementById("btnReadMore");

    if(dots.style.display ===  "none"){
        dots.style.display = "inline";
        moreText.style.display = "none";
        btnReadMore.innerHTML = "Read More";
    }else{
        dots.style.display = "none";
        moreText.style.display = "inline";
        btnReadMore.innerHTML = "No Read More"
    }
}