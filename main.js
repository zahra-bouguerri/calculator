let result=document.getElementById("result");
let num=document.querySelector(".num");
let container=document.querySelector(".container");
function Clear(){
    result.value="";
}
function show(val){
    result.value+=val;
}
function calcul(){
    var a=result.value;
    var b=eval(a);
    result.value=b;
}
function Delete(){
let string=result.value.toString();
result.value=string.substr(0,string.length-1);
}
/*function dark(){
let dark="true";
    if(dark=="true"){
container.style.background="black";
dark="false";
}
else if(dark=="false"){
container.style.background="white";
dark="true";
}
}*/
function dark(){
    container.classList.toggle("dark-mode");
 }