import '../css/pagination.css';
import NewsApiService from './components/news-service';
import createArticlesMarkup from './helpers/createArticlesMarkup';
console.log('🚀  createArticlesMarkup:', createArticlesMarkup);

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.resetPage();

  newsApiService.fetchArticles().then(articles => console.log(articles));
  appendArticlesMarkup(articles);
}

function onLoadMore() {
  newsApiService.fetchArticles().then(articles => console.log(articles));
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML(
    'beforeend',
    createArticlesMarkup(articles)
  );
}

// const API_KEY = '53234c7a30c3487e8bcad8ad4e056dba';
