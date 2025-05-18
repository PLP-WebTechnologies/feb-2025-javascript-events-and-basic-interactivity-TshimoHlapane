// Start Engine Button
document.getElementById('startEngineBtn').addEventListener('click', function () {
  alert('Vroom! The Ferrari engine is roaring!');
});

// Hover effect
document.querySelector('.car-hover').addEventListener('mouseenter', function () {
  this.style.transform = 'scale(1.1)';
});
document.querySelector('.car-hover').addEventListener('mouseleave', function () {
  this.style.transform = 'scale(1)';
});

// Keypress detection
document.addEventListener("keydown", (e) => {
  const target = e.target;
  const tag = target.tagName.toLowerCase();
  
  // Only trigger if the user is not typing in an input or textarea
  if (tag !== 'input' && tag !== 'textarea') {
    alert("Turbo mode activated! 💨");
  }
});

// Double-click secret
document.getElementById('badgeSecret').addEventListener('dblclick', function () {
  alert('You found the secret badge! 🏆');
});

// Image gallery functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.ferrari-slide');

document.getElementById('nextBtn').addEventListener('click', function () {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
});

// Tab switching
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
    document.getElementById(this.dataset.tab).style.display = 'block';
  });
});

// Form validation
document.getElementById('testDriveForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const feedback = document.getElementById('feedbackMsg');

  // Reset feedback
  feedback.textContent = '';
  feedback.style.color = 'red';

  // Validate fields one by one
  if (name === '') {
    feedback.textContent = 'Please enter your name.';
    return;
  }

  if (email === '') {
    feedback.textContent = 'Please enter your email.';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = 'Please enter a valid email address.';
    return;
  }

  if (password === '') {
    feedback.textContent = 'Please enter your password.';
    return;
  }

  if (password.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters long.';
    return;
  }

  // If all fields are valid
  feedback.style.color = 'green';
  feedback.textContent = "Test drive booked successfully, We'll be in touch! 🏁 ";
});

