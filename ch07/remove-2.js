const items = document.querySelectorAll("li");

for (item of items) {
    item.addEventListener("click", function() {
        this.parentNode.removeChild(this);
    });
}