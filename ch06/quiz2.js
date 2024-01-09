const button = document.querySelector("#bttn");
const menu = document.querySelector("#nav");

button.addEventListener("click", function() {
    button.classList.toggle('active');
    menu.classList.toggle('active');
});
