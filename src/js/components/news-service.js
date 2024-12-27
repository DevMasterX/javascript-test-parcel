export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchArticles() {
    const options = {
      headers: {
        Authorization: '53234c7a30c3487e8bcad8ad4e056dba',
      },
    };

    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=10&page=${this.page}`;

    return fetch(url, options)
      .then(r => r.json())
      .then(data => {
        this.incrementPage();

        return data.articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.query;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
