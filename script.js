function sendMail(event) {
  event.preventDefault(); 

  let params = {
    name: document.getElementById('name').value,
    email: document.getElementById('prenom').value,
    phone: document.getElementById('phone').value,
    company: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  emailjs.send("service_vezlcl3", "template_fox20te", params)
    .then(function(response) {
      alert("Email envoyé !");
     
    }, function(error) {
      alert("Erreur : " + error.text);
    });
}




document.getElementById("h1").style.color="green";
