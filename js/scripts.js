// Hamburger menu toggle functionality with slide animation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('#hamburger');
    const mainNav = document.querySelector('#mainNav');
    
    if (hamburger && mainNav) {
        hamburger.addEventListener('click', function() {
            // Toggle the translate class to slide in/out
            mainNav.classList.toggle('translate-x-full');
            // Toggle hamburger to X animation
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.add('translate-x-full');
                hamburger.classList.remove('active');
            });
        });
    }
});
