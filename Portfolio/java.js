// =============================================================
// Creating a portfolio tabbed component
// =============================================================
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-ovelay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;

 if(!p_btn_clicked.classList.contains('p-btn')) return;
  p_btn.forEach((curElem) => {
    curElem.classList.remove("p-btn-active");
  });
  p_btn_clicked.classList.add("p-btn-active");
  const btn_num = p_btn_clicked.dataset.btnNum;
  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
  p_img_elem.forEach((curElem) => {
    curElem.classList.add("p-img-not-active");
  });
  img_active.forEach((curElem) => {
    curElem.classList.remove("p-img-not-active");
  });
});
// =============================================================
// Creating a Testimonial Section
// =============================================================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const myJsmedia = (widthSize) => {
  if (widthSize.matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
  else{
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
};

const widthSize = window.matchMedia("(max-width:780px)");

myJsmedia(widthSize);

widthSize.addEventListener("change", myJsmedia);
// =============================================================
// Scroll To Top Button
// =============================================================
const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
footerElem.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);

// =============================================================
// Animate Number
// =============================================================

const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 200;
counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    const initialNumber = parseInt(curElem.innerText);
    const incrementNumber = Math.trunc(targetNumber / speed);
    if (initialNumber < targetNumber) {
      curElem.innerText = `${initialNumber + incrementNumber}+`;
      setTimeout(updateNumber, 10);
    }
  };
  updateNumber();
});

// =============================================================
// Responsive Navbar
// =============================================================
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElement = document.querySelector(".header");
mobile_nav.addEventListener("click", () => {
  headerElement.classList.toggle("active");
});
