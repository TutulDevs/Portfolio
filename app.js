const $ = x => document.querySelector(x);


// Publish the blog
displayBlog($('.blogs'), blogposts);


// show menu

const links = document.querySelectorAll('.link');
links.forEach(el => el.addEventListener('click', ()=> {
    document.body.classList.toggle('show-nav');
}));

$('.nav-toggler').addEventListener('click', ()=> {
    document.body.classList.toggle('show-nav');
});


// Dark Mode
$('.mode-toggler').addEventListener('click', ()=> {
    document.body.classList.toggle('light');
});

// Update footer year
$('.year').textContent = new Date().getFullYear();

// observe top btn & header shadow
const observeTop = (entries) => {
    if (!entries[0].isIntersecting) {
        $('.top'). style.transform = 'scale(1)';
        // $('.header')
    } else {
        $('.top'). style.transform = 'scale(0)';
    }
};

const observeHome = new IntersectionObserver(observeTop, {
    root: null,
    threshold: 0
});

// observe the el
observeHome.observe($('#home'));



// crafts btn
const btnCraft = document.querySelectorAll('.btnCraft');
const crafts = document.querySelectorAll('.craft');

function filterCrafts () {
    // active btn
    btnCraft.forEach(li => {
        li.classList.remove('btnCraft-active');
    });
    this.classList.add('btnCraft-active');

    // filter the cards
    crafts.forEach(craft => {
        [craft.dataset.tag, 'all'].includes(this.dataset.tag) ?
        craft.style.display = 'block':
        craft.style.display = 'none';
    });


}

// filter
btnCraft.forEach(btn => btn.addEventListener('click', filterCrafts));