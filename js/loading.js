function withLoading(containerId, renderFn, delay = 400) {
  const el = document.getElementById(containerId);
  if (el) el.innerHTML = `<div class="spinner-wrap"><div class="spinner"></div></div>`;
  setTimeout(renderFn, delay);
}