let scrollPos = 230;
const nav = document.querySelector('.nav');
console.log('ustawiłem że po 400 ma być zmiana', nav);
function checkPosition() {
    let windowY = window.scrollY;
    console.log('do leta leci pozycja skrola w Y', windowY);
    if (windowY > scrollPos) {
        nav.classList.add('nav-hidden');
        nav.classList.remove('nav-visible');
    } else {
        nav.classList.add('nav-visible');
        nav.classList.remove('nav-hidden');
    }
}
window.addEventListener('scroll', checkPosition);