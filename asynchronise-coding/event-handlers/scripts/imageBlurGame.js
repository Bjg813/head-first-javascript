// we want to run the script only after the page has fully loaded so we can access the DOM correctly
window.onload = init;
function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
    }
}

function showAnswer(eventObj) {
    var image = eventObj.target;
    var name = image.id;
    name = name + ".jpg";
    image.src = "images/" + name;
    // Once the image is clicked and unblurred, set a countdown timer to reset the blurryness
    setTimeout(reblur, 2000, image);
}

function reblur(image) {
    var name = image.id;
    name = name + "blur.jpg";
    image.src = "images/" + name;
}


