// Simple JavaScript for site interactions
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to current nav item
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation || 
            (currentLocation.includes('blog') && link.getAttribute('href').includes('blog'))) {
            link.classList.add('active');
        }
    });

    // Mobile menu toggle (for future implementation)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });
    }

    // Reading time estimation (for blog posts)
    const articleContent = document.querySelector('article.post-content');
    if (articleContent) {
        const text = articleContent.textContent;
        const wordCount = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words/min
        const readingTimeElement = document.querySelector('.reading-time');
        if (readingTimeElement) {
            readingTimeElement.textContent = `${readingTime} min read`;
        }
    }
});
