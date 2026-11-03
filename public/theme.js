/* Applies the stored theme before first paint to avoid a flash of light mode. */
(function () {
  try {
    var theme = localStorage.getItem('omega.theme');
    if (theme === 'dark' || theme === 'light') {
      document.documentElement.dataset.theme = theme;
    }
    var lang = localStorage.getItem('omega.lang');
    if (lang === 'uk' || lang === 'en') {
      document.documentElement.lang = lang;
    }
  } catch (error) {
    /* storage may be blocked; the default theme still applies */
  }
})();
