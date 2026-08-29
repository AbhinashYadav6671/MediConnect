function setCurrentUser(role, id) {
  localStorage.setItem('mediconnect_role', role);
  localStorage.setItem('mediconnect_user_id', id);
}

function getCurrentUser() {
  return {
    role: localStorage.getItem('mediconnect_role'),
    id: localStorage.getItem('mediconnect_user_id'),
  };
}
function requireAuth(expectedRole) {
  const user = getCurrentUser();
  if (!user.role || user.role !== expectedRole || !user.id) {
    window.location.href = '../login.html';
  }
}