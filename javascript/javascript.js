
// Titulo Encabezado

// const funTitulo = ()=>{
//     const contenedorTitulo = document.querySelector("[data-titulo]");
//     const titulo = document.createElement("h1");
//     contenedorTitulo.appendChild(titulo);
//     // const texto = "Hola mundo";
//     titulo.innerText = "ViV / VTR";
//     titulo.className="titulo_p";

// }


// funTitulo();


// Opciones Encabezado

const funLista = ()=>{
    const contenedorLista = document.querySelector("[data-datos]");
    const lista = document.createElement("ul");
    lista.className="menuHeader";
    contenedorLista.appendChild(lista);
    const item_a = document.createElement("li");
    const item_b = document.createElement("li");
    const item_c = document.createElement("li");
    lista.appendChild(item_a);
    lista.appendChild(item_b);
    lista.appendChild(item_c);
    item_a.innerText="Whatsapp";
    item_b.innerText="3145692090";
    item_c.innerText="esspikke@gmail.com";
    
}


funLista();


// Funcionamiento botones

const whatsapp = ()=>{
    window.open('https://www.whatsapp.com', '_blank');

}

const youtube = ()=>{
    window.open('https://www.youtube.com', '_blank');

}

const Facebook = ()=>{
    window.open('https://www.facebook.com/1326959520498177', '_blank');
    
}

const instagram = ()=>{
    window.open('https://www.instagram.com', '_blank');
    
}


//Funcion redireccionar
const vtr = ()=>{
    window.open("./html/index.html");
    
}

// window.open('https://www.sitioWeb.com', '_blank'); 
// permite abrir la WEB en nueva ventana 


