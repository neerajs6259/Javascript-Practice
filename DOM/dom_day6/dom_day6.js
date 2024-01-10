const myInterval = setInterval(mytime, 1000);
function mytime(){
    document.getElementById("demo").innerHTML=Date()
}
function stop(){
    clearInterval(myInterval)
}