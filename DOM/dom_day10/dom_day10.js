let firstnum=0
let secondnum=0

function number(){
    let num1=document.getElementById("number1").value
    firstnum=num1
    console.log(num1)
}
function number2(){
    let num2=document.getElementById("number2").value
    secondnum=num2
    console.log(num2)
}
function add(){
    
let result=Number(firstnum)+Number(secondnum)
console.log(result)
}
