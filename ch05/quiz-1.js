const btn = document.querySelector('#view');
// const detail = document.querySelector('#detail')

function toggle () {
    const content = document.querySelector('#detail');
    content.classList.toggle("hidden");
}

btn.addEventListener('click', toggle);