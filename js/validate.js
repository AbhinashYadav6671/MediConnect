function setFieldError(inputId, message) {
  const input = document.getElementById(inputId);
  const group = input.closest('.form-group');
  group.classList.add('has-error');
  let errorEl = group.querySelector('.form-error');
  if (!errorEl) {
    errorEl = document.createElement('span');
    errorEl.className = 'form-error';
    group.appendChild(errorEl);
  }
  errorEl.textContent = message;
  errorEl.style.display = 'block';
}
function clearFieldError(inputId) {
  document.getElementById(inputId).closest('.form-group').classList.remove('has-error');
}
function clearAllFieldErrors(ids) {
  ids.forEach(clearFieldError);
}