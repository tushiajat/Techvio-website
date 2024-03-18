// navbar start
const showMenuIcon = document.getElementById("show-icon");
const hideMenuIcon = document.getElementById("hide-icon");
const navbar = document.querySelector("header nav ul");

function showMenu() {
  navbar.style.display = "block";
  navbar.style.top = "50px";
  showMenuIcon.classList.add("d-none");
  hideMenuIcon.classList.remove("d-none");
}

function hideMenu() {
  navbar.style.display = "none";
  hideMenuIcon.classList.add("d-none");
  showMenuIcon.classList.remove("d-none");
}

// typing animation
var typing = new Typed(".text", {
  strings: ["", "Freelancer", "Web Designer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});

/*
// bottom to top
const goTopBtn = document.getElementById("bottomToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    goTopBtn.classList.remove("d-none");
  } else {
    goTopBtn.classList.add("d-none");
  }
});
*/
// Progress Bar
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const targetWidth = progressBar.getAttribute("data-target");
          progressBar.style.width = targetWidth + "%";
          progressBar.textContent = targetWidth + "%";
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
 


//fdggjhmj

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Loading Counter</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;900&display=swap" rel="stylesheet">
  <style>
      * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Nunito", sans-serif;
  background: #fbf7f4;
}

.container {
  width: 80%;
  margin: auto;
}

.heading {
  text-align: center;
  font-size: 3.5rem;
  font-weight: bold;
  padding: 5rem 0;
}

.counter-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}

@media (max-width: 500px) {
  .counter-container {
    flex-direction: column;
  }
}

.counter {
  text-align: center;
}

.counter h3 {
  padding: 0.5rem 0;
  font-size: 2.5rem;
  font-weight: 800;
}

.counter h6 {
  font-size: 2rem;
  padding-bottom: 1rem;
}

.icon {
  height: 5rem;
  width: auto;
}

  </style>
</head>

<body>
  <div class="container">
    <div class="heading">
      Counting Upto the Limit
    </div>
    <div class="counter-container">
      <div class="counter">
        <img src="https://raw.githubusercontent.com/nemo0/animated-counter/29e12c0cb15e90c27faaef0d83fb2618126067db/icons/iconmonstr-time-19.svg" alt="timer" srcset="" class="icon">
        <h3 data-target="15000" class="count">0</h3>
        <h6>Work Hours</h6>
      </div>
      <div class="counter">
        <img src="https://raw.githubusercontent.com/nemo0/animated-counter/29e12c0cb15e90c27faaef0d83fb2618126067db/icons/iconmonstr-coffee-11.svg" alt="Coffee" srcset="" class="icon">
        <h3 data-target="1200" class="count">0</h3>
        <h6>Cups of Coffee</h6>
      </div>
      <div class="counter">
        <img src="https://raw.githubusercontent.com/nemo0/animated-counter/29e12c0cb15e90c27faaef0d83fb2618126067db/icons/iconmonstr-weather-112.svg" alt="night" srcset="" class="icon">
        <h3 data-target="500" class="count">0</h3>
        <h6>Sleepless Nights</h6>
      </div>
    </div>
  </div>
  <script>
      const counters = document.querySelectorAll(".count");
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(+counter.getAttribute("data-target"));
    const count = parseInt(+counter.innerText);
    const increment = Math.trunc(target / speed);
    console.log(increment);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});

  </script>
</body>

</html>