// fix style of checked/unchecked list items
document.querySelectorAll('.md ul').forEach(v => {
  if (/<li><input .+>.+<\/li>/.test(v.innerHTML)) {
    console.log(v);
    v.classList.add('ul-checkbox');
  }
});


// // use custom font family
// document.querySelector('body').style.setProperty('--global-font-family', '{{ .Site.Params.globalFontFamily }}');