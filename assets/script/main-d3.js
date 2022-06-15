var ingresarButton = document.querySelector('#ingresar-button');
const passwordOne = 911;
const passwordTwo = 714;

ingresarButton.addEventListener("click",function(){
    let firstNumber = document.querySelector('#select-1').value;
    let secondNumber = document.querySelector('#select-2').value;
    let thirdNumber = document.querySelector('#select-3').value;
    let fourthNumber = document.querySelector('#select-4').value;
    let fifthNumber = document.querySelector('#select-5').value;
    let sixthNumber = document.querySelector('#select-6').value;
    let resultadoUno = document.querySelector('#resultado-1');
    let resultadoDos = document.querySelector('#resultado-2')
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(thirdNumber);
    console.log(fourthNumber);
    console.log(fifthNumber);
    console.log(sixthNumber);
    var firstPassword = firstNumber + secondNumber + thirdNumber;
    var secondPassword = fourthNumber + fifthNumber + sixthNumber;
    console.log(firstPassword);
    console.log(secondPassword);
    if (firstPassword == passwordOne) {
        resultadoUno.innerText = "Password N°1 ingresado correctamente"
    } else {
        resultadoUno.innerText = "Password N°1 ingresado incorrectamente, intente nuevamente."
    }
    if (secondPassword == passwordTwo) {
        resultadoDos.innerText = "Password N°2 ingresado correctamente"
    } else {
        resultadoDos.innerText = "Password N°2 ingresado incorrectamente, intente nuevamente."
    }
    



})