const toggle = document.getElementById('dark-toggle');
toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});
