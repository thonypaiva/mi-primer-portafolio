const form = document.querySelector('form');
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");


const validarEmail = (email) =>{
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let nombreBoton = nombre;
    
    if(nombreBoton.value.length < 3 || nombre.value.length === ""){
        alert(`El campo 'Nombre' no puede estar vacio y/o es muy corto el nombre`);
        return
    }else if(nombreBoton.value.length > 25){
        alert("que nombre tan largo")
        return
    }

   
    if (!validarEmail(email.value)) {
        alert("Por favor, ingrese una dirección de correo electrónico válida");
        return;
    }

    let areaAsunto = mensaje;

    if( areaAsunto.value.length < 5 || areaAsunto.value.length === ""){
        alert("Este mensaje es muy corto")
        return
    }
    event.target.submit();
    
})





