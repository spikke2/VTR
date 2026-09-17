            //  Forma de validar inputs larga modificando en  cada Input a verificar dentro de SWITCH/CASE
             
             if(expresiones.usuario.test(e.target.value)){
                 document.querySelector("[data-grupo__usuario]").classList.add("formulario__grupo-correcto");
                 document.querySelector("[data-grupo__usuario]").classList.remove("formulario__grupo-incorrecto");
                 document.querySelector("[data-grupo__usuario] .formulario__validacion-estado").classList.add("fa-square-check");
                 document.querySelector("[data-grupo__usuario] .formulario__validacion-estado").classList.remove("fa-rectangle-xmark");
                 document.querySelector("[data-grupo__usuario] .formulario__input-error").classList.remove("formulario__input-error-activo");
                
             }else{
                 document.querySelector("[data-grupo__usuario]").classList.add("formulario__grupo-incorrecto");
                 document.querySelector("[data-grupo__usuario]").classList.remove("formulario__grupo-correcto");
                 document.querySelector("[data-grupo__usuario] .formulario__validacion-estado").classList.add("fa-rectangle-xmark");
                 document.querySelector("[data-grupo__usuario] .formulario__validacion-estado").classList.remove("fa-square-check");
                 document.querySelector("[data-grupo__usuario] .formulario__input-error").classList.add("formulario__input-error-activo");
             }