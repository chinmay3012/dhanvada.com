// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Show loading state
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;
    formMessage.className = 'form-message';
    formMessage.textContent = '';
    
    try {
        // Initialize EmailJS if not already initialized
        // Replace 'YOUR_PUBLIC_KEY' with your Public Key from EmailJS (get it from https://www.emailjs.com/)
        if (typeof emailjs !== 'undefined') {
            emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your Public Key
        }
        
        // Send email using EmailJS
        // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs from EmailJS
        const templateParams = {
            from_email: email,
            phone: phone,
            message: message,
            to_email: 'rk@dhanvada.com'
        };
        
        await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
        
        // Show success message
        formMessage.textContent = "We'll contact you shortly";
        formMessage.className = 'form-message success';
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
            formMessage.textContent = '';
        }, 5000);
        
    } catch (error) {
        // Show error message
        formMessage.textContent = 'There was an error sending your message. Please try again or email us directly at rk@dhanvada.com';
        formMessage.className = 'form-message error';
    } finally {
        // Restore button
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and other elements
document.querySelectorAll('.service-card, .about-text, .contact-form').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

