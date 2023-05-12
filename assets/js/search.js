import * as params from '@params';

const search_input = document.querySelector("#search-input");
const search_result = document.querySelector("#search-result");

let fuse;

window.onload = async function() {
  const data = await fetch("../index.json").then(res => res.json());
  const opts = params.search.fuse;
  fuse = new Fuse(data, opts);
}

search_input.addEventListener("input", function () {
  if (!fuse) return;
  const results = fuse.search(this.value.trim());
  let html = '';
  if (results.length > 0) {
    for (const v of results) {
      html += `<li><a href="${v.item.permalink}">${v.item.title}</a></li>`;
    }
  }
  search_result.innerHTML = html;
})
