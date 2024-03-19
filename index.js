let btn = document.querySelector(".btn")
let ready = document.querySelector(".ready")

/*btn.addEventListener('click', popup)
function popup(){
ready.innerHTML = "Thank you for reading"
}*/

btn.addEventListener("click", popup)
function popup(){
    ready.innerHTML = "Thank you for reading";
    alert("You have reached the bottom of the page.")
}