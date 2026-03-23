// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

// ===== ROLE TOGGLE =====
const toggleGenerous = document.getElementById('toggle-generous');
const toggleAttractive = document.getElementById('toggle-attractive');

toggleGenerous.addEventListener('click', () => {
  toggleGenerous.classList.add('active');
  toggleAttractive.classList.remove('active');
});

toggleAttractive.addEventListener('click', () => {
  toggleAttractive.classList.add('active');
  toggleGenerous.classList.remove('active');
});

// ===== OFFER PRESET BUTTONS =====
document.querySelectorAll('.offer-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.offer-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const input = document.querySelector('.custom-input');
    if (input) {
      input.value = btn.textContent.replace('$', '');
    }
  });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > 100) {
    navbar.style.background = 'rgba(13, 13, 26, 0.95)';
  } else {
    navbar.style.background = 'rgba(13, 13, 26, 0.85)';
  }

  lastScroll = currentScroll;
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll(
  '.step-card, .safety-card, .testimonial-card, .pricing-card, .offer-card'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = entry.target.classList.contains('popular')
        ? 'scale(1.04)'
        : 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});
