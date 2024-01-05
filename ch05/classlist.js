const title = document.querySelector("#title");

title.onClick = () => {
    if (!title.classList.contains("clicked")) {
        title.classList.add("clicked");
    } else {
        title.classList.remove('clicked');
    }
    
}

const btn = document.querySelector("button");
btn.onClick = function() {
    document.body.classList.toggle("dark");
}