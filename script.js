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

// Image Lightbox Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox HTML if it doesn't exist
    if (!document.getElementById('lightbox-modal')) {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox-modal';
        lightbox.className = 'lightbox-modal';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
                <button class="lightbox-prev" aria-label="Previous image">&#10094;</button>
                <img id="lightbox-image" src="" alt="Enlarged view">
                <button class="lightbox-next" aria-label="Next image">&#10095;</button>
                <p id="lightbox-caption"></p>
            </div>
        `;
        document.body.appendChild(lightbox);
    }

    const modal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    let currentImageIndex = 0;
    let allImages = [];

    // Get all clickable images
    function initializeImages() {
        allImages = Array.from(document.querySelectorAll('.gallery-placeholder'));
    }

    // Open lightbox
    document.addEventListener('click', function(e) {
        if (e.target.closest('.gallery-placeholder')) {
            const clicked = e.target.closest('.gallery-placeholder');
            initializeImages();
            currentImageIndex = allImages.indexOf(clicked);
            displayImage();
            modal.style.display = 'flex';
        }
    });

    // Display image
    function displayImage() {
        if (allImages.length === 0) return;
        const currentPlaceholder = allImages[currentImageIndex];
        const placeholderDiv = currentPlaceholder.querySelector('.image-placeholder-large');
        const imageNum = currentPlaceholder.querySelector('.image-placeholder-large span')?.textContent || 'Image';
        
        lightboxImage.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23e9f2ff" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="Arial" font-size="24" fill="%235f6b7a"%3E' + imageNum + '%3C/text%3E%3C/svg%3E';
        lightboxCaption.textContent = currentPlaceholder.querySelector('p')?.textContent || imageNum;
    }

    // Close lightbox
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Next image
    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex + 1) % allImages.length;
        displayImage();
    });

    // Previous image
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
        displayImage();
    });

    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'flex') {
            if (e.key === 'ArrowRight') nextBtn.click();
            if (e.key === 'ArrowLeft') prevBtn.click();
            if (e.key === 'Escape') closeBtn.click();
        }
    });
});

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
