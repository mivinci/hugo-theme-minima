import * as params from '@params';

export function setup_selectable () {
  const selectable = params.selectable
  if (!selectable) {
    document.documentElement.style = 'user-select:none'
  }
}