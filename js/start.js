window.onload = checkURL();

function checkURL() {
  var search = window.location.search.replace('?submit=', '');
  if (search) showAlert();
}

function showAlert() {
  var container = document.getElementById('contact-alert');
  container.innerHTML = '<strong>Success!</strong> We will be in touch.';
  container.className += ' show';
}