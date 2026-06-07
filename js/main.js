// Header & Navbar
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // LOGIKA THEME TOGGLE (MATAHARI & BULAN)
    const themeToggleBtn = document.getElementById('themeToggle');
    const body = document.documentElement; 
    const themeIcon = themeToggleBtn.querySelector('i');
    const currentTheme = localStorage.getItem('theme');
    
    // 1. Cek Tema saat web baru pertama dibuka/direfresh
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('bi-sun', 'bi-sun-fill');
        themeIcon.classList.add('bi-moon-fill'); // Sedang Gelap = Icon Bulan
    } else {
        body.removeAttribute('data-theme');
        themeIcon.classList.remove('bi-moon', 'bi-moon-fill');
        themeIcon.classList.add('bi-sun-fill'); // Sedang Terang = Icon Matahari
    }

    // 2. Fungsi saat tombol diklik
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            if (body.getAttribute('data-theme') === 'dark') {
                // Proses berubah jadi Light Mode (Terang)
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeIcon.classList.remove('bi-moon-fill', 'bi-moon');
                themeIcon.classList.add('bi-sun-fill'); // Setelah terang -> Matahari
            } else {
                // Proses berubah jadi Dark Mode (Gelap)
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeIcon.classList.remove('bi-sun-fill', 'bi-sun');
                themeIcon.classList.add('bi-moon-fill'); // Setelah gelap -> Bulan
            }
        });
    }

    // LOGIKA TOMBOL BAHASA (ID & EN)
    const btnId = document.getElementById('btn-id');
    const btnEn = document.getElementById('btn-en');

    const savedLang = localStorage.getItem('selectedLang') || 'id';
    
    if(savedLang === 'en' && btnEn) {
        btnEn.classList.add('active');
        btnId.classList.remove('active');
    }

    if(typeof setLanguage === "function") {
        setLanguage(savedLang);
    }

    if (btnId && btnEn) {
        btnId.addEventListener('click', function() {
            btnId.classList.add('active');
            btnEn.classList.remove('active');
            setLanguage('id');
        });

        btnEn.addEventListener('click', function() {
            btnEn.classList.add('active');
            btnId.classList.remove('active');
            setLanguage('en');
        });
    }
});


// 3. ABOUT SECTION TABS LOGIC
const tabBtns = document.querySelectorAll('.tab-btn');
const aboutPanels = document.querySelectorAll('.about-panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        tabBtns.forEach(b => b.classList.remove('active'));
        aboutPanels.forEach(p => p.classList.remove('active'));
        
        this.classList.add('active');
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// 4. AWARDS 3D CAROUSEL LOGIC
const awardsData = [
    {
        title: { id: "Program Kampung Iklim Sumatera Selatan", en: "South Sumatra Climate Village Program" },
        desc: { id: "Penghargaan Program Kampung Iklim sebagai pengakuan kontribusi pengelolaan lingkungan dan iklim.", en: "Climate Village Program award in recognition of contributions to environmental and climate management." },
        cardImg: "asset/penghargaan/certificate-1.jpeg",
        bgImg: "asset/penghargaan/bg-1.png"
    },
    {
        title: { id: "Bantuan Angkutan Sampah", en: "Waste Transport Assistance" },
        desc: { id: "Sertifikat penghargaan atas program bantuan angkutan sampah di sekitar area operasional.", en: "Certificate of appreciation for the waste transport assistance program around the operational area." },
        cardImg: "asset/penghargaan/certificate-2.jpeg",
        bgImg: "asset/penghargaan/bg-2.png"
    },
    {
        title: { id: "Community Development", en: "Community Development" },
        desc: { id: "Sertifikat pengakuan kegiatan pengembangan masyarakat dan tanggung jawab sosial perusahaan.", en: "Certificate of recognition for community development activities and corporate social responsibility." },
        cardImg: "asset/penghargaan/certificate-3.jpeg",
        bgImg: "asset/penghargaan/bg-3.png"
    },
    {
        title: { id: "Ecosystem Protection", en: "Ecosystem Protection" },
        desc: { id: "Sertifikat atas komitmen perlindungan ekosistem dan lingkungan di wilayah operasi.", en: "Certificate for the commitment to ecosystem and environmental protection in the operational area." },
        cardImg: "asset/penghargaan/certificate-4.jpeg",
        bgImg: "asset/penghargaan/bg-4.png"
    },
    {
        title: { id: "Hari Peduli Sampah", en: "National Waste Awareness Day" },
        desc: { id: "Sertifikat keikutsertaan dan dukungan program Hari Peduli Sampah Nasional.", en: "Certificate of participation and support for the National Waste Awareness Day program." },
        cardImg: "asset/penghargaan/certificate-5.jpeg",
        bgImg: "asset/penghargaan/bg-5.png"
    },
    {
        title: { id: "Keselamatan Minyak dan Gas Bumi", en: "Oil and Gas Safety" },
        desc: { id: "Sertifikat keselamatan operasi minyak dan gas bumi di fasilitas pengolahan gas.", en: "Certificate of oil and gas operational safety at the gas processing facility." },
        cardImg: "asset/penghargaan/certificate-6.jpeg",
        bgImg: "asset/penghargaan/bg-6.png"
    },
    {
        title: { id: "ISO 9001", en: "ISO 9001" },
        desc: { id: "Sertifikasi ISO 9001 — sistem manajemen mutu terstandar internasional.", en: "ISO 9001 Certification — internationally standardized quality management system." },
        cardImg: "asset/penghargaan/certificate-7.jpg",
        bgImg: "asset/penghargaan/bg-7.png"
    },
    {
        title: { id: "ISO 14001", en: "ISO 14001" },
        desc: { id: "Sertifikasi ISO 14001 — sistem manajemen lingkungan berkelanjutan.", en: "ISO 14001 Certification — sustainable environmental management system." },
        cardImg: "asset/penghargaan/certificate-8.jpg",
        bgImg: "asset/penghargaan/bg-8.png"
    },
    {
        title: { id: "ISO 45001", en: "ISO 45001" },
        desc: { id: "Sertifikasi sistem manajemen keselamatan dan kesehatan kerja (K3).", en: "Certification of occupational health and safety (OHS) management system." },
        cardImg: "asset/penghargaan/certificate-9.jpeg",
        bgImg: "asset/penghargaan/bg-9.png"
    },
    {
        title: { id: "Akreditasi", en: "Accreditation" },
        desc: { id: "Sertifikat akreditasi atas standar operasional dan pengelolaan fasilitas perusahaan.", en: "Accreditation certificate for the company's operational and facility management standards." },
        cardImg: "asset/penghargaan/certificate-10.jpeg",
        bgImg: "asset/penghargaan/bg-10.png"
    },
    {
        title: { id: "Sistem Manajemen Kesehatan Kerja", en: "Occupational Health Management System" },
        desc: { id: "Sertifikat sistem manajemen dan kesehatan kerja di lingkungan operasional Perseroan.", en: "Certificate of occupational health and management system in the Company's operational environment." },
        cardImg: "asset/penghargaan/certificate-11.jpeg",
        bgImg: "asset/penghargaan/bg-11.png"
    }
];

let awCurrentIndex = 0;
const track = document.getElementById('awardsTrack');
const bgContainer = document.getElementById('awardsBg');
const indicatorsContainer = document.getElementById('awardsIndicators');

// Definisikan updateCarousel di scope global agar bisa dipanggil saat ganti bahasa
function updateCarousel(newIndex) {
    if (!track) return;
    const totalAwards = awardsData.length;
    
    if (newIndex < 0) newIndex = totalAwards - 1;
    if (newIndex >= totalAwards) newIndex = 0;
    
    awCurrentIndex = newIndex;
    const cards = document.querySelectorAll('.award-card');
    const dots = document.querySelectorAll('.indicator-dot');

    const currentLang = localStorage.getItem('selectedLang') || 'id';

    cards.forEach((card, index) => {
        card.className = 'award-card';
        
        let offset = index - awCurrentIndex;

        // --- FITUR INFINITE (TIDAK LONCAT) ---
        if (offset < -Math.floor(totalAwards / 2)) {
            offset += totalAwards;
        } else if (offset > Math.floor(totalAwards / 2)) {
            offset -= totalAwards;
        }
        // --------------------------------------

        if (offset === 0) card.classList.add('active');
        else if (offset === -1) card.classList.add('prev-1');
        else if (offset === 1) card.classList.add('next-1');
        else if (offset === -2) card.classList.add('prev-2');
        else if (offset === 2) card.classList.add('next-2');
        else if (offset < -2) card.classList.add('hidden-left');
        else if (offset > 2) card.classList.add('hidden-right');

        if(Math.abs(offset) <= 2) {
            const titleEl = card.querySelector('.aw-title');
            const descEl = card.querySelector('.aw-desc');
            if(titleEl) titleEl.innerText = awardsData[index].title[currentLang];
            if(descEl) descEl.innerText = awardsData[index].desc[currentLang];
        }
    });

    dots.forEach(dot => dot.classList.remove('active'));
    dots[awCurrentIndex].classList.add('active');
    bgContainer.style.backgroundImage = `url('${awardsData[awCurrentIndex].bgImg}')`;
}

if(track) {
    awardsData.forEach((award, index) => {
        const card = document.createElement('div');
        card.className = 'award-card';
        card.innerHTML = `
            <div class="award-img-box"><img src="${award.cardImg}" alt="Certificate"></div>
            <div class="award-text-box">
                <h3 class="aw-title">${award.title.id}</h3>
                <p class="aw-desc">${award.desc.id}</p>
            </div>
        `;
        card.addEventListener('click', () => updateCarousel(index));
        track.appendChild(card);

        const dot = document.createElement('div');
        dot.className = 'indicator-dot';
        dot.addEventListener('click', () => updateCarousel(index));
        indicatorsContainer.appendChild(dot);
    });

    updateCarousel(0);

    document.getElementById('btnPrevAward').addEventListener('click', () => updateCarousel(awCurrentIndex - 1));
    document.getElementById('btnNextAward').addEventListener('click', () => updateCarousel(awCurrentIndex + 1));

    let autoSlideInterval;
    const startAutoSlide = () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => { updateCarousel(awCurrentIndex + 1); }, 3000);
    };
    const stopAutoSlide = () => { clearInterval(autoSlideInterval); };

    startAutoSlide();
    track.addEventListener('mouseenter', stopAutoSlide);
    track.addEventListener('mouseleave', startAutoSlide);

    let startX = 0; let endX = 0;
    track.addEventListener('touchstart', (e) => { startX = e.changedTouches[0].screenX; stopAutoSlide(); }, {passive: true});
    track.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].screenX;
        if (startX - endX > 50) updateCarousel(awCurrentIndex + 1);
        if (endX - startX > 50) updateCarousel(awCurrentIndex - 1);
        startAutoSlide();
    }, {passive: true});
}

// 5. DIAGONAL PROCESS INTERACTION
const dpNodes = document.querySelectorAll('.dp-node');
const dpImages = document.querySelectorAll('.dp-img');
const dpDescText = document.getElementById('dpDescText'); 

if(dpNodes.length > 0 && dpImages.length > 0 && dpDescText) {
    dpNodes.forEach(node => {
        node.addEventListener('mouseenter', function() {
            dpNodes.forEach(n => n.classList.remove('active'));
            dpImages.forEach(img => img.classList.remove('active'));

            const targetIndex = this.getAttribute('data-index');
            
            // Ambil bahasa yang sedang aktif
            const currentLang = localStorage.getItem('selectedLang') || 'id';
            const targetDesc = this.getAttribute('data-desc-' + currentLang);

            this.classList.add('active');
            dpImages[targetIndex].classList.add('active');

            dpDescText.style.opacity = '0'; 
            setTimeout(() => {
                dpDescText.innerText = targetDesc; 
                dpDescText.style.opacity = '1'; 
            }, 300); 
        });
    });
}

// 6. FASILITAS INTERACTIVE (WITH BILINGUAL DATA)
const facData = [
    {
        badgeText: { id: "KILANG EKSTRAKSI", en: "EXTRACTION PLANT" },
        badgeClass: "bg-red",
        title: "Kilang Ekstraksi",
        location: { id: "Prabumulih, Sumatera Selatan", en: "Prabumulih, South Sumatra" },
        imgSrc: "asset/fasilitas/kilang-ekstraksi.png"
    },
    {
        badgeText: { id: "KILANG FRAKSINASI", en: "FRACTIONATION PLANT" },
        badgeClass: "bg-blue",
        title: "Kilang Fraksinasi",
        location: { id: "Banyuasin, Sumatera Selatan", en: "Banyuasin, South Sumatra" },
        imgSrc: "asset/fasilitas/kilang-fraksinasi.png"
    }
];

const facOptionBtns = document.querySelectorAll('.fac-option-btn');
const facImage = document.getElementById('facImage');
const facBadge = document.getElementById('facBadge');
const facLocation = document.getElementById('facLocation');
let currentFacIndex = 0; // Untuk trigger re-render

if(facOptionBtns.length > 0) {
    facOptionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            facOptionBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            currentFacIndex = this.getAttribute('data-fac-index');
            const data = facData[currentFacIndex];
            const currentLang = localStorage.getItem('selectedLang') || 'id';

            facImage.style.opacity = '0.5';
            if(facBadge) facBadge.style.opacity = '0';
            if(facLocation) facLocation.parentElement.style.opacity = '0';

            setTimeout(() => {
                facImage.src = data.imgSrc;
                if(currentFacIndex == 1) { 
                    facImage.style.objectFit = 'cover';
                    facImage.style.borderRadius = '20px';
                } else { 
                    facImage.style.objectFit = 'contain';
                    facImage.style.borderRadius = '0px';
                }
                
                if(facBadge) {
                    facBadge.className = `fac-badge ${data.badgeClass}`;
                    facBadge.innerText = data.badgeText[currentLang];
                }
                if(facLocation) {
                    facLocation.innerText = data.location[currentLang];
                }

                facImage.style.opacity = '1';
                if(facBadge) facBadge.style.opacity = '1';
                if(facLocation) facLocation.parentElement.style.opacity = '1';
            }, 300);
        });
    });

    const facWrapper = document.getElementById('fac3dWrapper');
    let currentZoom = 1; let currentRotateX = 0; let currentRotateY = 0;

    function applyTransform() {
        facImage.style.transform = `rotateY(${currentRotateY}deg) rotateX(${currentRotateX}deg) scale(${currentZoom})`;
    }

    facWrapper.addEventListener('mousemove', (e) => {
        const rect = facWrapper.getBoundingClientRect();
        const xPercent = ((e.clientX - rect.left) / rect.width) - 0.5;
        const yPercent = ((e.clientY - rect.top) / rect.height) - 0.5;
        currentRotateY = xPercent * 15;
        currentRotateX = yPercent * -15;
        facImage.style.transition = 'transform 0.1s ease-out';
        applyTransform();
    });

    facWrapper.addEventListener('wheel', (e) => {
        e.preventDefault(); 
        currentZoom += e.deltaY < 0 ? 0.1 : -0.1;
        currentZoom = Math.min(Math.max(currentZoom, 0.8), 2.5);
        facImage.style.transition = 'transform 0.15s ease-out';
        applyTransform();
    });

    facWrapper.addEventListener('mouseleave', () => {
        currentRotateX = 0; currentRotateY = 0; currentZoom = 1; 
        facImage.style.transition = 'transform 0.5s ease-out'; 
        applyTransform();
    });
}

// 12. MILESTONE CIRCULAR TIMELINE (WITH BILINGUAL DATA)
const dataAsli = [
    { year: "2008", icon: "🏗️", title: {id: "Pendirian Perseroan", en: "Company Establishment"}, desc: {id: "PT Perta-Samtan Gas resmi didirikan pada 7 Mei 2008, guna mendukung program pemerintah dalam konversi BBM ke LPG.", en: "PT Perta-Samtan Gas was officially established on May 7, 2008, to support the government program in converting fuel to LPG."} },
    { year: "2010", icon: "🤝", title: {id: "Alih Kepemilikan & Pembangunan Kilang", en: "Ownership Transfer & Refinery Construction"}, desc: {id: "E1-Corporation mengalihkan kepemilikan sahamnya kepada Samtan Co., Ltd. Pembangunan Kilang NGL di Sumatera Selatan dilaksanakan oleh kontraktor EPCC pada bulan Juli 2010.", en: "E1-Corporation transferred its shares to Samtan Co., Ltd. The construction of the NGL Refinery in South Sumatra was carried out by EPCC contractors in July 2010."} },
    { year: "2011", icon: "📝", title: {id: "Perubahan Nama Perusahaan", en: "Company Name Change"}, desc: {id: "Perubahan nama Perusahaan dari PT E1-Pertagas menjadi PT Perta-Samtan Gas pada tanggal 28 Januari 2011.", en: "Company name change from PT E1-Pertagas to PT Perta-Samtan Gas on January 28, 2011."} },
    { year: "2012", icon: "🎖️", title: {id: "Peresmian Kilang NGL", en: "NGL Refinery Inauguration"}, desc: {id: "Peresmian Kilang NGL di Sumatera Selatan pada 6 Desember 2012 oleh Presiden Republik Indonesia.", en: "The inauguration of the NGL Refinery in South Sumatra on December 6, 2012, by the President of the Republic of Indonesia."} },
    { year: "2013", icon: "🚀", title: {id: "Fase Komersial", en: "Commercial Phase"}, desc: {id: "Kilang PT Perta-Samtan Gas memasuki fase komersial mulai 1 Mei 2013.", en: "PT Perta-Samtan Gas refinery entered the commercial phase starting May 1, 2013."} },
    { year: "2014", icon: "📦", title: {id: "100.000 Metrik Ton LPG", en: "100,000 Metric Tons of LPG"}, desc: {id: "Berhasil melakukan pengiriman 100.000 Metrik Ton LPG untuk keperluan gas domestik (Sumatera bagian Selatan) melalui pipa.", en: "Successfully delivered 100,000 Metric Tons of LPG for domestic gas needs (Southern Sumatra) via pipeline."} },
    { year: "2016", icon: "🏢", title: {id: "Relokasi Kantor Pusat", en: "Head Office Relocation"}, desc: {id: "Lokasi kantor pusat PT Perta-Samtan Gas yang pada awalnya berada di Jakarta direlokasi ke Kilang Fraksinasi, Banyuasin.", en: "The location of the PT Perta-Samtan Gas head office, initially in Jakarta, was relocated to the Fractionation Refinery, Banyuasin."} },
    { year: "2018", icon: "🏆", title: {id: "1 Juta Ton LPG", en: "1 Million Tons of LPG"}, desc: {id: "Berhasil memproduksi 1 juta ton LPG sejak masa komersial hingga tahun 2026 — tonggak bersejarah dalam perjalanan perusahaan.", en: "Successfully produced 1 million tons of LPG from the commercial period until 2026 — a historic milestone in the company's journey."} },
    { year: "2019", icon: "🔄", title: {id: "Perubahan Pemegang Saham", en: "Shareholder Change"}, desc: {id: "Perubahan nama Samtan Co.Ltd., menjadi ST International Corporation pada tanggal 7 Desember 2019.", en: "Name change of Samtan Co.Ltd., to ST International Corporation on December 7, 2019."} },
    { year: "2023", icon: "🔧", title: {id: "Jumper Line 12\"", en: "12\" Jumper Line"}, desc: {id: "PT Perta-Samtan Gas berhasil menyelesaikan proyek pembangunan Jumper Line 12\" yang berlokasi di SKG 10 dan telah melakukan commissioning pada 26 Agustus 2023.", en: "PT Perta-Samtan Gas successfully completed the 12\" Jumper Line construction project located at SKG 10 and conducted commissioning on August 26, 2023."} },
    { year: "2026", icon: "🏆", title: {id: "2,5 Juta Metrik Ton LPG", en: "2.5 Million Metric Tons of LPG"}, desc: {id: "Pencapaian produksi kumulatif 2,5 juta metrik ton LPG sejak fase komersial 1 Mei 2013 hingga tahun 2026.", en: "Achievement of cumulative production of 2.5 million metric tons of LPG from the commercial phase of May 1, 2013, to 2026."} }
];

const milestones = [...dataAsli, ...dataAsli];
let msActiveIndex = 0;

function updateMilestone() {
    const wheel = document.getElementById('msWheel');
    const cardArea = document.querySelector('.ms-card');
    const msYear = document.getElementById('msYear');
    const msIcon = document.getElementById('msIcon');
    const msTitle = document.getElementById('msTitle');
    const msDesc = document.getElementById('msDesc');
    const progressFill = document.getElementById('msProgressFill');
    const nodesArr = document.querySelectorAll('.ms-node');
    const innersArr = document.querySelectorAll('.ms-node-inner');
    
    if(!wheel) return;

    const currentLang = localStorage.getItem('selectedLang') || 'id';

    wheel.style.transform = `rotate(${msCurrentRotation}deg)`;
    cardArea.style.opacity = '0';
    
    setTimeout(() => {
        msYear.innerText = milestones[msActiveIndex].year;
        msIcon.innerText = milestones[msActiveIndex].icon;
        msTitle.innerText = milestones[msActiveIndex].title[currentLang];
        msDesc.innerText = milestones[msActiveIndex].desc[currentLang];
        cardArea.style.opacity = '1';
    }, 300);

    const angleStep = 360 / milestones.length; 
    nodesArr.forEach((n, i) => {
        if(i === msActiveIndex) n.classList.add('active');
        else n.classList.remove('active');
        const globalAngle = (i * angleStep) + msCurrentRotation;
        innersArr[i].style.transform = `rotate(${-globalAngle}deg)`;
    });

    if(progressFill) {
        progressFill.classList.remove('run-animation');
        void progressFill.offsetWidth; 
        progressFill.classList.add('run-animation');
    }
}

let msCurrentRotation = 0;
document.addEventListener("DOMContentLoaded", function() {
    const wheel = document.getElementById('msWheel');
    if(!wheel) return;

    const angleStep = 360 / milestones.length; 
    let autoPlayTimer;

    milestones.forEach((item, index) => {
        const node = document.createElement('div');
        node.className = 'ms-node';
        const nodeAngle = index * angleStep;
        node.style.transform = `rotate(${nodeAngle}deg) translateX(700px)`; 
        
        const innerNode = document.createElement('div');
        innerNode.className = 'ms-node-inner';
        innerNode.innerText = item.year;
        node.appendChild(innerNode);

        node.addEventListener('click', () => {
            let diff = index - msActiveIndex;
            if (diff > milestones.length / 2) diff -= milestones.length;
            else if (diff < -milestones.length / 2) diff += milestones.length;
            
            msCurrentRotation -= diff * angleStep;
            msActiveIndex = index;

            updateMilestone();
            startTimer();
        });

        node.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
        node.addEventListener('mouseleave', startTimer);
        wheel.appendChild(node);
    });

    function nextMilestone() {
        msCurrentRotation -= angleStep;
        msActiveIndex = (msActiveIndex + 1) % milestones.length;
        updateMilestone();
    }

    function startTimer() {
        clearInterval(autoPlayTimer);
        autoPlayTimer = setInterval(nextMilestone, 4000);
    }

    updateMilestone();
    startTimer();
});

const msContainer = document.querySelector('.ms-container');
if(msContainer) {
    const mobileTimeline = document.createElement('div');
    mobileTimeline.className = 'ms-mobile-timeline';
    mobileTimeline.id = 'msMobileTimeline';
    msContainer.appendChild(mobileTimeline);

    function renderMobileTimeline() {
        const container = document.getElementById('msMobileTimeline');
        if(!container) return;
        container.innerHTML = '';
        const currentLang = localStorage.getItem('selectedLang') || 'id';

        // Pakai dataAsli bawaan mas
        dataAsli.forEach(item => { 
            container.innerHTML += `
                <div class="ms-timeline-item reveal fade-up">
                    <div class="ms-timeline-dot"></div>
                    <div class="ms-time-header">
                        <span class="ms-time-icon">${item.icon}</span>
                        <h3 class="ms-time-year">${item.year}</h3>
                    </div>
                    <h4 class="ms-time-title">${item.title[currentLang]}</h4>
                    <p class="ms-time-desc">${item.desc[currentLang]}</p>
                </div>
            `;
        });
    }
    
    renderMobileTimeline();
    document.addEventListener('languageChanged', renderMobileTimeline);
}

// 13. KONTRIBUSI INTERACTIVE SLIDER
const kontribusiData = [
    { title: { id: "Santunan Anak Yatim", en: "Orphan Assistance" }, desc: { id: "Program sosial berupa pemberian bantuan dan perhatian kepada anak yatim sebagai bentuk kepedulian perusahaan terhadap kesejahteraan masyarakat.", en: "A social program providing aid and care to orphans as a form of the company's concern for community welfare." }, img: "asset/csr/csr-1.png" },
    { title: { id: "Hunian Sementara", en: "Temporary Shelter" }, desc: { id: "Penyediaan tempat tinggal sementara yang layak dan aman bagi masyarakat terdampak bencana atau kondisi darurat.", en: "Provision of proper and safe temporary housing for communities affected by disasters or emergency situations." }, img: "asset/csr/csr-2.png" },
    { title: { id: "Renovasi RLTH", en: "Livable House Renovation" }, desc: { id: "Program renovasi Rumah Layak Tinggal Huni (RLTH) guna meningkatkan kualitas tempat tinggal masyarakat agar lebih nyaman, sehat, dan aman.", en: "A renovation program for livable houses aimed at improving the quality of community housing to make it more comfortable, healthy, and safe." }, img: "asset/csr/csr-3.png" },
    { title: { id: "Pencegahan Banjir", en: "Flood Prevention" }, desc: { id: "Upaya mitigasi bencana melalui pembangunan dan perbaikan fasilitas pendukung untuk mengurangi risiko serta dampak banjir di lingkungan masyarakat.", en: "Disaster mitigation efforts through the construction and improvement of supporting facilities to reduce the risk and impact of flooding in communities." }, img: "asset/csr/csr-4.png" },
    { title: { id: "Program Safari Ramadan", en: "Ramadan Safari Program" }, desc: { id: "Kegiatan sosial dan keagamaan yang dilaksanakan selama bulan Ramadan untuk mempererat silaturahmi serta berbagi manfaat kepada masyarakat.", en: "Social and religious activities carried out during the month of Ramadan to strengthen relationships and share benefits with the community." }, img: "asset/csr/csr-5.png" },
    { title: { id: "Perkebunan Sido Mukti", en: "Sido Mukti Plantation" }, desc: { id: "Program pemberdayaan masyarakat melalui pengembangan sektor perkebunan guna meningkatkan produktivitas dan kesejahteraan ekonomi warga setempat.", en: "A community empowerment program through the development of the plantation sector to improve productivity and the economic welfare of local residents." }, img: "asset/csr/csr-6.png" }
];

let currentKIndex = 0;
let kontribusiTimer;

document.addEventListener("DOMContentLoaded", function() {
    if(document.getElementById('k-main-img')) setKontribusi(0);
});

function setKontribusi(index) {
    const kMainImg = document.getElementById('k-main-img');
    const kMainTitle = document.getElementById('k-main-title');
    const kMainDesc = document.getElementById('k-main-desc');
    const kCurrentNum = document.getElementById('k-current');
    const kThumbs = document.querySelectorAll('.k-thumb');

    if (index < 0) index = kontribusiData.length - 1;
    if (index >= kontribusiData.length) index = 0;
    
    currentKIndex = index;
    const data = kontribusiData[currentKIndex];
    const currentLang = localStorage.getItem('selectedLang') || 'id';

    kMainImg.style.opacity = 0;
    setTimeout(() => {
        kMainImg.src = data.img;
        kMainTitle.innerText = data.title[currentLang];
        kMainDesc.innerText = data.desc[currentLang];
        kCurrentNum.innerText = (currentKIndex + 1).toString().padStart(2, '0');
        kMainImg.style.opacity = 1;
    }, 250);

    kThumbs.forEach((thumb, i) => {
        if (i === currentKIndex) thumb.classList.add('active');
        else thumb.classList.remove('active');
        
        // Update Thumbnail Text as well
        const thumbTitle = thumb.querySelector('h4');
        if(thumbTitle) thumbTitle.innerText = kontribusiData[i].title[currentLang];
    });

    clearInterval(kontribusiTimer); 
    kontribusiTimer = setInterval(() => { setKontribusi(currentKIndex + 1); }, 5000);
}

function nextKontribusi() { setKontribusi(currentKIndex + 1); }
function prevKontribusi() { setKontribusi(currentKIndex - 1); }

// 14. CAROUSEL EKOSISTEM (AUTO & DRAG)
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('ecoContainer');
    const track = document.getElementById('ecoTrack');
    if(!container || !track) return;

    Array.from(track.children).forEach(card => track.appendChild(card.cloneNode(true)));

    let isDown = false; let startX; let scrollLeft; let autoScrollInterval;

    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (container.scrollLeft >= (track.scrollWidth / 2)) container.scrollLeft = 0;
            container.scrollLeft += 1;
        }, 20); 
    }

    function stopAutoScroll() { clearInterval(autoScrollInterval); }

    startAutoScroll();

    container.addEventListener('mousedown', (e) => { isDown = true; stopAutoScroll(); startX = e.pageX - container.offsetLeft; scrollLeft = container.scrollLeft; });
    container.addEventListener('mouseleave', () => { if(isDown) { isDown = false; startAutoScroll(); } });
    container.addEventListener('mouseup', () => { isDown = false; startAutoScroll(); });
    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        container.scrollLeft = scrollLeft - ((e.pageX - container.offsetLeft) - startX) * 2;
    });

    container.addEventListener('touchstart', (e) => { isDown = true; stopAutoScroll(); startX = e.touches[0].pageX - container.offsetLeft; scrollLeft = container.scrollLeft; }, {passive: true});
    container.addEventListener('touchend', () => { isDown = false; startAutoScroll(); });
    container.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        container.scrollLeft = scrollLeft - ((e.touches[0].pageX - container.offsetLeft) - startX) * 2;
    }, {passive: true});
});

// ==========================================
// MENDENGARKAN PERUBAHAN BAHASA DARI lang.js
// ==========================================
document.addEventListener('languageChanged', function(e) {
    const lang = e.detail.lang;
    
    // 1. Update Awards Text
    if(document.getElementById('awardsTrack')) {
        updateCarousel(awCurrentIndex);
    }

// 2. Update Facility Info Text
    if(document.getElementById('facLocation')) {
        const facLocation = document.getElementById('facLocation');
        const facBadge = document.getElementById('facBadge'); // Tambahan
        
        facLocation.innerText = facData[currentFacIndex].location[lang];
        if(facBadge) {
            facBadge.innerText = facData[currentFacIndex].badgeText[lang]; // Tambahan
        }
    }

    // 3. Update Process Hover Text currently active
    const dpDescText = document.getElementById('dpDescText');
    const activeNode = document.querySelector('.dp-node.active');
    if(dpDescText && activeNode) {
        dpDescText.innerText = activeNode.getAttribute('data-desc-' + lang);
    }
    
    // Update Process Titles directly mapped in JS for instant change
    const procTitles = [
        { id: "01. Feed Gas Masuk", en: "01. Feed Gas Inlet" },
        { id: "02. Kilang Ekstraksi", en: "02. Extraction Plant" },
        { id: "03. Pipa NGL ±90 KM", en: "03. ±90 KM NGL Pipeline" },
        { id: "04. Kilang Fraksinasi", en: "04. Fractionation Plant" },
        { id: "05. Distribusi Produk", en: "05. Product Distribution" }
    ];
    for(let i=1; i<=5; i++) {
        const el = document.getElementById('pn'+i);
        if(el) el.innerText = procTitles[i-1][lang];
    }

    // 4. Update Milestone Text
    if(document.getElementById('msWheel')) {
        updateMilestone();
    }

    // 5. Update Kontribusi Text
    if(document.getElementById('k-main-img')) {
        setKontribusi(currentKIndex); 
    }
});

