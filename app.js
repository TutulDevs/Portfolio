const $ = x => document.querySelector(x);


// Publish the blog

// Show the crafts


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