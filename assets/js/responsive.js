// =========================
// MOBILE MENU TOGGLE
// =========================

const menuToggle = document.getElementById('mobile-menu');
const navLinksContainer = document.querySelector('.nav-links');
const navItemsMobile = document.querySelectorAll('.nav-links a');

if (menuToggle) {
    // Event klik untuk membuka/menutup menu
    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    // Menutup menu otomatis jika salah satu link diklik
    navItemsMobile.forEach(item => {
        item.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
        });
    });
}