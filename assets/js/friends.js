const dom = document.getElementById('friends')

const topk = '{{.Site.Params.friends.topk}}'
const raw = '{{.Site.Params.friends.feeds}}'

const feeds = raw.replace(/^\[|\]$/g, '').split(' ')

feeds.forEach(v => fetch(v).then(r => r.text()).then(r => rss(r)))

/**
 * @param {string} xml 
 */
function rss(xml) {
  xml = xml.trim().replace(/\n/g, '')
  const g = xml.matchAll(/<(item|entry)>.*?<\/(item|entry)>/g)
  let n = +topk || 2;
  while (n) {
    const next = g.next()
    if (next.done) {
      break
    }

    // title
    const title = next.value[0].match(/(?<=<title>).*(?=<\/title>)/)[0]

    // link
    const link = next.value[0].match(/(?<=<(link|id)>).*(?=<\/(link|id)>)/)[0]

    // date
    const date = next.value[0].match(/(?<=<(pubDate|updated)>).*(?=<\/(pubDate|updated)>)/)[0]

    // innsert dom
    const div = document.createElement('div')
    div.className = 'flex justify-between sm:flex-col-reverse my-4 sm:mb-6 sm:mt-3'
    div.innerHTML = template(link, title, date)
    dom.appendChild(div)

    n--;
  }
}

/**
 * @param {string} date 
 */
function format(date) {
  const d = new Date(date)
  return d.toDateString()
}


function template() {
  const a = arguments
  return `
    <a href=${a[0]}>${a[1]}</a>
    <div class="sm:mb-2 sm:text-xs">${format(a[2])}</div>
  `.trim()
}