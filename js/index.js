window.addEventListener('load', function() { 
  let btnLogin = document.getElementById('btnLogin');
  btnLogin.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'views/instaCollage.html';
  });
});