function change(){
    let x= document.getElementById("fname");
    if (typeof x.innerHTML=="number"){
        document.getElementById("ab").innerHTML="Valid input"
    }else{
        document.getElementById("ab").innerHTML="Invalid input"
    }
}
//  return typeof value=="number"