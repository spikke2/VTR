
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("[data-formulario] input");

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,10}$/ // 7 a 14 numeros.
}

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false
}

const validacionFormulario = (e) =>{
    switch(e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, "usuario");
        break
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
        break
        case "password":
            validarCampo(expresiones.password, e.target, "password");
            validarPasswordDos();
        break
        case "password2":
            validarPasswordDos();
        break
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo");
        break
        case "telefono":
            validarCampo(expresiones.telefono, e.target, "telefono");
        break
    }

}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.querySelector(`[data-grupo__${campo}]`).classList.add("formulario__grupo-correcto");
        document.querySelector(`[data-grupo__${campo}]`).classList.remove("formulario__grupo-incorrecto");
        document.querySelector(`[data-grupo__${campo}] .formulario__validacion-estado`).classList.add("fa-square-check");
        document.querySelector(`[data-grupo__${campo}] .formulario__validacion-estado`).classList.remove("fa-rectangle-xmark");
        document.querySelector(`[data-grupo__${campo}] .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo] = true;
    }else{
        document.querySelector(`[data-grupo__${campo}]`).classList.add("formulario__grupo-incorrecto");
        document.querySelector(`[data-grupo__${campo}]`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`[data-grupo__${campo}] .formulario__validacion-estado`).classList.add("fa-rectangle-xmark");
        document.querySelector(`[data-grupo__${campo}] .formulario__validacion-estado`).classList.remove("fa-square-check");
        document.querySelector(`[data-grupo__${campo}] .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos[campo] = false;
    }
}

const validarPasswordDos = ()=>{
    const inputPasswordUno = document.querySelector("[data-password]");
    const inputPasswordDos = document.querySelector("[data-password2]");
    if(inputPasswordUno.value !== inputPasswordDos.value){
        document.querySelector("[data-grupo__password2]").classList.add("formulario__grupo-incorrecto");
        document.querySelector("[data-grupo__password2]").classList.remove("formulario__grupo-correcto");
        document.querySelector("[data-grupo__password2] .formulario__validacion-estado").classList.add("fa-rectangle-xmark");
        document.querySelector("[data-grupo__password2] .formulario__validacion-estado").classList.remove("fa-square-check");
        document.querySelector("[data-grupo__password2] .formulario__input-error").classList.add("formulario__input-error-activo");
        campos[password] = false;
    }else{
        document.querySelector("[data-grupo__password2]").classList.remove("formulario__grupo-incorrecto");
        document.querySelector("[data-grupo__password2]").classList.add("formulario__grupo-correcto");
        document.querySelector("[data-grupo__password2] .formulario__validacion-estado").classList.remove("fa-rectangle-xmark");
        document.querySelector("[data-grupo__password2] .formulario__validacion-estado").classList.add("fa-square-check");
        document.querySelector("[data-grupo__password2] .formulario__input-error").classList.remove("formulario__input-error-activo");
        campos[password] = true;
    }
}

// recorre los imputs y escuha acion de teclear y salir del input
inputs.forEach((input)=>{
    input.addEventListener("keyup", validacionFormulario);
    input.addEventListener("blur", validacionFormulario);
})

// Funcion para validar y enviar formulario
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const terminos = document.querySelector("[data-terminos]");
    //En caso de tener todos los campos completos y check activo de terminos 
    if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked){
        formulario.reset();
        document.querySelector("[data-formulario__mensaje-exito]").classList.add("formulario__mensaje-exito-activo");
        setTimeout(()=>{
            document.querySelector("[data-formulario__mensaje-exito]").classList.remove("formulario__mensaje-exito-activo");
        }, 4000);
        document.querySelectorAll(".formulario__grupo").forEach((icono)=>{
            icono.classList.remove("formulario__grupo-correcto");
        });
        document.querySelector("[data-formulario__mensaje]").classList.remove("formulario__mensaje-activo");
        // En caso de no tener todos los campos y el check
    }else{
        document.querySelector("[data-formulario__mensaje]").classList.add("formulario__mensaje-activo");

    }

})


