var x=1;
var hola="Hola";
document.getElementById("btncalcular").onclick=addEventListener('click',function(){
var xxxx=document.getElementById("txtNombre");
if(xxxx.value == ""){
xxxx.style.backgroundColor="red";
xxxx.style.color="white";
}else{
xxxx.style.backgroundColor="green";
xxxx.style.color="black";
document.getElementById("miTexto").innerHTML = "bienvenido " + xxxx.value;    
}

});

document.getElementById("txtNombre").addEventListener('keyup',function(){
var xxxx=document.getElementById("txtNombre");
document.getElementById("miTexto").innerHTML = "bienvenido " + xxxx.value;    


}); 

function miFuncion(){
var todo = "";
for(var y=0;y<x;y++){
 todo=todo+"<button>Hola soy el boton"+x+"</button>";
}

document.getElementById("miTexto").innerHTML=todo
x++;
}