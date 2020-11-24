const btn = document.querySelector('.toggler');
const main = document.querySelector('.main');
const menuBtn = document.querySelector('.menu__btn');

///////////////////     Dark Mode
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});


///////////////////     Nav Menu
menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('menu__active');
});


///////////////////     Crafts Filtering
const btnCraft = document.querySelectorAll('.btnCraft');
const crafts = document.querySelectorAll('.craft');

function filterCrafts () {

    // active class
    // 1. remove the class from all, 2. add on the clicked
    btnCraft.forEach(li => {
        li.classList.remove('btnCraft-active');
    });
    this.classList.add('btnCraft-active');

    // filter the cards
    crafts.forEach(craft => {

        // IF the btn's tag == card's tag || all , show || hide
        [craft.dataset.tag, 'all'].includes(this.dataset.tag) ?
        craft.style.display = 'block':
        craft.style.display = 'none';
    });
}


// btnCraft.forEach(btn => {
//   btn.onclick = function() {
//         btnCraft.forEach(li => {
//             li.classList.remove('btnCraft-active');
//         });
//         btn.classList.add('btnCraft-active');
//     }
// });

// filter
btnCraft.forEach(btn => btn.addEventListener('click', filterCrafts));