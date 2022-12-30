document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var id = document.getElementById('id').value;
  localStorage.setItem('id', id);

  window.location = '/checklist.html';
});
