window.addEventListener('load',main);

function main() {
    var palabras = ["PLACA","GRAFICA","ORDENADOR","PROGRAMADOR","SISTEMA"];
    var letrasPalabra = [];
    var letrasIncom = [];
    var fallos = 0;
    var sw=0;

    document.getElementById('comenzar').addEventListener('click',empezarJuego);
    document.getElementById('letras').addEventListener('click',clickLetra);

    function empezarJuego() {
        fallos = 0;
        letrasIncom = [];
        letrasPalabra = [];
        document.getElementById('comenzar').style.display = "none";
        document.getElementById('titulo').style.display = "";
        document.getElementById('letras').style.display = "";
        document.getElementById('imagenAhorcado').src = "images/cuerpo0.png";

        var palabraElegida = palabras[Math.floor(Math.random() * 5)];

        for(var i=0; i<palabraElegida.length; i++){
            letrasPalabra.push(palabraElegida.charAt(i));
            letrasIncom[i] = " _ ";
        }

        document.getElementById('palabra').textContent = letrasIncom.join("");

    }

    function clickLetra(e) {
        sw=0;
        for(var j=0; j<letrasPalabra.length; j++){
            if (e.target.textContent == letrasPalabra[j]){
                letrasIncom[j] = e.target.textContent;
                sw=1;
                if(letrasIncom.indexOf(" _ ")==-1){
                    document.getElementById('imagenAhorcado').src = "images/enhorabuena.png";
                    document.getElementById('letras').style.display = "none";
                    document.getElementById('comenzar').style.display = "";
                }
            }
        }
        if(sw==0){
            fallos++;
            document.getElementById('imagenAhorcado').src = "images/cuerpo" + fallos + ".png";
            if(fallos == 6){
                document.getElementById('palabra').innerHTML = letrasPalabra.join("");
                document.getElementById('titulo').style.display = "none";
                document.getElementById('letras').style.display = "none";
                document.getElementById('comenzar').style.display = "";
            }
        }
        if(fallos!=6){
            document.getElementById('palabra').textContent = letrasIncom.join("");
        }
    }
}
