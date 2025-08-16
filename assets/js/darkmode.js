document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('dark-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
  console.log('Dark mode toggled. Current classes:', document.documentElement.className);
  document.body.style.transition = 'background 0.3s';
  document.body.style.background = document.documentElement.classList.contains('dark') ? '#111827' : '#fff';
    });
  }
});
