function validarForm() {
    var txtNombre = document.getElementById('txtNombre');
    var txtEmail = document.getElementById('txtEmail');
    var txtDescripcion = document.getElementById('txtDescripcion');


    if (txtNombre.value === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'El campo Nombre es requerido!',
           
          });
        return false;
      }

      if (txtEmail.value === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'El campo Email es requerido!',
           
          });
        return false;
      }

      if (txtDescripcion.value === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'El campo Descripcion es requerido!',
          });
        return false;
      }

       else if (txtDescripcion.value.length < 10) {
        Swal.fire({
            icon: 'warning',
            title: 'Revisalo',
            text: 'El campo Descripcion tiene un limite minimo de 10 caracteres...!',
          });
        return false;
      }

      else if (txtDescripcion.value.length > 200) {
        Swal.fire({
            icon: 'warning',
            title: 'Revisalo',
            text: 'El campo Descripcion tiene un limite maximo de 200 caracteres...!',
          });
        return false;
      }
      if(txtNombre && txtEmail && txtDescripcion){
        Swal.fire({
          icon: 'success',
          title: 'Datos correctos',
          text: 'Usted ya puede enviar el formulario',
        });
      }
return true;
}

function GuardarDatos(){
  if(validarForm())
  {
    Swal.fire({
      icon: 'success',
      title: 'Formulario enviado con exito!!',
      text: 'Su consulta sera respondida inmediatamente',
    });
    return false;
  }
  else{
    Swal.fire({
      icon: 'warning',
      title: 'Revisalo',
      text: 'Hay algo que esta mal!',
    });
    return false;
  }
 
}
window.sr = ScrollReveal();

sr.reveal('#transicion', {
duration: 2000,
origin:'bottom',
distance: '-100px'
});
sr.reveal('#about', {
  duration: 3000,
});

sr.reveal('#skills', {
duration: 2000,
origin:'right',
distance: '400px'
});
sr.reveal('#resume', {
duration: 2000,
origin:'left',
distance: '400px'
});
sr.reveal('#contact', {
duration: 2000,
origin:'bottom',
distance: '400px'
});


