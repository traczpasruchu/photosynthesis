function swapImage() {
    var imageDisplayed = document.getElementById("display-image");
    if (imageDisplayed.src.match("Images/Photosynthesis_1.png")) {
        imageDisplayed.src = "Images/Photosynthesis_2.png";
    }
    else {
        imageDisplayed.src = "Images/Photosynthesis_1.png";
    }
}