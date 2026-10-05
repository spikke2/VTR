

//      --->fetch   API<---
const listaClientes = () =>
    fetch("https://github.com/spikke2/VTR/tree/Avance/json/datos").then((respuesta) => respuesta.json());

//      ----<obtener valor de datos db.jason>----
const crearCliente = ( usuario, empresa, email, phone, descripcion) => {
    return fetch("https://github.com/spikke2/VTR/tree/Avance/json/datos", {
        method: "POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify({usuario, empresa, email, phone, descripcion, id: uuid.v4()}),
    });
};

    export const clienteServicios = {
        listaClientes,
        crearCliente,
    };

// {
//     "datos": [
//         {
//         "usuario": "viktor",
//         "empresa": "ViVTR",
//         "email": "ejemplo@ejemplo.com",
//         "phone": "3121231235",
//         "descripcion": "instalacion de tres lamparas",
//         "id": "1"
//         }
//     ]
// }
