const notiBox = document.querySelector("#noti-box");
const bttn = document.querySelector("#bttn");

bttn.addEventListener("click", () => {
    const noti = document.createElement("div");
    noti.classList.add("noti");
    noti.innerText = "알림발생!!"
    notiBox.appendChild(noti);

    setTimeout(() => {
        noti.remove();
    }, 3000);
});