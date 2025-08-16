document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('dark-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
    });
  }
});
