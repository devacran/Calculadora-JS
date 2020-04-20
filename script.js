let input = [] //String with digits
let numInput = [] //String with numbers
let operador
let result = 0
const $HISTORY = document.getElementById("history-value")
const $OUTPUT = document.getElementById("output-value")

let HISTORY = []
class boton {
  constructor (id){
    this.button = document.getElementById(id)
    this.button.addEventListener("click", this.click.bind(this))
  }

  click(){
    let buttonClass = event.toElement.className
    let buttonPressed = this.button.id
    this.write(buttonPressed)
    console.log(buttonPressed)
    if(buttonClass === "number"){
      if(numInput.length === 1){
        numInput.push(parseInt(buttonPressed))
        operar(operador)
      }
      if(numInput.length > 1){
        numInput.pop()
        numInput.push(digitToNumber())
        operar(operador)
      }
    }else{ //Si se presiona un operador
      switch(buttonPressed){
          case "%":
              const num = percentaje(numInput)
              console.log(num)
              console.log(numInput)
              console.log(result)
              break;
          case "clear":
              clear()
              break;
          case "backspace":
              backspace()
              break;
          default:
            if(numInput.length > 1){
                numInput = []
                numInput.push(result)
              }
              this.number = digitToNumber()
              input = []
              numInput.push(this.number)
              operador = buttonPressed
            }
      }
      console.log(result)
      this.print(buttonPressed)
  }

  write(id){
    input.push(id)
  }
  print(id){
      if(result){
        $OUTPUT.innerHTML = result
      }else if(id === "clear"){
        $OUTPUT.innerHTML = 0
      }
      else
      {
          console.log(id)
          HISTORY.push(id)
          $OUTPUT.innerHTML = HISTORY.join("")
      }
    }
}
function clear(){
    input = []
    numInput = []
    operador = ""
    HISTORY = []
    result = 0
    $OUTPUT.innerHTML = "0"
}
function backspace(){
    input.pop()
    input.pop()
    console.log(input)
}
function digitToNumber(){
  let digitInput = input.filter(arrayValue => {
    if(!isNaN(arrayValue) || arrayValue === "."){
      return true
    }else{
      return false
    }
  })

     //Tomar solo los numeros
  digitInput = digitInput.join("")
  digitInput = parseFloat(digitInput)
  return digitInput
}
function operar(operador){

  switch(operador){
    case("+"):
    result = numInput[0] + numInput[1]
    console.log(result)
    break;

    case("*"):
    result = numInput[0] * numInput[1]
    console.log(result)
    break;

    case("/"):
    result = numInput[0] / numInput[1]
    console.log(result)
    break;

    case("/"):
    result = numInput[0] / numInput[1]
    console.log(result)
    break;

    case("-"):
    result = numInput[0] - numInput[1]
    console.log(result)
  }
}
function percentaje(numInput){
  function percentajePlus(){
        const num1 = numInput[0]
        const num2 = numInput[1] * numInput[0]/100
        numInput.pop()
        numInput.push(num2)
        result = num1 + num2
        return result
  }
  function percentajemMinus(){
    const num1 = numInput[0]
    const num2 = numInput[1] * numInput[0]/100
    numInput.pop()
    numInput.push(num2)
    result = num1 - num2
    return result
}
  function percentajemMultiply(){
    const num1 = numInput[0]
    const num2 = numInput[2]/100
    numInput.pop()
    numInput.push(num2)
    result = num1 * num2
    return result
}
function percentajemDivide(){
  const num1 = numInput[0]
  const num2 = numInput[2]/100
  numInput.pop()
  numInput.push(num2)
  result = num1 / num2
  return result
}
 switch(operador){
     case "+": return percentajePlus()
     case "-": return percentajemMinus()
     case "*": return percentajemMultiply()
     case "/": return percentajemDivide()
 }
}

btn1 = new boton("1")
btn2 = new boton("2")
btn3 = new boton("3")
btn4 = new boton("4")
btn5 = new boton("5")
btn6 = new boton("6")
btn7 = new boton("7")
btn8 = new boton("8")
btn9 = new boton("9")
btn0 = new boton("0")
btnMinus = new boton ("-")
btnPlus = new boton ("+")
btnMultiply = new boton("*")
btnDivide = new boton("/")
btnPoint = new boton(".")
btnClear = new boton("clear")
btnPercentage = new boton("%")
btnBackspace = new boton("backspace")
btnEqual = new boton("=")
