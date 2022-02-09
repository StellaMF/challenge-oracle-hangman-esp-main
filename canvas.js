
    var pantalla=document.querySelector("#ahorcado");
    var pincel=pantalla.getContext("2d");
    
    function crearTableroDeJuego(){
    pincel.fillStyle="brown";
    pincel.lineWidth=10; 
    
    pincel.beginPath(); // base del ahorcado
    pincel.moveTo(100,720);
    pincel.lineTo(340,720);
    pincel.lineTo(220,690);
    pincel.closePath();
    pincel.fill();

    pincel.beginPath(); // líneas hasta la cabeza
    pincel.moveTo(220,690);
    pincel.lineTo(220,80);
    pincel.lineTo(600,80);
    pincel.lineTo(600,130)
    pincel.stroke(); 
    }   
    
    function dibujarHorca(errores){
    pincel.fillStyle="black";
    pincel.lineWidth=7;

    if (errores>=1) {
    pincel.beginPath(); // cabeza
    pincel.arc(600,180,50,0,Math.PI*2,true); 
    pincel.stroke();
    }

    if(errores>=2){
    pincel.beginPath(); // líneas del cuerpo
    pincel.moveTo(600,230); //cuello
    pincel.lineTo(600,400);   //cola
    pincel.stroke();
    }

    if (errores>=3){
    pincel.lineTo(500,520);   //pie derecho
    pincel.lineTo(600,400);     //cola
    pincel.stroke();
    }

    if (errores>=4){
    pincel.lineTo(700,520);     //pie izq
    pincel.lineTo(600,400);     //cola
    pincel.stroke();
    }

    if (errores>=5){
    pincel.moveTo(600,320);         //pecho
    pincel.lineTo(500,220);         //mano der
    pincel.stroke();
    }

    if (errores>=6){
    pincel.lineTo(600,320);             //pecho
    pincel.lineTo(700,220);             //mano izq
    pincel.stroke(); 
    }
    }

    function dibujarLetraPalabra(tecla,posicion){
        pincel.font="50pt comic";
        pincel.fillStyle = "black";
        pincel.fillText(tecla, (360+posicion*80), 700);
    }

    

function dibujarGanaste(){
    pincel.font="60pt comic";
    pincel.fillStyle="green";
    pincel.fillText("¡Ganaste!",730,200);
}

function dibujarPerdiste(){
    pincel.font="60pt comic";
    pincel.fillStyle="red";
    pincel.fillText("¡Perdiste!",730,200); 
}

function dibujarPalabraSecreta(palabra){
    palabraA=palabra.join("");
    console.log(palabra);
    pincel.font="25pt comic";
    pincel.fillStyle="blue";
    pincel.fillText("La palabra era: "+palabraA,750,300);  
}

function dibujarletasIncorrectas(letra, errores){
    pincel.font="40pt comic";
    pincel.fillStyle = "red";
    pincel.fillText(letra, (790+errores*50), 400);
}


 crearTableroDeJuego();
