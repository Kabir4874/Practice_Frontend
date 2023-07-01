// !Change Navbar Style on Scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});

// !FAQ Open Toggle

const faq = document.querySelectorAll(".faq");

faq.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.classList.toggle("open");

    const icon = elem.querySelector(".faq_icon i");

    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});


// !Swipper 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay:{
        delay:3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        600:{
            slidesPerView: 2, 
        }
    }
  });


  // !NavMenu In Small Screen 

  const menu= document.querySelector(".nav_menu"),
  menuBtn= document.querySelector("#open-menu-btn"),
  closeBtn= document.querySelector("#close-menu-btn");

  menuBtn.addEventListener("click", ()=>{
    menu.style.display= "flex";
    closeBtn.style.display= "inline-block";
    menuBtn.style.display= "none";
  })

  closeBtn.addEventListener("click", ()=>{
    menu.style.display= "none";
    closeBtn.style.display= "none";
    menuBtn.style.display= "inline-block";
  })