const navContainer = document.querySelector(".burger-container");
const linksContainer = document.querySelector(".links-container");
const navLinks = document.querySelector(".nav-links");
const activePage = window.location.pathname;
const navBar = document.querySelector('.main-header')
const quoteDiv = document.querySelector('.quote__div')

const clickedLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active')
  }
})

window.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    navBar.style.position = "fixed";
    navBar.style.borderBottom = "5px solid #0077B5";
  } else {
    navBar.style.position = "relative";
    navBar.style.borderBottom = "none";
  }
});

function ouiMonsieur() {
  quoteDiv.classList.toggle("appear");
}

function closeQuote() {
  quoteDiv.classList.toggle("appear");
}

function openNav() {
  navContainer.classList.toggle("open");
  linksContainer.classList.toggle("fill");
  navLinks.classList.toggle("active");
  document.body.classList.toggle("hidden");
}

function unHide() {
  navContainer.classList.toggle("open");
  linksContainer.classList.toggle("fill");
  navLinks.classList.toggle("active");
  document.body.classList.toggle("hidden");
}

