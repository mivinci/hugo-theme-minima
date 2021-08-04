window.addEventListener('DOMContentLoaded', function () {
  const light = '🌝', dark = '🌚';
  const LIGHT = 'light', DARK = 'dark';
  const themeSwitcher = document.getElementById('theme-switcher');

  themeSwitcher.innerHTML = localStorage.theme === LIGHT ? light : dark;

  themeSwitcher.addEventListener('click', function () {
    const currentTheme = localStorage.theme,
      newTheme = currentTheme === LIGHT ? DARK : LIGHT,
      { classList } = document.querySelector('html'),
      text = newTheme === LIGHT ? light : dark;
    classList.remove(currentTheme);
    classList.add(newTheme);
    localStorage.theme = newTheme;
    themeSwitcher.innerHTML = text;
  });


  
});