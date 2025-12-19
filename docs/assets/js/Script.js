// Navigation functionality
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionName).classList.add('active');

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');

    // Close mobile menu if open
    document.querySelector('.nav-links').classList.remove('active');
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Validate form data
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    // Send form data to Formspree
    fetch('https://formspree.io/f/mzzgoepk', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, subject, message })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        alert("Thanks for reaching out. I'll get back to you as soon as possible!");
    })
    .catch(error => {
        alert(`Error: ${error.message}`);
    })

    // Reset form
    event.target.reset();
}

// Resume download
function downloadResume() {
    const resumeFilePath = 'https://drive.google.com/file/d/1yw2LJcDky9Kfo_nVKvuJX_mbpE12vvRr/view?usp=sharing';
}

// Smooth scrolling and navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(135, 206, 235, 0.2)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});


// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!navLinks.contains(event.target) && !mobileMenu.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});


// Add loading animation
window.addEventListener('load', function() {
    const homeSection = document.getElementById('home');
    homeSection.style.animation = 'fadeInUp 0.8s ease';
});