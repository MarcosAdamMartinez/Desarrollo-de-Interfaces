/*// Ejercicio 1:
    // Declaro las variables:
    var nombre = "Eduardo";
    var edad = 37;
    var altura = 1.80;
    var esAlumno = false;

    // Muestro las variables:
    console.log("Nombre:",nombre,"\nEdad:",edad,"\nAltura:",altura,"\nEs un alumno?:",esAlumno);

// Ejercicio 2:
    // Declaramos PI como constante:
    const PI = 3.1416;

    // Intentamos cambiar el valor de PI:
    PI = 3.142;


// Ejercicio 3:
    // Declaramos el objeto alumno:
    var alumno = {nombre: "Marcos", edad: 19, curso: "DAM2"};

    // Mostramos el objeto entero:
    console.log("Alumno:",alumno);

    // Ahora mostramos solo el campo nombre:
    console.log("Nombre del alumno:",alumno.nombre);

// Ejercicio 4:
    // Creamos un array notas con 3 numeros: 
    var notas = [9,8,7];
    
    // Mostramos la primera nota y la ultima:
    console.log("Primera nota:",notas[0],"\nUltima nota:",notas[notas.length - 1]);

    // Añadimos una ultima nota y mostramos el array:
    notas.push(10);
    console.log("Array con la nota añadida:",notas);

// Ejercicio 5:
    // Creamos un IF (true), en el que comprobamos el comportamiento de variables declaradas con let y var:
    if (true) {
        var nombrePokemon = "Dracozolt";
        let nivel = 12;
        const generacion = 9;
    }
    // La variable nombrePokemon si que existe y tiene valor mientras que la variables generacion y nivel no y lanzan una excepcion del tipo: ReferenceError
    console.log("Variable declarada con var: ",nombrePokemon);
    console.log("Variable declarada con const:",generacion);
    console.log("Variable declarada con let:",nivel);

// Ejercicio 6:
    // Usamos el codigo que nos es proporcionado:
    "use strict";
    let x = 10;
    console.log(x);

    // "use strict" no permite utilizar variables que no esten declaradas por lo que si no declaramos x no funciona

// Ejercicio 7:
    // Declaramos a = 10 y b = 3:
    var a = 10;
    var b = 3;

    // Mostramos en consola: a + b, a - b, a * b, a / b, a % b
    console.log("Suma:",a+b);
    console.log("Resta:",a-b);
    console.log("Multiplicacion:",a*b);
    console.log("Division:",a/b);
    console.log("Modulo:",a%b);

// Ejercicio 8:
    // Declaramos base y altura:
    var base = parseInt(prompt("Introduce un valor para la base (ha de ser un entero mayor de 0)"));
    var altura = parseInt(prompt("Introduce un valor para la altura (ha de ser un entero mayor de 0)"));

    // Comprobamos si uno de los 2 valores es alfanumerico haciendo uso de Number.isNaN():
    if (Number.isNaN(base) || Number.isNaN(altura)) {
        console.log("Uno de los valores es alfanumerico");
    } else {
        // Filtramos para comprobar si es un numero mayor que 0:
        if (base <= 0 || altura <= 0){
            console.log("Uno de los numeros es menor o igual que 0");
        } else{
            console.log("Area del triangulo:",base*altura/2);
        }
    }

// Ejercicio 9:
    // Declaramos una variable numero:
    var numero = 12;

    // Calculamos su cuadrado, su cubo y su raiz cubica:
    console.log("Cuadrado de",numero+":",numero**2);
    console.log("Cubo de",numero+":",numero**3);
    console.log("Raiz cubica de",numero+":",numero**(1/3));

// Ejercicio 10:
    // Declaramos la variable n:
    var n = 5;

    // Intentamos mostrar distintos resultados:
    console.log(++n);
    console.log(n++);
    console.log(n);

    // Vemos que, el primero suma 1 a n y lo muestra, el segundo muestra n y le suma uno despues y el ultimo muestra el resultado final

// Ejercicio 11:
    // Declaramos la variable x:
    var x = 20;

    // Usamos las siguientes operaciones y mostramos x despues de cada una:
    x -= 5;
    console.log(x)
    x *= 2;
    console.log(x)
    x /= 5;
    console.log(x)

    // La primera resta 5 a x, la segunda multiplica x por 2 y la ultima divide x por 5

// Ejercicio 12:
    // Probamos las lineas proporcionadas:
    console.log("10" - 3);
    console.log("10" + 3);

    // En la primera el operador - funciona correctamente ya que toma el 10 como numero, en la segunda, toma el operador + como
    // un concatenador y añade el 3 a la cadena de texto

// Ejercicio 13:
    // Escribimos las siguientes comparaciones:
    console.log("La comparacion: 5 == \"5\", es: "+(5 == "5") ); // Devuelve true porque compara el valor
    console.log("La comparacion: 5 === \"5\", es: "+(5 === "5") ); // Devuelve false porque compara valor y tipo de variable
    console.log("La comparacion: 0 == false, es: "+(0 == false) ); // Devuelve  true porque compara el valor y 0 como valor tambien puede significar false
    console.log("La comparacion: 0 === false, es: "+(0 === false) ); // Devuelve false porque compara el valor y el tipo de variable
    console.log("La comparacion: 1 != \"1\", es: "+(1 != "1") ); // Devuelve false porque 1 en valor si que es igual a "1"
    console.log("La comparacion: 1 != true, es: "+(1 != true) );  // Devuelve false porque 1 en valor si que es igual a true

// Ejercicio 14:
    // Declaramos edad1 y edad2:
    var edad1 = 12;
    var edad2 = 12;
    // Comprobamos si edad1 es mayor, menor o igual:
    if (edad1 > edad2) {
        console.log("edad1 es mayor que edad2");
    } else if (edad1 < edad2) {
        console.log("edad1 es menor que edad2");
    } else {
        console.log("edad1 es igual que edad2");
    }

// Ejercicio 15:
    // Comprobamos comparaciones de strings:
    console.log('"casa" > "coche":', "casa" > "coche");
    console.log('"Perro" < "gato":', "Perro" < "gato");
    console.log('"A" < "a":', "A" < "a");

// Ejercicio 16:
    // Declaramos la variable nota:
    var nota = 6;

    // Si nota >= 5 "Aprobado", sino "Suspenso":
    if (nota >= 5) {
        console.log("Aprobado");
    } else {
        console.log("Suspenso");
    }

// Ejercicio 17:
    // Declaramos edad y tieneCarnet:
    var edad = 22;
    var tieneCarnet = false;

    // Puede conducir si tiene 18 o más y además tiene carnet:
    console.log("¿Puede conducir?:", edad >= 18 && tieneCarnet);

// Ejercicio 18:
    // Declaramos esFinDeSemana y tieneDeberes:
    var esFinDeSemana = true;
    var tieneDeberes = true;

    // Puede salir solo si es fin de semana y NO tiene deberes:
    console.log("¿Puede salir con amigos?:", esFinDeSemana && !tieneDeberes);

// Ejercicio 19:
    // Declaramos n:
    var n = 15;
    // Hacemos la comparacion:
    console.log("¿n está entre 10 y 20?:", n >= 10 && n <= 20);
    
// Ejercicio 20:
    // Linea con error
    // console.log(true &&); // ERROR
    console.log(true && false);

// Ejercicio 21:
    // Declaramos todas las variables:
    var num = 10;
    var cadena = "Hola";
    var bool = true;
    var obj = {};
    var arr = [];
    var vacio = null;
    var indefinido;

    // Comprobamos el tipo de cada una de las variables usando typeof:
    console.log(typeof num);
    console.log(typeof cadena);
    console.log(typeof bool);
    console.log(typeof obj);
    console.log(typeof arr);
    console.log(typeof vacio);
    console.log(typeof indefinido);

// Ejercicio 22:
    // Declaramos el array frutas:
    var frutas = ["manzana", "pera"];

    console.log(typeof frutas);                 // Devuelve "object" porque los arrays en JS son objetos especiales.
    console.log(frutas instanceof Array);       // Devuelve true porque frutas es un array.
    console.log(frutas instanceof Object);      // Devuelve true porque todos los arrays son objetos.

// Ejercicio 23:
    var fecha = new Date();

    console.log(typeof fecha);                  // Devuelve "object" porque Date es un objeto.
    console.log(fecha instanceof Date);         // Devuelve true: fecha es un objeto de tipo Date.
    console.log(fecha instanceof Object);       // Devuelve true: Date hereda de Object.

// Ejercicio 24:
    // console.log(typeof); // ERROR → typeof necesita un valor para evaluar.
    console.log(typeof "hola");    
    // Devuelve "string". Uso correcto de typeof.

// Ejercicio 25:
    var nombre = "Lucía";
    var apellido = "García";
    var nombreCompleto = nombre + " " + apellido;
    console.log(nombreCompleto);                // Muestra "Lucía García": simple concatenación de strings.
*/
// Ejercicio 26:
    var mensaje = "Hola";
    mensaje += " mundo";                        // Con += se concatena al final del string.
    console.log(mensaje);                       // Resultado: "Hola mundo"

// Ejercicio 27:
    console.log("5" + 5);                       // "55": el + concatena cuando hay un string.
    console.log(5 + "5");                       // "55": mismo caso, concatenación.
    console.log(5 + 5 + "5");                   // "105": primero 5+5 = 10, luego "10" + "5" = "105".
    console.log("5" + 5 + 5);                   // "555": empieza como string y concatena todo.

// Ejercicio 28:
    var palabra = "JavaScript";
    console.log(palabra[0]);                    // "J": primer carácter.
    console.log(palabra[palabra.length - 1]);   // "t": último carácter.
    console.log(palabra.length);                // 10: longitud del string.
    console.log(palabra[100]);                  // undefined: índice inexistente en el string.

// Ejercicio 29:
    let texto = "hola";
    // texto();                                 // ERROR: intento ejecutar un string como si fuera una función.

// Ejercicio 30:
    var edad = 16;
    var mensajeEdad = edad >= 18 ? "Mayor de edad" : "Menor de edad";
    console.log(mensajeEdad);                   // "Menor de edad": el ternario evalúa la condición y devuelve un string.

// Ejercicio 31:
    var nota = 7;
    console.log(nota >= 5 ? "Aprobado" : "Suspendido"); // "Aprobado": nota es mayor o igual que 5.

// Ejercicio 32:
    var esAdmin = false;
    console.log(esAdmin ? "Acceso total" : "Acceso limitado"); // "Acceso limitado": esAdmin es false.


