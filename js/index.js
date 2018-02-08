window.addEventListener('load', function () {
  let validateEmail = false;
  let validatePassword = false;
  let btnLogin = document.getElementById('btnLogin');
  let btnGoogle = document.getElementById('btnGoogle');
  btnLogin.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'views/instaCollage.html';
  });
  btnGoogle.addEventListener('click', function (event) {
    event.preventDefault();
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      let token = result.credential.accessToken;
      let user = result.user;
      
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          alert("Bienvenido a Insta Collage");
          window.location.href = 'views/instaCollage.html';
        } else {
          console.log("NO Esta logeado");
        }
      });
    }).catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
      // ...
    });
  });


});