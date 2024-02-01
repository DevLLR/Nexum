document.getElementById('whatsappIcon').addEventListener('click', function() {

  Swal.fire({
    title: 'Chatea con nosotros',
    html: '<a class="linkWappExpand" target="_blank" href="https://api.whatsapp.com/send/?phone=543513473383&text=Hola+Nexum,+quería+consultar+...&type=phone_number&app_absent=0">Gerardo Rey</a> <br> <br>  <a class="linkWappExpand" target="_blank" href="https://api.whatsapp.com/send/?phone=543513609840&text=Hola+Nexum,+quería+consultar+...&type=phone_number&app_absent=0">Gastón Piazza</a>',
    confirmButtonColor: '#207981',
    color: '#2b9aa1'
  });
});