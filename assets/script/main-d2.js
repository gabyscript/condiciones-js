var stickerButton = document.querySelector('#verify');

const cantidadSticker = 10;


stickerButton.addEventListener("click",function(){

    let i1 = document.querySelector('#input-1').value;
    let i2 = document.querySelector('#input-2').value;
    let i3 = document.querySelector('#input-3').value;
    var resultado = document.querySelector('#resultado');
    let totalStickers = Number(i1) + Number(i2) + Number(i3);
    if (cantidadSticker == totalStickers) {
        resultado.innerText = "Has elegido tus diez stickers disponibles.";
    }else if (cantidadSticker > totalStickers) {
        resultado.innerText = "Aún puedes escoger stickers, ¿Quieres continuar?";
    }else if (cantidadSticker < totalStickers) {
        resultado.innerText = "Has excedido la cantidad de stickers permitida."
    } else {
        console.log("Datos incorrectos")
    }
})



