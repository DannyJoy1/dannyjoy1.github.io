var check = document.querySelector(".check");
check.addEventListener('click', idiom);

function idiom() {
    let id = check.checked;
    if (id == false) {
        location.href = "/index.html";

    } else {
        location.href = "/en/index.html"
    }
}