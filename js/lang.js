// ==========================================
// FILE: lang.js (Bilingual Dictionary & Logic)
// ==========================================

const translations = {
    "id": {
        // Navbar
        "nav_home": "Beranda",
        "nav_about": "Tentang Perusahaan",
        "nav_process": "Proses",
        "nav_facility": "Fasilitas",
        "nav_product": "Produk",
        "nav_contribute": "Kontribusi",

        // Hero
        "hero_subtitle": "HARMONY WORLD CLASS",
        "hero_title": "PT Perta-Samtan Gas",
        "hero_quote": '"Selesaikan tanggung jawab hari ini, siapkan landasan untuk esok hari."',
        "hero_scroll": "Geser Ke Atas Untuk Menelusuri",

        // About - Profil
        "about_title": "PT Perta-Samtan Gas",
        "about_p1": "PT Perta-Samtan Gas didirikan pada 7 Mei 2008 dengan tujuan memproduksi LPG guna mendukung program konversi minyak tanah ke LPG serta penyediaan energi nasional.",
        "about_p2": "Perseroan bergerak dalam bisnis pengolahan gas serta menyediakan layanan jasa dan infrastruktur terkait pemrosesan gas dengan dua kilang terintegrasi di Prabumulih dan Sungai Gerong.",
        "stat_tgl_label": "Tanggal Pendirian",
        "stat_tgl_val": "7 Mei 2008",
        "stat_kap_label": "Kapasitas Desain",
        "stat_kap_val": "250 MMSCFD",
        "stat_fas_label": "Fasilitas Produksi",
        "stat_fas_val": "2 Kilang",
        "stat_lok_label": "Lokasi Utama",
        "stat_lok_val": "Sungai Gerong",

        // About - Tujuan
        "tujuan_title": "Tujuan & Maksud Perseroan",
        "tuj_1": "Ekstraksi dan pemrosesan gas alam menjadi LPG dan produk gas lainnya.",
        "tuj_2": "Niaga dan distribusi LPG untuk memenuhi program Public Service Obligation (PSO).",
        "tuj_3": "Optimalisasi sumber daya dan fasilitas pemrosesan gas untuk layanan terbaik.",
        "tuj_4": "Penyediaan infrastruktur terkait sektor pemrosesan gas secara berkelanjutan.",
        "visi_label": "VISI",
        "visi_text": "Menjadi Perseroan Terkemuka di Dunia dalam Industri LPG & Gas",
        "misi_label": "MISI",
        "misi_text": "Memberikan nilai tambah bagi Pemegang Saham, Karyawan, dan Masyarakat Indonesia.",

        // About - Nilai & Kepemimpinan & Tab
        "nilai_title": "Nilai-Nilai Perseroan",
        "val1_title": "Profesional",
        "val1_desc": "Berkomitmen dalam perbaikan diri berkelanjutan dan memiliki profesionalisme tinggi.",
        "val2_title": "HSSE",
        "val2_desc": "Fokus pada keselamatan kerja, kesehatan, keamanan, dan lingkungan.",
        "val3_title": "Tata Kelola",
        "val3_desc": "Menjalankan prinsip GCG secara transparan dan bertanggung jawab.",
        "val4_title": "Achieve Profit",
        "val4_desc": "Menghasilkan nilai ekonomi tinggi demi keberlangsungan Perseroan dan Pemangku Kepentingan.",
        "val5_title": "Kepuasan Pelanggan",
        "val5_desc": "Berkomitmen penuh terhadap kepuasan pelanggan melalui layanan dan produk terbaik.",
        "val6_title": "Budaya AKHLAK",
        "val6_desc": "Menerapkan nilai Amanah, Kompeten, Harmonis, Loyal, Adaptif, dan Kolaboratif.",
        "lead_title": "Dewan Direksi",
        "lead_pos1": "Direktur Utama",
        "lead_pos2": "Wakil Direktur",
        "tab_profil": "Profil",
        "tab_tujuan": "Tujuan",
        "tab_nilai": "Nilai",
        "tab_leadership": "Kepemimpinan",

        // Awards (Penghargaan)
        "nav_awards": "PENGHARGAAN & PENGAKUAN",
        "awards_title": "Penghargaan yang Kami Peroleh",
        "awards_desc": "Kami senantiasa berkomitmen untuk menjaga standar kualitas dan keselamatan yang tinggi,<br>serta berkontribusi dalam pengembangan industri energi nasional.",

        // Process (Alur Produksi)
        "proc_sub": "ALUR PRODUKSI",
        "proc_title": "Proses Bisnis Utama",

        // Facility (Fasilitas)
        "fac_sub": "AREA OPERASI",
        "fac_title": "Fasilitas Operasional",
        "fac_opt1_sub": "Fasilitas 1",
        "fac_opt1_title": "Kilang Ekstraksi",
        "fac_opt2_sub": "Fasilitas 2",
        "fac_opt2_title": "Kilang Fraksinasi",
        "fac_badge_1": "KILANG EKSTRAKSI", 
        "fac_badge_2": "KILANG FRAKSINASI",

        // Products & Advantages (Produk & Keunggulan)
        "prod_sub": "OUTPUT & VALUE",
        "prod_title": "Produk Utama & Keunggulan",
        "prod_desc": "Hasil pengolahan gas alam terintegrasi untuk memenuhi kebutuhan energi domestik.",
        "prod_lpg_desc": "Produk utama berupa LPG campuran dengan kapasitas produksi 710 MT/hari, disalurkan ke PT Pertamina Patra Niaga.",
        "prod_kon_desc": "Kondensat (Pentane+) sebagai produk sampingan fraksinasi 2.200 bbl/hari, dikembalikan ke PT Pertamina Hulu Rokan.",
        "adv_title": "Keunggulan Perseroan",
        "adv_op_title": "Keunggulan Operasional",
        "adv_op_desc": "Konsisten mencapai produktivitas, stabilitas, dan efisiensi tinggi dengan rekam jejak keberhasilan sejak fase komersial 1 Mei 2013.",
        "adv_biz_title": "Peluang Bisnis Beragam",
        "adv_biz_desc": "Rekam jejak perusahaan memungkinkan eksplorasi peluang bisnis di seluruh wilayah Indonesia dengan potensi pertumbuhan luas.",

        // One Pertamina
        "op_subtitle": "PERTAMINA GROUP",
        "op_title": "One Pertamina",
        "op_val_title": "VALUES",
        "op_val_desc": "Nilai-nilai yang menjadi landasan dalam setiap langkah dan keputusan kami.",
        "op_n1_t": "Kolaboratif",
        "op_n1_d": "Membangun kerja sama sinergis dan memberikan nilai tambah.",
        "op_n2_t": "Disiplin",
        "op_n2_d": "Patuh pada prosedur, peraturan, dan komitmen kerja.",
        "op_n3_t": "Integritas",
        "op_n3_d": "Menjunjung tinggi kejujuran, etika, dan tanggung jawab.",
        "op_n4_t": "Inovatif",
        "op_n4_d": "Terus berinovasi dan beradaptasi menghadapi perubahan.",
        "op_n5_t": "Tanggung Jawab Sosial",
        "op_n5_d": "Berkontribusi pada pembangunan dan pengelolaan lingkungan.",
        "op_n6_t": "Fokus Pelanggan",
        "op_n6_d": "Mengutamakan kepuasan pelanggan melalui layanan berkualitas.",

        // HSSE Golden Rules
        "hsse_sub": "BUDAYA KESELAMATAN",
        "hsse_title": "HSSE Golden Rules",
        "hsse_desc": "Komitmen bersama untuk menciptakan lingkungan kerja yang aman, andal, dan berkelanjutan.",
        "hsse_c1_t": "Patuh",
        "hsse_c1_d": "Mematuhi seluruh prosedur, peraturan, dan standar keselamatan tanpa kompromi di setiap aktivitas kerja.",
        "hsse_c2_t": "Peduli",
        "hsse_c2_d": "Peduli terhadap keselamatan diri sendiri, rekan kerja, serta lingkungan sekitar area operasional.",
        "hsse_c3_t": "Intervensi",
        "hsse_c3_d": "Berani menghentikan pekerjaan yang tidak aman dan melaporkan kondisi berisiko segera.",
        "hsse_foot": "Keselamatan adalah tanggung jawab kita bersama.",

        // Milestone
        "ms_sub": "PERJALANAN KAMI",
        "ms_title": "Milestone<br>Perseroan",

        // Kontribusi
        "k_sub": "KONTRIBUSI & KEGIATAN",
        "k_title": "Kontribusi Kami",
        "k_desc": "Kami percaya bahwa energi bukan hanya tentang menggerakkan industri, tetapi juga tentang menggerakkan kehidupan dan masa depan yang lebih baik.",

        // Ekosistem
        "eco_sub": "EKOSISTEM & MITRA",
        "eco_title": "Bagian dari Ekosistem Pertamina",
        "eco_desc": "PT Perta-Samtan Gas beroperasi sebagai bagian integral rantai nilai energi nasional bersama berbagai entitas strategis.",

        // Footer
        "ft_pusat": "Kantor Pusat, Banyuasin",
        "ft_cabang": "Kantor Perwakilan Jakarta",
        "ft_web": "Website Resmi",
        "ft_perusahaan": "PERUSAHAAN",
        "ft_tentang": "Tentang Kami",
        "ft_visimisi": "Visi & Misi",
        "ft_nilai": "Tata Nilai (AKHLAK)",
        "ft_capai": "Pencapaian",
        "ft_karir": "Karir",
        "ft_ops": "OPERASIONAL",
        "ft_proses": "Proses Bisnis",
        "ft_fasilitas": "Fasilitas",
        "ft_privasi": "Kebijakan Privasi"
    },
    "en": {
        // Navbar
        "nav_home": "Home",
        "nav_about": "About Us",
        "nav_process": "Process",
        "nav_facility": "Facility",
        "nav_product": "Products",
        "nav_contribute": "Contribution",

        // Hero
        "hero_subtitle": "HARMONY WORLD CLASS",
        "hero_title": "PT Perta-Samtan Gas",
        "hero_quote": '"Fulfill today\'s responsibilities, prepare the foundation for tomorrow."',
        "hero_scroll": "Scroll Up To Explore",

        // About - Profil
        "about_title": "PT Perta-Samtan Gas",
        "about_p1": "PT Perta-Samtan Gas was established on May 7, 2008, with the aim of producing LPG to support the kerosene to LPG conversion program and national energy supply.",
        "about_p2": "The company operates in the gas processing business and provides services and infrastructure related to gas processing with two integrated refineries in Prabumulih and Sungai Gerong.",
        "stat_tgl_label": "Date of Establishment",
        "stat_tgl_val": "May 7, 2008",
        "stat_kap_label": "Design Capacity",
        "stat_kap_val": "250 MMSCFD",
        "stat_fas_label": "Production Facilities",
        "stat_fas_val": "2 Refineries",
        "stat_lok_label": "Main Location",
        "stat_lok_val": "Sungai Gerong",

        // About - Tujuan
        "tujuan_title": "Company Goals & Purposes",
        "tuj_1": "Extraction and processing of natural gas into LPG and other gas products.",
        "tuj_2": "Trading and distribution of LPG to fulfill the Public Service Obligation (PSO) program.",
        "tuj_3": "Optimization of resources and gas processing facilities for the best service.",
        "tuj_4": "Sustainable provision of infrastructure related to the gas processing sector.",
        "visi_label": "VISION",
        "visi_text": "To be the World's Leading Company in the LPG & Gas Industry",
        "misi_label": "MISSION",
        "misi_text": "To provide added value to Shareholders, Employees, and the People of Indonesia.",

        // About - Nilai & Kepemimpinan & Tab
        "nilai_title": "Company Core Values",
        "val1_title": "Professional",
        "val1_desc": "Committed to continuous self-improvement and high professionalism.",
        "val2_title": "HSSE",
        "val2_desc": "Focus on occupational health, safety, security, and the environment.",
        "val3_title": "Governance",
        "val3_desc": "Implementing GCG principles transparently and responsibly.",
        "val4_title": "Achieve Profit",
        "val4_desc": "Generating high economic value for the sustainability of the Company and Stakeholders.",
        "val5_title": "Customer Satisfaction",
        "val5_desc": "Fully committed to customer satisfaction through the best services and products.",
        "val6_title": "AKHLAK Culture",
        "val6_desc": "Implementing the values of Trust, Competence, Harmony, Loyalty, Adaptability, and Collaboration.",
        "lead_title": "Board of Directors",
        "lead_pos1": "President Director",
        "lead_pos2": "Vice President Director",
        "tab_profil": "Profile",
        "tab_tujuan": "Goals",
        "tab_nilai": "Values",
        "tab_leadership": "Leadership",

        // Awards (Penghargaan)
        "nav_awards": "AWARDS & RECOGNITION",
        "awards_title": "Awards We Have Achieved",
        "awards_desc": "We are constantly committed to maintaining high quality and safety standards,<br>as well as contributing to the development of the national energy industry.",

        // Process (Alur Produksi)
        "proc_sub": "PRODUCTION FLOW",
        "proc_title": "Main Business Process",

        // Facility (Fasilitas)
        "fac_sub": "OPERATIONAL AREA",
        "fac_title": "Operational Facilities",
        "fac_opt1_sub": "Facility 1",
        "fac_opt1_title": "Extraction Plant",
        "fac_opt2_sub": "Facility 2",
        "fac_opt2_title": "Fractionation Plant",
        "fac_badge_1": "EXTRACTION PLANT",
        "fac_badge_2": "FRACTIONATION PLANT",

        // Products & Advantages (Produk & Keunggulan)
        "prod_sub": "OUTPUT & VALUE",
        "prod_title": "Main Products & Advantages",
        "prod_desc": "Integrated natural gas processing products to fulfill domestic energy needs.",
        "prod_lpg_desc": "The main product is mixed LPG with a production capacity of 710 MT/day, distributed to PT Pertamina Patra Niaga.",
        "prod_kon_desc": "Condensate (Pentane+) as a fractionation byproduct of 2,200 bbl/day, returned to PT Pertamina Hulu Rokan.",
        "adv_title": "Company Advantages",
        "adv_op_title": "Operational Excellence",
        "adv_op_desc": "Consistently achieving high productivity, stability, and efficiency with a successful track record since the commercial phase on May 1, 2013.",
        "adv_biz_title": "Diverse Business Opportunities",
        "adv_biz_desc": "The company's track record enables the exploration of business opportunities throughout Indonesia with broad growth potential.",

        // One Pertamina
        "op_subtitle": "PERTAMINA GROUP",
        "op_title": "One Pertamina",
        "op_val_title": "VALUES",
        "op_val_desc": "The values that form the foundation in our every step and decision.",
        "op_n1_t": "Collaborative",
        "op_n1_d": "Building synergistic cooperation and providing added value.",
        "op_n2_t": "Discipline",
        "op_n2_d": "Complying with procedures, regulations, and work commitments.",
        "op_n3_t": "Integrity",
        "op_n3_d": "Upholding honesty, ethics, and responsibility.",
        "op_n4_t": "Innovative",
        "op_n4_d": "Continuously innovating and adapting to face changes.",
        "op_n5_t": "Social Responsibility",
        "op_n5_d": "Contributing to the development and management of the environment.",
        "op_n6_t": "Customer Focus",
        "op_n6_d": "Prioritizing customer satisfaction through quality services.",

        // HSSE Golden Rules
        "hsse_sub": "SAFETY CULTURE",
        "hsse_title": "HSSE Golden Rules",
        "hsse_desc": "A shared commitment to creating a safe, reliable, and sustainable work environment.",
        "hsse_c1_t": "Comply",
        "hsse_c1_d": "Complying with all procedures, regulations, and safety standards without compromise in every work activity.",
        "hsse_c2_t": "Care",
        "hsse_c2_d": "Caring for personal safety, coworkers, and the environment around the operational area.",
        "hsse_c3_t": "Intervene",
        "hsse_c3_d": "Having the courage to stop unsafe work and reporting risky conditions immediately.",
        "hsse_foot": "Safety is our shared responsibility.",

        // Milestone
        "ms_sub": "OUR JOURNEY",
        "ms_title": "Company<br>Milestone",

        // Kontribusi
        "k_sub": "CONTRIBUTION & ACTIVITIES",
        "k_title": "Our Contributions",
        "k_desc": "We believe that energy is not just about moving industries, but also about moving lives and a better future.",

        // Ekosistem
        "eco_sub": "ECOSYSTEM & PARTNERS",
        "eco_title": "Part of the Pertamina Ecosystem",
        "eco_desc": "PT Perta-Samtan Gas operates as an integral part of the national energy value chain alongside various strategic entities.",

        // Footer
        "ft_pusat": "Head Office, Banyuasin",
        "ft_cabang": "Representative Office, Jakarta",
        "ft_web": "Official Website",
        "ft_perusahaan": "COMPANY",
        "ft_tentang": "About Us",
        "ft_visimisi": "Vision & Mission",
        "ft_nilai": "Core Values (AKHLAK)",
        "ft_capai": "Achievements",
        "ft_karir": "Careers",
        "ft_ops": "OPERATIONAL",
        "ft_proses": "Business Process",
        "ft_fasilitas": "Facilities",
        "ft_privasi": "Privacy Policy"
    }
};

// Fungsi Utama untuk mengubah bahasa
function setLanguage(lang) {
    // Simpan pilihan bahasa ke Local Storage
    localStorage.setItem('selectedLang', lang);

    // 1. Ubah semua teks HTML statis yang memiliki atribut data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // 2. Beritahu JavaScript lain (main.js) bahwa bahasa sudah berubah
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
}