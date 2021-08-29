const light = '{{ index .Site.Params.switch 1 }}',
  dark = '{{ index .Site.Params.switch 0 }}';
const LIGHT = 'light', DARK = 'dark';
const themeSwitcher = document.getElementById('theme-switcher');

themeSwitcher.innerHTML = localStorage.theme === LIGHT ? light : dark;

themeSwitcher.addEventListener('click', function () {
  const currentTheme = localStorage.theme,
    newTheme = currentTheme === LIGHT ? DARK : LIGHT,
    { classList } = document.documentElement,
    text = newTheme === LIGHT ? light : dark;
  classList.remove(currentTheme);
  classList.add(newTheme);
  localStorage.theme = newTheme;
  themeSwitcher.innerHTML = text;
});