(() => {
  const STORAGE_KEY = 'preventDialogClose'
  const getState = () => localStorage.getItem(STORAGE_KEY) !== 'false'

  // 防止點擊 backdrop 關閉對話框
  document.body.addEventListener('click', ev => {
    if (!ev.target.classList.contains('dialog-backdrop')) return
    if (!getState()) return
    ev.preventDefault()
    ev.stopPropagation()
  }, true)

  const insertToggle = () => {
    const themeSelect = document.getElementById('option-theme')
    if (!themeSelect || document.getElementById('prevent-dialog-toggle')) return

    const label = document.createElement('label')
    label.style.display = 'block'
    label.style.marginTop = '1em'
    label.innerHTML = `
      <input type="checkbox" id="prevent-dialog-toggle" ${
        getState() ? 'checked' : ''
      }>
      Prevent dialog close on outside click
    `

    themeSelect.parentNode.insertBefore(label, themeSelect.nextSibling)

    document.getElementById('prevent-dialog-toggle').addEventListener('change', e => {
      localStorage.setItem(STORAGE_KEY, e.target.checked)
    })
  }

  // 插入時機：DOM ready 或 MutationObserver 偵測到 options 顯示
  const observer = new MutationObserver(() => insertToggle())
  observer.observe(document.body, { childList: true, subtree: true })

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => insertToggle())
  } else {
    insertToggle()
  }
})()
