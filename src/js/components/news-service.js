export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
  }
  fetchArticles() {
    console.log(this);
    const options = {
      headers: {
        Authorization: '53234c7a30c3487e8bcad8ad4e056dba',
      },
    };

    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=10&page=1`;

    fetch(url, options)
      .then(r => r.json())
      .then(console.log());
  }
  get query() {
    return this.query;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
