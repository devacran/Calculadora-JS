/*
function getHistorial()
{
return document.getElementById("history-value").innerText
}
function printHistory (numb)
{
  document.getElementById("history-value").innerText = numb
}
function printOutput (numb)
{
  document.getElementById("output-value").innerText = getFormattedNumber(numb);
}
function getOutput()
{
  return document.getElementById("history-value").innerText
}
function getFormattedNumber()
{
  var n = Number(numb)
  var value = n.toLocaleString("en");
  return value;
}
console.log(getFormattedNumber(456849495))
function printNumber()
{

}
*/
var historial = [];
var pancho = ""
var suma = false
var resta = false
class Elemento
{
  constructor (numerito)
  {
  this.numero = numerito
  this.boton = document.getElementById(numerito)
  this.escribir = this.escribir.bind(this)


  }
  escribir()
  {
    switch (true)
    {
      case suma:
      historial.push(this.numero)
      document.getElementById("history-value").innerText = agrupar()
      break;
      default:
      historial.push(this.numero)
      document.getElementById("history-value").innerText = agrupar()
    }
    function agrupar()
    {
      pancho = historial.join('')
      return pancho
    }
  }
  borrar()
  {

   historial.length = 0;
   pancho = ""
   document.getElementById("history-value").innerText = ""
   document.getElementById("output-value").innerText = "0"
  }

  operar()
  {

    for (var digito of historial)
    {
      switch (digito)
      {
        case "+":
        suma = true
        continue;
        case "-":
        resta = true
        continue;
      }


    }
  }

}


numeroUno = new Elemento("1")
numeroUno.boton.addEventListener("click", numeroUno.escribir)
numeroDos = new Elemento("2")
numeroDos.boton.addEventListener("click", numeroDos.escribir)
numeroTres = new Elemento("3")
numeroTres.boton.addEventListener("click", numeroTres.escribir)
numeroCuatro = new Elemento("4")
numeroCuatro.boton.addEventListener("click", numeroCuatro.escribir)
numeroCinco = new Elemento("5")
numeroCinco.boton.addEventListener("click", numeroCinco.escribir)
numeroSeis = new Elemento("6")
numeroSeis.boton.addEventListener("click", numeroSeis.escribir)
numeroSiete = new Elemento("7")
numeroSiete.boton.addEventListener("click", numeroSiete.escribir)
numeroOcho = new Elemento("8")
numeroOcho.boton.addEventListener("click", numeroOcho.escribir)
numeroNueve = new Elemento("9")
numeroNueve.boton.addEventListener("click", numeroNueve.escribir)
operadorSumar = new Elemento("+")
operadorSumar.boton.addEventListener("click", operadorSumar.escribir)
operadorSumar.boton.addEventListener("click", operadorSumar.operar)


//-------------------------
borrar = new Elemento("clear")
borrar.boton.addEventListener("click", borrar.borrar)
