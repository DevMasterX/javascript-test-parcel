import '../css/pagination.css';
import NewsApiService from './components/news-service';
import { createArticlesMarkup } from './helpers/createArticlesMarkup';

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
  if (newsApiService.query === '') {
    console.log('Error');
  }

  newsApiService.resetPage();

  newsApiService.fetchArticles().then(articles => {
    clearArticlesContainer();
    appendArticlesMarkup(articles);
  });
  // appendArticlesMarkup(articles);
}

function onLoadMore() {
  newsApiService
    .fetchArticles()
    .then(articles => appendArticlesMarkup(articles));
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML(
    'beforeend',
    createArticlesMarkup(articles)
  );
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}

// const API_KEY = '53234c7a30c3487e8bcad8ad4e056dba';
