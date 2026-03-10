function reunirEsferas(){

document.getElementById("dragonSound").play();

document.querySelector(".container").style.display="none";

setTimeout(()=>{ 
document.getElementById("shenlongContainer").style.display="block";
},2000);

}

function mostrarInvitacion(){

document.getElementById("shenlongContainer").style.display="none";

document.getElementById("invitacion").style.display="block";

}

function aceptar(){

alert("¡Excelente guerrero! Nos vemos en la boda ⚡");

}

function rechazar(){

alert("Shenlong dice: lo reconsiderarás 😆");

}

