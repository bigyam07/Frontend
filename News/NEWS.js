const API_KEY = "e104e35825a54429b74f1a0d5b6027b3";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', () => {
    fetchNews("USA");
});

async function fetchNews(query) {
    const response = await fetch(`${url}${query}&apikey=${API_KEY}`)
    const data = await response.json();
    console.log(data);
    bindData(data.articles);
}

function bindData(articles) {
    const cardContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardContainer.innerHTML = "";

    articles.forEach((article) => {
        if(!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardContainer.appendChild(cardClone);
    })
}

function fillDataInCard(cardClone, article) {
    const newsImage = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDes = cardClone.querySelector("#news-desc");

    newsImage.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDes.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });

    newsSource.innerHTML = `${article.source.name} • ${date}`;

    cardClone.firstElementChild.addEventListener('click' , () => {
        window.open(article.url, "_blank");
    })
}
let curSelectNav = null;
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id); 
    curSelectNav?.classList.remove('active');
    curSelectNav = navItem;
    curSelectNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text"); 

searchButton.addEventListener('click', () => {
    const query = searchText.value;
    if(!query) return;
    fetchNews(query); 
    curSelectNav.classList.remove("active");
})

const home = document.getElementById("home");
home.addEventListener('click', () => {
    fetchNews("USA");
    curSelectNav.classList.remove("active");
    searchText.value = "";
})
