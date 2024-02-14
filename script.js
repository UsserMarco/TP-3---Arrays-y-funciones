
// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
//     Mostrar por pantalla en forma de lista los doce nombres del arreglo.

function primerEjercicio(){
    const meses =["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

        document.write (`<h1>Lista de Meses</h1>`)
    for ( let i=0; i < meses.length; i++){
        document.write(`<ul><li> ${meses[i]} </li></ul>`) 
    }
}

// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
// cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// *Mostrar la longitud del arreglo.
// *Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// *Añade en última posición la ciudad de París.
// *Escribe por pantalla el elemento que ocupa la segunda posición.
// *Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

function segunEjercicio(){
    let ciudades = [];
    while (true){
        let ciudad = prompt ('Ingrese una ciudad:');
        if (ciudad === null){
            break;
        }
        ciudades.push(ciudad);
    }  
    console.log("Ciudades en el arreglo:", ciudades);
    console.log("longitud del arreglo:", ciudades.length);
    

    document.write("<h2>ciudades en las posiciones primera, tercera y última:</h2>");
    document.write("<ul><li>Elemento 1er posicion: " + ciudades[0] + "</li>");
    document.write("<li>Elemento 3er posición: " + ciudades[2] + "</li>");
    document.write("<li>Elemento ultima posicion: " + ciudades[ciudades.length - 1] + "</li></ul>");

    ciudades.push("París");
    document.write("<h2>Agregar Paris al arreglo</h2>")
    document.write("<ul><li>Ultima posicion actualizada: " + ciudades[ciudades.length - 1] + "</li></ul>");
    
    console.log("Ciudad en la segunda posicion es:", ciudades[1])

    ciudades.splice(1,1, 'Barcelona');

    document.write("<h2>Lista de arreglo</h2><ul>")
        for (let i=0; i<ciudades.length; i++){
            document.write("<li>Elemento " + ciudades[i] + "</li>")
        }
}

// 3- Escribir un script que simule el lanzamiento de dos dados. 
// Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
// Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma
//  repitiendo 50 veces esta operación.

function tercerEjercicio(){
    let sumas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    function lanzarDados() {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        return dado1 + dado2;
    }

    for (let i = 0; i < 50; i++) {
        let suma = lanzarDados();
        sumas[suma - 2]++; 
    }

    let tabla = "<h2>Número de apariciones de cada suma:</h2>  <table border='1'>   <tr><th>Suma</th>   <th>Apariciones</th>    </tr>";
        for (let i = 0; i < sumas.length; i++) {
            tabla += "<tr><td>" + (i + 2) + "</td><td>" + sumas[i] + "</td></tr>";
        }
        tabla += "</table>";

    document.write(tabla);
}

// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una 
// cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function cuartoEjercicio(){
    function parImpar(numero) {
        if (numero % 2 === 0) {
            return "El número " + numero + " es par.";
        } else {
            return "El número " + numero + " es impar.";
        }
    }

    let numero = prompt("Ingrese un numero entero.");
    let resultado = parImpar(numero);
    console.log(resultado);
}

// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
//  A partir de la cadena que se le pasa, la función determina si esa cadena está formada 
//  sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function quintoEjercicio(){
    function infoTexto(cadena) {
        if (cadena === cadena.toUpperCase()) {
            console.log("La cadena está formada solo por mayúsculas.");
        } else if (cadena === cadena.toLowerCase()) {
            console.log("La cadena está formada solo por minúsculas.");
        } else {
            console.log("La cadena está formada por una mezcla de mayúsculas y minúsculas.");
        }
    }

    let cadena = prompt("Escribe una oración.");
    let resultado = infoTexto(cadena);
    console.log(resultado);
}

// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.

function sextoEjercicio(){
    function formulaPerimetro(a, b){
    return 2 * (a+b) ;
    }

    let ladoA = parseFloat(prompt ("Ingrese el valor del lado A."));
    let ladoB = parseFloat(prompt ("Ingrese el valor del lado B"));

    let perimetro = formulaPerimetro(ladoA, ladoB);

    alert (perimetro);
}

// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
//  la creación de la tabla debe ser realizada con una función y mostrar solo los resultados 
//  del 1 al 10 del número elegido por el usuario.

function septimoEjercicio(){
    function tablaDeMultiplicar(numero){
        for(let i = 1 ; i <= 10 ; i++){
            let resultado = numero * i;
            console.log( numero + " x " + i + " = " + resultado);
        }
    }
    let numeroUsuario = parseInt(prompt("Ingrese un numero:"));
    tablaDeMultiplicar(numeroUsuario); 
}
