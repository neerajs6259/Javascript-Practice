let firstnum = undefined
let secondnum = undefined
let deo = document.getElementById("demo").innerHTML

function number1() {
    let num1 = document.getElementById("num1").value
    firstnum = num1
    console.log(num1)
}
function number2() {
    let num2 = document.getElementById("num2").value
    secondnum = num2
    console.log(num2)
}
function add() {
    let result = Number(firstnum) + Number(secondnum)
    document.getElementById("res").innerHTML = result
}
function sub() {

    let result = Number(firstnum) - Number(secondnum)
    document.getElementById("res").innerHTML = result
}
function mul() {

    let result = Number(firstnum) * Number(secondnum)
    document.getElementById("res").innerHTML = result
}
function div() {

    let result = Number(firstnum) / Number(secondnum)
    document.getElementById("res").innerHTML = result
}
function mod() {

    let result = Number(firstnum) % Number(secondnum)
    document.getElementById("res").innerHTML = result
}


