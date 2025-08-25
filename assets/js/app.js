document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    const el = document.getElementById('usernameDisplay');
    if (el) el.innerText = user.username;
  } else {
    if (!window.location.pathname.includes('login.html')) {
      window.location.href = 'login.html';
    }
  }
});