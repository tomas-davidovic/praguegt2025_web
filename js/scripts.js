/* SHOW MENU */
const navToggle = document.querySelector(".nav_toggle"),
      navMenu = document.querySelector(".nav_menu"),
      navLinks = document.querySelectorAll(".nav_link");

navToggle.addEventListener("click", () => { 
    navMenu.classList.toggle("show-menu");
    navToggle.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
        navToggle.classList.remove("active");
    });
});

/* TIPING TEXT */

var typed = new Typed(".profesion_text", {
    strings: [ "07/03-08/03/2026", "07/03-08/03/2026", "07/03-08/03/2026" ],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
    
})

/* COUNTER */

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-counter");
        const c = +counter.innerText;

        const increment = target / 200;
        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 40);
        }else{
            counter.innerText = target;
        }
    };

    // Initialize ScrollReveal
    const sr = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 1500,
        delay: 150,
        reset: true
    });

    // Add the counter animation to ScrollReveal
    sr.reveal(counter, {
        beforeReveal: () => {
            updateCounter();
        }
    });
});


/* SWIPER */


var swiper = new Swiper(".brand_container",{
    slidesPerView: 2,
    spaceBetween: 45,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        
        1920: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    },
    
    direction: 'horizontal',
    loop: true,
})

/* SWIPER 2*/


var swiper = new Swiper(".brand_container_2",{
    slidesPerView: 1,
    spaceBetween: 45,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        
        768: {
            slidesPerView: 2,
            spaceBetween: 35,
        },
        
        1024: {
            slidesPerView: 2,
            spaceBetween: 35,
        },
        
        1920: {
            slidesPerView: 3,
            spaceBetween: 35,
        },
    },
    
    direction: 'horizontal',
    loop: true,
})

/* TOP BUTTON */

const back_btn_top = document.querySelector(".btn-top");

window.addEventListener("scroll", () => {
    if(window.scrollY >= 50){
        back_btn_top.classList.add("active")
    }
    else{
        back_btn_top.classList.remove("active")
    }
})

/* DOWN BUTTON */

const back_btn_down = document.querySelector(".btn-down");

window.addEventListener("scroll", () => {
    if(window.scrollY >= 50){
        back_btn_down.classList.add("active")
    }
    else{
        back_btn_down.classList.remove("active")
    }
})

/* DOWN BUTTON Function */

document.addEventListener('DOMContentLoaded', function() {
    var btnDown = document.querySelector('.btn-down');
    var sections = document.querySelectorAll('section');
    var currentIndex = 0;
  
    btnDown.addEventListener('click', function(e) {
      e.preventDefault();
  
      var currentSection = document.querySelector('section.active');
      var nextSection = currentSection.nextElementSibling;
  
      if (nextSection) {
        currentSection.classList.remove('active');
        nextSection.classList.add('active');
        nextSection.scrollIntoView({ behavior: 'smooth' });
        currentIndex++;
      } else {
        sections[currentIndex].classList.remove('active');
        sections[0].classList.add('active');
        sections[0].scrollIntoView({ behavior: 'smooth' });
        currentIndex = 0;
      }
    });
  });

  /* right BUTTON */

const back_btn_right = document.querySelector(".btn-right");

window.addEventListener("scroll", () => {
    if(window.scrollY >= 50){
        back_btn_right.classList.add("active")
    }
    else{
        back_btn_right.classList.remove("active")
    }
})

  /* left BUTTON */

  const back_btn_left = document.querySelector(".btn-left");

  window.addEventListener("scroll", () => {
      if(window.scrollY >= 50){
          back_btn_left.classList.add("active")
      }
      else{
          back_btn_left.classList.remove("active")
      }
  })

/* SCROLL ANIMATION */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 150,
});

sr.reveal('.about_banner, .brand_container, .copyright',{ origin: 'bottom' });
sr.reveal('.home_content',{origin: 'top'});
sr.reveal('.about_content, .contact_container, .skills_wrapper, .count_wrapper', {delay: 300});
sr.reveal('.social_list, .title_wrapper, .work_list, .social_link', {interval: 150});
sr.reveal('.service_item, service_item_contact, .team_item, .work_item, .brand_container_2, .contact_wrapper', {interval: 150});
sr.reveal('.progress_bar',{origin: 'left', distance: '100%'});

/* END SCROLL ANIMATION */

// získání aktuálního roku

var year = new Date().getFullYear();

// zobrazení aktuálního roku na stránce

var yearElement = document.getElementById("year");
    yearElement.innerHTML = year;

/* END získání aktuálního roku */

// FULLSCREEN  //

// Get all the image holders
const imageHolders = document.querySelectorAll('.img-holder');


// Add click event listeners to each image holder
imageHolders.forEach((imageHolder) => {
imageHolder.addEventListener('click', () => {
// Create a fullscreen preview element
const fullscreenPreview = document.createElement('div');
fullscreenPreview.classList.add('fullscreen-preview');


// Create an image element inside the fullscreen preview
const previewImage = document.createElement('img');
fullscreenPreview.appendChild(previewImage);

// Create close button
const closeButton = document.createElement('button');
closeButton.classList.add('close-button');
closeButton.innerHTML = '<i class="fas fa-times"></i>';
fullscreenPreview.appendChild(closeButton);

// Append the fullscreen preview to the body
document.body.appendChild(fullscreenPreview);

// Get the source of the clicked image
const imageSrc = imageHolder.querySelector('img').src;

// Set the source of the preview image
previewImage.src = imageSrc;

// Show the fullscreen preview
fullscreenPreview.style.display = 'flex';

// Add click event listener to close the fullscreen preview
fullscreenPreview.addEventListener('click', () => {
  fullscreenPreview.style.display = 'none';
});
});
});

// END FULLSCREEN  //

// Dropdown Menu ///
document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener("click", function() {
            this.classList.toggle("open");
        });
    });
});
// END Dropdown Menu ///
