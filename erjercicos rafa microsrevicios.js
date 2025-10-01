//1. Escribe un comentario en una linea

// comentario de una linea


//2. Escribe un comentario en varias lineas

/* comentario de
varias lineas
*/

//3. Declara variables con valores asociados a todos los tipos de datos y imprimelos en la consola

let numero = 2; 
let texto = "camila";
let booleano = true; 
let nulo = null; 
let indefinido; 
let array = [9, 2, 5]; 
console.log(numero);
console.log(texto);
console.log(booleano);
console.log(nulo);
console.log(indefinido);
console.log(array);

//4.Modifica los valores de las variables por otros valores y vuelve a imprimirlos en la consola.
numero = 5;
texto = "hola";
booleano = false;
nulo = "ahora no es nulo";
indefinido = "ahora tiene valor";
array = [4, 1, 3];
console.log(numero);
console.log(texto);
console.log(booleano);
console.log(nulo);
console.log(indefinido);
console.log(array);

//5. Declara constantes con valores asociados a todos los tipos de datos y imprimelos en la consola.

const NUMERO = 9;
const TEXTO = "constante";
const BOOLEANO = false;             
const NULO = null;
const INDEFINIDO = undefined; 
const ARRAY = [2, 5, 9];    
console.log(NUMERO);
console.log(TEXTO);
console.log(BOOLEANO);
console.log(NULO);
console.log(INDEFINIDO);
console.log(ARRAY);


//6. Crea una variable para cada operador aritmetico y muestra su resultado en la consola.

let suma = 5 + 5;       
let resta = 10 - 2;
let multiplicacion = 8 * 2;
let division = 20 / 4;
let modulo =33 % 3;    

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(modulo);


//7. Crea una variable para cada operador de asignacion y muestra su resultado en la consola.
let x = 5;      

x += 5;        
console.log(x);  

x -= 3;          
console.log(x);  

x *= 2;          
console.log(x); 

x /= 4;         
console.log(x);

x %= 4;        
console.log(x); 


//8. Crea una variable para cada operador de comparacion y muestra su resultado en la consola.


let compar1 = 5 == "5";       
let compar2 = 5 === "5";      
let compar3 = 10 != 5;        
let compar4 = 10 !== "10";    
let compar5 = 8 > 6;                
let compar6 = 3 < 1;          
let compar7 = 4 >= 4;        
let compar8 = 2 <= 1;       



console.log(compar1);
console.log(compar2);
console.log(compar3);
console.log(compar4);
console.log(compar5);
console.log(compar6);
console.log(compar7);
console.log(compar8);


//9. Crea una variable con un operador lógico y muestra su resultado en la consola.(AND y OR)

let log1 = (7 > 2) && (1 < 5);  
let log2 = (7 < 2) || (1 < 5);  

console.log(log1);  
console.log(log2);   


//10. Crea una variable con un operador ternario y muestra su resultado en la consola.
let edad = 18;
let resultado = (edad >= 18) ? "Es mayor de edad" : "No es mayor de edad";
console.log(resultado);

//11. Concatena dos cadenas de texto y muestra el resultado en la consola.

let cad1 = "hola";
let cad2 = "adios";
let concatenado = cad1 + " " + cad2;
console.log(concatenado);

//12. Transforma una cadena de texto en mayúsculas y muestra el resultado en la consola.

let minus = "camila";
let mayus = minus.toUpperCase();
console.log(mayus);

//13. Muestra la longitud de una cadena de texto en la consola.

let cad = "hola, me llamo camila";
console.log(cad.length); 


//14. Remplaza un el espacio de una cadena por un guión y muestra el resultado en la consola.

let text = "Hola mundo";
let reemmplazo = text.replace(" ", "-");
console.log(reemmplazo);  


//15. Comprueba si un String contiene una palabra en concreto y muestra el resultado en la consola.


let frase = "hola, que haces";
let contiene = frase.includes("hola");
console.log(contiene);

//17. Investiga algun metodo mas utilizado con String y muestra el resultado en la consola.

let ejemplo = "camila";
let caracter = ejemplo.charAt(0);
console.log(caracter);

//18. Imprime tu nombre si una varibale tiene su valor

let nombre = "camila";
if (nombre) {
    console.log(nombre);
} else {
    console.log("la variable no tiene valor");
}

//19. Imprime acceso permitido si un variable nombre y su contraseña son correctos


let nombree = "Camila";
let contrasenia = "1234";

if ((nombre === "Camila") && (contrasenia === "1234")) {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}


//20. Imprime en que estacion del año estamos a partir de una variable que indique el mes

let mes = "septiembre";  
mes = mes.toLowerCase(); 



if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
  console.log("Estamos en verano");
} else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
  console.log("Estamos en otoño");
} else if (mes === "junio" || mes === "julio" || mes === "agosto") {
  console.log("Estamos en invierno");
} else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
  console.log("Estamos en primavera");
} else {
  console.log("Mes inválido");
}



//21. Usa switch rehaciendo el ejercicio 20




switch (mes) {


    case "diciembre":
    case "enero": 
    case "febrero": 
    console.log("Estamos en verano");
    break;      
    
    
    
    case "marzo":   
    case "abril":
    case "mayo":
    console.log("Estamos en otoño");
    break;
    
    case "junio":
    case "julio":
    case "agosto":
    console.log("Estamos en invierno");
    break;
    
    case "septiembre":
    case "octubre":
    case "noviembre":
    console.log("Estamos en primavera");
    break;
    
    default:
    console.log("Mes inválido");
    break;
}


//22. Crea un listado que almacene cinco elementos.


let listado = ["perro", "agua", "naranja", "llaves", "ordenador"];
console.log(listado);



//23. A ese listado incluye uno al principio y uno al final.


listado.unshift("gato"); 
listado.push("coche"); 
console.log(listado);

//24. Elimina el último elemento del listado.

listado.pop();
console.log(listado);

//24. Crea un Set que guarde cinco elementos.
let conjunto = new Set();

conjunto.add("manzana");
conjunto.add("banana");
conjunto.add("pera");
conjunto.add("uva");
conjunto.add("mango");

console.log(conjunto);


//26.Crea un mapa que como clave tenga un numero y como valor el mes.
let mapa = new Map();
mapa.set(1, "enero");
console.log(mapa);


//27. Crea un bucle que imprima numero del 1 al 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//28. Crea un bucle que cuente las vocales de una cadena de texto

let cadena = "Hola, me llamo Camila";
let contadorVocales = 0;
let vocales = "aeiouAEIOU";     
for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
        contadorVocales++;
    }       
}
console.log("Cantidad de vocales: " + contadorVocales);

//29. Usa un bucle para invertir una cadena de texto


let original = "camila";
let invertido = "";
for (let i = original.length - 1; i >= 0; i--) {
    invertido += original[i];
}

//30. Crea un funcion que reciba dos numeros y los sume

function sumar(num1, num2) {
    return num1 + num2;
}
console.log(sumar(3, 5));

//31. Crea una funcion que reciba un Array de Strings y devuelve un nuevo array solo con las letras mayusculas del Array original
function extraerLetrasMayusculas(array) {
    let resultado = [];

    for (let i = 0; i < array.length; i++) {
        let palabra = array[i];

        for (let j = 0; j < palabra.length; j++) {
            let letra = palabra[j];
            if (letra === letra.toUpperCase()) {
                resultado.push(letra);
            }
        }
    }

    return resultado;
}

// Ejemplo:
let arrayStrings = ["HoLa", "Mundo", "JaVA", "scrIPt", "Camila"];
let letrasMayusculas = extraerLetrasMayusculas(arrayStrings);
console.log(letrasMayusculas); // ["H", "L", "M", "J", "V", "A", "I", "P", "C", "S", "S"]



//32. Crea una funcion que reciba un String y devuelva la candena al reves


function invertirCadena(cadena) {
    let invertida = "";        
    for (let i = cadena.length - 1; i >= 0; i--) {
        invertida += cadena[i];

    }
    return invertida;

}
console.log(invertirCadena("camila"));
