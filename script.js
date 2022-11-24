const hamburger = document.querySelector(".hamburger");
const headerList = document.querySelector(".list");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerList.classList.toggle("active");
})

const phone = document.querySelector('.phone')
phone.addEventListener("click", ()=>{
    phone.innerHTML+998998884195
})