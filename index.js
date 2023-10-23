const hamburgerBtn = document.querySelector(".hamburger");

const hamburgerImageEl = document.querySelector(".hamburger-image");
const navbarEl = document.querySelector(".nav-bar");
const navlinksEl = document.querySelector(".nav-links");
const ulEl = document.querySelector("ul");
const headerSectionEl = document.querySelector(".header-section");

hamburgerBtn.addEventListener("click",()=>{
    navbarEl.classList.toggle("active");
    navlinksEl.classList.toggle("active");
    ulEl.classList.toggle("active");
    headerSectionEl.classList.toggle("active");
    if(hamburgerImageEl.getAttribute("src")==="./images/icon-hamburger.svg"){
      hamburgerImageEl.setAttribute("src","./images/icon-close.svg");
     
      }else{
      hamburgerImageEl.setAttribute("src","./images/icon-hamburger.svg");
   }
})





