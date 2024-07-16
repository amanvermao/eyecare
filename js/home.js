const banners = document.querySelectorAll('.banner');
let currentBannerIndex = 0;

function showNextBanner() {
  banners[currentBannerIndex].classList.remove('active');
  currentBannerIndex = (currentBannerIndex + 1) % banners.length;
  banners[currentBannerIndex].classList.add('active');
}

function showPreviousBanner() {
  banners[currentBannerIndex].classList.remove('active');
  currentBannerIndex = (currentBannerIndex - 1 + banners.length) % banners.length;
  banners[currentBannerIndex].classList.add('active');
}

// Initialize the first banner as active
banners[currentBannerIndex].classList.add('active');

// Change banner every 6 seconds
setInterval(showNextBanner, 6000);

const containerEl = document.querySelector(".container1");

const careers = [
  "EYECARE",
];

let careerIndex = 0;
let characterIndex = 0;

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h1 class="big-title">${careers[careerIndex].slice(0, 1) === "I" ? "" : ""} ${careers[careerIndex].slice(0, characterIndex)}</h1>
  `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 600);
}

updateText();


// review section slider

let slideIndex = 0;
        const slidesWrapper = document.querySelector('.slides-wrapper');
        const slides = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.dot');

        function showSlides() {
            slideIndex++;
            if (slideIndex >= slides.length) { slideIndex = 0; }
            slidesWrapper.style.transform = `translateX(${-slideIndex * 100}%)`;
            dots.forEach((dot, index) => {
                dot.className = dot.className.replace(" active", "");
                if (index === slideIndex) {
                    dot.className += " active";
                }
            });
            setTimeout(showSlides, 3000); // Change slide every 3 seconds
        }

        showSlides();
