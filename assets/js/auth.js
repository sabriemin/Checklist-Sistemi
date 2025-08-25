function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const users = [
    { username: "admin", password: "1234", role: "admin" },
    { username: "user1", password: "1234", role: "user" }
  ];
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
    if (user.role === 'admin') {
      window.location.href = 'admin.html';
    } else {
      window.location.href = 'profil.html';
    }
  } else {
    document.getElementById('error').innerText = 'Hatalı giriş!';
  }
}