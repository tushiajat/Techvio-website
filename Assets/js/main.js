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
