let display= " "
var num1= null
var num2= null
var resultado= null

let lebalDisplay=  document.getElementById("display")// altera o valor do display para o nº da fun escolhida

function reset(){
    let display= " "
    var num1= null
    var num2= null
    var resultado= null
    changeDisplay(0)
}
function changeDisplay(valor){  //Função para alterar o valor mostrado no display da calculadora
                                // altera a propriedade text da referência para o valor no display
    lebalDisplay.innerHTML= valor
}
function clickn0(){
    display = display + "0" 
    changeDisplay(display)
}
function clickn1(){

    display = display + "1" 
    changeDisplay(display)
}
function clickn2(){

    display = display + "2" 
    changeDisplay(display)
}
function clickn3(){

    display = display + "3" 
    changeDisplay(display)
}
function clickn4(){

    display = display + "4" 
    changeDisplay(display)
}
function clickn5(){

    display = display + "5" 
    changeDisplay(display)
}
function clickn6(){

    display = display + "6" 
    changeDisplay(display)
}
function clickn7(){

    display = display + "7" 
    changeDisplay(display)
}
function clickn8(){

    display = display + "8" 
    changeDisplay(display)
}
function clickn9(){

    display = display + "9" 
    changeDisplay(display)
}
