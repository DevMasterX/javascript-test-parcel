function createArticlesMarkup(articles) {
  if (!articles) {
    return alert('No articles found!!!');
  }

  return articles
    .map(
      ({ url, urlToImage, title, author, description }) => `
   <li>
        <a href="${url}" target = '_blank' rel='noopener noreferrer' >
          <article>
            <img src="${urlToImage}" alt="" width='480' />
            <h2>${title}</h2>
            <p>Posted by: ${author}</p>
            <p>${description}</p>
          </article>
        </a>
      </li>
    `
    )
    .join('');
}

export { createArticlesMarkup };
