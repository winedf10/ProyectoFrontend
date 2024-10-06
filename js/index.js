function IngresarDashboard() {
    location.href = 'dashboard.html';
}

function IngresarRecord() {
    location.href = 'Record.html';
}

function IngresarRecoverPassword() {
    location.href = 'RecoverPassword.html';
}

function Suscribirse() {
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block"; 
    setTimeout(function() {
      window.location.href = "index.html"; 
    }, 4000); 
    return false; 
  }

  function NotificationRecoverPassword() {
   
    alert("Se notifica los pasos para recuperacion de la cuenta registrada al correo");

    setTimeout(function() {
        window.location.href = "index.html"; 
      }, 2000); 
      return false; 
}
