// Initialize carousel first to ensure it's ready
function initCarousel() {
  const carousel = document.querySelector('#carousel');
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');
  const captionElement = document.querySelector('#caption');

  if (carousel && prevBtn && nextBtn && captionElement) {
    const images = Array.from({length: 64}, (_, i) => `./images/Slides/hair_braid-${153 + i}.jpg`);

    let currentImageIndex = 0;
    let autoSlideInterval;

    // Auto slide function
    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
      }, 3000); // Change slide every 3 seconds
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    // Start auto sliding initially
    startAutoSlide();

    // Create initial image elements
    images.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.className = `absolute w-full h-full object-cover transition-opacity duration-500 ${index === 0 ? 'opacity-100' : 'opacity-0'}`;
      carousel.appendChild(img);
    });

    function updateCaption() {
      const imageName = images[currentImageIndex].split('/').pop().split('.')[0];
      captionElement.textContent = imageName.replace(/-/g, ' ');
    }

    function showImage(index) {
      const images = carousel.querySelectorAll('img');
      images.forEach((img, i) => {
        img.style.opacity = i === index ? '1' : '0';
      });
      updateCaption();
    }

    prevBtn.addEventListener('click', () => {
      stopAutoSlide();
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      showImage(currentImageIndex);
    });

    nextBtn.addEventListener('click', () => {
      stopAutoSlide();
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
      } else if (e.key === 'ArrowLeft') {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
      }
    });

    updateCaption();
  }
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('#carousel');
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');
  const captionElement = document.querySelector('#caption');

  if (carousel && prevBtn && nextBtn && captionElement) {
    const images = [];
    // Generate array of image paths from 153 to 216
    for (let i = 153; i <= 216; i++) {
      images.push(`images/Slides/hair_braid-${i}.jpg`);
    }

    let currentImageIndex = 0;
    let autoSlideInterval;

    // Auto slide function
    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
      }, 3000); // Change slide every 3 seconds
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    // Start auto sliding initially
    startAutoSlide();

    // Create initial image elements
    images.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.className = `absolute w-full h-full object-cover transition-opacity duration-500 ${index === 0 ? 'opacity-100' : 'opacity-0'}`;
      carousel.appendChild(img);
    });

    function showImage(index) {
      const images = carousel.querySelectorAll('img');
      images.forEach((img, i) => {
        img.style.opacity = i === index ? '1' : '0';
      });
      updateCaption();
    }

    function updateCaption() {
      const imageName = images[currentImageIndex].split('/').pop().split('.')[0];
      captionElement.textContent = imageName.replace(/-/g, ' ');
    }

    prevBtn.addEventListener('click', () => {
      stopAutoSlide();
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      showImage(currentImageIndex);
    });

    nextBtn.addEventListener('click', () => {
      stopAutoSlide();
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
    });

    updateCaption();
  }

  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Close mobile menu when clicking a link
  const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.add('hidden');
      }
    });
  });

  // Toggle functionality
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
      const content = this.closest('.toggle-content')?.querySelector('.hidden-content');
      if (content) {
        const isHidden = content.classList.contains('hidden');
        content.classList.toggle('hidden');
        this.textContent = isHidden ? 'Show Less' : 'Show More Details';
      }
    });
  });

  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const element = document.querySelector(this.getAttribute('href'));
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Modal functionality
function openBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) modal.classList.remove('hidden');
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) modal.classList.add('hidden');
}