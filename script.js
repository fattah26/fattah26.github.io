
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

// Tambahkan event listener ke dokumen
document.addEventListener('click', function (event) {
    // Periksa apakah yang diklik adalah hamburger atau salah satu elemen anaknya
    const isHamburgerClicked = event.target === hamburger || hamburger.contains(event.target);

    // Periksa apakah menu sedang terbuka
    const isNavMenuOpen = !navMenu.classList.contains('hidden');

    if (!isHamburgerClicked && isNavMenuOpen) {
        // Jika yang diklik di luar hamburger dan menu terbuka, sembunyikan menu dengan animasi
        hamburger.classList.remove('hamburger-active');
        navMenu.style.opacity = '0';
        navMenu.style.transform = 'translateX(100%)';
        setTimeout(() => {
            navMenu.classList.add('hidden');
        }, 300); // Sesuaikan dengan durasi transisi CSS (0.3s)
    }
});

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    if (navMenu.classList.contains('hidden')) {
        // Jika menu sedang tertutup, buka menu dengan animasi dari kanan ke kiri
        navMenu.classList.remove('hidden');
        setTimeout(() => {
            navMenu.style.opacity = '1';
            navMenu.style.transform = 'translateX(0)';
        }, 0); // Waktu kecil untuk memungkinkan penampilan elemen sebelum animasi dimulai
    } else {
        // Jika menu sedang terbuka, tutup menu dengan animasi ke kanan
        navMenu.style.opacity = '0';
        navMenu.style.transform = 'translateX(100%)';
        setTimeout(() => {
            navMenu.classList.add('hidden');
        }, 300); // Sesuaikan dengan durasi transisi CSS (0.3s)
    }
});



// // Tambahkan event listener untuk mengamati scroll
// window.addEventListener('scroll', function () {
//     const scrollY = window.scrollY;
    
//     // Atur opacity dan backdrop-filter sesuai dengan posisi scroll
//     if (scrollY > 0) {
//         navMenu.style.opacity = '0.7'; // Sesuaikan sesuai kebutuhan
//         navMenu.style.backdropFilter = 'blur(3px)'; // Sesuaikan sesuai kebutuhan
//     } else {
//         navMenu.style.opacity = '1'; // Kembalikan opacity normal ketika scroll ke atas
//         navMenu.style.backdropFilter = 'none'; // Hapus efek blur ketika scroll ke atas
//     }
// });












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
