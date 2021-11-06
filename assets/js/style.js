// fix style of checkboxes in posts.
document.querySelectorAll('.md ul').forEach(v => {
  if (/<li><input .+>.+<\/li>/.test(v.innerHTML)) {
    v.classList.add('ul-checkbox');
  }
});

// use custom font family
document.querySelector('body').style.setProperty('--global-font-family', '{{ .Site.Params.globalFontFamily }}');