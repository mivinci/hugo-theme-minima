const light = '{{ index .Site.Params.switch 1 }}'
const dark = '{{ index .Site.Params.switch 0 }}'
const comment = '{{ .Site.Params.comment }}'
const LIGHT = 'light', DARK = 'dark'

const themeSwitcher = document.getElementById('theme-switcher')

// set switcher
themeSwitcher.innerHTML = localStorage.theme === LIGHT ? light : dark

themeSwitcher.addEventListener('click', function () {
  const currentTheme = localStorage.theme
  const newTheme = currentTheme === LIGHT ? DARK : LIGHT
  
  // switch global theme
  switchMinimaTheme(currentTheme, newTheme)

  // switch utterance theme if necessary

  if (comment === 'utterances')
    switchUtteranceTheme(`github-${newTheme}`)
});

function switchMinimaTheme(oldTheme, newTheme) {
  const { classList } = document.documentElement
  const text = newTheme === LIGHT ? light : dark;
  
  classList.remove(oldTheme);
  classList.add(newTheme);
  localStorage.theme = newTheme;
  themeSwitcher.innerHTML = text;
}

const utteranceClassName = '.utterances-frame'
let utterance;

function switchUtteranceTheme(theme) {
  if (!utterance) utterance = document.querySelector(utteranceClassName)
  utterance.contentWindow.postMessage({type: 'set-theme', theme}, 'https://utteranc.es')
}