/* ============================
   MOBILE NAVIGATION TOGGLE
   ============================ */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

/* ============================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ============================
   GALLERY LIGHTBOX (OPTIONAL)
   ============================ */
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.classList.add("lightbox");
    overlay.innerHTML = `
      <div class="lightbox-content">
        <img src="${img.src}" alt="">
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => overlay.remove());
  });
});

/* ============================
   FORM VALIDATION (BASIC)
   ============================ */
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (e) => {
    const name = form.querySelector("input[type='text']");
    const email = form.querySelector("input[type='email']");
    const message = form.querySelector("textarea");

    if (!name.value || !email.value || !message.value) {
      e.preventDefault();
      alert("Please fill in all fields before sending.");
    }
  });
}
