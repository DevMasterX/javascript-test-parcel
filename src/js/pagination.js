import '../css/pagination.css';
import NewsApiService from './components/news-service';

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

  newsApiService.fetchArticles(searchQuery);
}

function onLoadMore() {
  newsApiService.fetchArticles(searchQuery);
}

// const API_KEY = '53234c7a30c3487e8bcad8ad4e056dba';
