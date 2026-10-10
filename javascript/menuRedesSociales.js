
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
    window.open('https://www.instagram.com');
    
}
    
// const clickLogo = document.querySelector("[data-logo]");
const contenedorHeader = document.querySelector("[data-contenedor__cabecera]");
const menuRedesSociales = document.querySelector("[data-contenedor__menu]");
const menu = document.querySelector("[data-menu]");
const item = document.querySelectorAll("[data-item]");
const contenedor_logo = document.querySelector("[data-contenedor_logo]");
const contacto = document.querySelector("[data-contacto]");
const mediaQuery = window.matchMedia("(max-width: 480px)");

let clickActivo = false;

contenedor_logo.addEventListener("click",()=>{
    if(mediaQuery.matches){
            if(!clickActivo){
            contenedorHeader.classList.add("despliegueMenu");
            menuRedesSociales.classList.remove("contenedor_menu");
            menuRedesSociales.classList.add("contenedor_menu-activo");
            contacto.classList.remove("contacto");
            contacto.classList.add("contacto-activo");
            menu.classList.remove("menu");
            menu.classList.add("menu-activo");
            item.forEach(element => {
                element.classList.add("item-activo");
            });

            clickActivo = true;
            console.log("activado");

            }else{
            
                contenedorHeader.classList.remove("despliegueMenu");
            menuRedesSociales.classList.add("contenedor_menu");
            menuRedesSociales.classList.remove("contenedor_menu-activo");
            contacto.classList.add("contacto");
            contacto.classList.remove("contacto-activo");

            clickActivo = false;
            console.log("no-Activado");

            }
            
    }else{
        console.log("Estás en escritorio, el clic en el logo no despliega el menú móvil.");
    }
})


