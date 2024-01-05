const selectMenu = document.querySelector("#major");

function displaySelect() {
    let selectedText = selectMenu.options[selectMenu.selectIndex].innerText;
    alert(`[$selectText]를 선택`);
}
selectMenu.onChange = displaySelect;