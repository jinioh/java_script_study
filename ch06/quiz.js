const img = document.querySelector("#container > img");

img.addEventListener("mouseover", function() {
    img.src = "images/pic-5.jpg";
});

img.addEventListener("mouseout", function() {
    img.src = "images/pic-1.jpg"
});