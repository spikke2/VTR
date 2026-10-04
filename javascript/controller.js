
import { clienteServicios } from "../javascript/Servicios.js";

const CrearNuevaLinea = (usuario, empresa, email, phone, descripcion) => {
    const linea = document.createElement("tr");
    const contenido = `
        <td class="column">${usuario}</td>
        <td class="column">${empresa}</td>
        <td class="column">${email}</td>
        <td class="column">${phone}</td>
        <td class="column">${descripcion}</td>
        <td class="column">${"Pendiente"}</td>
    `;
    linea.innerHTML = contenido;
    return linea;
};
const tabla = document.querySelector("[data-table]");

//      <---- obteber datos cliente ---->
clienteServicios.listaClientes().then((data)=>{
    data.forEach((datos) => {
        const nuevaLinea = CrearNuevaLinea(datos.usuario, datos.empresa, datos.email, datos.phone, datos.descripcion);
        tabla.appendChild(nuevaLinea);
    });
})
.catch((Error) => alert("Ocurrio Un Error"))