let foot=document.getElementById("div")
let element=document.getElementById("number").innerHTML
let x=10
if(x<element){
    document.getElementById("div").style.Color="blue"
} else if(x>element){
    document.getElementById("div").style.Color="red"
}else{
    document.getElementById("div").style.Color="green"
}