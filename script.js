
// Navbar Fixed

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});



// Name
const words = ["Fattah Arif Nugroho."];

gsap.to('.cursor', {
    opacity: 0,
    repeat: -1,
    yoyo: true,
    duration: 0.3,
    delay:0.5,
    ease: "power2.inOut"
});

let tlMaster = gsap.timeline({ repeat: -1});

words.forEach(word => {
    let tlText = gsap.timeline({ repeat: 1, yoyo:true, repeatDelay: 2});
    tlText.to("#typed-text", { duration: 1.5, text: word, delay: 0.2});
    tlMaster.add(tlText);
});

// let cursor = gsap.to('.cursor', {opacity:0, ease:"power2.inOut", repeat: -1})
