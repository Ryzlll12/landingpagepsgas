/* ========================= */
/* REVEAL ON SCROLL */
/* ========================= */

const reveals = document.querySelectorAll('.reveal');

/* FUNCTION */

function revealSections(){

    reveals.forEach((section) => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 40;

        /* ACTIVE */

        if(revealTop < windowHeight - revealPoint){

            section.classList.add('active');

        }

    });

}

/* SCROLL */

window.addEventListener('scroll', revealSections);

/* LOAD */

revealSections();

/* ========================= */
/* PROCESS SCROLL ANIMATION */
/* ========================= */

const processAnimation = document.querySelectorAll('.process-animate');

/* FUNCTION */

function animateProcess(){

    processAnimation.forEach((item) => {

        const windowHeight = window.innerHeight;

        const elementTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        /* ACTIVE */

        if(elementTop < windowHeight - revealPoint){

            item.classList.add('active');

        }

    });

}

/* SCROLL */

window.addEventListener('scroll', animateProcess);

/* LOAD */

animateProcess();