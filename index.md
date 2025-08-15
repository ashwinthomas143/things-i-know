---
layout: home
title: "Things I Know"
---

Welcome to my collection of notes, lessons, and discoveries.  
Use the **search bar below** or browse by **tags** to find entries.

<input type="text" id="search-input" placeholder="Search...">
<ul id="results-container"></ul>

<script src="/assets/js/search.js"></script>
<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json'
  })
</script>
