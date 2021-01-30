let runningTotal=0
let buffer="0"
let previousOperator=null
let finalAns=0

const calcButtons=document.querySelector(".buttons-section")
const screenDisp=document.querySelector(".screen")

function buttonsClick(value){
  if (isNaN(value)){
    handleSymbols(value)
  } else {
    handleNumbers(value)
  }
  screenDisp.innerText=buffer
  if (value==="="){
    buffer="0"
    screenDisp.innerText=finalAns
  }
}

function handleSymbols(symbolValue){
  switch(symbolValue){
    case "C":
      buffer="0"
      runningTotal=0
      previousOperator=null
      break
    case "←":
      if (buffer.length === 1){
        buffer="0"
      }else {
        buffer = buffer.substring(0,buffer.length-1)
      }
      break
    case "=":
      if (previousOperator===null){
        return;
      }
      flushOperations(parseInt(buffer))
      previousOperator=null
      buffer=runningTotal
      finalAns=runningTotal
      runningTotal=0
      break
    case "+":
    case "−":
    case "×":
    case "÷":
      performMath(symbolValue)
      break
  }
}

function performMath(symbolValue){
  if (buffer==="0"){
    return;
  }
  firstNum = parseInt(buffer)

  if (runningTotal===0){
    runningTotal=firstNum
  }else {
    flushOperations(firstNum)
  }
  previousOperator=symbolValue
  buffer="0"
}

function flushOperations(firstNum){
  if (previousOperator === "+"){
    runningTotal += firstNum
  } else if (previousOperator === "−"){
    runningTotal -= firstNum
  } else if (previousOperator === "×"){
    runningTotal *= firstNum
  } else if (previousOperator === "÷"){
    runningTotal /= firstNum
  }
}

function handleNumbers(numValue){
  if (buffer==="0"){
    buffer = numValue
  }else {
    buffer += numValue
  }
}

function init(){
  calcButtons.addEventListener('click', function (event){
    buttonsClick(event.target.innerText)
  })
}
init()