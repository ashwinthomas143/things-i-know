SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a href="{url}" class="text-blue-600 dark:text-blue-400">{title}</a></li>',
  noResultsText: '<li>No results found</li>'
});
