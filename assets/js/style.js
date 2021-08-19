// This file contains some codes to fix style of elements under `.md`
document.querySelectorAll('.md ul').forEach(v => {
  if (/<li><input .+>.+<\/li>/.test(v.innerHTML)) {
    v.classList.add('ul-checkbox');
  }
});