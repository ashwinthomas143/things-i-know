document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('dark-toggle');
  // On load, set dark mode if previously chosen
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      // Persist preference
      if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
      console.log('Dark mode toggled. Current classes:', document.documentElement.className);
      document.body.style.transition = 'background 0.3s';
      document.body.style.background = document.documentElement.classList.contains('dark') ? '#111827' : '#fff';
    });
  }
});
