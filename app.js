const btn = document.querySelector('.toggler');
const main = document.querySelector('.main');
const menuBtn = document.querySelector('.menu__btn');

///////////////////     Dark Mode
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
}

);

///////////////////     Nav Menu
menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('menu__active');
});


///////////////////     Crafts Filtering
const btnCraft = document.querySelectorAll('.btnCraft');
const crafts = document.querySelectorAll('.craft');

function filterCrafts () {

    // get the btn Text in case insensetive way
    // this = button that got clicked
    let btnName = this.dataset.tag;

    crafts.forEach(craft => {

        // get the dataset, lowercase if needed
        const tag = craft.dataset.tag;

        // store the tag & the all for all the el
        const names = [tag, 'all'];

        // IF btn name = names , show || hide
        names.includes(btnName) ?
        craft.style.display = 'grid':
        craft.style.display = 'none';

    }); // end of cards
}

btnCraft.forEach(btn => btn.addEventListener('click', filterCrafts));