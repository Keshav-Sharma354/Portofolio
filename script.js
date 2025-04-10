document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Animate nav items
        if (navLinks.classList.contains('active')) {
            navItems.forEach((item, index) => {
                item.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1 + 0.3}s`;
                item.style.opacity = '0';
            });
        } else {
            navItems.forEach(item => {
                item.style.animation = '';
            });
        }
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Sticky Navigation
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    // Smooth Scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'form-success';
            successMsg.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <p>Thank you for your message! I'll get back to you soon.</p>
            `;
            contactForm.appendChild(successMsg);
            
            // Reset form
            setTimeout(() => {
                contactForm.reset();
                successMsg.remove();
            }, 3000);
        });
    }
    
    // Animate elements when scrolling
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .skill-category, .about-content, .contact-content, .detail-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.project-card, .skill-category, .about-content, .contact-content, .detail-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Add animation for hero content
    document.querySelectorAll('.hero-content h1, .hero-content h2, .hero-content p, .cta-buttons').forEach((el, index) => {
        el.style.animation = `fadeInUp 0.8s ease forwards ${index * 0.2 + 0.5}s`;
        el.style.opacity = '0';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .form-success {
        background-color: rgba(110, 231, 183, 0.2);
        border: 1px solid #6ee7b7;
        padding: 1rem;
        border-radius: 8px;
        margin-top: 1rem;
        display: flex;
        align-items: center;
        animation: fadeInUp 0.5s ease;
    }
    
    .form-success i {
        color: #6ee7b7;
        font-size: 1.5rem;
        margin-right: 1rem;
    }
    
    .form-success p {
        margin-bottom: 0;
        color: #065f46;
    }
`;
document.head.appendChild(style);