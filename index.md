---
layout: home
title: "Things I Know"
---

Welcome to my collection of notes, lessons, and discoveries.

<input type="text" id="search-input" placeholder="Search posts...">
<ul id="results-container"></ul>

<script src="/assets/js/search.js"></script>
<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json'
  })
</script>
