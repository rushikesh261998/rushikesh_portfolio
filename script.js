// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', ()=>{ navLinks.classList.toggle('active'); });

// Contact form alert
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    contactForm.reset();
});
