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
    // Decaramos la variable x:
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
*/






