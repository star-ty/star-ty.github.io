var startySlider = document.getElementById("startySlider");
var startyImage = document.getElementById("startyImage");
var startyImageLink = document.getElementById("startyImageLink");
var startyLabel = document.getElementById("startyLabel");
startySlider.idx = [...Array(1111).keys()];

const gifFiles = [11, 158, 2, 8, 112, 16, 21, 82, 12, 18, 26, 13, 198, 47];

startySlider.oninput = function() {
    if (this.idx.length == 0) {
        startyImage.src = "_static/startys/starty-backup.png";
        startyLabel.innerHTML = "starty not found";
        return;
    }

    var number = startySlider.idx[this.value - 1] + 1;

    startyLabel.innerHTML = "starty #" + number;
    startyLabel.href = "./startys/starty-" + number + ".html";
    startyImageLink.href = startyLabel.href

    var extension = ".png";
    if (gifFiles.includes(number)) {
        extension = ".gif";
    }

    var imageSrc = "_static/startys/" + number + extension;
    startyImage.src = imageSrc;
}

startySlider.oninput();

startySlider.updateFilter = function(idx) {
    var currentFraction = this.value / this.max;
    this.idx = idx;
    this.max = idx.length - 1;
    this.value = currentFraction * this.max;
    this.oninput();
}
