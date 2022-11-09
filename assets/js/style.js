/** @param {string} selectors */
export function fix_checkbox_list_style(selectors) {
  document.querySelectorAll(selectors).forEach(v => {
    if (/<li><input .+>.+<\/li>/.test(v.innerHTML)) {
      v.classList.add('ul-checkbox');
    }
  });
}