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