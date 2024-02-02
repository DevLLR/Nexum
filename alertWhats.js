var whatsappIcons = document.getElementsByClassName("whatsappIcon");

for (var i = 0; i < whatsappIcons.length; i++) {
  whatsappIcons[i].addEventListener("click", function () {
    Swal.fire({
      title: "Chatea con nosotros",
      html:
        '<a class="linkWappExpand" target="_blank" href="https://api.whatsapp.com/send/?phone=543513473383&text=Gracias+por+contactarte+con+Nexum+te+responderemos+a+la+brevedad...&type=phone_number&app_absent=0">Gerardo Rey</a>' +
        ' <br> <br>  <a class="linkWappExpand" target="_blank" href="https://api.whatsapp.com/send/?phone=543513609840&text=Gracias+por+contactarte+con+Nexum+te+responderemos+a+la+brevedad...&type=phone_number&app_absent=0">Gastón Piazza</a>',
      confirmButtonColor: "#207981",
      color: "#2b9aa1",
    });
  });
}
