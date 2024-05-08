//navbar start
const navbar = document.getElementById("navbar");
const showMenuIcon = document.getElementById("show-icon");
const hideMenuIcon = document.getElementById("hide-icon");
function showMenu() {
  navbar.style.display = "block";
  navbar.style.top = "50px";
  showMenuIcon.classList.add("d-none");
  hideMenuIcon.classList.remove("d-none");
}
function hideMenu() {
  navbar.style.display = "none";
  showMenuIcon.classList.remove("d-none");
  hideMenuIcon.classList.add("d-none");
}

//typing animation
var typing = new Typed(".text", {
  strings: ["", "Business Services"],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});

// Progress Bar

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const targetWidth = progressBar.getAttribute("data-target");
          progressBar.style.width = targetWidth + "%";
          // progressBar.textContent = targetWidth + "%";
          observer.unobserve(progressBar);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  document.querySelectorAll(".progress-bar").forEach((bar) => {
    observer.observe(bar);
  });
});

//portfolio ul
const tabBtns = document.querySelectorAll(".tab-btn");
const items = document.querySelectorAll(".portfolio-item");
function openTab(tabName) {
  for (let btn of tabBtns) {
    btn.classList.remove("active");
  }
  event.target.classList.add("active");
  for (let item of items) {
    item.classList.add("d-none");
    item.classList.remove("d-block");
  }
  const activeItems = document.getElementsByClassName(tabName);
  for (let activeItem of activeItems) {
    activeItem.classList.add("d-block");
  }
  console.log(tabName);
}

//count section
function animateCounters() {
  const counters = document.querySelectorAll(".count");
  const speed = 200; // Speed of incrementing in milliseconds

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const increment = target / speed;

    let count = 0;

    const updateCount = () => {
      count += increment;
      counter.innerText = Math.ceil(count);

      if (count < target) {
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

// Run the animation when the page is loaded
window.addEventListener("load", animateCounters);

//slider
var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
  autoplay: true,
  interval: 3000,
  pauseOnHover: true,
  arrows: false,
});

splide.mount();

//set navBar Background
const navigationBar = document.getElementById("fullNavbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    navigationBar.classList.add("set-nav-bg");
  } else {
    navigationBar.classList.remove("set-nav-bg");
  }
});

// scrollbar
const goTopBtn = document.getElementById("goTop");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    goTopBtn.style.bottom = "20px";
  } else {
    goTopBtn.style.bottom = "10000px";
  }
});

//handle event bottom to top button
goTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0); //(top,left)
});

// loader

const loader = document.getElementById("loader-container");
window.addEventListener("load", () => {
  loader.style.display = "none";
});

//mouse
new cursoreffects.rainbowCursor({
  length: 3,
  colors: ["red", "blue"],
  size: 4,
});

//email validation
function validateEmail() {
  var emailInput = document.getElementById("contact-mail");
  var email = emailInput.value.trim();

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    alert("Please enter an email address.");
    return false;
  } else if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Email submitted successfully!");
}
