// Sample page data in pages.json
const pages = [
    { pagename: 'jsonformatter', link: 'json.html' },
    { pagename: 'xmlf', link: 'xmlf.html' }
];

const navMenu = document.getElementById('nav-menu');
const pageContent = document.getElementById('page-content');

// Generate navigation links from the pages array
pages.forEach(page => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = page.pagename;
    link.href = page.link;
    link.addEventListener('click', (e) => {
        e.preventDefault();
        loadContent(page.link);
    });
    listItem.appendChild(link);
    navMenu.appendChild(listItem);
});

// Function to load content into the pageContent div
function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(content => {
            pageContent.innerHTML = content;
        });
}
