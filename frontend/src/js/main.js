// toggle button
const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const openIcon = document.getElementById("menu-open-icon");
const closeIcon = document.getElementById("menu-close-icon");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// scroll to top
document.getElementById("scroll-to-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//  dark mode toggle
// document.addEventListener("DOMContentLoaded", () => {
//   const toggleButton = document.getElementById("dark-mode-toggle");
//   if (toggleButton) {
//     toggleButton.addEventListener("click", () => {
//       document.body.classList.toggle("dark");
//     });
//   }
// });

// scroll reveal - is a package(scrollReveal.min.js)- use to animate when scroling
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  reset: true,
});
sr.reveal(".content_reveal");
sr.reveal(".grid_reveal", { interval: 100 });

sr.reveal(".img_content_reveal ", { delay: 500, scale: 0.5 });

sr.reveal(".con_left_reveal", { origin: "left", delay: 500 });
sr.reveal(".con_right_reveal", { origin: "right", delay: 500 });

sr.reveal(".img_left_reveal", { origin: "left", delay: 500 });
sr.reveal(".img_right_reveal", { origin: "right", delay: 500 });

// dark mode toggle new with toggle button
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

// const dark_mode_toggle = document.getElementById("dark-mode-toggle");
// const sunIcon = document.getElementById("sunIcon");
// const moonIcon = document.getElementById("moonIcon");

// toggleBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark");

//   const isDark = document.body.classList.contains("dark");
//   sunIcon.classList.toggle("active", !isDark);
//   moonIcon.classList.toggle("active", isDark);
// });


// carousel button
// const track = document.getElementById("carousel-track");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");
// const dots = Array.from(document.querySelectorAll("[data-index]"));
// const totalSlides = dots.length;

// let currentIndex = 0;

// function updateCarousel() {
//   track.style.transform = `translateX(-${currentIndex * 100}%)`;
//   dots.forEach((dot, idx) => {
//     if (idx === currentIndex) {
//       dot.classList.add("bg-white", "bg-opacity-100");
//       dot.classList.remove("bg-opacity-50");
//     } else {
//       dot.classList.remove("bg-opacity-100");
//       dot.classList.add("bg-opacity-50");
//     }
//   });
// }

// prevBtn.addEventListener("click", () => {
//   currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
//   updateCarousel();
// });

// nextBtn.addEventListener("click", () => {
//   currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
//   updateCarousel();
// });

// dots.forEach((dot) =>
//   dot.addEventListener("click", () => {
//     currentIndex = Number(dot.getAttribute("data-index"));
//     updateCarousel();
//   })
// );

// // Touch swipe support
// let startX = 0;
// let isDragging = false;

// track.addEventListener("touchstart", (e) => {
//   startX = e.touches[0].clientX;
//   isDragging = true;
// });

// track.addEventListener("touchmove", (e) => {
//   if (!isDragging) return;
//   const currentX = e.touches[0].clientX;
//   const diffX = currentX - startX;
//   // optional: can add dragging effect here
// });

// track.addEventListener("touchend", (e) => {
//   if (!isDragging) return;
//   isDragging = false;
//   const endX = e.changedTouches[0].clientX;
//   const diffX = endX - startX;
//   if (diffX > 50) {
//     // swipe right, go prev
//     prevBtn.click();
//   } else if (diffX < -50) {
//     // swipe left, go next
//     nextBtn.click();
//   }
// });

// // Initialize
// updateCarousel();


// JavaScript for the 6-slide carousel functionality
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carousel-track');
  const slides = track.children;
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.querySelector('.absolute.bottom-4.left-1\\/2.transform.-translate-x-1\\/2.flex.space-x-3');
  const dots = dotsContainer.querySelectorAll('button[data-index]');
  const totalSlides = slides.length;
  let currentIndex = 0;

  // Set active dot visually
  function setActiveDot(index) {
    dots.forEach(dot => dot.classList.remove('bg-opacity-100'));
    const activeDot = dots[index];
    if (activeDot) {
      activeDot.classList.add('bg-opacity-100');
    }
  }

  // Move to slide by index
  function goToSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    const percentage = -currentIndex * 100;
    track.style.transform = `translateX(${percentage}%)`;
    setActiveDot(currentIndex);
  }

  // Previous button click
  prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
  });

  // Next button click
  nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
  });

  // Pagination dots click
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'), 10);
      goToSlide(index);
    });
  });

  // Initialize
  goToSlide(0);
});





// form submission
  const form = document.querySelector("#form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("http://localhost:3000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        // Redirect without reloading
        window.location.href = "./thank-you.html"; // Or show a success message
      } else {
        alert("Failed to send email.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  });