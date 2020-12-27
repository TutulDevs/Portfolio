// Make an Arr with Objs
// Obj = date, title, url
// Cut the last one, paste in the first. Bam!

const blogposts = [{
    date: 'Nov 17, 2020',
    title: 'Fix CSS transition on gradient background',
    url: 'https://tutuldevs.hashnode.dev/fixgradtrans'
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

const blogs = document.querySelector('.blogs');


// display function
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


// now display on load
displayBlog(blogs, blogposts);