document.getElementById('login-form').addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Check if the accept-terms checkbox is checked
  var acceptTerms = document.getElementById('accept-terms').checked;
  if (acceptTerms) {
    // Redirect the user to the next page
    window.location = 'www.google.de';
  } else {
    // Display an error message
    alert('Please accept the terms to proceed.');
  }
});
