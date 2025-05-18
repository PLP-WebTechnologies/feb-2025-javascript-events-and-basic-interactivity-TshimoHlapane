// Start engine
document.getElementById('startEngineBtn').addEventListener('click', () => {
  alert('Vroom! The Ferrari engine has started!');
});

// Image gallery logic
let currentSlide = 0;
const slides = document.querySelectorAll('.ferrari-slide');
document.getElementById('nextBtn').addEventListener('click', () => {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
});

// Tab switching
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabContents.forEach(c => c.style.display = 'none');
    const target = tab.dataset.tab;
    document.getElementById(target).style.display = 'block';
  });
});

// Secret badge Easter egg
document.getElementById('badgeSecret').addEventListener('dblclick', () => {
  alert('You found the secret badge! 🔥');
});

// Form validation with specific error feedback
document.getElementById('testDriveForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const feedback = document.getElementById('feedbackMsg');

  if (name === '') {
    feedback.textContent = 'Please enter your name.';
  } else if (email === '') {
    feedback.textContent = 'Please enter a valid email address.';
  } else if (!/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email)) {
    feedback.textContent = 'Email format is invalid.';
  } else if (password.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters.';
  } else {
    feedback.textContent = 'Test drive booked successfully! 🏁';
  }
});

// Turbo mode on keypress (disabled while in form inputs)
document.addEventListener('keydown', function (e) {
  const active = document.activeElement.tagName;
  if (active !== 'INPUT' && active !== 'TEXTAREA') {
    alert('Turbo mode activated! 🚀');
  }
});
