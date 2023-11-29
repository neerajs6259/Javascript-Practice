let x = 10
let get = document.getElementById("a").innerHTML
console.log(get);
if(x>get){
    document.getElementById("b").style.backgroundColor="green"
}
else if(x<get){
    document.getElementById("b").style.backgroundColor="red"
}
else{
    document.getElementById("b").style.backgroundColor="yellow"
}