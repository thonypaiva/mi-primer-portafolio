const form = document.querySelector('form');
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const inputNombreError = document.querySelector('.mensaje-nombre');
const inputEmailError = document.querySelector('.mensaje-email');
const textAreaError = document.querySelector('.area-mensaje')




const validarEmail = (email) =>{
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombreBoton = nombre;
    
    if(nombreBoton.value.length < 3 || nombre.value.length === ""){
       inputNombreError.textContent = "Por favor coloca un Nombre y Apellido valido y/o este campo no puede esta vacio "
        return
    }else {
        inputNombreError.textContent = ""
    }

   
    if (!validarEmail(email.value)) {
        inputEmailError.textContent = "Por favor coloca un email valido"
        return;
    }

    const areaAsunto = mensaje;

    if( areaAsunto.value.length < 5 || areaAsunto.value.length === ""){
       textAreaError.textContent = "Por favor coloca un mensaje mas largo y/o este campo no puede esta vacio "
        return
    }else{
        textAreaError.textContent = ""

    }

    event.target.submit();
    
})





