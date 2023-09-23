
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
const words = ["Fattah Arif Nugroho", "Pelajar", "Front End Dev"];

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


// AOS
AOS.init({
    duration: 800, // Durasi animasi dalam milidetik
    easing: 'ease-in-out', // Jenis easing (misalnya: 'ease', 'linear', 'ease-in-out', dll.)
    once: false // Animasi hanya akan dimainkan sekali saat elemen pertama kali muncul
  });


// Alert

const closeButtonSuccess = document.querySelector('.my-alert-sukses .close-btn');
const closeButtonError = document.querySelector('.my-alert-error .close-btn');
const alertSuccess = document.querySelector('.my-alert-sukses');
const alertError = document.querySelector('.my-alert-error');

closeButtonSuccess.addEventListener('click', function () {
  alertSuccess.style.display = 'none';
});

closeButtonError.addEventListener('click', function () {
  alertError.style.display = 'none';
});





// Kontak Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzpaeISDHBQyYO6DvW_TaBLcwM1tvF3Fz1qWU2pAObUjWcfVzxPyBMO8Un3uzXt5JWI/exec';
const form = document.forms['portofolio-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlertSuccess = document.querySelector('.my-alert-sukses');
const myAlertError = document.querySelector('.my-alert-error');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Check if any field is empty
  const nama = form.elements['Nama'].value;
  const email = form.elements['Email'].value;
  const pesan = form.elements['Pesan'].value;

  if (nama === '' || email === '' || pesan === '') {
    // Show Error Alert
    myAlertSuccess.style.display = 'none';
    myAlertError.style.display = 'block';
    return;
  }

  btnLoading.classList.toggle('hidden');
  btnKirim.classList.toggle('hidden');

  // Reset Alerts
  myAlertSuccess.style.display = 'none';
  myAlertError.style.display = 'none';

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      console.log('Success!', response);
      btnLoading.classList.toggle('hidden');
      btnKirim.classList.toggle('hidden');

      // Show Success Alert
      myAlertSuccess.style.display = 'block';

      // Reset Form
      form.reset();
    })
    .catch(error => {
      console.error('Error!', error.message);

      // Show Error Alert
      myAlertSuccess.style.display = 'none';
      myAlertError.style.display = 'block';
    });
});
