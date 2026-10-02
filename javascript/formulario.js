
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
    usuario: /^[a-zA-ZÀ-ÿ.\s]{3,42}$/,
    empresa: /^[a-zA-Z0-9.,_-\s]{3,80}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,10}$/,
    descripcion: /^[a-zA-Z0-9,._-\s]+$/,
}

const campos={
    usuario:false,
    empresa:false,
    email:false,
    phone:false,
    descripcion:false
}

const validarFormulario = (e)=>{
    switch(e.target.name){
        case "usuario":
            validarCampo(expresiones.usuario, e.target, "usuario");
        break;
        case "empresa":
            validarCampo(expresiones.empresa, e.target, "empresa");
        break;
        case "phone":
            validarCampo(expresiones.phone, e.target, "phone");
        break;
        case "email":
            validarCampo(expresiones.email, e.target, "email");
        break;
        case "descripcion":
            validarCampo(expresiones.descripcion, e.target, "descripcion");
        break
    }
}

const validarCampo = (expresion, input, campo)=>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        document.querySelector(`#grupo__${campo} .formulario__validacion-estado`).classList.remove("fa-circle-exclamation");
        document.querySelector(`#grupo__${campo} .formulario__validacion-estado`).classList.add("fa-circle-check");
        campos[campo]=true;

    }else{
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
        document.querySelector(`#grupo__${campo} .formulario__validacion-estado`).classList.add("fa-circle-exclamation");
        document.querySelector(`#grupo__${campo} .formulario__validacion-estado`).classList.remove("fa-circle-check");
        campos[campo]=false;
    }
}

inputs.forEach((input)=>{
    input.addEventListener("keyup",validarFormulario);
    input.addEventListener("blur",validarFormulario);
})

import { clienteServicios } from "../javascript/Servicios.js";

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const terminos = document.getElementById("terminos");
    if(campos.usuario && campos.empresa && campos.email && campos.phone && campos.descripcion && terminos.checked){
        const usuarios = document.querySelector("[data-valorUsuario]").value;
        const empresas = document.querySelector("[data-valorEmpresa]").value;
        const emails = document.querySelector("[data-valorEmail]").value;
        const phones = document.querySelector("[data-valorPhone]").value;
        const descripciones = document.querySelector("[data-valorDescripcion]").value;
        
        clienteServicios.crearCliente (usuarios, empresas, emails, phones, descripciones)
        .then(respuesta => {
            
        })
        .catch(error => console.error("Error al crear cliente:", error));
        
        formulario.reset();

        document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
        setTimeout(()=>{
            document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
        },7000);
        document.querySelectorAll(".formulario__grupo-correcto").forEach((icono)=>{
            icono.classList.remove("formulario__grupo-correcto");
        })
        document.querySelector(".formulario__mensaje").classList.remove("formulario__mensaje-activo");
    }else{
        document.querySelector(".formulario__mensaje").classList.add("formulario__mensaje-activo");
        setTimeout(()=>{
            document.querySelector(".formulario__mensaje").classList.remove("formulario__mensaje-activo");
        },4000)
    }

})



// >---validacion campo---<

// const validarFormulario = (e)=>{
    // switch(e.target.name){
//     if(expresiones.usuario.test(e.target.value)){
//         document.getElementById("grupo__usuario").classList.remove("formulario__grupo-incorrecto");
//         document.getElementById("grupo__usuario").classList.add("formulario__grupo-correcto");
//         document.querySelector("#grupo__usuario .formulario__input-error").classList.remove("formulario__input-error-activo");
//         document.querySelector("#grupo__usuario .formulario__validacion-estado").classList.remove("fa-circle-exclamation");
//         document.querySelector("#grupo__usuario .formulario__validacion-estado").classList.add("fa-circle-check");
        
//     }else{
//         document.getElementById("grupo__usuario").classList.add("formulario__grupo-incorrecto");
//         document.getElementById("grupo__usuario").classList.remove("formulario__grupo-correcto");
//         document.querySelector("#grupo__usuario .formulario__input-error").classList.add("formulario__input-error-activo");
//         document.querySelector("#grupo__usuario .formulario__validacion-estado").classList.add("fa-circle-exclamation");
//         document.querySelector("#grupo__usuario .formulario__validacion-estado").classList.remove("fa-circle-check");
//         }
// }

