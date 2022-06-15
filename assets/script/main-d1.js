const boton = document.querySelector('#border-button');

const imagenPrincipal = document.querySelector('#sticker')

imagenPrincipal.addEventListener ("click", function(){
    if (imagenPrincipal.style.border != "" ) {
        imagenPrincipal.style.border = "";
    } else {
        imagenPrincipal.style.border = "solid 2px red";
    }    
    
})

boton.addEventListener ("click", function(){
    if (imagenPrincipal.style.border != "" ) {
        imagenPrincipal.style.border = "";
    } else {
        imagenPrincipal.style.border = "solid 2px red";
    }    
    
})

