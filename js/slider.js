window.onload = function () {
    var image = document.getElementById("images");
    var img_array = ["images/nature1.jpg", "images/nature5.jpg", "images/nature4.jpg",
    "images/nature2.jpg"];
    var index = 0;
    // var interval = 2000;
    function slide() {
        image.src = img_array[index++ % img_array.length]; //After that index is incremented to 1.
    }

    setInterval(slide, 2000);
}