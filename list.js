// Make an Arr with Objs
// Obj = date, title, url
// Cut the last one, paste in the first. Bam!

const blogposts = [{
    date: 'Dec 24, 2020',
    title: 'HTML, CSS & JavaScript: The Absolute Resources',
    url: 'https://tutuldevs.hashnode.dev/absres'
},
    {
        date: 'Nov 15, 2020',
        title: 'Dark Mode with only one line of JavaScript 😎',
        url: 'https://tutuldevs.hashnode.dev/darkmode'
    },
    {
        date: 'Nov 10, 2020',
        title: 'Alternative to images in website design',
        url: 'https://tutuldevs.hashnode.dev/alt-of-img'
    }];



///////////////////////////
//      craftsArr
// tag, name, src, urlView, urlCode, desc, tech


const craftsArr = [{
    tag: 'css',
    name: 'Alvi',
    src: 'img/css-alvi.png',
    urlView: 'https://alvi.netlify.app/',
    urlCode: 'https://github.com/TutulDevs/alvee',
    desc: 'A static, multi-page blog site for my cousin.',
    tech: 'HTML & CSS',
},
    {
        tag: 'js',
        name: 'Furnit',
        src: 'img/js-furnit.png',
        urlView: 'https://all-js.netlify.app/43-Furnit',
        urlCode: 'https://github.com/TutulDevs/All-JavaScript/tree/master/43-Furnit',
        desc: 'A simple e-commerce site with cart and adding items option.',
        tech: 'JavaScript',
    },
    {
        tag: 'css',
        name: 'Holiday',
        src: 'img/css-holiday.png',
        urlView: 'https://holidaytutul.netlify.app/',
        urlCode: 'https://github.com/TutulDevs/holiday',
        desc: 'A multi-page holiday booking site.',
        tech: 'HTML & CSS',
    },
    {
        tag: 'js',
        name: 'Jobss',
        src: 'img/js-jobss.png',
        urlView: 'https://jobss.netlify.app/',
        urlCode: 'https://github.com/TutulDevs/Jobs',
        desc: 'A job searching site with option for bookmarking.',
        tech: 'JavaScript'
    },
    {
        tag: 'css',
        name: 'Portfolio',
        src: 'img/css-portfolio.png',
        urlView: '',
        urlCode: '',
        desc: 'My portfolio site, the site you\'re in now',
        tech: 'HTML & CSS',
    },
    {
        tag: 'js',
        name: 'Budget App',
        src: 'img/js-budget.png',
        urlView: 'https://all-js.netlify.app/37-budgetApp',
        urlCode: 'https://github.com/TutulDevs/All-JavaScript/tree/master/37-budgetApp',
        desc: 'A budget calculator that keeps the record.',
        tech: 'JavaScript'
    },
    {
        tag: 'css',
        name: 'The Evenet',
        src: 'img/css-evenet.png',
        urlView: 'https://theevenet.netlify.app/',
        urlCode: 'https://github.com/TutulDevs/TheEvenet',
        desc: 'A single page website for an event management company.',
        tech: 'HTML & CSS',
    },
    {
        tag: 'js',
        name: 'Notable',
        src: 'img/js-notable.png',
        urlView: 'https://all-js.netlify.app/22-notable',
        urlCode: 'https://github.com/TutulDevs/All-JavaScript/tree/master/22-notable',
        desc: 'A note taking application.',
        tech: 'JavaScript'
    },
    {
        tag: 'js',
        name: 'Twitter Threader',
        src: 'img/js-threader.png',
        urlView: 'https://all-js.netlify.app/32-threader',
        urlCode: 'https://github.com/TutulDevs/All-JavaScript/tree/master/32-threader',
        desc: 'Makes a thread from your long text to tweet on Twitter.',
        tech: 'JavaScript',
    },
    {
        tag: 'js',
        name: 'Weather & Clock',
        src: 'img/js-weatherclock.png',
        urlView: 'https://all-js.netlify.app/40-weatherClock',
        urlCode: 'https://github.com/TutulDevs/All-JavaScript/tree/master/40-weatherClock',
        desc: 'Provides any city\'s weather and time.',
        tech: 'JavaScript',
    },
    {
        tag: 'react',
        name: 'Not Available',
        src: 'img/err.png',
        urlView: '#crafts',
        urlCode: '#crafts',
        desc: 'No Reactjs projects yet. I\'m currently learning it. ',
        tech: 'Reactjs',
    },
];


// display blogs
function displayBlog(blogs, arr = []) {
    blogs.innerHTML = arr.map((el, i) => {
        return `
        <div class="blogs-post">
        <p class="blogs-date">${el.date}</p>
        <h3 class="blogs-title">${el.title}</h3>
        <a href="${el.url}" target="_blank" class="blogs-link">Read More</a>
        </div>
        `;
    })
    .join('');
}



///////     Display Crafts
function displayCrafts(container, arr) {
    container.innerHTML = arr.map(el => {
        return `
        <div class = "craft" data-tag = "${el.tag}" >

        <div class="card">

        <img class="card__img" src="${el.src}" alt="${el.name}" onerror='this.src="img/err.png"' />

        <div class="card__desc">
        <h3 class="card__desc--title">
        ${el.name}
        </h3>

        <div class="card__desc-prev">
        <a href="${el.urlCode}">️💻 Code</a>
        <a href="${el.urlView}">👁️ Live </a>
        </div>

        <div class="card__desc--info">
        <p>
        ${el.desc}
        </p>
        </div>

        <div class="card__desc--tags">
        <span>${el.tech}</span>
        </div>
        </div>
        </div>
        </div>`;
    })
    .join('');
}