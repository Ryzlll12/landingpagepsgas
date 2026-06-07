// LOGIKA HAMBURGER MENU MOBILE
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        // Toggle menu saat tombol diklik
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active-mobile');
        });
        
        // Tutup menu otomatis kalau salah satu link diklik (biar layarnya gak ketutup menu terus)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active-mobile');
            });
        });
    }
});

// LOGIKA ACCORDION FOOTER MOBILE
    const footerCols = document.querySelectorAll('.pf-col h4');
    
    footerCols.forEach(header => {
        header.addEventListener('click', function() {
            // Hanya aktif jika ukuran layar adalah layar HP (Mobile)
            if (window.innerWidth <= 768) {
                // Putar panah
                this.classList.toggle('active-acc');
                
                // Buka-tutup daftar menu (ul) yang ada di bawah judul (h4)
                const ul = this.nextElementSibling;
                ul.classList.toggle('open');
            }
        });
    });