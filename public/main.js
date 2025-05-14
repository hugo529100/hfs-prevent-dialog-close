'use strict'; {
  document.body.addEventListener('click', ev => {
    if (!ev.target.classList.contains('dialog-backdrop')) return
    ev.preventDefault()
    ev.stopPropagation()
  }, true)
}
