// ================= MOBILE MENU =================
const menuBtn = document.getElementById("http://localhost:5000/menu__btn");
const navLinks = document.getElementById("http://localhost:5000/nav-links");

if (menuBtn && navLinks) {
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("http://localhost:5000/open");
    menuBtnIcon.setAttribute(
      "class",
      isOpen ? "ri-close-line" : "ri-menu-line"
    );
  });

  // Close menu when link clicked (mobile)
  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
}


// ================= SCROLL REVEAL =================
if (typeof ScrollReveal !== "undefined") {
  const scrollRevealOption = {
    origin: "bottom",
    distance: "60px",
    duration: 1000,
    reset: false,
  };

  // Header
  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 300,
  });

  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 600,
  });

  ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 900,
  });

  // Arrival Cards
  ScrollReveal().reveal(".arrival__card", {
    ...scrollRevealOption,
    interval: 200,
  });

  // Sale Section
  ScrollReveal().reveal(".sale__image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".sale__content h2", {
    ...scrollRevealOption,
    delay: 300,
  });

  ScrollReveal().reveal(".sale__content p", {
    ...scrollRevealOption,
    delay: 600,
  });

  ScrollReveal().reveal(".sale__btn", {
    ...scrollRevealOption,
    delay: 900,
  });

  // Favourite
  ScrollReveal().reveal(".favourite__card", {
    ...scrollRevealOption,
    interval: 200,
  });
}




function downloadApple() {
  window.open("https://www.apple.com/app-store/", "_blank");
}

function downloadGoogle() {
  window.open("https://play.google.com/store", "_blank");
}

function contactInfo() {
  alert("Email: support@fashion.com\nPhone: +91 9876543210");
}

function reviews() {
  alert("⭐ 4.8/5 based on 12,000+ customer reviews!");
}

function support() {
  alert("For support, email support@fashion.com");
}

function faq() {
  alert("FAQ:\n1. How to order?\n2. How to return?\n3. Delivery time?");
}

function locationInfo() {
  window.open("https://www.google.com/maps", "_blank");
}


// ================= INFINITE BANNER SCROLL =================
const banner = document.querySelector(".banner__container");

if (banner) {
  const bannerContent = Array.from(banner.children);

  bannerContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    banner.appendChild(duplicateNode);
  });
}


function signup() {
  alert("Signup feature coming soon!");
}



// ================= GENERIC POST FUNCTION =================
async function postData(url, data) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return res.json();
}

// ================= SUBSCRIBE FORM (BACKEND CONNECTED) =================
document.getElementById("subscribeForm")?.addEventListener("submit", async e => {
  e.preventDefault();
  const email = document.getElementById("subscribeEmail").value;
  const data = await postData("/api/subscribe", { email });
  alert(data.message);
});

// Contact
document.getElementById("contactForm")?.addEventListener("submit", async e => {
  e.preventDefault();
  const name = document.getElementById("contactName").value;
  const email = document.getElementById("contactEmail").value;
  const message = document.getElementById("contactMessage").value;
  const data = await postData("/api/contact", { name, email, message });
  alert(data.message);
});

// Signup
document.getElementById("signupForm")?.addEventListener("submit", async e => {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const data = await postData("/api/signup", { name, email, password });
  alert(data.message);
});

// Login
document.getElementById("loginForm")?.addEventListener("submit", async e => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const data = await postData("/api/login", { email, password });

  if (data.token) {
    localStorage.setItem("token", data.token);
  }

  alert(data.message);
});
function openCoatGallery() {
  document.getElementById("coatModal").style.display = "block";
  // Prevent background scrolling while looking at coats
  document.body.style.overflow = "hidden";
}

function closeCoatGallery() {
  document.getElementById("coatModal").style.display = "none";
  // Re-enable scrolling
  document.body.style.overflow = "auto";
}

// Close modal if user clicks anywhere outside of the white box
window.onclick = function(event) {
  let modal = document.getElementById("coatModal");
  if (event.target == modal) {
    closeCoatGallery();
  }

};
function openCoatInterface() {
    const modal = document.getElementById("coatInterface");
    modal.style.display = "block";
    // Disable background scrolling
    document.body.style.overflow = "hidden";
}

function closeCoatInterface() {
    const modal = document.getElementById("coatInterface");
    modal.style.display = "none";
    // Re-enable background scrolling
    document.body.style.overflow = "auto";
}

// Close if clicking outside the white box
window.onclick = function(event) {
    const modal = document.getElementById("coatInterface");
    if (event.target == modal) {
        closeCoatInterface();
    }
}
function openCoatInterface() {
    const modal = document.getElementById("coatInterface");
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Absolute lock
}

function closeCoatInterface() {
    const modal = document.getElementById("coatInterface");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}
