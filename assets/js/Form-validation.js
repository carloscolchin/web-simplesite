const links = document.querySelectorAll(".navbar-nav li a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('FormLogin').addEventListener('submit', ValidarContacto);
});

function ValidarContacto(e) {
    e.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    if(nombre == 0 && email == 0 && mensaje == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops... ',
            html: 'Porfavor rellena los datos! <i class="far fa-dizzy"></i>',
          })
          return;
    }

    if(nombre == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops... ',
            html: 'Porfavor ingresa tu nombre! <i class="far fa-dizzy"></i>',
          })
          return;
    }

    if(email == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops... ',
            html: 'Porfavor ingresa tu correo electronico! <i class="far fa-dizzy"></i>',
          })
          return;
    }

    if(mensaje == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops... ',
            html: 'Porfavor ingresa tu mensaje! <i class="far fa-dizzy"></i>',
          })
          return;
    }


    if(nombre, email, mensaje) {
        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado...',
            html: 'Gracias por ponerte en contacto con nosotros.! <i class="far fa-laugh-wink"></i>',
          })

          document.getElementById('FormLogin').reset();
    }
}