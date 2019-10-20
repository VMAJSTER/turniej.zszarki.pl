// $('a[href*="#"]')
//     // Remove links that don't actually link to anything
//     .not('[href="#"]')
//     .not('[href="#0"]')
//     .click(function (event) {
//         // On-page links
//         if (
//             location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//             &&
//             location.hostname == this.hostname
//         ) {
//             // Figure out element to scroll to
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//             // Does a scroll target exist?
//             if (target.length) {
//                 // Only prevent default if animation is actually gonna happen
//                 event.preventDefault();
//                 $('html, body').animate({
//                     scrollTop: target.offset().top
//                 }, 1000, function () {
//                     // Callback after animation
//                     // Must change focus!
//                     var $target = $(target);
//                     $target.focus();
//                     if ($target.is(":focus")) { // Checking if the target was focused
//                         return false;
//                     } else {
//                         $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
//                         $target.focus(); // Set focus again
//                     };
//                 });
//             }
//         }
//     });

// element = document.getElementById("sectionTwo");
// scrollTo(document.body, element.offsetTop, 600);


// function scrollTo(element, to, duration) {
//     if (duration <= 0) return;
//     var difference = to - element.scrollTop;
//     var perTick = difference / duration * 10;

//     setTimeout(function () {
//         element.scrollTop = element.scrollTop + perTick;
//         if (element.scrollTop === to) return;
//         scrollTo(element, to, duration - 10);
//     }, 10);
// }



const sectionTwo = document.querySelector('#sectionTwo')
const showMore = document.querySelector('.showmore');
console.log(sectionTwo);
console.log(showMore);
showMore.addEventListener('click', function () {
    sectionTwo.scrollIntoView({ top: -100, behavior: 'smooth', block: 'start', inline: 'start' });
    // sectionTwo.scrollBy(0, -10);;

});
// window.scrollBy(0, -100);


// const id = 'profilePhoto';
// const yOffset = -10;
// const element = document.getElementById(id);
// const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

// window.scrollTo({ top: y, behavior: 'smooth' });

// const sectionTwo = () => {
//     const sectionTwo = document.querySelector('#sectionTwo')
//     sectionTwo.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
// };


const moveToGreen = () => {
    const blue = document.getElementById('green')
    blue.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
};