function myfunction(){
    var x = document.getElementById("menu");
    x.style.transition = "0.75s"
    if(x.style.top == "-1000%"){
        x.style.top ="100%";
    }else{
        x.style.top = "-1000%"
    }
}
