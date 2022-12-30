document.getElementById('form').addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the name from the form
  var name = document.getElementById('name').value;

  // Send an HTTP request to the server-side script
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'Wartung_Und_Instandhaltung/save-data.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Data saved successfully
      alert('Data saved successfully');
    } else {
      // An error occurred
      alert('An error occurred');
    }
  };
  xhr.send('name=' + encodeURIComponent(name));
});
