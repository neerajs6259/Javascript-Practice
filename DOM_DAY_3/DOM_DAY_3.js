let x = document.getElementById("sumit")
let arr=[]
for(let i =0;i<x.length;i++){
    arr.push(x.elements[i].value)
}
document.getElementById("a").innerHTML = "My name is "+ arr[0]
document.getElementById("b").innerHTML = "My age is "+ arr[1]
document.getElementById("c").innerHTML = "My school is "+ arr[2]
document.getElementById("d").innerHTML = "My class is "+ arr[3]