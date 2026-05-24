/* ========================= */
/* NAVBAR SCROLL EFFECT */
/* ========================= */

const navbar = document.getElementById('navbar');

/* FUNCTION */

function navbarScroll(){

    if(window.scrollY > 40){

        navbar.classList.add('scrolled');

    } 
    
    else{

        navbar.classList.remove('scrolled');

    }

}

/* SCROLL */

window.addEventListener('scroll', navbarScroll);

/* LOAD */

navbarScroll();

// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop){

            current = section.getAttribute('id');

        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if(link.getAttribute('href') === `#${current}`){

            link.classList.add('active');

        }

    });

});

/* ========================= */
/* ABOUT TAB */
/* ========================= */

const aboutTabs = document.querySelectorAll('.about-tab');

const aboutPanels = document.querySelectorAll('.about-panel');

/* CLICK */

aboutTabs.forEach((tab) => {

    tab.addEventListener('click', () => {

        /* REMOVE ACTIVE TAB */

        aboutTabs.forEach((item) => {

            item.classList.remove('active');

        });

        /* REMOVE ACTIVE PANEL */

        aboutPanels.forEach((panel) => {

            panel.classList.remove('active');

        });

        /* ACTIVE TAB */

        tab.classList.add('active');

        /* TARGET */

        const target = tab.dataset.tab;

        /* SHOW PANEL */

        document
            .getElementById(target)
            .classList.add('active');

    });

});

/* ========================= */
/* OUTPUT HOVER */
/* ========================= */

const outputItems = document.querySelectorAll('.output-item');

outputItems.forEach((item) => {

    item.addEventListener('mouseenter', () => {

        outputItems.forEach((el) => {
            el.classList.remove('active');
        });

        item.classList.add('active');

    });

});

/* ========================= */
/* FACILITIES SLIDER */
/* ========================= */

const slider = document.querySelector('.facilities-slider');
const track = document.querySelector('.facilities-track');

let isDragging = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {

    isDragging = true;

    slider.classList.add('dragging');

    startX = e.pageX - slider.offsetLeft;

    scrollLeft = slider.scrollLeft;

});

slider.addEventListener('mouseleave', () => {

    isDragging = false;

    slider.classList.remove('dragging');

});

slider.addEventListener('mouseup', () => {

    isDragging = false;

    slider.classList.remove('dragging');

});

slider.addEventListener('mousemove', (e) => {

    if(!isDragging) return;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;

    const walk = (x - startX) * 1.5;

    slider.scrollLeft = scrollLeft - walk;

});

/* ========================= */
/* ADVANTAGES IMAGE SWITCH */
/* ========================= */

const advantageItems = document.querySelectorAll('.advantage-item');

const advantagesImage = document.getElementById('advantagesImage');

const advantagesDescription = document.getElementById('advantagesDescription');

advantageItems.forEach((item) => {

    item.addEventListener('mouseenter', () => {

        /* REMOVE ACTIVE */

        advantageItems.forEach((el) => {
            el.classList.remove('active');
        });

        /* ADD ACTIVE */

        item.classList.add('active');

        /* CHANGE IMAGE */

        const newImage = item.getAttribute('data-image');

        advantagesImage.src = newImage;

        /* CHANGE DESCRIPTION */

        const newDescription = item.getAttribute('data-description');

        /* RESET */

        advantagesDescription.classList.remove('fade-in');

        /* FADE OUT */

        advantagesDescription.classList.add('fade-out');

        /* DELAY */

        setTimeout(() => {

            advantagesDescription.textContent = newDescription;

            advantagesDescription.classList.remove('fade-out');

            advantagesDescription.classList.add('fade-in');

        }, 180);

    });

});

/* ========================= */
/* JOURNEY SECTION */
/* ========================= */

const journeyItems = document.querySelectorAll('.journey-item');

const journeyImage = document.getElementById('journeyImage');

const journeyTitle = document.getElementById('journeyTitle');

const journeyDescription = document.getElementById('journeyDescription');

journeyItems.forEach((item) => {

    item.addEventListener('mouseenter', () => {

        /* REMOVE ACTIVE */

        journeyItems.forEach((el) => {
            el.classList.remove('active');
        });

        /* ADD ACTIVE */

        item.classList.add('active');

        /* GET DATA */

        const newImage = item.getAttribute('data-image');

        const newTitle = item.getAttribute('data-title');

        const newDescription =
        item.getAttribute('data-description');

        /* RESET */

        journeyImage.classList.remove('fade-in');

        journeyTitle.classList.remove('fade-in');

        journeyDescription.classList.remove('fade-in');

        /* FADE OUT */

        journeyImage.classList.add('fade-out');

        journeyTitle.classList.add('fade-out');

        journeyDescription.classList.add('fade-out');

        /* DELAY */

        setTimeout(() => {

            /* CHANGE */

            journeyImage.src = newImage;

            journeyTitle.textContent = newTitle;

            journeyDescription.textContent =
            newDescription;

            /* REMOVE */

            journeyImage.classList.remove('fade-out');

            journeyTitle.classList.remove('fade-out');

            journeyDescription.classList.remove('fade-out');

            /* ADD */

            journeyImage.classList.add('fade-in');

            journeyTitle.classList.add('fade-in');

            journeyDescription.classList.add('fade-in');

        }, 200);

    });

});

/* ========================= */
/* CSR SECTION */
/* ========================= */

const csrCategories = document.querySelectorAll('.csr-category');

const csrDetailImage = document.getElementById('csrDetailImage');

const csrDetailTitle = document.getElementById('csrDetailTitle');

const csrDetailDescription = document.getElementById('csrDetailDescription');

csrCategories.forEach((item) => {

    item.addEventListener('mouseenter', () => {

        /* REMOVE ACTIVE */

        csrCategories.forEach((el) => {
            el.classList.remove('active');
        });

        /* ACTIVE */

        item.classList.add('active');

        /* CHANGE IMAGE */

        const newImage = item.getAttribute('data-image');

        csrDetailImage.src = newImage;

        /* CHANGE TITLE */

        const newTitle = item.getAttribute('data-title');

        csrDetailTitle.textContent = newTitle;

        /* CHANGE DESCRIPTION */

        const newDescription = item.getAttribute('data-description');

        csrDetailDescription.textContent = newDescription;

    });

});

/* ========================= */
/* CSR SHOWCASE */
/* ========================= */

const showcaseWrapper = document.querySelector('.csr-showcase');

const showcaseTrack = document.querySelector('.csr-showcase-track');

/* DUPLICATE */

showcaseTrack.innerHTML += showcaseTrack.innerHTML;

/* ========================= */
/* AUTO SLIDE */
/* ========================= */

let autoSlideCSR;

function startCSRSlide(){

    autoSlideCSR = setInterval(() => {

        showcaseWrapper.scrollLeft += 1;

        /* RESET */

        if(
            showcaseWrapper.scrollLeft >= 
            showcaseTrack.scrollWidth / 2
        ){

            showcaseWrapper.scrollLeft = 0;

        }

    }, 15);

}

startCSRSlide();

/* ========================= */
/* DRAG */
/* ========================= */

let isDraggingCSR = false;

let startPosition;

let startScroll;

/* DOWN */

showcaseWrapper.addEventListener('mousedown', (e) => {

    isDraggingCSR = true;

    showcaseWrapper.classList.add('dragging');

    startPosition = e.pageX;

    startScroll = showcaseWrapper.scrollLeft;

});

/* MOVE */

showcaseWrapper.addEventListener('mousemove', (e) => {

    if(!isDraggingCSR) return;

    e.preventDefault();

    const move = e.pageX - startPosition;

    showcaseWrapper.scrollLeft = startScroll - move;

});

/* UP */

window.addEventListener('mouseup', () => {

    isDraggingCSR = false;

    showcaseWrapper.classList.remove('dragging');

});

/* ========================= */
/* STOP AUTO */
/* ========================= */

showcaseWrapper.addEventListener('mouseenter', () => {

    clearInterval(autoSlideCSR);

});

/* RESTART */

showcaseWrapper.addEventListener('mouseleave', () => {

    startCSRSlide();

});

/* ========================= */
/* CSR CATEGORY AUTO SLIDE */
/* ========================= */

const csrCategoryButtons = document.querySelectorAll('.csr-category-btn');

const csrCategoryImage = document.getElementById('csrCategoryImage');

const csrCategoryTitle = document.getElementById('csrCategoryTitle');

const csrCategoryDescription = document.getElementById('csrCategoryDescription');

/* ACTIVE INDEX */

let csrCategoryIndex = 0;

/* FUNCTION */

function updateCSRCategory(index){

    /* REMOVE ACTIVE */

    csrCategoryButtons.forEach((button) => {

        button.classList.remove('active');

    });

    /* ACTIVE */

    const activeButton = csrCategoryButtons[index];

    activeButton.classList.add('active');

    /* CHANGE CONTENT */

    csrCategoryImage.src = activeButton.dataset.image;

    csrCategoryTitle.textContent = activeButton.dataset.title;

    csrCategoryDescription.textContent = activeButton.dataset.description;

}

/* FIRST LOAD */

updateCSRCategory(csrCategoryIndex);

/* ========================= */
/* AUTO CHANGE */
/* ========================= */

function autoChangeCSRCategory(){

    csrCategoryIndex++;

    /* RESET */

    if(csrCategoryIndex >= csrCategoryButtons.length){

        csrCategoryIndex = 0;

    }

    updateCSRCategory(csrCategoryIndex);

    /* RESET CIRCLE */

    const oldCircle = document.querySelector('.circle-progress');

    const newCircle = oldCircle.cloneNode(true);

    oldCircle.parentNode.replaceChild(newCircle, oldCircle);

}

/* AUTO START */

let csrCategoryInterval = setInterval(autoChangeCSRCategory, 5000);

/* ========================= */
/* CLICK BUTTON */
/* ========================= */

csrCategoryButtons.forEach((button, index) => {

    button.addEventListener('click', () => {

        /* UPDATE INDEX */

        csrCategoryIndex = index;

        /* CHANGE */

        updateCSRCategory(csrCategoryIndex);

        /* RESET TIMER */

        clearInterval(csrCategoryInterval);

        csrCategoryInterval = setInterval(autoChangeCSRCategory, 5000);

        /* RESET CIRCLE */

        const oldCircle = document.querySelector('.circle-progress');

        const newCircle = oldCircle.cloneNode(true);

        oldCircle.parentNode.replaceChild(newCircle, oldCircle);

    });

});

/* ========================= */
/* ECOSYSTEM SLIDER */
/* ========================= */

const ecosystemSlider = document.querySelector('.ecosystem-slider');

const ecosystemTrack = document.querySelector('.ecosystem-track');

/* DUPLICATE */

ecosystemTrack.innerHTML += ecosystemTrack.innerHTML;

/* AUTO SLIDE */

let ecosystemAuto;

function startEcosystemSlide(){

    ecosystemAuto = setInterval(() => {

        /* BERLAWANAN ARAH */

        ecosystemSlider.scrollLeft -= 1;

        /* RESET */

        if(ecosystemSlider.scrollLeft <= 0){

            ecosystemSlider.scrollLeft =
            ecosystemTrack.scrollWidth / 2;

        }

    }, 15);

}

startEcosystemSlide();

/* ========================= */
/* DRAG */
/* ========================= */

let ecosystemDragging = false;

let ecosystemStartX;

let ecosystemScroll;

/* DOWN */

ecosystemSlider.addEventListener('mousedown', (e) => {

    ecosystemDragging = true;

    ecosystemSlider.classList.add('dragging');

    ecosystemStartX = e.pageX;

    ecosystemScroll = ecosystemSlider.scrollLeft;

});

/* MOVE */

ecosystemSlider.addEventListener('mousemove', (e) => {

    if(!ecosystemDragging) return;

    e.preventDefault();

    const move = e.pageX - ecosystemStartX;

    ecosystemSlider.scrollLeft =
    ecosystemScroll - move;

});

/* UP */

window.addEventListener('mouseup', () => {

    ecosystemDragging = false;

    ecosystemSlider.classList.remove('dragging');

});

/* STOP AUTO */

ecosystemSlider.addEventListener('mouseenter', () => {

    clearInterval(ecosystemAuto);

});

/* RESTART */

ecosystemSlider.addEventListener('mouseleave', () => {

    startEcosystemSlide();

});