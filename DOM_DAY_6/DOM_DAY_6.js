let myinterval = setInterval(mytime,1000)

function mytime(){

    let bag = document.getElementById("p1")
    bag.innerHTML=  Date()

}

function mystop(){
 clearInterval(myinterval)
}  

function mystart(){
    setInterval(mytime,1000)
}