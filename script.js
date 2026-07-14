// Newsletter signup handler
function handleNewsletterSignup(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    // Simulate form submission
    const button = form.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Subscribed! ✓';
    button.style.backgroundColor = '#27ae60';
    
    // Reset form
    form.reset();
    
    // Restore button after 3 seconds
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
    }, 3000);
    
    console.log('Subscribed:', email);
}

// Add smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to navigation links based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.style.fontWeight = '700';
            link.style.color = '#2c3e50';
        }
    });
});

// Gallery image loading (placeholder for real implementation)
function loadGalleryImages() {
    // This function can be used to load actual images from a server
    // For now, it's a placeholder for future implementation
    console.log('Gallery images loaded');
}

// Story card interactions
document.querySelectorAll('.story-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'white';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#f8f9fa';
    });
});
