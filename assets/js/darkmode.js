

/**
 * Dark mode theme manager
 * - Applies theme early to avoid FOUC
 * - Persists user preference
 * - Follows OS theme if no user override
 * - Accessible and robust
 */
(function darkModeManager() {
  let theme;
  try {
    theme = localStorage.getItem('theme');
  } catch (e) {
    console.warn('localStorage unavailable when reading theme:', e);
    theme = null;
  }
  if (!theme) {
    // If no theme saved, use system preference
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Listen for OS theme changes if no user override
  try {
    let hasUserTheme = false;
    try {
      hasUserTheme = !!localStorage.getItem('theme');
    } catch (e) {
      // ignore
    }
    if (!hasUserTheme && window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const osThemeListener = function(e) {
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      };
      if (typeof mq.addEventListener === 'function') {
        mq.addEventListener('change', osThemeListener);
      } else if (typeof mq.addListener === 'function') {
        mq.addListener(osThemeListener); // legacy Safari
      }
      // Optionally: expose a cleanup function if needed
      // window._removeOsThemeListener = () => mq.removeEventListener('change', osThemeListener);
    }
  } catch (e) {
    console.warn('Error setting up OS theme listener:', e);
  }
})();


document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('dark-toggle');
  if (toggle) {
    // Ensure button is keyboard accessible (it is by default for <button>)
    toggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      // Set aria-pressed for accessibility
      toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      // Guard localStorage access
      try {
        if (window.localStorage) {
          localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }
      } catch (e) {
        console.warn('localStorage unavailable when setting theme:', e);
      }
      // Remove debug log for production
      // document.body.style.transition = 'background 0.3s';
      // document.body.style.background = isDark ? '#111827' : '#fff';
    });
  }
});
