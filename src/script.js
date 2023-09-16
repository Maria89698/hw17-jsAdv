function searchImg(query, page=1) {
    return fetch(`https://pixabay.com/api/?key=39464398-e3c96ff100b78135357681e3f&q=${query}&page=${page}&per_page=20`)
    .then((res)=>res.json())
    .then((res)=>res.hits)
};

const form = document.querySelector('.js-search-form');
const list = document.querySelector('.js-articles-container');
const button = document.querySelector('[data-action="load-more"]');

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const searchQuery = event.currentTarget.elements.query.value;
    searchImg(searchQuery)
    .then((hits)=>{console.log(hits)})
};

function createMarkup(articles) {  
    const markup = articlesTpl(articles);
    articlesContainerRef.insertAdjacentHTML('beforeend', markup)
}