const hamburger = document.querySelector(".hamburger");
const headerList = document.querySelector(".list");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerList.classList.toggle("active");
})


