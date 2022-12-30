document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var id = document.getElementById('id').value;
  localStorage.setItem('id', id);

  // Check if the accept-terms checkbox is checked
  var acceptTerms = document.getElementById('accept-terms').checked;
  if (acceptTerms) {
    // Redirect the user to the next page
    window.location = '/next.html';
  } else {
    // Display an error message
    alert('Please accept the terms to proceed.');
  }
});
