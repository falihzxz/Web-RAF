// Ganti warna header saat scroll
window.addEventListener("scroll", function () {
  const header = document.getElementById("siteHeader");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

const slider = document.getElementById("slider");
let cardWidth = 280 + 20; // default: card width + gap
let cardsPerPage = 4; // default cards per page
let currentIndex = 0;

// Function to update responsive values
function updateResponsiveValues() {
  const screenWidth = window.innerWidth;
  
  if (screenWidth <= 480) {
    // Mobile: 1 card, gap 60px
    cardWidth = 280 + 60;
    cardsPerPage = 1;
  } else if (screenWidth <= 1024) {
    // Tablet: 2 cards, gap 40px (lebih besar untuk mencegah potongan)
    cardWidth = 280 + 40;
    cardsPerPage = 2;
  } else {
    // Desktop: 4 cards, gap 20px
    cardWidth = 280 + 20;
    cardsPerPage = 4;
  }
}

// Update values on load and resize
updateResponsiveValues();
window.addEventListener("resize", () => {
  updateResponsiveValues();
  updateSlider(); // Re-calculate position after resize
});

document.getElementById("nextBtn").addEventListener("click", () => {
  const totalCards = slider.children.length;
  const maxIndex = Math.ceil(totalCards / cardsPerPage) - 1;
  if (currentIndex < maxIndex) {
    currentIndex++;
  } else {
    currentIndex = 0; // 🔁 balik ke awal saat mentok
  }
  updateSlider();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  const totalCards = slider.children.length;
  const maxIndex = Math.ceil(totalCards / cardsPerPage) - 1;
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = maxIndex; // 🔁 balik ke akhir saat di awal
  }
  updateSlider();
});

function updateSlider() {
  const offset = currentIndex * (cardWidth * cardsPerPage);
  slider.style.transform = `translateX(-${offset}px)`;
}

