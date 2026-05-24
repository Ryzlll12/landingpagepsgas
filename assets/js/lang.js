// 1. KAMUS BAHASA (DICTIONARY)
const langData = {
    // ==========================================
    // BAHASA INDONESIA (MASTER)
    // ==========================================
    "id": {
        // Navbar
        "nav_home": "Beranda", "nav_about": "Tentang", "nav_process": "Proses", "nav_facility": "Fasilitas", "nav_advantages": "Keunggulan",
        // Hero
        "hero_subtitle": "HARMONY WORLD CLASS", "hero_title": "PT Perta-Samtan Gas", "hero_quote": "\"Selesaikan tanggung jawab hari ini, siapkan landasan untuk esok hari.\"", "hero_scroll": "Geser Ke Atas Untuk Menelusuri",
        // About - Tabs
        "tab_profil": "Profil", "tab_tujuan": "Tujuan", "tab_nilai": "Nilai",
        // About - Profil
        "about_title": "PT Perta-Samtan Gas", "about_p1": "PT Perta-Samtan Gas didirikan pada 7 Mei 2008 dengan tujuan memproduksi LPG guna mendukung program konversi minyak tanah ke LPG serta penyediaan energi nasional.", "about_p2": "Perseroan bergerak dalam bisnis pengolahan gas serta menyediakan layanan jasa dan infrastruktur terkait pemrosesan gas dengan dua kilang terintegrasi di Prabumulih dan Sungai Gerong.",
        "stat_tgl_label": "Tanggal Pendirian", "stat_tgl_val": "7 Mei 2008", "stat_kap_label": "Kapasitas Desain", "stat_kap_val": "250 MMSCFD", "stat_fas_label": "Fasilitas Produksi", "stat_fas_val": "2 Kilang", "stat_lok_label": "Lokasi Utama", "stat_lok_val": "Sungai Gerong",
        // About - Tujuan
        "tujuan_title": "Tujuan & Maksud Perseroan", "tuj_1": "Ekstraksi dan pemrosesan gas alam menjadi LPG dan produk gas lainnya.", "tuj_2": "Niaga dan distribusi LPG untuk memenuhi program Public Service Obligation (PSO).", "tuj_3": "Optimalisasi sumber daya dan fasilitas pemrosesan gas untuk layanan terbaik.", "tuj_4": "Penyediaan infrastruktur terkait sektor pemrosesan gas secara berkelanjutan.",
        "visi_label": "VISI", "visi_text": "Menjadi Perseroan Terkemuka di Dunia dalam Industri LPG & Gas", "misi_label": "MISI", "misi_text": "Memberikan nilai tambah bagi Pemegang Saham, Karyawan, dan Masyarakat Indonesia melalui efisiensi kerja dan daya saing tinggi.",
        // About - Nilai
        "nilai_title": "Nilai-Nilai Perseroan", "val1_title": "Profesional", "val1_desc": "Berkomitmen dalam perbaikan diri berkelanjutan dan memiliki profesionalisme tinggi.", "val2_title": "HSSE", "val2_desc": "Fokus pada keselamatan kerja, kesehatan, keamanan, dan lingkungan.", "val3_title": "Tata Kelola", "val3_desc": "Menjalankan prinsip GCG secara transparan dan bertanggung jawab.", "val4_title": "Achieve Profit", "val4_desc": "Menghasilkan nilai ekonomi tinggi demi keberlangsungan Perseroan dan Pemangku Kepentingan.", "val5_title": "Kepuasan Pelanggan", "val5_desc": "Berkomitmen penuh terhadap kepuasan pelanggan melalui layanan dan produk terbaik.", "val6_title": "Budaya AKHLAK", "val6_desc": "Menerapkan nilai Amanah, Kompeten, Harmonis, Loyal, Adaptif, dan Kolaboratif.",
        // Process
        "proc_sub": "Proses Bisnis", "proc_title": "Alur Operasional PT Perta-Samtan Gas",
        "proc1_title": "Feed Gas Masuk", "proc1_desc": "Gas alam dari PT Pertamina Hulu Rokan Regional 1 Zona 4 dengan kapasitas rata-rata ≈ 200 MMSCFD dialirkan melalui pipa Pertamina EP 28° dan Pertagas 20°.",
        "proc2_title": "Kilang Ekstraksi Prabumulih", "proc2_desc": "Gas alam diproses untuk memisahkan komponen NGL (Natural Gas Liquids). Lean gas dan kondensat dikembalikan ke Pertamina Hulu Rokan.",
        "proc3_title": "Pipa NGL ≈ 90KM", "proc3_desc": "NGL dialirkan melalui pipa berdiameter 8 inci sepanjang \\pm90 km dari Kilang Prabumulih menuju Kilang Fraksinasi Sungai Gerong.",
        "proc4_title": "Kilang Fraksinasi Sungai Gerong", "proc4_desc": "NGL difraksinasi menghasilkan LPG Mixed (Propane + Butane) 770 MT/hari dan Kondensat (Pentane+) 2.200 bbl/hari.",
        "proc5_title": "Distribusi Produk", "proc5_desc": "LPG disalurkan ke Depot Pulau Layang & Jetty 01 Plaju menuju Pontianak, Bangka, dan Belitung melalui armada vessel.",
        // Output
        "out_sub": "Kapabilitas Produksi", "out_title": "Output Produksi", "out1_title": "Kapasitas Desain", "out1_desc": "Total Kedua Kilang", "out2_title": "Produksi LPG", "out2_desc": "Propane + Butane", "out3_title": "Produksi Kondensat", "out3_desc": "Pentane+", "out4_title": "Feed Gas Rata-Rata", "out4_desc": "Dari PHR Zona 4",
        // Facility
        "fac_sub": "Area Operasi", "fac_title": "Fasilitas Utama", "fac_desc": "PT Perta-Samtan Gas mengoperasikan dua kilang terintegrasi beserta jaringan distribusi dan infrastruktur pendukung pengolahan gas bumi.",
        "fac1_title": "Kilang Ekstraksi Prabumulih", "fac1_desc": "Fasilitas ekstraksi NGL dari gas alam dengan feed gas rata-rata ±220 MMSCFD dari PHR Regional 1 Zona 4.",
        "fac2_title": "Kilang Fraksinasi Sungai Gerong", "fac2_desc": "Memproses NGL menjadi LPG Mixed dan Kondensat untuk kebutuhan distribusi domestik nasional.", "fac2_val2": "710 MT/Hari", "fac2_val3": "2.220 BBL/Hari",
        "fac3_title": "Pipa NGL", "fac3_desc": "Jaringan pipa NGL sepanjang 90 km yang menghubungkan fasilitas Prabumulih dan Sungai Gerong.", "fac3_val1": "Panjang 90 KM", "fac3_val2": "8 Inch Diameter",
        "fac4_title": "Depot & Jetty Distribusi", "fac4_desc": "Pulau layang & Jetty 01 RU III", "fac4_val1": "Pulau Layang Depot", "fac4_val2": "RU III Jetty",
        // Advantages
        "adv_sub": "Keunggulan & Pencapaian", "adv_title": "Keunggulan Perseroan", "adv_desc": "Konsisten mencapai produktivitas, stabilitas, dan efisiensi tinggi dengan rekam jejak keberhasilan sejak fase komersial 1 Mei 2013.",
        "adv1_title": "Keunggulan Operasional", "adv1_desc": "Konsisten mencapai produktivitas, stabilitas, dan efisiensi tinggi dengan rekam jejak keberhasilan sejak fase komersial 1 Mei 2013.",
        "adv2_title": "Kondisi Keuangan Stabil", "adv2_desc": "Posisi keuangan kuat tanpa beban utang finansial, dengan manajemen arus kas efektif untuk peluang investasi masa depan.",
        "adv3_title": "Kemitraan Strategis", "adv3_desc": "Kemitraan strategis dengan Pemerintah Indonesia dalam produksi LPG domestik (PSO), memperkuat posisi dan kapabilitas Perseroan.",
        "adv4_title": "Peluang Bisnis Beragam", "adv4_desc": "Rekam jejak perusahaan memungkinkan eksplorasi peluang bisnis di seluruh wilayah Indonesia dengan potensi pertumbuhan luas.",
        // Journey
        "jour_sub": "Perjalanan Kami", "jour_title": "Pencapaian Perseroan <br>PT Perta-Samtan Gas",
        "jour1_title": "Pendirian Perseroan", "jour1_desc": "PT Perta-Samtan Gas resmi didirikan pada 7 Mei 2008. Dimiliki 66% Pertamina Gas & 34% ST International untuk memproduksi LPG mendukung program konversi BBM pemerintah.",
        "jour2_title": "Fase Komersial", "jour2_desc": "Kilang PT Perta-Samtan Gas memasuki fase komersial mulai 1 Mei 2013. Dimulainya produksi penuh LPG dan Kondensat dari kedua kilang terintegrasi.",
        "jour3_title": "1 Juta Ton LPG", "jour3_desc": "Berhasil memproduksi 1 juta ton LPG sejak masa komersial hingga Oktober 2018 — tonggak bersejarah dalam perjalanan perusahaan.",
        "jour4_title": "Proper Hijau", "jour4_desc": "Meraih penghargaan Proper Hijau dari Kementerian LHK RI atas komitmen pengelolaan lingkungan hidup yang unggul di seluruh area operasional.",
        "jour5_title": "Patra Nirbhaya Karya Madya", "jour5_desc": "Meraih Penghargaan Keselamatan Kerja kategori Jam Kerja Aman — bukti nyata implementasi budaya HSSE yang konsisten.",
        "jour6_title": "Diversifikasi & Pertumbuhan", "jour6_desc": "Eksplorasi peluang bisnis di seluruh Indonesia, penguatan kemitraan strategis dengan Pemerintah, dan pengembangan potensi bisnis yang lebih luas.",
        "jour_det_title": "Pendirian Perseroan", "jour_det_desc": "PT Perta-Samtan Gas resmi didirikan pada 7 Mei 2008 sebagai bagian dari program konversi energi nasional menuju LPG.",
        // CSR
        "csr_sub": "Corporate Social Responsibility", "csr_title": "Program Sosial Perusahaan",
        "csr1_title": "Santunan Anak Yatim & Kaum Dhuafa", "csr2_title": "Hunian Sementara", "csr3_title": "Bantuan RLTH", "csr4_title": "Pencegahan Banjir Anak Sungai Musi", "csr5_title": "Program Safari Ramadan", "csr6_title": "Perkebunan Sido Mukti",
        "csr_cat_label": "CSR CATEGORY", "csr_det_title": "Donasi Kemanusiaan", "csr_det_desc": "Program bantuan sosial kepada masyarakat melalui bantuan pangan, bantuan bencana, dan dukungan sosial lainnya.",
        "csr_btn1_title": "Donasi Kemanusiaan", "csr_btn1_desc": "Program bantuan sosial kepada masyarakat melalui bantuan pangan, bantuan bencana, dan dukungan sosial lainnya.",
        "csr_btn2_title": "Infrastruktur Sosial", "csr_btn2_desc": "Dukungan pembangunan fasilitas umum dan infrastruktur sosial untuk masyarakat sekitar.",
        "csr_btn3_title": "Program Kesehatan", "csr_btn3_desc": "Program kesehatan masyarakat melalui pemeriksaan kesehatan, bantuan medis, dan edukasi.",
        "csr_btn4_title": "Pelestarian Lingkungan", "csr_btn4_desc": "Program sustainability dan penghijauan lingkungan untuk mendukung operasional hijau.",
        "btn_donasi": "Donasi", "btn_infra": "Infrastruktur", "btn_kes": "Kesehatan", "btn_ling": "Lingkungan",
        // Safety
        "safe_sub": "Peringatan Keselamatan", "safe_title": "HSSE Golden Rules",
        "badge1": "Patuh", "badge2": "Peduli", "badge3": "Intervensi",
        "safe1": "Peralatan & Perlengkapan", "safe2": "Posisi Zona Aman", "safe3": "Izin Kerja (SIKA)", "safe4": "Isolasi", "safe5": "Ruang Terbatas", "safe6": "Operasional Lifting", "safe7": "Bekerja di Ketinggian", "safe8": "Pelampung Pribadi", "safe9": "Sistem Override", "safe10": "Integritas Asset", "safe11": "Ekskavasi", "safe12": "Keselamatan Berkendara", "safe13": "Fit to Work",
        // Eco
        "eco_sub": "Ekosistem & Mitra", "eco_title": "Bagian dari Ekosistem Pertamina", "eco_desc": "PT Perta-Samtan Gas beroperasi sebagai bagian integral rantai nilai energi nasional bersama berbagai entitas strategis.",
        "eco1": "Pertamina Gas", "eco2": "Pertamina Hulu Rokan", "eco3": "Pertamina Patra Niaga", "eco4": "Pertagas", "eco5": "ST International", "eco6": "Pertamina RU III", "eco7": "Depot Pulau Layang", "eco8": "Kementerian ESDM",
        // Shareholder
        "share_sub": "Struktur Kepemilikan", "share_title": "Komposisi Pemegang Saham", "share_desc1": "PT Pertamina Gas", "share_desc2": "ST International",
        // Footer
        "foot_desc": "PT Perta-Samtan Gas merupakan perusahaan pengolahan gas bumi terintegrasi yang mendukung ketahanan energi nasional Indonesia.",
        "foot_nav": "Navigasi", "foot_nav_about": "Tentang", "foot_nav_process": "Proses", "foot_nav_facility": "Fasilitas", "foot_nav_adv": "Keunggulan",
        "foot_op": "Operasional", "foot_op_out": "Output Produksi", "foot_op_ach": "Pencapaian", "foot_op_csr": "CSR", "foot_op_hsse": "HSSE", "foot_op_eco": "Ekosistem",
        "foot_loc1": "Kantor Pusat / Pabrik Fraksinasi", "foot_loc1_desc": "Komplek Pertamina Sungai Gerong Jalan Nomor 8, Komperta Sungai Gerong, Kec. Banyuasin I, Sumatera Selatan 30962, Indonesia.",
        "foot_loc2": "Pabrik Ekstraksi", "foot_loc2_desc": "Jl. Nigata, Kelurahan Anak Petai, Prabumulih, Sumatera Selatan 31121, Indonesia.",
        "foot_loc3": "Kantor Penghubung", "foot_loc3_desc": "The East Building Lt.11 Unit 07, Jakarta Selatan 12950, Indonesia.",
        "foot_copy": "© 2026 PT Perta-Samtan Gas. Hak Cipta Dilindungi Undang-Undang.", "foot_priv": "Privasi", "foot_site": "Sitemap"
    },

    // ==========================================
    // BAHASA INGGRIS (ISI TERJEMAHANNYA DI SINI)
    // ==========================================
    "en": {
        // Navbar
        "nav_home": "Home", "nav_about": "About", "nav_process": "Process", "nav_facility": "Facility", "nav_advantages": "Advantages",

        // Hero
        "hero_subtitle": "HARMONY WORLD CLASS",
        "hero_title": "PT Perta-Samtan Gas",
        "hero_quote": "\"Fulfill today's responsibilities, prepare the foundation for tomorrow.\"",
        "hero_scroll": "Swipe Up To Explore",

        // About - Tabs
        "tab_profil": "Profile",
        "tab_tujuan": "Purpose",
        "tab_nilai": "Values",

        // About - Profil
        "about_title": "PT Perta-Samtan Gas",
        "about_p1": "PT Perta-Samtan Gas was established on May 7, 2008 to produce LPG in support of the kerosene-to-LPG conversion program and national energy supply.",
        "about_p2": "The company operates in gas processing and provides services and infrastructure related to gas processing through two integrated refineries located in Prabumulih and Sungai Gerong.",

        "stat_tgl_label": "Date of Establishment",
        "stat_tgl_val": "May 7, 2008",

        "stat_kap_label": "Design Capacity",
        "stat_kap_val": "250 MMSCFD",

        "stat_fas_label": "Production Facilities",
        "stat_fas_val": "2 Refineries",

        "stat_lok_label": "Main Location",
        "stat_lok_val": "Sungai Gerong",

        // About - Purpose
        "tujuan_title": "Corporate Purpose & Objectives",
        "tuj_1": "Extraction and processing of natural gas into LPG and other gas products.",
        "tuj_2": "Trading and distribution of LPG to support the Public Service Obligation (PSO) program.",
        "tuj_3": "Optimization of resources and gas processing facilities to deliver the best services.",
        "tuj_4": "Provision of sustainable infrastructure related to the gas processing sector.",

        "visi_label": "VISION",
        "visi_text": "To become a world-leading company in the LPG & Gas Industry.",

        "misi_label": "MISSION",
        "misi_text": "To provide added value to Shareholders, Employees, and the Indonesian People through high efficiency and competitiveness.",

        // About - Values
        "nilai_title": "Corporate Values",

        "val1_title": "Professionalism",
        "val1_desc": "Committed to continuous self-improvement and maintaining high professionalism.",

        "val2_title": "HSSE",
        "val2_desc": "Focused on occupational safety, health, security, and environmental sustainability.",

        "val3_title": "Corporate Governance",
        "val3_desc": "Implementing Good Corporate Governance principles transparently and responsibly.",

        "val4_title": "Achieve Profit",
        "val4_desc": "Generating high economic value for the sustainability of the company and stakeholders.",

        "val5_title": "Customer Satisfaction",
        "val5_desc": "Fully committed to customer satisfaction through excellent services and products.",

        "val6_title": "AKHLAK Culture",
        "val6_desc": "Applying the values of Trustworthy, Competent, Harmonious, Loyal, Adaptive, and Collaborative.",

        // Process
        "proc_sub": "Business Process",
        "proc_title": "Operational Flow of PT Perta-Samtan Gas",

        "proc1_title": "Incoming Feed Gas",
        "proc1_desc": "Natural gas from PT Pertamina Hulu Rokan Regional 1 Zone 4 with an average capacity of ≈ 200 MMSCFD is transported through Pertamina EP 28° and Pertagas 20° pipelines.",

        "proc2_title": "Prabumulih Extraction Refinery",
        "proc2_desc": "Natural gas is processed to separate NGL (Natural Gas Liquids) components. Lean gas and condensate are returned to Pertamina Hulu Rokan.",

        "proc3_title": "NGL Pipeline ≈ 90KM",
        "proc3_desc": "NGL is transported through an 8-inch diameter pipeline spanning \\pm90 km from the Prabumulih Extraction Refinery to the Sungai Gerong Fractionation Refinery.",

        "proc4_title": "Sungai Gerong Fractionation Refinery",
        "proc4_desc": "NGL is fractionated to produce LPG Mixed (Propane + Butane) at 770 MT/day and Condensate (Pentane+) at 2,200 bbl/day.",

        "proc5_title": "Product Distribution",
        "proc5_desc": "LPG is distributed to Pulau Layang Depot & Jetty 01 Plaju for delivery to Pontianak, Bangka, and Belitung via vessel fleet.",

        // Output
        "out_sub": "Production Capability",
        "out_title": "Production Output",

        "out1_title": "Design Capacity",
        "out1_desc": "Total of Both Refineries",

        "out2_title": "LPG Production",
        "out2_desc": "Propane + Butane",

        "out3_title": "Condensate Production",
        "out3_desc": "Pentane+",

        "out4_title": "Average Feed Gas",
        "out4_desc": "From PHR Zone 4",

        // Facility
        "fac_sub": "Operational Area",
        "fac_title": "Main Facilities",

        "fac_desc": "PT Perta-Samtan Gas operates two integrated refineries along with distribution networks and supporting infrastructure for natural gas processing.",

        "fac1_title": "Prabumulih Extraction Refinery",
        "fac1_desc": "NGL extraction facility from natural gas with an average feed gas capacity of ±220 MMSCFD from PHR Regional 1 Zone 4.",

        "fac2_title": "Sungai Gerong Fractionation Refinery",
        "fac2_desc": "Processes NGL into LPG Mixed and Condensate for domestic national distribution needs.",
        "fac2_val2": "710 MT/Day",
        "fac2_val3": "2,220 BBL/Day",

        "fac3_title": "NGL Pipeline",
        "fac3_desc": "A 90 km NGL pipeline network connecting the Prabumulih and Sungai Gerong facilities.",
        "fac3_val1": "90 KM Length",
        "fac3_val2": "8 Inch Diameter",

        "fac4_title": "Distribution Depot & Jetty",
        "fac4_desc": "Pulau Layang & Jetty 01 RU III",
        "fac4_val1": "Pulau Layang Depot",
        "fac4_val2": "RU III Jetty",

        // Advantages
        "adv_sub": "Advantages & Achievements",
        "adv_title": "Corporate Advantages",

        "adv_desc": "Consistently achieving high productivity, stability, and efficiency with a proven track record since the commercial phase began on May 1, 2013.",

        "adv1_title": "Operational Excellence",
        "adv1_desc": "Consistently achieving high productivity, stability, and efficiency with a proven track record since the commercial phase began on May 1, 2013.",

        "adv2_title": "Stable Financial Condition",
        "adv2_desc": "Strong financial position without financial debt burdens, supported by effective cash flow management for future investment opportunities.",

        "adv3_title": "Strategic Partnerships",
        "adv3_desc": "Strategic partnership with the Indonesian Government in domestic LPG production (PSO), strengthening the company's position and capabilities.",

        "adv4_title": "Diverse Business Opportunities",
        "adv4_desc": "The company's proven track record enables exploration of business opportunities across Indonesia with broad growth potential.",

        // Journey
        "jour_sub": "Our Journey",
        "jour_title": "Corporate Milestones <br>PT Perta-Samtan Gas",

        "jour1_title": "Company Establishment",
        "jour1_desc": "PT Perta-Samtan Gas was officially established on May 7, 2008. Owned by 66% Pertamina Gas & 34% ST International to produce LPG supporting the government's fuel conversion program.",

        "jour2_title": "Commercial Phase",
        "jour2_desc": "PT Perta-Samtan Gas refineries entered the commercial phase on May 1, 2013, marking the beginning of full LPG and Condensate production from both integrated refineries.",

        "jour3_title": "1 Million Tons of LPG",
        "jour3_desc": "Successfully produced 1 million tons of LPG from the commercial phase until October 2018 — a historic milestone in the company’s journey.",

        "jour4_title": "Green Proper Award",
        "jour4_desc": "Received the Green Proper Award from the Indonesian Ministry of Environment and Forestry for outstanding environmental management commitment across operational areas.",

        "jour5_title": "Patra Nirbhaya Karya Madya",
        "jour5_desc": "Received the Occupational Safety Award in the Safe Working Hours category — clear evidence of consistent HSSE culture implementation.",

        "jour6_title": "Diversification & Growth",
        "jour6_desc": "Exploring business opportunities across Indonesia, strengthening strategic partnerships with the Government, and developing broader business potential.",

        "jour_det_title": "Company Establishment",
        "jour_det_desc": "PT Perta-Samtan Gas was officially established on May 7, 2008 as part of the national energy conversion program toward LPG.",

        // CSR
        "csr_sub": "Corporate Social Responsibility",
        "csr_title": "Corporate Social Programs",

        "csr1_title": "Support for Orphans & Underprivileged Communities",
        "csr2_title": "Temporary Housing",
        "csr3_title": "Uninhabitable House Assistance",
        "csr4_title": "Musi Tributary Flood Prevention",
        "csr5_title": "Ramadan Safari Program",
        "csr6_title": "Sido Mukti Plantation",

        "csr_cat_label": "CSR CATEGORY",

        "csr_det_title": "Humanitarian Donations",
        "csr_det_desc": "Social assistance programs for communities through food aid, disaster relief, and other social support initiatives.",

        "csr_btn1_title": "Humanitarian Donations",
        "csr_btn1_desc": "Social assistance programs for communities through food aid, disaster relief, and other social support initiatives.",

        "csr_btn2_title": "Social Infrastructure",
        "csr_btn2_desc": "Support for the development of public facilities and social infrastructure for surrounding communities.",

        "csr_btn3_title": "Health Programs",
        "csr_btn3_desc": "Community health programs through medical check-ups, healthcare assistance, and education.",

        "csr_btn4_title": "Environmental Preservation",
        "csr_btn4_desc": "Sustainability and environmental greening programs to support green operations.",

        "btn_donasi": "Donation",
        "btn_infra": "Infrastructure",
        "btn_kes": "Health",
        "btn_ling": "Environment",

        // Safety
        "safe_sub": "Safety Warning",
        "safe_title": "HSSE Golden Rules",

        "badge1": "Comply",
        "badge2": "Care",
        "badge3": "Intervene",

        "safe1": "Equipment & Tools",
        "safe2": "Safe Zone Position",
        "safe3": "Work Permit (SIKA)",
        "safe4": "Isolation",
        "safe5": "Confined Space",
        "safe6": "Lifting Operations",
        "safe7": "Working at Height",
        "safe8": "Personal Flotation Device",
        "safe9": "Override System",
        "safe10": "Asset Integrity",
        "safe11": "Excavation",
        "safe12": "Driving Safety",
        "safe13": "Fit to Work",

        // Eco
        "eco_sub": "Ecosystem & Partners",
        "eco_title": "Part of the Pertamina Ecosystem",

        "eco_desc": "PT Perta-Samtan Gas operates as an integral part of the national energy value chain alongside various strategic entities.",

        "eco1": "Pertamina Gas",
        "eco2": "Pertamina Hulu Rokan",
        "eco3": "Pertamina Patra Niaga",
        "eco4": "Pertagas",
        "eco5": "ST International",
        "eco6": "Pertamina RU III",
        "eco7": "Pulau Layang Depot",
        "eco8": "Ministry of Energy and Mineral Resources",

        // Shareholder
        "share_sub": "Ownership Structure",
        "share_title": "Shareholder Composition",

        "share_desc1": "PT Pertamina Gas",
        "share_desc2": "ST International",

        // Footer
        "foot_desc": "PT Perta-Samtan Gas is an integrated natural gas processing company supporting Indonesia’s national energy resilience.",

        "foot_nav": "Navigation",
        "foot_nav_about": "About",
        "foot_nav_process": "Process",
        "foot_nav_facility": "Facility",
        "foot_nav_adv": "Advantages",

        "foot_op": "Operations",
        "foot_op_out": "Production Output",
        "foot_op_ach": "Achievements",
        "foot_op_csr": "CSR",
        "foot_op_hsse": "HSSE",
        "foot_op_eco": "Ecosystem",

        "foot_loc1": "Head Office / Fractionation Plant",
        "foot_loc1_desc": "Pertamina Sungai Gerong Complex Street Number 8, Komperta Sungai Gerong, Banyuasin I District, South Sumatra 30962, Indonesia.",

        "foot_loc2": "Extraction Plant",
        "foot_loc2_desc": "Jl. Nigata, Anak Petai Village, Prabumulih, South Sumatra 31121, Indonesia.",

        "foot_loc3": "Representative Office",
        "foot_loc3_desc": "The East Building 11th Floor Unit 07, South Jakarta 12950, Indonesia.",

        "foot_copy": "© 2026 PT Perta-Samtan Gas. All Rights Reserved.",
        "foot_priv": "Privacy",
        "foot_site": "Sitemap"
    }
};

// 2. LOGIKA GANTI BAHASA
const btnID = document.getElementById('lang-id');
const btnEN = document.getElementById('lang-en');

function setLanguage(lang) {
    // A. Ganti Teks (innerHTML)
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
        const key = el.getAttribute('data-i18n');
        // Pastikan terjemahannya ada di kamus sebelum mengganti
        if (langData[lang] && langData[lang][key]) {
            el.innerHTML = langData[lang][key]; 
        }
    });

    // B. Ganti Atribut data-title (Khusus animasi JS Journey & CSR)
    const titleElements = document.querySelectorAll('[data-i18n-title]');
    titleElements.forEach((el) => {
        const key = el.getAttribute('data-i18n-title');
        if (langData[lang] && langData[lang][key]) {
            el.setAttribute('data-title', langData[lang][key]); 
        }
    });

    // C. Ganti Atribut data-description (Khusus animasi JS Keunggulan, Journey & CSR)
    const descElements = document.querySelectorAll('[data-i18n-desc]');
    descElements.forEach((el) => {
        const key = el.getAttribute('data-i18n-desc');
        if (langData[lang] && langData[lang][key]) {
            el.setAttribute('data-description', langData[lang][key]); 
            
            // Fix Instan: Update teks deskripsi aktif di layar jika elemennya sedang aktif
            if(el.classList.contains('active')) {
                const idDescMap = {
                    "adv": document.getElementById('advantagesDescription'),
                    "jour": document.getElementById('journeyDescription'),
                    "csr": document.getElementById('csrCategoryDescription')
                };
                // Update teks di layar sesuai section yang diklik
                if(key.includes('adv')) idDescMap["adv"].innerHTML = langData[lang][key];
                if(key.includes('jour')) idDescMap["jour"].innerHTML = langData[lang][key];
                if(key.includes('csr')) idDescMap["csr"].innerHTML = langData[lang][key];
            }
        }
    });

    // D. Update Warna Tombol
    if (lang === 'id') {
        btnID.style.color = '#9fe400'; 
        btnEN.style.color = 'white';
    } else {
        btnID.style.color = 'white';
        btnEN.style.color = '#9fe400'; 
    }

    // E. Simpan ke Memori Browser
    localStorage.setItem('userLanguage', lang);
}

// 3. EVENT LISTENER KLIK TOMBOL
if (btnID && btnEN) {
    btnID.addEventListener('click', () => setLanguage('id'));
    btnEN.addEventListener('click', () => setLanguage('en'));
}

// 4. CEK BAHASA SAAT WEB PERTAMA KALI DIBUKA
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('userLanguage') || 'id';
    setLanguage(savedLang);
});