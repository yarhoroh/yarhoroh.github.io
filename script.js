// Scroll to top button
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }
});

// Remove hash from URL after navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            history.replaceState(null, null, ' ');
        }
    });
});

// Clear hash on page load
if (window.location.hash) {
    history.replaceState(null, null, ' ');
    window.scrollTo(0, 0);
}
